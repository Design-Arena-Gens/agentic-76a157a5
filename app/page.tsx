"use client";

import { useMemo, useState } from "react";
import { Review, reviews } from "@/components/review-data";
import { ReviewFeed } from "@/components/review-feed";
import { ReviewDetail } from "@/components/review-detail";
import { Hotel, LayoutGrid, Sparkles } from "lucide-react";

export default function Page() {
  const [selected, setSelected] = useState<Review | null>(reviews[0] ?? null);
  const total = reviews.length;
  const avg = useMemo(() => (reviews.reduce((a, r) => a + r.rating, 0) / Math.max(1, reviews.length)).toFixed(1), []);

  return (
    <main className="container-max py-6">
      <header className="mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
          <Hotel className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">Ritam Reviews Dashboard</h1>
          <p className="text-sm text-white/60">Unified reviews from Google, MakeMyTrip, Booking.com, TripAdvisor</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="badge">{total} reviews</span>
          <span className="badge">Avg {avg}★</span>
          <span className="badge">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" /> AI Insights
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-5 card overflow-hidden h-[70vh]">
          <div className="p-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2 text-white/80">
              <LayoutGrid className="w-4 h-4" />
              <span className="text-sm font-semibold">Recent Reviews</span>
            </div>
          </div>
          <ReviewFeed onSelect={setSelected} selectedId={selected?.id} />
        </section>

        <section className="lg:col-span-7 card overflow-hidden h-[70vh]">
          <ReviewDetail review={selected} />
        </section>
      </div>
    </main>
  );
}
