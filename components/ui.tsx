import { clsx } from "clsx";
import { IndianRupee, Star } from "lucide-react";
import React from "react";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm uppercase tracking-widest text-white/50 font-semibold">
      {children}
    </h2>
  );
}

export function Pill({ color = "", children }: { color?: string; children: React.ReactNode }) {
  return (
    <span className={clsx("px-2 py-0.5 rounded-full text-xs", color)}>{children}</span>
  );
}

export function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={"f" + i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalf && (
        <div className="relative w-4 h-4">
          <Star className="absolute inset-0 w-4 h-4 text-yellow-400" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={"e" + i} className="w-4 h-4 text-white/20" />
      ))}
    </div>
  );
}

export function SentimentDot({ sentiment }: { sentiment: "positive" | "negative" | "neutral" }) {
  const color = sentiment === "positive" ? "bg-positive" : sentiment === "negative" ? "bg-negative" : "bg-neutral";
  return <span className={clsx("inline-block w-2.5 h-2.5 rounded-full", color)} />;
}

export function SourceLogo({ source }: { source: string }) {
  const map: Record<string, string> = {
    google: "G",
    mmt: "MMT",
    booking: "B",
    tripadvisor: "TA",
  };
  const bg: Record<string, string> = {
    google: "bg-[#4285F4]",
    mmt: "bg-[#ef4444]",
    booking: "bg-[#003580]",
    tripadvisor: "bg-[#00af87]",
  };
  const text = map[source] ?? source.slice(0, 2).toUpperCase();
  const clr = bg[source] ?? "bg-white/20";
  return (
    <span className={clsx("inline-flex items-center justify-center w-6 h-6 rounded-md text-[10px] font-bold", clr)}>
      {text}
    </span>
  );
}
