"use client";

import { useState } from "react";
import { Copy, Download, FileJson, FileSpreadsheet } from "lucide-react";
import { useScanStore } from "@/store/scan-store";
import { copyToClipboard, downloadFile, timestampSlug, toCsv, toJson, toText } from "@/lib/export";

const itemClass =
  "flex w-full items-center gap-2 px-3 py-2 text-left font-mono text-[11px] tracking-[0.1em] text-silver uppercase transition-colors hover:bg-steel hover:text-neon focus-visible:bg-steel focus-visible:text-neon focus-visible:outline-none";

export function ExportMenu() {
  const results = useScanStore((s) => s.results);
  const order = useScanStore((s) => s.order);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const ordered = order.flatMap((key) => {
    const result = results[key];
    return result ? [result] : [];
  });

  if (ordered.length === 0) return null;

  const handleCopy = async () => {
    const ok = await copyToClipboard(toText(ordered));
    setCopied(ok);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-2 border border-steel px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] text-silver uppercase transition-colors hover:border-silver/60 hover:text-silver-bright focus-visible:outline-none"
      >
        <Download className="size-3.5" /> Экспорт
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-30 mt-1 w-56 border border-steel bg-carbon py-1 shadow-[0_8px_24px_-8px_#000]"
        >
          <button
            type="button"
            role="menuitem"
            className={itemClass}
            onClick={() => {
              downloadFile(`webnetchecker-${timestampSlug()}.json`, toJson(ordered), "application/json");
              setOpen(false);
            }}
          >
            <FileJson className="size-3.5" /> Скачать JSON
          </button>
          <button
            type="button"
            role="menuitem"
            className={itemClass}
            onClick={() => {
              downloadFile(`webnetchecker-${timestampSlug()}.csv`, toCsv(ordered), "text/csv");
              setOpen(false);
            }}
          >
            <FileSpreadsheet className="size-3.5" /> Скачать CSV
          </button>
          <button type="button" role="menuitem" className={itemClass} onClick={() => void handleCopy()}>
            <Copy className="size-3.5" /> {copied ? "Скопировано" : "Копировать как текст"}
          </button>
        </div>
      ) : null}
    </div>
  );
}