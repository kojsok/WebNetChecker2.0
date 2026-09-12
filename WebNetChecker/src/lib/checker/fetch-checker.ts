import { request } from "undici";
import { getSafeAgent, assertUrlAllowed, SsrfError } from "./ssrf-guard";
import { classifyError, classifyHttpStatus, errorKindToStatus } from "./classify";
import type { CheckOptions, CheckResult, Target } from "@/types/checker";

/**
 * Build the per-check result from a target and a verdict.
 */
function buildResult(
  target: Target,
  url: string,
  host: string,
  fields: Pick<
    CheckResult,
    "status" | "httpStatus" | "latencyMs" | "errorKind" | "errorMessage"
  >,
): CheckResult {
  return {
    id: target.id,
    name: target.name,
    category: target.category,
    url,
    host,
    checkedAt: new Date().toISOString(),
    ...fields,
  };
}

/**
 * Perform a single availability check.
 *
 * Uses `HEAD` first (cheap, headers only). Many servers reject HEAD with 405
 * or 403; in that case we fall back to a `GET` but only read the status line —
 * we never consume the body, so large files are not downloaded.
 *
 * Timeouts trigger exactly one retry when `opts.retries > 0`.
 */
export async function checkTarget(target: Target, opts: CheckOptions): Promise<CheckResult> {
  const parsed = new URL(target.url);
  const host = parsed.hostname;

  try {
    assertUrlAllowed(parsed);
  } catch (error) {
    const message = error instanceof SsrfError ? error.message : "URL отклонён";
    return buildResult(target, target.url, host, {
      status: "blocked",
      httpStatus: null,
      latencyMs: null,
      errorKind: "connection",
      errorMessage: message,
    });
  }

  const maxAttempts = Math.max(1, opts.retries + 1);
  let lastError: unknown = null;

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    if (opts.signal?.aborted) {
      return buildResult(target, target.url, host, {
        status: "error",
        httpStatus: null,
        latencyMs: null,
        errorKind: "unknown",
        errorMessage: "Проверка отменена",
      });
    }

    const startedAt = performance.now();
    try {
      const response = await performRequest(target.url, opts);
      const latencyMs = Math.round(performance.now() - startedAt);
      const status = classifyHttpStatus(response.statusCode);

      // Drain the (tiny) body to free the socket back to the keep-alive pool.
      await response.body.dump();

      return buildResult(target, target.url, host, {
        status,
        httpStatus: response.statusCode,
        latencyMs,
        errorKind: status === "error" ? "unknown" : null,
        errorMessage: status === "error" ? `HTTP ${response.statusCode}` : null,
      });
    } catch (error) {
      lastError = error;
      const classification = classifyError(error);
      // Retry only on timeout, and only while attempts remain.
      const isLastAttempt = attempt === maxAttempts - 1;
      if (classification.kind !== "timeout" || isLastAttempt) {
        const latencyMs = Math.round(performance.now() - startedAt);
        return buildResult(target, target.url, host, {
          status: errorKindToStatus(classification.kind),
          httpStatus: null,
          latencyMs,
          errorKind: classification.kind,
          errorMessage: classification.message,
        });
      }
    }
  }

  // Unreachable in practice, but keeps the type checker satisfied.
  const classification = classifyError(lastError);
  return buildResult(target, target.url, host, {
    status: errorKindToStatus(classification.kind),
    httpStatus: null,
    latencyMs: null,
    errorKind: classification.kind,
    errorMessage: classification.message,
  });
}

interface MinimalResponse {
  statusCode: number;
  body: { dump: () => Promise<void> };
}

/**
 * Issue the HTTP request with HEAD, falling back to GET on 405/403/501.
 * Only the status line and headers are used.
 */
async function performRequest(url: string, opts: CheckOptions): Promise<MinimalResponse> {
  const headers = {
    "user-agent": "WebNetChecker/1.0 (+availability-check)",
    accept: "*/*",
  };

  const headResponse = await request(url, {
    method: "HEAD",
    headers,
    dispatcher: getSafeAgent(),
    signal: opts.signal,
    headersTimeout: opts.timeoutMs,
    bodyTimeout: opts.timeoutMs,
  });

  if ([403, 405, 501].includes(headResponse.statusCode)) {
    await headResponse.body.dump();
    const getResponse = await request(url, {
      method: "GET",
      headers: { ...headers, range: "bytes=0-0" },
      dispatcher: getSafeAgent(),
      signal: opts.signal,
      headersTimeout: opts.timeoutMs,
      bodyTimeout: opts.timeoutMs,
    });
    return getResponse;
  }

  return headResponse;
}