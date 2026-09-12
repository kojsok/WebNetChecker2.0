import { create } from "zustand";
import { SEED_TARGETS } from "@/lib/config/services";
import { normalizeUrl } from "@/lib/checker/normalize-url";
import type { CheckResult, CheckStatus, Target } from "@/types/checker";
import type { ScanEvent } from "@/types/scan";
import { isFailed, isHealthy } from "@/lib/format";

export type ViewMode = "cards" | "terminal";
export type SortKey = "name" | "latency" | "status";
export type StatusFilter = "all" | "available" | "blocked" | "failed";

export interface ScanState {
  targets: Target[];
  results: Record<string, CheckResult>;
  order: string[];
  log: string[];
  isScanning: boolean;
  completed: number;
  total: number;
  lastRunAt: string | null;
  error: string | null;
  mode: ViewMode;
  query: string;
  categoryFilter: string;
  statusFilter: StatusFilter;
  sortKey: SortKey;
  autoRefreshMs: number;

  setTargets: (targets: Target[]) => void;
  addTargets: (targets: Target[]) => void;
  removeTarget: (id: string) => void;
  beginScan: (total: number) => void;
  applyEvent: (event: ScanEvent) => void;
  endScan: () => void;
  setMode: (mode: ViewMode) => void;
  setQuery: (query: string) => void;
  setCategoryFilter: (category: string) => void;
  setStatusFilter: (filter: StatusFilter) => void;
  setSortKey: (key: SortKey) => void;
  setAutoRefreshMs: (ms: number) => void;
  hydrateFromCache: (results: CheckResult[], finishedAt: string) => void;
}

export const useScanStore = create<ScanState>((set) => ({
  targets: SEED_TARGETS.map((t) => {
    const res = normalizeUrl(t.url);
    return res.ok ? { ...t, url: res.url } : t;
  }),
  results: {},
  order: [],
  log: [],
  isScanning: false,
  completed: 0,
  total: SEED_TARGETS.length,
  lastRunAt: null,
  error: null,
  mode: "cards",
  query: "",
  categoryFilter: "all",
  statusFilter: "all",
  sortKey: "name",
  autoRefreshMs: 0,

  setTargets: (targets) => {
    const normalized = targets.map((t) => {
      const res = normalizeUrl(t.url);
      return res.ok ? { ...t, url: res.url } : t;
    });
    set({ targets: normalized, results: {}, order: [], log: [], completed: 0, total: normalized.length });
  },

  addTargets: (incoming) =>
    set((state) => {
      const normalizedIncoming = incoming.map((t) => {
        const res = normalizeUrl(t.url);
        return res.ok ? { ...t, url: res.url } : t;
      });

      const existing = new Set(state.targets.map((t) => t.url));
      const merged = [...state.targets];
      for (const target of normalizedIncoming) {
        if (!existing.has(target.url)) {
          merged.push(target);
          existing.add(target.url);
        }
      }
      return { targets: merged, total: merged.length };
    }),

  removeTarget: (id) =>
    set((state) => {
      const target = state.targets.find((t) => t.id === id);
      const targets = state.targets.filter((t) => t.id !== id);
      const results = { ...state.results };
      const order = state.order.filter((key) => key !== id);
      if (target) delete results[target.url];
      return { targets, results, order, total: targets.length };
    }),

  beginScan: (total) => set({ isScanning: true, completed: 0, total, error: null }),

  applyEvent: (event) =>
    set((state) => {
      if (event.type === "start") {
        return { isScanning: true, total: event.total, completed: 0 };
      }
      if (event.type === "result") {
        const result = event.result;
        const results = { ...state.results, [result.url]: result };
        const order = state.order.includes(result.url)
          ? state.order
          : [...state.order, result.url];
        return {
          results,
          order,
          completed: event.completed,
          log: [...state.log, terminalLineSafe(result)],
        };
      }
      if (event.type === "done") {
        return {
          isScanning: false,
          completed: event.completed,
          lastRunAt: new Date().toISOString(),
        };
      }
      return { error: event.message };
    }),

  endScan: () => set({ isScanning: false }),

  setMode: (mode) => set({ mode }),
  setQuery: (query) => set({ query }),
  setCategoryFilter: (categoryFilter) => set({ categoryFilter }),
  setStatusFilter: (statusFilter) => set({ statusFilter }),
  setSortKey: (sortKey) => set({ sortKey }),
  setAutoRefreshMs: (autoRefreshMs) => set({ autoRefreshMs }),

  hydrateFromCache: (results, finishedAt) =>
    set(() => {
      const map: Record<string, CheckResult> = {};
      const order: string[] = [];
      for (const result of results) {
        map[result.url] = result;
        order.push(result.url);
      }
      return {
        results: map,
        order,
        lastRunAt: finishedAt,
        completed: results.length,
        log: results.map(terminalLineSafe),
      };
    }),
}));

function terminalLineSafe(result: CheckResult): string {
  const emoji = statusToEmoji(result.status);
  const latency = result.latencyMs !== null ? ` — ${result.latencyMs}ms` : "";
  const tail =
    result.httpStatus !== null
      ? ` — ${result.httpStatus} OK`
      : result.errorMessage
        ? ` — ${result.errorMessage}`
        : "";
  return `${emoji} ${result.name} (${result.host})${latency}${tail}`;
}

function statusToEmoji(status: CheckStatus): string {
  if (isHealthy(status)) return "✅";
  if (status === "blocked") return "⛔";
  if (status === "timeout") return "⏱️";
  if (isFailed(status)) return "❌";
  return "⏳";
}