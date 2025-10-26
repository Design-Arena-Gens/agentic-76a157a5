"use client";

import { useMemo, useState } from "react";
import { reviews, type Review } from "./review-data";
import { RatingStars, SentimentDot, SourceLogo } from "./ui";
import { Search } from "lucide-react";

export function ReviewFeed({ onSelect, selectedId }: { onSelect: (r: Review) => void; selectedId?: string }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return reviews;
    return reviews.filter((r) =>
      [r.guestName, r.snippet, r.fullText, r.source].some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="flex flex-col h-full">
      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            className="w-full rounded-lg bg-white/5 border border-white/10 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand/40"
            placeholder="Search reviews, guests, sources..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <ul className="divide-y divide-white/10">
          {filtered.map((r) => {
            const isActive = r.id === selectedId;
            return (
              <li key={r.id}>
                <button
                  onClick={() => onSelect(r)}
                  className={
                    "w-full text-left p-4 hover:bg-white/5 focus:bg-white/5 transition flex gap-3 items-start " +
                    (isActive ? "bg-white/5" : "")
                  }
                >
                  <SourceLogo source={r.source} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium truncate">{r.guestName}</span>
                      <span className="text-xs text-white/50">{new Date(r.date).toLocaleDateString("en-IN")}</span>
                    </div>
                    <div className="mt-1 text-sm text-white/80 truncate">{r.snippet}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <RatingStars rating={r.rating} />
                      <SentimentDot sentiment={r.sentiment} />
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
