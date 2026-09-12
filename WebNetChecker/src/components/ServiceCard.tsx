"use client";

import { RefreshCw } from "lucide-react";
import type { CheckResult, CheckStatus } from "@/types/checker";
import { StatusBadge } from "@/components/StatusBadge";
import { formatHttpStatus, formatLatency } from "@/lib/format";
import { cn } from "@/lib/cn";

const STRIP: Record<CheckStatus, string> = {
  available: "bg-ok shadow-[0_0_12px_0_#00ff88]",
  blocked: "bg-blocked shadow-[0_0_12px_0_#ff2244]",
  timeout: "bg-neon shadow-[0_0_12px_0_#ff5e00]",
  dns_error: "bg-neon shadow-[0_0_12px_0_#ff5e00]",
  ssl_error: "bg-neon shadow-[0_0_12px_0_#ff5e00]",
  error: "bg-blocked shadow-[0_0_12px_0_#ff2244]",
  pending: "bg-neon animate-pulse-neon",
};

interface Props {
  name: string;
  url: string;
  result: CheckResult | null;
  onRetry?: () => void;
  onRemove?: () => void;
}

export function ServiceCard({ name, url, result, onRetry, onRemove }: Props) {
  const status: CheckStatus = result?.status ?? "pending";

  return (
    <article className="group relative flex items-stretch border border-steel bg-carbon transition-colors hover:border-silver/60">
      <span aria-hidden className={cn("w-1 shrink-0", STRIP[status])} />

      <div className="flex min-w-0 flex-1 flex-col gap-2 p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate font-condensed text-sm font-semibold tracking-wide text-silver-bright uppercase">
              {name}
            </h3>
            <p className="truncate font-mono text-[11px] text-silver/70">{url}</p>
          </div>
          <StatusBadge status={status} />
        </div>

        <dl className="flex items-center gap-4 font-mono text-[11px] text-silver">
          <div className="flex items-center gap-1">
            <dt className="text-silver/50">LAT</dt>
            <dd className={cn(status === "available" && "text-ok", status === "pending" && "text-neon")}>
              {formatLatency(result?.latencyMs ?? null)}
            </dd>
          </div>
          <div className="flex items-center gap-1">
            <dt className="text-silver/50">HTTP</dt>
            <dd>{formatHttpStatus(result?.httpStatus ?? null)}</dd>
          </div>
          {result?.errorMessage ? (
            <p className="min-w-0 flex-1 truncate text-right text-[10px] text-silver/60">
              {result.errorMessage}
            </p>
          ) : null}
        </dl>
      </div>

      <div className="flex flex-col border-l border-steel">
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            aria-label={`Перепроверить ${name}`}
            className="flex flex-1 items-center justify-center px-2 text-silver/50 transition-colors hover:bg-steel hover:text-neon focus-visible:bg-steel focus-visible:text-neon focus-visible:outline-none"
          >
            <RefreshCw className="size-3.5" />
          </button>
        ) : null}
        {onRemove ? (
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Удалить ${name}`}
            className="flex flex-1 items-center justify-center border-t border-steel px-2 text-silver/40 transition-colors hover:bg-blocked/20 hover:text-blocked focus-visible:bg-blocked/20 focus-visible:text-blocked focus-visible:outline-none"
          >
            <span aria-hidden className="font-mono text-xs">
              ×
            </span>
          </button>
        ) : null}
      </div>
    </article>
  );
}