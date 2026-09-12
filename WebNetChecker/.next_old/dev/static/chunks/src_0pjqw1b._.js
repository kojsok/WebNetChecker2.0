(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useScan.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useFilters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAutoRefresh$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAutoRefresh.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useHistory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatsHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScanProgress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TerminalView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TerminalView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CategorySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EmptyState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ComparisonView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ComparisonView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/categories.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function HomePage() {
    _s();
    const targets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "HomePage.useScanStore[targets]": (s)=>s.targets
    }["HomePage.useScanStore[targets]"]);
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "HomePage.useScanStore[mode]": (s)=>s.mode
    }["HomePage.useScanStore[mode]"]);
    const isScanning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "HomePage.useScanStore[isScanning]": (s)=>s.isScanning
    }["HomePage.useScanStore[isScanning]"]);
    const setTargets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "HomePage.useScanStore[setTargets]": (s)=>s.setTargets
    }["HomePage.useScanStore[setTargets]"]);
    const removeTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "HomePage.useScanStore[removeTarget]": (s)=>s.removeTarget
    }["HomePage.useScanStore[removeTarget]"]);
    const hydrateFromCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "HomePage.useScanStore[hydrateFromCache]": (s)=>s.hydrateFromCache
    }["HomePage.useScanStore[hydrateFromCache]"]);
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "HomePage.useScanStore[error]": (s)=>s.error
    }["HomePage.useScanStore[error]"]);
    const { start, cancel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScan"])();
    const entries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"])();
    const { push: pushHistory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistory"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            let cancelled = false;
            async function hydrate() {
                try {
                    const response = await fetch("/api/scan/latest");
                    if (!response.ok) return;
                    const body = await response.json();
                    if (cancelled || !body.data) return;
                    hydrateFromCache(body.data.results, body.data.finishedAt);
                } catch  {
                // Кэша ещё нет.
                }
            }
            void hydrate();
            return ({
                "HomePage.useEffect": ()=>{
                    cancelled = true;
                }
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], [
        hydrateFromCache
    ]);
    const runAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[runAll]": ()=>{
            void start(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"].getState().targets);
        }
    }["HomePage.useCallback[runAll]"], [
        start
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAutoRefresh$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAutoRefresh"])(targets, runAll);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (!isScanning) return;
            let wasScanning = true;
            const check = {
                "HomePage.useEffect.check": ()=>{
                    const results = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"].getState().results;
                    const order = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"].getState().order;
                    if (wasScanning && !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"].getState().isScanning && order.length > 0) {
                        const finishedResults = order.map({
                            "HomePage.useEffect.check.finishedResults": (key)=>results[key]
                        }["HomePage.useEffect.check.finishedResults"]).filter({
                            "HomePage.useEffect.check.finishedResults": (r)=>!!r
                        }["HomePage.useEffect.check.finishedResults"]);
                        if (finishedResults.length > 0) {
                            pushHistory(finishedResults);
                        }
                    }
                    wasScanning = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"].getState().isScanning;
                }
            }["HomePage.useEffect.check"];
            const interval = setInterval(check, 500);
            return ({
                "HomePage.useEffect": ()=>clearInterval(interval)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], [
        isScanning,
        pushHistory
    ]);
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[grouped]": ()=>{
            const map = new Map();
            for (const entry of entries){
                const list = map.get(entry.targetCategory);
                if (list) list.push(entry);
                else map.set(entry.targetCategory, [
                    entry
                ]);
            }
            const ordered = [];
            for (const category of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"]){
                const items = map.get(category.id);
                if (items && items.length > 0) {
                    ordered.push({
                        id: category.id,
                        label: category.label,
                        items
                    });
                }
                map.delete(category.id);
            }
            for (const [id, items] of map){
                ordered.push({
                    id,
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategory"])(id)?.label ?? id,
                    items
                });
            }
            return ordered;
        }
    }["HomePage.useMemo[grouped]"], [
        entries
    ]);
    const pinnedEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[pinnedEntries]": ()=>{
            return entries.filter({
                "HomePage.useMemo[pinnedEntries]": (entry)=>{
                    const target = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"].getState().targets.find({
                        "HomePage.useMemo[pinnedEntries].target": (t)=>t.id === entry.targetId
                    }["HomePage.useMemo[pinnedEntries].target"]);
                    return target?.pinned;
                }
            }["HomePage.useMemo[pinnedEntries]"]);
        }
    }["HomePage.useMemo[pinnedEntries]"], [
        entries
    ]);
    const retryOne = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[retryOne]": (entry)=>{
            const target = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"].getState().targets.find({
                "HomePage.useCallback[retryOne].target": (t)=>t.id === entry.targetId
            }["HomePage.useCallback[retryOne].target"]);
            if (target) void start([
                target
            ]);
        }
    }["HomePage.useCallback[retryOne]"], [
        start
    ]);
    const removeOne = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[removeOne]": (entry)=>{
            removeTarget(entry.targetId);
        }
    }["HomePage.useCallback[removeOne]"], [
        removeTarget
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex min-h-dvh max-w-[1600px] flex-col gap-4 px-3 py-4 sm:px-5 sm:py-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-4 border border-steel bg-carbon p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-2xl tracking-[0.2em] text-silver-bright uppercase",
                                children: [
                                    "WebNet",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-neon",
                                        children: "Checker"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsHeader"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toolbar"], {
                                onRun: runAll,
                                onCancel: cancel
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[11px] text-blocked",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 131,
                                columnNumber: 20
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterBar"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScanProgress"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            mode === "terminal" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TerminalView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TerminalView"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this) : mode === "compare" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ComparisonView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComparisonView"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this) : targets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                message: "Нет целей для проверки",
                hint: "Загрузка каталога сервисов… если это сообщение не исчезает, обновите страницу."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this) : entries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                message: "Ничего не найдено",
                hint: "Измените фильтры или поисковый запрос."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6",
                children: [
                    pinnedEntries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategorySection"], {
                        label: "Закрепленные",
                        entries: pinnedEntries,
                        onRetry: retryOne,
                        onRemove: removeOne,
                        onRemoveEnabled: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 155,
                        columnNumber: 13
                    }, this),
                    grouped.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategorySection"], {
                            label: group.label,
                            entries: group.items,
                            onRetry: retryOne,
                            onRemove: removeOne,
                            onRemoveEnabled: group.id === "custom"
                        }, group.id, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "mt-auto flex items-center justify-between border-t border-steel pt-3 font-mono text-[10px] tracking-wide text-silver/40 uppercase",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "WebNetChecker · панель мониторинга доступности"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            targets.length,
                            " целей в каталоге"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(HomePage, "c0QO2ZcAaVeITMMX1ZImDAXdFIA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScan"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistory"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAutoRefresh$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAutoRefresh"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AddTargetDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddTargetDialog",
    ()=>AddTargetDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checker$2f$normalize$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/checker/normalize-url.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function parseLines(text) {
    const seen = new Set();
    const out = [];
    for (const line of text.split(/\r?\n/)){
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const [rawName, rawUrl] = splitLine(trimmed);
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checker$2f$normalize$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeUrl"])(rawUrl);
        if (!normalized.ok) {
            out.push({
                raw: trimmed,
                target: null,
                reason: normalized.reason
            });
            continue;
        }
        if (seen.has(normalized.url)) continue;
        seen.add(normalized.url);
        out.push({
            raw: trimmed,
            target: {
                id: `custom:${normalized.url}`,
                name: rawName || normalized.host,
                url: normalized.url,
                category: "custom"
            },
            reason: null
        });
    }
    return out;
}
function splitLine(line) {
    const comma = line.indexOf(",");
    if (comma !== -1) {
        return [
            line.slice(0, comma).trim(),
            line.slice(comma + 1).trim()
        ];
    }
    return [
        "",
        line
    ];
}
const inputClass = "w-full border border-steel bg-void px-3 py-2 font-mono text-xs text-silver-bright placeholder:text-silver/40 focus-visible:border-neon focus-visible:outline-none";
const labelClass = "font-mono text-[10px] tracking-[0.2em] text-silver/50 uppercase";
function AddTargetDialog({ open, onClose }) {
    _s();
    const addTargets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "AddTargetDialog.useScanStore[addTargets]": (s)=>s.addTargets
    }["AddTargetDialog.useScanStore[addTargets]"]);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [bulk, setBulk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!open) return null;
    const submitSingle = ()=>{
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checker$2f$normalize$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeUrl"])(url);
        if (!normalized.ok) {
            setMessage(normalized.reason);
            return;
        }
        addTargets([
            {
                id: `custom:${normalized.url}`,
                name: name.trim() || normalized.host,
                url: normalized.url,
                category: "custom",
                tags: tags.split(",").map((t)=>t.trim()).filter(Boolean),
                pinned: false
            }
        ]);
        setName("");
        setUrl("");
        setTags("");
        setMessage("Цель добавлена");
    };
    const submitBulk = ()=>{
        const parsed = parseLines(bulk);
        const valid = parsed.flatMap((p)=>p.target ? [
                p.target
            ] : []);
        if (valid.length === 0) {
            setMessage("Нет валидных целей");
            return;
        }
        addTargets(valid);
        setBulk("");
        setMessage(`Добавлено целей: ${valid.length}`);
    };
    const onFile = async (file)=>{
        if (!file) return;
        const text = await file.text();
        setBulk((prev)=>prev ? `${prev}\n${text}` : text);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-void/80 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Добавить цели",
            className: "flex max-h-[85vh] w-full max-w-2xl flex-col gap-4 overflow-y-auto border border-steel bg-carbon p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-sm tracking-[0.25em] text-silver-bright uppercase",
                            children: "Добавить цели"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            "aria-label": "Закрыть",
                            className: "text-silver/50 transition-colors hover:text-blocked focus-visible:text-blocked focus-visible:outline-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddTargetDialog.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AddTargetDialog.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: labelClass,
                            children: "Одна цель"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: inputClass,
                            placeholder: "Имя (необязательно)",
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            "aria-label": "Имя цели"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: inputClass,
                            placeholder: "Теги через запятую (например: #ai, #work)",
                            value: tags,
                            onChange: (e)=>setTags(e.target.value),
                            "aria-label": "Теги цели"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: inputClass,
                                    placeholder: "example.com или https://example.com/file.zip",
                                    value: url,
                                    onChange: (e)=>setUrl(e.target.value),
                                    "aria-label": "URL цели",
                                    onKeyDown: (e)=>{
                                        if (e.key === "Enter") submitSingle();
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddTargetDialog.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: submitSingle,
                                    className: "inline-flex shrink-0 items-center gap-2 border border-neon px-3 py-2 font-mono text-[11px] tracking-[0.15em] text-neon uppercase transition-colors hover:bg-neon hover:text-void focus-visible:outline-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        " Добавить"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddTargetDialog.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AddTargetDialog.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-col gap-2 border-t border-steel pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: labelClass,
                            children: "Массово (по строке, формат «имя, url»)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: `${inputClass} min-h-32 resize-y`,
                            placeholder: "GitHub, github.com\nhttps://example.com/file.zip",
                            value: bulk,
                            onChange: (e)=>setBulk(e.target.value),
                            "aria-label": "Массовый список целей"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "inline-flex cursor-pointer items-center gap-2 border border-steel px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] text-silver uppercase transition-colors hover:border-silver/60 focus-within:border-neon",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        " Загрузить .txt/.csv",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".txt,.csv,text/plain,text/csv",
                                            className: "sr-only",
                                            onChange: (e)=>void onFile(e.target.files?.[0])
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddTargetDialog.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: submitBulk,
                                    className: "inline-flex items-center gap-2 border border-neon px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] text-neon uppercase transition-colors hover:bg-neon hover:text-void focus-visible:outline-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this),
                                        " Добавить список"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddTargetDialog.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AddTargetDialog.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AddTargetDialog.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this),
                message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-mono text-[11px] text-neon",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/components/AddTargetDialog.tsx",
                    lineNumber: 193,
                    columnNumber: 20
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AddTargetDialog.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AddTargetDialog.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(AddTargetDialog, "1uhX93TKSLRk8Eud7AdczVJazUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"]
    ];
});
_c = AddTargetDialog;
var _c;
__turbopack_context__.k.register(_c, "AddTargetDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CategorySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategorySection",
    ()=>CategorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceCard.tsx [app-client] (ecmascript)");
"use client";
;
;
function CategorySection({ label, entries, onRetry, onRemove, onRemoveEnabled }) {
    if (entries.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-sm tracking-[0.25em] text-silver-bright uppercase",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategorySection.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[10px] text-silver/40",
                        children: entries.length
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategorySection.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "h-px flex-1 bg-steel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategorySection.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CategorySection.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                children: entries.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceCard"], {
                        name: entry.targetName,
                        url: entry.targetUrl,
                        result: entry.result,
                        onRetry: ()=>onRetry(entry),
                        onRemove: onRemoveEnabled && onRemove ? ()=>onRemove(entry) : undefined
                    }, entry.targetId, false, {
                        fileName: "[project]/src/components/CategorySection.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/CategorySection.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CategorySection.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = CategorySection;
var _c;
__turbopack_context__.k.register(_c, "CategorySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ComparisonView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparisonView",
    ()=>ComparisonView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useScan.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ComparisonChart({ targetA, targetB, historyA, historyB }) {
    if (!targetA || !targetB) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-64 items-center justify-center border border-steel bg-void text-silver/40 font-mono text-xs italic",
            children: "Выберите два сервиса для сравнения"
        }, void 0, false, {
            fileName: "[project]/src/components/ComparisonView.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    const allValues = [
        ...historyA,
        ...historyB
    ];
    const min = Math.min(...allValues, 0);
    const max = Math.max(...allValues, 100);
    const range = max - min || 1;
    const width = 800;
    const height = 200;
    const getPoints = (data)=>{
        return data.map((v, i)=>{
            const x = i / 9 * width;
            const y = height - (v - min) / range * height;
            return `${x},${y}`;
        }).join(" ");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full bg-carbon border border-steel p-4 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mb-4 font-mono text-[11px] uppercase tracking-widest",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-neon",
                        children: targetA.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/ComparisonView.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-silver/40",
                        children: "Latency Trend (last 10 checks)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ComparisonView.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-silver-bright",
                        children: targetB.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/ComparisonView.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ComparisonView.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-64 w-full bg-void border-b border-l border-steel overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: `0 0 ${width} ${height}`,
                    className: "w-full h-full overflow-visible",
                    children: [
                        [
                            0,
                            0.25,
                            0.5,
                            0.75,
                            1
                        ].map((perc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "0",
                                y1: height * perc,
                                x2: width,
                                y2: height * perc,
                                stroke: "currentColor",
                                className: "text-steel",
                                strokeWidth: "1",
                                strokeDasharray: "4 4"
                            }, perc, false, {
                                fileName: "[project]/src/components/ComparisonView.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            fill: "none",
                            stroke: "#ff5e00",
                            strokeWidth: "3",
                            strokeLinejoin: "round",
                            points: getPoints(historyA),
                            className: "drop-shadow-[0_0_8px_#ff5e00]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ComparisonView.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            fill: "none",
                            stroke: "#00ff88",
                            strokeWidth: "3",
                            strokeLinejoin: "round",
                            points: getPoints(historyB),
                            className: "drop-shadow-[0_0_8px_#00ff88]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ComparisonView.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ComparisonView.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ComparisonView.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-6 mt-4 font-mono text-[10px] uppercase",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "size-2 bg-neon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonView.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            " ",
                            targetA.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonView.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "size-2 bg-ok"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonView.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            " ",
                            targetB.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonView.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ComparisonView.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ComparisonView.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = ComparisonChart;
function ComparisonView() {
    _s();
    const targets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "ComparisonView.useScanStore[targets]": (s)=>s.targets
    }["ComparisonView.useScanStore[targets]"]);
    const compareIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "ComparisonView.useScanStore[compareIds]": (s)=>s.compareTargets
    }["ComparisonView.useScanStore[compareIds]"]);
    const setCompareTargets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "ComparisonView.useScanStore[setCompareTargets]": (s)=>s.setCompareTargets
    }["ComparisonView.useScanStore[setCompareTargets]"]);
    const history = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "ComparisonView.useScanStore[history]": (s)=>s.history
    }["ComparisonView.useScanStore[history]"]);
    const { start } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScan"])();
    const targetA = targets.find((t)=>t.id === compareIds[0]) || null;
    const targetB = targets.find((t)=>t.id === compareIds[1]) || null;
    const toggleTarget = (id)=>{
        if (compareIds.includes(id)) {
            setCompareTargets(compareIds.filter((cid)=>cid !== id));
        } else if (compareIds.length < 2) {
            setCompareTargets([
                ...compareIds,
                id
            ]);
        }
    };
    const runCompareScan = ()=>{
        if (targetA && targetB) {
            void start([
                targetA,
                targetB
            ]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-4 border border-steel bg-carbon p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-sm tracking-[0.2em] text-silver-bright uppercase",
                                children: "Сравнение latency"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonView.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[10px] text-silver/50 uppercase",
                                children: "Выберите два сервиса для анализа динамики"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonView.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonView.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: runCompareScan,
                            disabled: compareIds.length < 2,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase transition-colors", compareIds.length === 2 ? "border-neon text-neon hover:bg-neon hover:text-void" : "border-steel text-silver/40 cursor-not-allowed"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "size-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ComparisonView.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                " Запустить тест"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ComparisonView.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ComparisonView.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ComparisonView.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 flex flex-col gap-2 border border-steel bg-carbon p-3 max-h-[600px] overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[10px] text-silver/50 uppercase mb-2",
                                children: "Список сервисов"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonView.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            targets.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleTarget(t.id),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between px-3 py-2 text-left font-mono text-[11px] transition-colors border border-transparent", compareIds.includes(t.id) ? "bg-neon/10 border-neon text-neon" : "text-silver hover:bg-steel hover:text-silver-bright"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: t.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ComparisonView.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        compareIds.includes(t.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "size-1.5 rounded-full bg-neon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ComparisonView.tsx",
                                            lineNumber: 157,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, t.id, true, {
                                    fileName: "[project]/src/components/ComparisonView.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonView.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3 flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComparisonChart, {
                                targetA: targetA,
                                targetB: targetB,
                                historyA: targetA ? history[targetA.url] ?? [] : [],
                                historyB: targetB ? history[targetB.url] ?? [] : []
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComparisonView.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            targetA && targetB && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-steel bg-carbon p-4 font-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-silver/50 uppercase mb-1",
                                                children: targetA.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComparisonView.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl text-neon",
                                                children: [
                                                    history[targetA.url] && history[targetA.url].length > 0 ? history[targetA.url][history[targetA.url].length - 1] : "—",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-silver/40 ml-1",
                                                        children: "ms"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ComparisonView.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ComparisonView.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ComparisonView.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-steel bg-carbon p-4 font-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-silver/50 uppercase mb-1",
                                                children: targetB.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComparisonView.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl text-ok",
                                                children: [
                                                    history[targetB.url] && history[targetB.url].length > 0 ? history[targetB.url][history[targetB.url].length - 1] : "—",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-silver/40 ml-1",
                                                        children: "ms"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ComparisonView.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ComparisonView.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ComparisonView.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ComparisonView.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ComparisonView.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ComparisonView.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ComparisonView.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_s(ComparisonView, "NAD8B4+mGodt9No8X9xggKMPJuk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScan"]
    ];
});
_c1 = ComparisonView;
var _c, _c1;
__turbopack_context__.k.register(_c, "ComparisonChart");
__turbopack_context__.k.register(_c1, "ComparisonView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/EmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radar.js [app-client] (ecmascript) <export default as Radar>");
"use client";
;
;
function EmptyState({ message, hint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-3 border border-dashed border-steel bg-carbon/40 px-6 py-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radar$3e$__["Radar"], {
                "aria-hidden": true,
                className: "size-8 text-neon/70"
            }, void 0, false, {
                fileName: "[project]/src/components/EmptyState.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display text-sm tracking-[0.2em] text-silver-bright uppercase",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/EmptyState.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-md font-mono text-xs text-silver/50",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/EmptyState.tsx",
                lineNumber: 10,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EmptyState.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ExportMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportMenu",
    ()=>ExportMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-json.js [app-client] (ecmascript) <export default as FileJson>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/export.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const itemClass = "flex w-full items-center gap-2 px-3 py-2 text-left font-mono text-[11px] tracking-[0.1em] text-silver uppercase transition-colors hover:bg-steel hover:text-neon focus-visible:bg-steel focus-visible:text-neon focus-visible:outline-none";
function ExportMenu() {
    _s();
    const targets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "ExportMenu.useScanStore[targets]": (s)=>s.targets
    }["ExportMenu.useScanStore[targets]"]);
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "ExportMenu.useScanStore[results]": (s)=>s.results
    }["ExportMenu.useScanStore[results]"]);
    const order = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "ExportMenu.useScanStore[order]": (s)=>s.order
    }["ExportMenu.useScanStore[order]"]);
    const addTargets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "ExportMenu.useScanStore[addTargets]": (s)=>s.addTargets
    }["ExportMenu.useScanStore[addTargets]"]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ordered = order.flatMap((key)=>{
        const result = results[key];
        return result ? [
            result
        ] : [];
    });
    const handleCopy = async ()=>{
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toText"])(ordered));
        setCopied(ok);
        setTimeout(()=>setCopied(false), 1500);
    };
    const handleImport = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            const text = await file.text();
            const imported = file.name.endsWith(".json") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTargetsJson"])(text) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTargetsCsv"])(text);
            addTargets(imported);
            setOpen(false);
        } catch (err) {
            alert("Ошибка при импорте файла: " + (err instanceof Error ? err.message : "Неизвестная ошибка"));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((v)=>!v),
                "aria-expanded": open,
                "aria-haspopup": "menu",
                className: "inline-flex items-center gap-2 border border-steel px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] text-silver uppercase transition-colors hover:border-silver/60 hover:text-silver-bright focus-visible:outline-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                        className: "size-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportMenu.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    " Данные"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExportMenu.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "menu",
                className: "absolute right-0 z-30 mt-1 w-64 border border-steel bg-carbon py-1 shadow-[0_8px_24px_-8px_#000]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-1 text-[10px] font-mono text-silver/40 uppercase tracking-widest border-b border-steel mb-1",
                        children: "Экспорт результатов"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportMenu.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    ordered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "menuitem",
                                className: itemClass,
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadFile"])(`results-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampSlug"])()}.json`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toJson"])(ordered), "application/json");
                                    setOpen(false);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__["FileJson"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExportMenu.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this),
                                    " Результаты JSON"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExportMenu.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "menuitem",
                                className: itemClass,
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadFile"])(`results-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampSlug"])()}.csv`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCsv"])(ordered), "text/csv");
                                    setOpen(false);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExportMenu.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    " Результаты CSV"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExportMenu.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "menuitem",
                                className: itemClass,
                                onClick: ()=>void handleCopy(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExportMenu.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    copied ? "Скопировано" : "Копировать текст"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExportMenu.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExportMenu.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 text-[10px] font-mono text-silver/40 italic",
                        children: "Нет данных для экспорта"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportMenu.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-1 text-[10px] font-mono text-silver/40 uppercase tracking-widest border-y border-steel my-1",
                        children: "Список целей"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExportMenu.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "menuitem",
                        className: itemClass,
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadFile"])(`targets-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampSlug"])()}.json`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["targetsToJson"])(targets), "application/json");
                            setOpen(false);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__["FileJson"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExportMenu.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            " Экспорт списка JSON"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExportMenu.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "menuitem",
                        className: itemClass,
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadFile"])(`targets-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampSlug"])()}.csv`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["targetsToCsv"])(targets), "text/csv");
                            setOpen(false);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExportMenu.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            " Экспорт списка CSV"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExportMenu.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(itemClass, "cursor-pointer"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExportMenu.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            " Импорт списка",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                className: "sr-only",
                                accept: ".json,.csv",
                                onChange: handleImport
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExportMenu.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExportMenu.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExportMenu.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExportMenu.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(ExportMenu, "WoDpj6C8qAtDnjCoverm7e1a7Js=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"]
    ];
});
_c = ExportMenu;
var _c;
__turbopack_context__.k.register(_c, "ExportMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FilterBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterBar",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/categories.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const STATUS_OPTIONS = [
    {
        value: "all",
        label: "Все"
    },
    {
        value: "available",
        label: "Доступные"
    },
    {
        value: "blocked",
        label: "Заблокированные"
    },
    {
        value: "failed",
        label: "С ошибкой"
    }
];
const SORT_OPTIONS = [
    {
        value: "name",
        label: "Имя"
    },
    {
        value: "latency",
        label: "Latency"
    },
    {
        value: "status",
        label: "Статус"
    }
];
const selectClass = "border border-steel bg-carbon px-2 py-1.5 font-mono text-[11px] tracking-wide text-silver-bright uppercase transition-colors hover:border-silver/60 focus-visible:border-neon focus-visible:outline-none";
function FilterBar() {
    _s();
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "FilterBar.useScanStore[query]": (s)=>s.query
    }["FilterBar.useScanStore[query]"]);
    const setQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "FilterBar.useScanStore[setQuery]": (s)=>s.setQuery
    }["FilterBar.useScanStore[setQuery]"]);
    const categoryFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "FilterBar.useScanStore[categoryFilter]": (s)=>s.categoryFilter
    }["FilterBar.useScanStore[categoryFilter]"]);
    const setCategoryFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "FilterBar.useScanStore[setCategoryFilter]": (s)=>s.setCategoryFilter
    }["FilterBar.useScanStore[setCategoryFilter]"]);
    const statusFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "FilterBar.useScanStore[statusFilter]": (s)=>s.statusFilter
    }["FilterBar.useScanStore[statusFilter]"]);
    const setStatusFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "FilterBar.useScanStore[setStatusFilter]": (s)=>s.setStatusFilter
    }["FilterBar.useScanStore[setStatusFilter]"]);
    const sortKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "FilterBar.useScanStore[sortKey]": (s)=>s.sortKey
    }["FilterBar.useScanStore[sortKey]"]);
    const setSortKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "FilterBar.useScanStore[setSortKey]": (s)=>s.setSortKey
    }["FilterBar.useScanStore[setSortKey]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-2 border border-steel bg-carbon/80 p-2 backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex flex-1 items-center gap-2 border border-steel bg-void px-2 py-1.5 focus-within:border-neon",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        "aria-hidden": true,
                        className: "size-3.5 shrink-0 text-silver/50"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterBar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "search",
                        value: query,
                        onChange: (e)=>setQuery(e.target.value),
                        placeholder: "Поиск по имени или домену…",
                        "aria-label": "Поиск целей",
                        className: "w-full bg-transparent font-mono text-xs text-silver-bright placeholder:text-silver/40 focus:outline-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterBar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterBar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "sr-only",
                htmlFor: "filter-category",
                children: "Категория"
            }, void 0, false, {
                fileName: "[project]/src/components/FilterBar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: "filter-category",
                value: categoryFilter,
                onChange: (e)=>setCategoryFilter(e.target.value),
                className: selectClass,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "all",
                        children: "Все категории"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterBar.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: category.id,
                            children: category.label
                        }, category.id, false, {
                            fileName: "[project]/src/components/FilterBar.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterBar.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "sr-only",
                htmlFor: "filter-status",
                children: "Статус"
            }, void 0, false, {
                fileName: "[project]/src/components/FilterBar.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: "filter-status",
                value: statusFilter,
                onChange: (e)=>setStatusFilter(e.target.value),
                className: selectClass,
                children: STATUS_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: option.value,
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/src/components/FilterBar.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/FilterBar.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "sr-only",
                htmlFor: "filter-sort",
                children: "Сортировка"
            }, void 0, false, {
                fileName: "[project]/src/components/FilterBar.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: "filter-sort",
                value: sortKey,
                onChange: (e)=>setSortKey(e.target.value),
                className: selectClass,
                children: SORT_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: option.value,
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/src/components/FilterBar.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/FilterBar.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FilterBar.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(FilterBar, "LpbQYOi/h+ORgQkSkwuJI3BFloo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"]
    ];
});
_c = FilterBar;
var _c;
__turbopack_context__.k.register(_c, "FilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScanProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScanProgress",
    ()=>ScanProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScanProgress() {
    _s();
    const isScanning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "ScanProgress.useScanStore[isScanning]": (s)=>s.isScanning
    }["ScanProgress.useScanStore[isScanning]"]);
    const completed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "ScanProgress.useScanStore[completed]": (s)=>s.completed
    }["ScanProgress.useScanStore[completed]"]);
    const total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "ScanProgress.useScanStore[total]": (s)=>s.total
    }["ScanProgress.useScanStore[total]"]);
    if (total === 0) return null;
    const percent = total > 0 ? Math.round(completed / total * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1.5",
        role: "status",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between font-mono text-[11px] tracking-wide uppercase",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: isScanning ? "text-neon" : "text-silver/60",
                        children: isScanning ? "Сканирование…" : "Скан завершён"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScanProgress.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-silver",
                        children: [
                            "проверено ",
                            completed,
                            " из ",
                            total,
                            " · ",
                            percent,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScanProgress.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScanProgress.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-1.5 w-full overflow-hidden bg-steel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full bg-neon transition-[width] duration-300 ease-out",
                        style: {
                            width: `${percent}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScanProgress.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    isScanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "absolute inset-y-0 left-0 w-1/3 animate-scan-sweep bg-neon/30"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScanProgress.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScanProgress.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ScanProgress.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(ScanProgress, "VymnPa7wMW8OXLWY1Fc27fDqH2c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"]
    ];
});
_c = ScanProgress;
var _c;
__turbopack_context__.k.register(_c, "ScanProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServiceCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceCard",
    ()=>ServiceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pin.js [app-client] (ecmascript) <export default as Pin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PinOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pin-off.js [app-client] (ecmascript) <export default as PinOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const STRIP = {
    available: "bg-ok shadow-[0_0_12px_0_#00ff88]",
    blocked: "bg-blocked shadow-[0_0_12px_0_#ff2244]",
    timeout: "bg-neon shadow-[0_0_12px_0_#ff5e00]",
    dns_error: "bg-neon shadow-[0_0_12px_0_#ff5e00]",
    ssl_error: "bg-neon shadow-[0_0_12px_0_#ff5e00]",
    error: "bg-blocked shadow-[0_0_12px_0_#ff2244]",
    pending: "bg-neon animate-pulse-neon"
};
function Sparkline({ data }) {
    if (data.length < 2) return null;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const width = 60;
    const height = 20;
    const points = data.map((v, i)=>{
        const x = i / (data.length - 1) * width;
        const y = height - (v - min) / range * height;
        return `${x},${y}`;
    }).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        className: "overflow-visible",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinejoin: "round",
            points: points,
            className: "text-silver/40"
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceCard.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ServiceCard.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = Sparkline;
function ServiceCard({ name, url, result, onRetry, onRemove }) {
    _s();
    const status = result?.status ?? "pending";
    const { history, togglePin, targets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])();
    const target = targets.find((t)=>t.url === url);
    const isPinned = target?.pinned ?? false;
    const latencyHistory = history[url] ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group relative flex items-stretch border border-steel bg-carbon transition-colors hover:border-silver/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-1 shrink-0", STRIP[status])
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceCard.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 flex-1 flex-col gap-2 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "truncate font-condensed text-sm font-semibold tracking-wide text-silver-bright uppercase",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate font-mono text-[11px] text-silver/70",
                                        children: url
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServiceCard.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                status: status
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceCard.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServiceCard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "flex items-center gap-4 font-mono text-[11px] text-silver",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-silver/50",
                                        children: "LAT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2", status === "available" && "text-ok", status === "pending" && "text-neon"),
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLatency"])(result?.latencyMs ?? null),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sparkline, {
                                                data: latencyHistory
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceCard.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServiceCard.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-silver/50",
                                        children: "HTTP"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatHttpStatus"])(result?.httpStatus ?? null)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServiceCard.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            result?.errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group/tip min-w-0 flex-1 truncate text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-silver/60 cursor-help underline decoration-dotted",
                                        children: result.errorMessage
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-full right-0 mb-2 hidden group-hover/tip:block z-20 w-max max-w-xs p-2 text-[10px] leading-tight text-silver-bright bg-graphite border border-steel shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-neon mb-1 uppercase tracking-tighter",
                                                children: "Детали ошибки:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceCard.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: result.errorMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceCard.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            result.serverHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-silver/60 border-t border-steel pt-1",
                                                children: [
                                                    "Server: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono",
                                                        children: result.serverHeader
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServiceCard.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServiceCard.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServiceCard.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServiceCard.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col border-l border-steel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>togglePin(target?.id ?? ""),
                        "aria-label": "Закрепить",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center justify-center px-2 transition-colors focus-visible:outline-none", isPinned ? "bg-neon/10 text-neon" : "text-silver/50 hover:bg-steel hover:text-neon"),
                        children: isPinned ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PinOff$3e$__["PinOff"], {
                            className: "size-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceCard.tsx",
                            lineNumber: 120,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__["Pin"], {
                            className: "size-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceCard.tsx",
                            lineNumber: 120,
                            columnNumber: 57
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceCard.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    onRetry ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onRetry,
                        "aria-label": `Перепроверить ${name}`,
                        className: "flex flex-1 items-center justify-center px-2 text-silver/50 transition-colors hover:bg-steel hover:text-neon focus-visible:bg-steel focus-visible:text-neon focus-visible:outline-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "size-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceCard.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceCard.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this) : null,
                    onRemove ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onRemove,
                        "aria-label": `Удалить ${name}`,
                        className: "flex flex-1 items-center justify-center border-t border-steel px-2 text-silver/40 transition-colors hover:bg-blocked/20 hover:text-blocked focus-visible:bg-blocked/20 focus-visible:text-blocked focus-visible:outline-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            className: "font-mono text-xs",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceCard.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceCard.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServiceCard.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServiceCard.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(ServiceCard, "dWLvo9NB1oGFYRZqatfNX/XLMQc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"]
    ];
});
_c1 = ServiceCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Sparkline");
__turbopack_context__.k.register(_c1, "ServiceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StatsHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsHeader",
    ()=>StatsHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Counter({ label, value, tone, icon }) {
    const toneClass = tone === "ok" ? "text-ok text-glow-ok" : tone === "blocked" ? "text-blocked text-glow-blocked" : tone === "neon" ? "text-neon text-glow-neon" : "text-silver-bright";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-w-[7rem] flex-col gap-1 border-l border-steel pl-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-silver/50 uppercase",
                children: [
                    icon,
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StatsHeader.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `font-display text-2xl leading-none tabular-nums ${toneClass}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/StatsHeader.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StatsHeader.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = Counter;
function StatsHeader() {
    _s();
    const targets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "StatsHeader.useScanStore[targets]": (s)=>s.targets
    }["StatsHeader.useScanStore[targets]"]);
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "StatsHeader.useScanStore[results]": (s)=>s.results
    }["StatsHeader.useScanStore[results]"]);
    const order = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "StatsHeader.useScanStore[order]": (s)=>s.order
    }["StatsHeader.useScanStore[order]"]);
    let available = 0;
    let blocked = 0;
    let failed = 0;
    let latencySum = 0;
    let latencyCount = 0;
    for (const key of order){
        const result = results[key];
        if (!result) continue;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHealthy"])(result.status)) available += 1;
        else if (result.status === "blocked") blocked += 1;
        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFailed"])(result.status)) failed += 1;
        if (result.latencyMs !== null) {
            latencySum += result.latencyMs;
            latencyCount += 1;
        }
    }
    const avg = latencyCount > 0 ? Math.round(latencySum / latencyCount) : null;
    const categoryStats = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>{
        const catTargets = targets.filter((t)=>t.category === cat.id);
        if (catTargets.length === 0) return null;
        const catAvailable = catTargets.filter((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHealthy"])(results[t.url]?.status ?? "pending")).length;
        const percent = Math.round(catAvailable / catTargets.length * 100);
        return {
            id: cat.id,
            label: cat.label,
            percent
        };
    }).filter(Boolean);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-x-5 gap-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                        label: "Доступно",
                        value: String(available),
                        tone: "ok",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                            className: "size-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatsHeader.tsx",
                            lineNumber: 82,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatsHeader.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                        label: "Заблокировано",
                        value: String(blocked),
                        tone: "blocked",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                            className: "size-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatsHeader.tsx",
                            lineNumber: 88,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatsHeader.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                        label: "Ошибки",
                        value: String(failed),
                        tone: "neon",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                            className: "size-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatsHeader.tsx",
                            lineNumber: 94,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatsHeader.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                        label: "Средний latency",
                        value: avg === null ? "—" : `${avg}ms`,
                        tone: "silver",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                            className: "size-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatsHeader.tsx",
                            lineNumber: 100,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatsHeader.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StatsHeader.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3 border-t border-steel pt-3",
                children: categoryStats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 font-mono text-[10px] tracking-wide text-silver/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "uppercase",
                                children: [
                                    stat.label,
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StatsHeader.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(stat.percent === 100 ? "text-ok" : stat.percent === 0 ? "text-blocked" : "text-neon"),
                                children: [
                                    stat.percent,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StatsHeader.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stat.id, true, {
                        fileName: "[project]/src/components/StatsHeader.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/StatsHeader.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StatsHeader.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(StatsHeader, "KKDs+n0BLZudYdAQwM9GmrhZx8w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"]
    ];
});
_c1 = StatsHeader;
var _c, _c1;
__turbopack_context__.k.register(_c, "Counter");
__turbopack_context__.k.register(_c1, "StatsHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StatusBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
;
;
const STYLES = {
    available: "border-ok text-ok shadow-[0_0_10px_-2px_#00ff88]",
    blocked: "border-blocked text-blocked shadow-[0_0_10px_-2px_#ff2244]",
    timeout: "border-neon text-neon shadow-[0_0_10px_-2px_#ff5e00]",
    dns_error: "border-neon text-neon shadow-[0_0_10px_-2px_#ff5e00]",
    ssl_error: "border-neon text-neon shadow-[0_0_10px_-2px_#ff5e00]",
    error: "border-blocked text-blocked shadow-[0_0_10px_-2px_#ff2244]",
    pending: "border-neon text-neon animate-pulse-neon"
};
function StatusBadge({ status, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center border px-2 py-0.5 font-mono text-[10px] tracking-[0.15em] uppercase", STYLES[status], className),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusLabel"])(status)
    }, void 0, false, {
        fileName: "[project]/src/components/StatusBadge.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TerminalView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TerminalView",
    ()=>TerminalView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TerminalView() {
    _s();
    const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "TerminalView.useScanStore[log]": (s)=>s.log
    }["TerminalView.useScanStore[log]"]);
    const isScanning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "TerminalView.useScanStore[isScanning]": (s)=>s.isScanning
    }["TerminalView.useScanStore[isScanning]"]);
    const endRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalView.useEffect": ()=>{
            endRef.current?.scrollIntoView({
                block: "end"
            });
        }
    }["TerminalView.useEffect"], [
        log.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-steel bg-void",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 border-b border-steel bg-carbon px-3 py-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "size-2 bg-blocked",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/TerminalView.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "size-2 bg-neon",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/TerminalView.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "size-2 bg-ok",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/TerminalView.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 font-mono text-[10px] tracking-[0.2em] text-silver/50 uppercase",
                        children: "webnetchecker — терминал"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TerminalView.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TerminalView.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "log",
                "aria-live": "polite",
                "aria-label": "Журнал проверок",
                className: "h-[60vh] overflow-y-auto p-3 font-mono text-xs leading-relaxed text-silver-bright",
                children: [
                    log.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-silver/40",
                        children: "$ ожидание запуска сканирования…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TerminalView.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this) : log.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "whitespace-pre-wrap break-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-neon",
                                    children: "$"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TerminalView.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this),
                                " ",
                                line
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/TerminalView.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)),
                    isScanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "inline-block h-4 w-2 animate-pulse bg-neon align-middle"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TerminalView.tsx",
                        lineNumber: 41,
                        columnNumber: 23
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: endRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/TerminalView.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TerminalView.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TerminalView.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(TerminalView, "UJf/E3M7g+ouDdcXP2d3NAb8Sbo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"]
    ];
});
_c = TerminalView;
var _c;
__turbopack_context__.k.register(_c, "TerminalView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Toolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toolbar",
    ()=>Toolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExportMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddTargetDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AddTargetDialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const buttonBase = "inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-150 focus-visible:outline-none";
function Toolbar({ onRun, onCancel }) {
    _s();
    const isScanning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "Toolbar.useScanStore[isScanning]": (s)=>s.isScanning
    }["Toolbar.useScanStore[isScanning]"]);
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "Toolbar.useScanStore[mode]": (s)=>s.mode
    }["Toolbar.useScanStore[mode]"]);
    const setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "Toolbar.useScanStore[setMode]": (s)=>s.setMode
    }["Toolbar.useScanStore[setMode]"]);
    const autoRefreshMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "Toolbar.useScanStore[autoRefreshMs]": (s)=>s.autoRefreshMs
    }["Toolbar.useScanStore[autoRefreshMs]"]);
    const setAutoRefreshMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "Toolbar.useScanStore[setAutoRefreshMs]": (s)=>s.setAutoRefreshMs
    }["Toolbar.useScanStore[setAutoRefreshMs]"]);
    const [showAddDialog, setShowAddDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-2",
        children: [
            isScanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onCancel,
                className: `${buttonBase} border-blocked text-blocked hover:bg-blocked hover:text-void`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                        className: "size-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Toolbar.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    " Остановить"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Toolbar.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onRun,
                className: `${buttonBase} border-neon text-neon hover:bg-neon hover:text-void hover:shadow-[0_0_16px_-2px_#ff5e00]`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                        className: "size-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Toolbar.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    " Запустить проверку"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Toolbar.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setShowAddDialog(true),
                className: `${buttonBase} border-silver/30 text-silver hover:border-neon hover:text-neon`,
                "aria-label": "Добавить цель",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "size-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/Toolbar.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Toolbar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportMenu"], {}, void 0, false, {
                fileName: "[project]/src/components/Toolbar.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border border-steel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMode("cards"),
                        "aria-pressed": mode === "cards",
                        className: `flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] uppercase transition-colors ${mode === "cards" ? "bg-steel text-neon" : "text-silver/60 hover:text-silver-bright"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Toolbar.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            " Карточки"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Toolbar.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMode("compare"),
                        "aria-pressed": mode === "compare",
                        className: `flex items-center gap-1.5 border-l border-steel px-3 py-1.5 font-mono text-[11px] uppercase transition-colors ${mode === "compare" ? "bg-steel text-neon" : "text-silver/60 hover:text-silver-bright"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Toolbar.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            " Сравнение"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Toolbar.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMode("terminal"),
                        "aria-pressed": mode === "terminal",
                        className: `flex items-center gap-1.5 border-l border-steel px-3 py-1.5 font-mono text-[11px] uppercase transition-colors ${mode === "terminal" ? "bg-steel text-neon" : "text-silver/60 hover:text-silver-bright"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Toolbar.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            " Терминал"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Toolbar.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Toolbar.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1 font-mono text-[10px] tracking-[0.15em] text-silver/50 uppercase",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Toolbar.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            " Авто"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Toolbar.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: autoRefreshMs,
                        onChange: (e)=>setAutoRefreshMs(Number(e.target.value)),
                        "aria-label": "Интервал автообновления",
                        className: "border border-steel bg-carbon px-2 py-1.5 font-mono text-[11px] text-silver-bright uppercase focus-visible:border-neon focus-visible:outline-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: 0,
                                children: "Выкл"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Toolbar.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: 30000,
                                children: "30с"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Toolbar.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: 60000,
                                children: "1м"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Toolbar.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: 300000,
                                children: "5м"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Toolbar.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Toolbar.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Toolbar.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddTargetDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddTargetDialog"], {
                open: showAddDialog,
                onClose: ()=>setShowAddDialog(false)
            }, void 0, false, {
                fileName: "[project]/src/components/Toolbar.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Toolbar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Toolbar, "H8d0avDKk63IqlCR+mcDs/f86AY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"]
    ];
});
_c = Toolbar;
var _c;
__turbopack_context__.k.register(_c, "Toolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useAutoRefresh.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAutoRefresh",
    ()=>useAutoRefresh
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useAutoRefresh(targets, run) {
    _s();
    const autoRefreshMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "useAutoRefresh.useScanStore[autoRefreshMs]": (s)=>s.autoRefreshMs
    }["useAutoRefresh.useScanStore[autoRefreshMs]"]);
    const runRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(run);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAutoRefresh.useEffect": ()=>{
            runRef.current = run;
        }
    }["useAutoRefresh.useEffect"], [
        run
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAutoRefresh.useEffect": ()=>{
            if (autoRefreshMs <= 0 || targets.length === 0) return;
            const id = setInterval({
                "useAutoRefresh.useEffect.id": ()=>runRef.current(targets)
            }["useAutoRefresh.useEffect.id"], autoRefreshMs);
            return ({
                "useAutoRefresh.useEffect": ()=>clearInterval(id)
            })["useAutoRefresh.useEffect"];
        }
    }["useAutoRefresh.useEffect"], [
        autoRefreshMs,
        targets
    ]);
}
_s(useAutoRefresh, "m5K4natReTXTDG4avIinRv52JZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useFilters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFilters",
    ()=>useFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useFilters() {
    _s();
    const targets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "useFilters.useScanStore[targets]": (s)=>s.targets
    }["useFilters.useScanStore[targets]"]);
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "useFilters.useScanStore[results]": (s)=>s.results
    }["useFilters.useScanStore[results]"]);
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "useFilters.useScanStore[query]": (s)=>s.query
    }["useFilters.useScanStore[query]"]);
    const categoryFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "useFilters.useScanStore[categoryFilter]": (s)=>s.categoryFilter
    }["useFilters.useScanStore[categoryFilter]"]);
    const statusFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "useFilters.useScanStore[statusFilter]": (s)=>s.statusFilter
    }["useFilters.useScanStore[statusFilter]"]);
    const sortKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "useFilters.useScanStore[sortKey]": (s)=>s.sortKey
    }["useFilters.useScanStore[sortKey]"]);
    const tagFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "useFilters.useScanStore[tagFilter]": (s)=>s.tagFilter
    }["useFilters.useScanStore[tagFilter]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFilters.useMemo": ()=>{
            const needle = query.trim().toLowerCase();
            const entries = targets.map({
                "useFilters.useMemo.entries": (target)=>({
                        targetId: target.id,
                        targetName: target.name,
                        targetCategory: target.category,
                        targetUrl: target.url,
                        result: results[target.url] ?? null
                    })
            }["useFilters.useMemo.entries"]);
            const filtered = entries.filter({
                "useFilters.useMemo.filtered": (entry)=>{
                    const target = targets.find({
                        "useFilters.useMemo.filtered.target": (t)=>t.id === entry.targetId
                    }["useFilters.useMemo.filtered.target"]);
                    if (categoryFilter !== "all" && entry.targetCategory !== categoryFilter) return false;
                    if (tagFilter && !target?.tags.includes(tagFilter)) return false;
                    if (statusFilter !== "all") {
                        const status = entry.result?.status;
                        if (!status) return false;
                        if (statusFilter === "available" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHealthy"])(status)) return false;
                        if (statusFilter === "blocked" && status !== "blocked") return false;
                        if (statusFilter === "failed" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFailed"])(status)) return false;
                    }
                    if (needle) {
                        const haystack = `${entry.targetName} ${entry.targetUrl} ${target?.tags.join(" ")}`.toLowerCase();
                        if (!haystack.includes(needle)) return false;
                    }
                    return true;
                }
            }["useFilters.useMemo.filtered"]);
            filtered.sort({
                "useFilters.useMemo": (a, b)=>{
                    if (sortKey === "name") return a.targetName.localeCompare(b.targetName, "ru");
                    if (sortKey === "latency") {
                        const la = a.result?.latencyMs ?? Number.POSITIVE_INFINITY;
                        const lb = b.result?.latencyMs ?? Number.POSITIVE_INFINITY;
                        return la - lb;
                    }
                    const sa = a.result?.status ?? "pending";
                    const sb = b.result?.status ?? "pending";
                    return sa.localeCompare(sb);
                }
            }["useFilters.useMemo"]);
            return filtered;
        }
    }["useFilters.useMemo"], [
        targets,
        results,
        query,
        categoryFilter,
        statusFilter,
        sortKey
    ]);
}
_s(useFilters, "AXoQUB/Gq/+NWLlkCgSxHLBxVbQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHistory",
    ()=>useHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const STORAGE_KEY = "wnc:history";
const MAX_ENTRIES = 20;
function readHistory() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.slice(0, MAX_ENTRIES) : [];
    } catch  {
        return [];
    }
}
function useHistory() {
    _s();
    const [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useHistory.useState": ()=>readHistory()
    }["useHistory.useState"]);
    const push = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHistory.useCallback[push]": (results)=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || results.length === 0) return;
            const entry = {
                finishedAt: new Date().toISOString(),
                results: [
                    ...results
                ]
            };
            const next = [
                entry,
                ...readHistory()
            ].slice(0, MAX_ENTRIES);
            try {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            } catch  {
            // Переполнение localStorage — не критично.
            }
            setEntries(next);
        }
    }["useHistory.useCallback[push]"], []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHistory.useCallback[clear]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.localStorage.removeItem(STORAGE_KEY);
            setEntries([]);
        }
    }["useHistory.useCallback[clear]"], []);
    return {
        entries,
        push,
        clear
    };
}
_s(useHistory, "mlpMYTNMhc7vUP/+v4/O2XDuKmc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useScan.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScan",
    ()=>useScan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/scan-store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useScan() {
    _s();
    const beginScan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "useScan.useScanStore[beginScan]": (s)=>s.beginScan
    }["useScan.useScanStore[beginScan]"]);
    const applyEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "useScan.useScanStore[applyEvent]": (s)=>s.applyEvent
    }["useScan.useScanStore[applyEvent]"]);
    const endScan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"])({
        "useScan.useScanStore[endScan]": (s)=>s.endScan
    }["useScan.useScanStore[endScan]"]);
    const controllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScan.useCallback[start]": async (targets)=>{
            controllerRef.current?.abort();
            const controller = new AbortController();
            controllerRef.current = controller;
            beginScan(targets.length);
            try {
                const response = await fetch("/api/scan", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        targets: targets.map({
                            "useScan.useCallback[start]": (t)=>({
                                    name: t.name,
                                    url: t.url,
                                    category: t.category
                                })
                        }["useScan.useCallback[start]"])
                    }),
                    signal: controller.signal
                });
                if (!response.ok || !response.body) {
                    const message = response.ok ? "Сервер не вернул поток" : `Ошибка ${response.status}`;
                    applyEvent({
                        type: "error",
                        message
                    });
                    endScan();
                    return;
                }
                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let buffer = "";
                while(true){
                    const { value, done } = await reader.read();
                    if (done) break;
                    buffer += decoder.decode(value, {
                        stream: true
                    });
                    const lines = buffer.split("\n");
                    buffer = lines.pop() ?? "";
                    for (const line of lines){
                        const trimmed = line.trim();
                        if (!trimmed) continue;
                        try {
                            applyEvent(JSON.parse(trimmed));
                        } catch  {
                        // Неполная строка — доберётся в следующем чанке.
                        }
                    }
                }
            } catch (error) {
                if (!(error instanceof DOMException && error.name === "AbortError")) {
                    applyEvent({
                        type: "error",
                        message: error instanceof Error ? error.message : "Неизвестная ошибка"
                    });
                }
            } finally{
                endScan();
                controllerRef.current = null;
            }
        }
    }["useScan.useCallback[start]"], [
        applyEvent,
        beginScan,
        endScan
    ]);
    const cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScan.useCallback[cancel]": ()=>{
            controllerRef.current?.abort();
            controllerRef.current = null;
            endScan();
        }
    }["useScan.useCallback[cancel]"], [
        endScan
    ]);
    return {
        start,
        cancel
    };
}
_s(useScan, "9Jb0jh9VoX2XWTI0JDZB6qSn1nc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$scan$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScanStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/checker/normalize-url.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidTarget",
    ()=>isValidTarget,
    "normalizeUrl",
    ()=>normalizeUrl,
    "rawTargetSchema",
    ()=>rawTargetSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const ALLOWED_PROTOCOLS = new Set([
    "http:",
    "https:"
]);
/** Maximum length we will accept for a single URL string. */ const MAX_URL_LENGTH = 2048;
/**
 * Hostname validation: labels of 1-63 chars, separated by dots, optional
 * trailing dot. Rejects spaces, control chars, and underscore-less garbage.
 */ const HOSTNAME_RE = /^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)(\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*\.?$/i;
const rawTargetSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, "Пустая цель").max(MAX_URL_LENGTH, "Слишком длинный URL");
function normalizeUrl(raw) {
    const trimmed = raw.trim();
    if (trimmed.length === 0) {
        return {
            ok: false,
            reason: "Пустая цель"
        };
    }
    if (trimmed.length > MAX_URL_LENGTH) {
        return {
            ok: false,
            reason: "URL слишком длинный"
        };
    }
    // Reject control characters outright.
    if (/[\u0000-\u001f\u007f]/.test(trimmed)) {
        return {
            ok: false,
            reason: "URL содержит управляющие символы"
        };
    }
    const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    let parsed;
    try {
        parsed = new URL(withScheme);
    } catch  {
        return {
            ok: false,
            reason: "Некорректный URL"
        };
    }
    if (!ALLOWED_PROTOCOLS.has(parsed.protocol)) {
        return {
            ok: false,
            reason: `Недопустимый протокол: ${parsed.protocol}`
        };
    }
    if (parsed.username !== "" || parsed.password !== "") {
        return {
            ok: false,
            reason: "URL не должен содержать учётные данные"
        };
    }
    if (!HOSTNAME_RE.test(parsed.hostname)) {
        return {
            ok: false,
            reason: "Некорректное имя хоста"
        };
    }
    // Drop the fragment: it never affects the server response.
    parsed.hash = "";
    return {
        ok: true,
        url: parsed.toString(),
        host: parsed.hostname.toLowerCase()
    };
}
function isValidTarget(raw) {
    return normalizeUrl(raw).ok;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/config/categories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "getCategory",
    ()=>getCategory,
    "isKnownCategory",
    ()=>isKnownCategory
]);
const CATEGORIES = [
    {
        id: "custom",
        label: "Свои цели",
        icon: "Plus"
    },
    {
        id: "messengers",
        label: "Мессенджеры",
        icon: "MessageCircle"
    },
    {
        id: "dev",
        label: "Разработка",
        icon: "Code2"
    },
    {
        id: "ai",
        label: "ИИ-сервисы",
        icon: "Sparkles"
    },
    {
        id: "ai-routers",
        label: "ИИ-роутеры",
        icon: "Route"
    },
    {
        id: "ai-tools",
        label: "ИИ-инструменты",
        icon: "Wand2"
    },
    {
        id: "social",
        label: "Соцсети",
        icon: "Users"
    },
    {
        id: "streaming",
        label: "Стриминг",
        icon: "Play"
    },
    {
        id: "tools",
        label: "Инструменты",
        icon: "Wrench"
    },
    {
        id: "finance",
        label: "Финансы",
        icon: "TrendingUp"
    },
    {
        id: "basics",
        label: "Базовые",
        icon: "Globe"
    }
];
const CATEGORY_BY_ID = new Map(CATEGORIES.map((c)=>[
        c.id,
        c
    ]));
function getCategory(id) {
    return CATEGORY_BY_ID.get(id);
}
function isKnownCategory(id) {
    return CATEGORY_BY_ID.has(id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/config/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEED_CATALOG",
    ()=>SEED_CATALOG,
    "SEED_TARGETS",
    ()=>SEED_TARGETS
]);
const SEED_CATALOG = [
    {
        id: "messengers",
        services: [
            {
                name: "Telegram API",
                url: "https://api.telegram.org"
            },
            {
                name: "Telegram Links",
                url: "https://t.me"
            },
            {
                name: "WhatsApp",
                url: "https://web.whatsapp.com"
            },
            {
                name: "Discord",
                url: "https://discord.com"
            },
            {
                name: "Slack",
                url: "https://slack.com"
            }
        ]
    },
    {
        id: "dev",
        services: [
            {
                name: "Docker Hub",
                url: "https://registry-1.docker.io"
            },
            {
                name: "GitHub",
                url: "https://github.com"
            },
            {
                name: "GitLab",
                url: "https://gitlab.com"
            },
            {
                name: "NPM",
                url: "https://npmjs.com"
            },
            {
                name: "Stack Overflow",
                url: "https://stackoverflow.com"
            },
            {
                name: "Vercel",
                url: "https://vercel.com"
            },
            {
                name: "Cloudflare",
                url: "https://cloudflare.com"
            }
        ]
    },
    {
        id: "ai",
        services: [
            {
                name: "ChatGPT",
                url: "https://chatgpt.com"
            },
            {
                name: "Claude",
                url: "https://claude.ai"
            },
            {
                name: "Gemini",
                url: "https://gemini.google.com"
            },
            {
                name: "Hugging Face",
                url: "https://huggingface.co"
            },
            {
                name: "Perplexity",
                url: "https://perplexity.ai"
            },
            {
                name: "Mistral",
                url: "https://mistral.ai"
            },
            {
                name: "Cohere",
                url: "https://cohere.com"
            },
            {
                name: "Stability AI",
                url: "https://stability.ai"
            },
            {
                name: "Midjourney",
                url: "https://midjourney.com"
            },
            {
                name: "Poe",
                url: "https://poe.com"
            },
            {
                name: "Character.AI",
                url: "https://character.ai"
            },
            {
                name: "Suno",
                url: "https://suno.com"
            },
            {
                name: "Runway",
                url: "https://runwayml.com"
            },
            {
                name: "ElevenLabs",
                url: "https://elevenlabs.io"
            },
            {
                name: "Grok / xAI",
                url: "https://x.ai"
            },
            {
                name: "DeepSeek",
                url: "https://deepseek.com"
            },
            {
                name: "Qwen",
                url: "https://qwen.ai"
            }
        ]
    },
    {
        id: "ai-routers",
        services: [
            {
                name: "OpenRouter",
                url: "https://openrouter.ai"
            },
            {
                name: "OrcaRouter",
                url: "https://orcarouter.com"
            },
            {
                name: "Requesty",
                url: "https://requesty.ai"
            },
            {
                name: "Together AI",
                url: "https://together.ai"
            },
            {
                name: "Groq",
                url: "https://groq.com"
            },
            {
                name: "Fireworks AI",
                url: "https://fireworks.ai"
            },
            {
                name: "Replicate",
                url: "https://replicate.com"
            },
            {
                name: "Portkey",
                url: "https://portkey.ai"
            },
            {
                name: "LiteLLM",
                url: "https://litellm.ai"
            },
            {
                name: "Anyscale",
                url: "https://anyscale.com"
            },
            {
                name: "DeepInfra",
                url: "https://deepinfra.com"
            }
        ]
    },
    {
        id: "ai-tools",
        services: [
            {
                name: "Cursor",
                url: "https://cursor.com"
            },
            {
                name: "v0",
                url: "https://v0.dev"
            },
            {
                name: "Replit",
                url: "https://replit.com"
            },
            {
                name: "Lovable",
                url: "https://lovable.dev"
            },
            {
                name: "Bolt",
                url: "https://bolt.new"
            },
            {
                name: "LangChain",
                url: "https://langchain.com"
            },
            {
                name: "n8n",
                url: "https://n8n.io"
            },
            {
                name: "Make",
                url: "https://make.com"
            },
            {
                name: "Zapier",
                url: "https://zapier.com"
            },
            {
                name: "Pinecone",
                url: "https://pinecone.io"
            },
            {
                name: "Weaviate",
                url: "https://weaviate.io"
            },
            {
                name: "AutoGPT",
                url: "https://autogpt.net"
            },
            {
                name: "BabyAGI",
                url: "https://babyagi.com"
            }
        ]
    },
    {
        id: "social",
        services: [
            {
                name: "YouTube",
                url: "https://youtube.com"
            },
            {
                name: "Instagram",
                url: "https://instagram.com"
            },
            {
                name: "Facebook",
                url: "https://facebook.com"
            },
            {
                name: "X (Twitter)",
                url: "https://twitter.com"
            },
            {
                name: "TikTok",
                url: "https://tiktok.com"
            },
            {
                name: "LinkedIn",
                url: "https://linkedin.com"
            },
            {
                name: "Medium",
                url: "https://medium.com"
            },
            {
                name: "Reddit",
                url: "https://reddit.com"
            }
        ]
    },
    {
        id: "streaming",
        services: [
            {
                name: "Netflix",
                url: "https://netflix.com"
            },
            {
                name: "Spotify",
                url: "https://spotify.com"
            },
            {
                name: "Twitch",
                url: "https://twitch.tv"
            },
            {
                name: "SoundCloud",
                url: "https://soundcloud.com"
            }
        ]
    },
    {
        id: "tools",
        services: [
            {
                name: "Notion",
                url: "https://notion.so"
            },
            {
                name: "Canva",
                url: "https://canva.com"
            },
            {
                name: "Pinterest",
                url: "https://pinterest.com"
            },
            {
                name: "Shutterstock",
                url: "https://shutterstock.com"
            },
            {
                name: "Figma",
                url: "https://figma.com"
            },
            {
                name: "Dropbox",
                url: "https://dropbox.com"
            }
        ]
    },
    {
        id: "finance",
        services: [
            {
                name: "Binance",
                url: "https://binance.com"
            },
            {
                name: "Coinbase",
                url: "https://coinbase.com"
            },
            {
                name: "Kraken",
                url: "https://kraken.com"
            }
        ]
    },
    {
        id: "basics",
        services: [
            {
                name: "Google",
                url: "https://google.com"
            },
            {
                name: "Wikipedia",
                url: "https://wikipedia.org"
            },
            {
                name: "Microsoft",
                url: "https://microsoft.com"
            },
            {
                name: "Apple",
                url: "https://apple.com"
            },
            {
                name: "Amazon",
                url: "https://amazon.com"
            }
        ]
    }
];
const SEED_TARGETS = SEED_CATALOG.flatMap(_c = (category)=>category.services.map((service)=>({
            id: `${category.id}:${service.name}`,
            name: service.name,
            url: service.url,
            category: category.id
        })));
_c1 = SEED_TARGETS;
var _c, _c1;
__turbopack_context__.k.register(_c, "SEED_TARGETS$SEED_CATALOG.flatMap");
__turbopack_context__.k.register(_c1, "SEED_TARGETS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/export.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copyToClipboard",
    ()=>copyToClipboard,
    "downloadFile",
    ()=>downloadFile,
    "parseTargetsCsv",
    ()=>parseTargetsCsv,
    "parseTargetsJson",
    ()=>parseTargetsJson,
    "targetsToCsv",
    ()=>targetsToCsv,
    "targetsToJson",
    ()=>targetsToJson,
    "timestampSlug",
    ()=>timestampSlug,
    "toCsv",
    ()=>toCsv,
    "toJson",
    ()=>toJson,
    "toRows",
    ()=>toRows,
    "toText",
    ()=>toText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
;
function toRows(results) {
    return results.map((result)=>({
            name: result.name,
            host: result.host,
            url: result.url,
            status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusLabel"])(result.status),
            latencyMs: result.latencyMs,
            httpStatus: result.httpStatus,
            checkedAt: result.checkedAt
        }));
}
function csvCell(value) {
    if (value === null) return "";
    const text = String(value);
    if (/[",\n;]/.test(text)) {
        return `"${text.replace(/"/g, '""')}"`;
    }
    return text;
}
function toCsv(results) {
    const header = [
        "name",
        "host",
        "url",
        "status",
        "latencyMs",
        "httpStatus",
        "checkedAt"
    ];
    const lines = [
        header.join(",")
    ];
    for (const row of toRows(results)){
        lines.push([
            csvCell(row.name),
            csvCell(row.host),
            csvCell(row.url),
            csvCell(row.status),
            csvCell(row.latencyMs),
            csvCell(row.httpStatus),
            csvCell(row.checkedAt)
        ].join(","));
    }
    return lines.join("\n");
}
function toJson(results) {
    return JSON.stringify({
        exportedAt: new Date().toISOString(),
        count: results.length,
        results: toRows(results)
    }, null, 2);
}
function toText(results) {
    const header = `WebNetChecker — ${results.length} целей, ${new Date().toLocaleString("ru-RU")}`;
    return [
        header,
        ...results.map((result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalLine"])(result))
    ].join("\n");
}
function downloadFile(filename, content, mime) {
    const blob = new Blob([
        content
    ], {
        type: mime
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
}
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch  {
        return false;
    }
}
function timestampSlug() {
    return new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
}
function targetsToJson(targets) {
    return JSON.stringify({
        exportedAt: new Date().toISOString(),
        count: targets.length,
        targets
    }, null, 2);
}
function targetsToCsv(targets) {
    const header = [
        "name",
        "url",
        "category",
        "tags",
        "pinned"
    ];
    const lines = [
        header.join(",")
    ];
    for (const target of targets){
        lines.push([
            csvCell(target.name),
            csvCell(target.url),
            csvCell(target.category),
            csvCell(target.tags.join(";")),
            csvCell(String(target.pinned))
        ].join(","));
    }
    return lines.join("\n");
}
function parseTargetsJson(json) {
    const data = JSON.parse(json);
    if (!data.targets || !Array.isArray(data.targets)) {
        throw new Error("Invalid JSON format: missing targets array");
    }
    return data.targets;
}
function parseTargetsCsv(csv) {
    const lines = csv.split(/\r?\n/).filter((l)=>l.trim());
    if (lines.length < 2) return [];
    const targets = [];
    for(let i = 1; i < lines.length; i += 1){
        const cells = lines[i].split(","); // Simple split; real CSV needs a parser
        if (cells.length < 2) continue;
        targets.push({
            id: `custom:${cells[1]}`,
            name: cells[0] || cells[1],
            url: cells[1],
            category: cells[2] || "custom",
            tags: cells[3] ? cells[3].split(";") : [],
            pinned: cells[4] === "true"
        });
    }
    return targets;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STATUS_EMOJI",
    ()=>STATUS_EMOJI,
    "STATUS_LABELS",
    ()=>STATUS_LABELS,
    "formatHttpStatus",
    ()=>formatHttpStatus,
    "formatLatency",
    ()=>formatLatency,
    "isFailed",
    ()=>isFailed,
    "isHealthy",
    ()=>isHealthy,
    "statusEmoji",
    ()=>statusEmoji,
    "statusLabel",
    ()=>statusLabel,
    "terminalLine",
    ()=>terminalLine
]);
const STATUS_LABELS = {
    available: "ДОСТУПЕН",
    blocked: "ЗАБЛОКИРОВАН",
    timeout: "ТАЙМАУТ",
    dns_error: "ОШИБКА DNS",
    ssl_error: "ОШИБКА SSL",
    error: "ОШИБКА",
    pending: "ПРОВЕРЯЕТСЯ"
};
const STATUS_EMOJI = {
    available: "✅",
    blocked: "⛔",
    timeout: "⏱️",
    dns_error: "🌐",
    ssl_error: "🔒",
    error: "❌",
    pending: "⏳"
};
function statusLabel(status) {
    return STATUS_LABELS[status];
}
function statusEmoji(status) {
    return STATUS_EMOJI[status];
}
function formatLatency(ms) {
    if (ms === null) return "—";
    if (ms >= 1000) return `${(ms / 1000).toFixed(2)}s`;
    return `${ms}ms`;
}
function formatHttpStatus(status) {
    return status === null ? "—" : String(status);
}
function terminalLine(result) {
    const emoji = statusEmoji(result.status);
    const latency = result.latencyMs !== null ? ` — ${result.latencyMs}ms` : "";
    const http = result.httpStatus !== null ? ` — ${result.httpStatus} OK` : result.errorMessage ? ` — ${result.errorMessage}` : "";
    return `${emoji} ${result.name} (${result.host})${latency}${http}`;
}
function isHealthy(status) {
    return status === "available";
}
function isFailed(status) {
    return status === "blocked" || status === "timeout" || status === "dns_error" || status === "ssl_error" || status === "error";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/scan-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScanStore",
    ()=>useScanStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checker$2f$normalize$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/checker/normalize-url.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const useScanStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        targets: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEED_TARGETS"].map((t)=>{
            const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checker$2f$normalize$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeUrl"])(t.url);
            return res.ok ? {
                ...t,
                url: res.url,
                tags: [],
                pinned: false
            } : {
                ...t,
                tags: [],
                pinned: false
            };
        }),
        results: {},
        history: {},
        order: [],
        log: [],
        isScanning: false,
        completed: 0,
        total: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEED_TARGETS"].length,
        lastRunAt: null,
        error: null,
        mode: "cards",
        query: "",
        categoryFilter: "all",
        tagFilter: null,
        statusFilter: "all",
        sortKey: "name",
        autoRefreshMs: 0,
        compareTargets: [],
        setTargets: (targets)=>{
            const normalized = targets.map((t)=>{
                const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checker$2f$normalize$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeUrl"])(t.url);
                return res.ok ? {
                    ...t,
                    url: res.url,
                    tags: t.tags ?? [],
                    pinned: t.pinned ?? false
                } : {
                    ...t,
                    tags: t.tags ?? [],
                    pinned: t.pinned ?? false
                };
            });
            set({
                targets: normalized,
                results: {},
                history: {},
                order: [],
                log: [],
                completed: 0,
                total: normalized.length
            });
        },
        addTargets: (incoming)=>set((state)=>{
                const normalizedIncoming = incoming.map((t)=>{
                    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checker$2f$normalize$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeUrl"])(t.url);
                    return res.ok ? {
                        ...t,
                        url: res.url,
                        tags: t.tags ?? [],
                        pinned: t.pinned ?? false
                    } : {
                        ...t,
                        tags: t.tags ?? [],
                        pinned: t.pinned ?? false
                    };
                });
                const existing = new Set(state.targets.map((t)=>t.url));
                const merged = [
                    ...state.targets
                ];
                for (const target of normalizedIncoming){
                    if (!existing.has(target.url)) {
                        merged.push(target);
                        existing.add(target.url);
                    }
                }
                return {
                    targets: merged,
                    total: merged.length
                };
            }),
        removeTarget: (id)=>set((state)=>{
                const target = state.targets.find((t)=>t.id === id);
                const targets = state.targets.filter((t)=>t.id !== id);
                const results = {
                    ...state.results
                };
                const order = state.order.filter((key)=>key !== id);
                if (target) delete results[target.url];
                return {
                    targets,
                    results,
                    order,
                    total: targets.length
                };
            }),
        togglePin: (id)=>set((state)=>({
                    targets: state.targets.map((t)=>t.id === id ? {
                            ...t,
                            pinned: !t.pinned
                        } : t)
                })),
        updateTags: (id, tags)=>set((state)=>({
                    targets: state.targets.map((t)=>t.id === id ? {
                            ...t,
                            tags
                        } : t)
                })),
        setCompareTargets: (ids)=>set({
                compareTargets: ids
            }),
        beginScan: (total)=>set({
                isScanning: true,
                completed: 0,
                total,
                error: null
            }),
        applyEvent: (event)=>set((state)=>{
                if (event.type === "start") {
                    return {
                        isScanning: true,
                        total: event.total,
                        completed: 0
                    };
                }
                if (event.type === "result") {
                    const result = event.result;
                    const results = {
                        ...state.results,
                        [result.url]: result
                    };
                    const order = state.order.includes(result.url) ? state.order : [
                        ...state.order,
                        result.url
                    ];
                    const history = {
                        ...state.history
                    };
                    if (result.latencyMs !== null) {
                        const h = history[result.url] ?? [];
                        history[result.url] = [
                            ...h,
                            result.latencyMs
                        ].slice(-10);
                    }
                    return {
                        results,
                        order,
                        history,
                        completed: event.completed,
                        log: [
                            ...state.log,
                            terminalLineSafe(result)
                        ]
                    };
                }
                if (event.type === "done") {
                    return {
                        isScanning: false,
                        completed: event.completed,
                        lastRunAt: new Date().toISOString()
                    };
                }
                return {
                    error: event.message
                };
            }),
        endScan: ()=>set({
                isScanning: false
            }),
        setMode: (mode)=>set({
                mode
            }),
        setQuery: (query)=>set({
                query
            }),
        setCategoryFilter: (categoryFilter)=>set({
                categoryFilter
            }),
        setTagFilter: (tagFilter)=>set({
                tagFilter
            }),
        setStatusFilter: (statusFilter)=>set({
                statusFilter
            }),
        setSortKey: (sortKey)=>set({
                sortKey
            }),
        setAutoRefreshMs: (autoRefreshMs)=>set({
                autoRefreshMs
            }),
        hydrateFromCache: (results, finishedAt)=>set(()=>{
                const map = {};
                const order = [];
                const history = {};
                for (const result of results){
                    map[result.url] = result;
                    order.push(result.url);
                    if (result.latencyMs !== null) {
                        history[result.url] = [
                            result.latencyMs
                        ];
                    }
                }
                return {
                    results: map,
                    order,
                    history,
                    lastRunAt: finishedAt,
                    completed: results.length,
                    log: results.map(terminalLineSafe)
                };
            })
    }));
function terminalLineSafe(result) {
    const emoji = statusToEmoji(result.status);
    const latency = result.latencyMs !== null ? ` — ${result.latencyMs}ms` : "";
    const tail = result.httpStatus !== null ? ` — ${result.httpStatus} OK` : result.errorMessage ? ` — ${result.errorMessage}` : "";
    return `${emoji} ${result.name} (${result.host})${latency}${tail}`;
}
function statusToEmoji(status) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHealthy"])(status)) return "✅";
    if (status === "blocked") return "⛔";
    if (status === "timeout") return "⏱️";
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFailed"])(status)) return "❌";
    return "⏳";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0pjqw1b._.js.map