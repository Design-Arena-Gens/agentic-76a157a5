"use client";

import { Review } from "./review-data";
import { RatingStars, SentimentDot, SourceLogo } from "./ui";
import { Bot, CheckCircle2, Copy, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

function toAiSummary(review: Review): string {
  const tone = review.sentiment === "positive" ? "Positive" : review.sentiment === "negative" ? "Negative" : "Neutral";
  return `${tone} feedback focusing on ${review.rating >= 4 ? "service and cleanliness" : review.rating <= 2 ? "check-in and amenities" : "location and value"}.`;
}

export function ReviewDetail({ review }: { review: Review | null }) {
  const [copied, setCopied] = useState(false);
  const ai = useMemo(() => (review ? toAiSummary(review) : ""), [review]);

  if (!review) {
    return (
      <div className="h-full flex items-center justify-center text-white/60">
        Select a review to see details
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-white/10 flex items-center gap-3">
        <SourceLogo source={review.source} />
        <div>
          <div className="font-semibold">{review.guestName}</div>
          <div className="text-xs text-white/60">{new Date(review.date).toLocaleString("en-IN")}</div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <RatingStars rating={review.rating} />
          <SentimentDot sentiment={review.sentiment} />
        </div>
      </div>

      <div className="p-5 space-y-4 overflow-auto">
        <div className="card p-4 leading-relaxed text-white/90">
          {review.fullText}
        </div>

        <div className="card p-4">
          <div className="flex items-center gap-2 text-brand-400">
            <Bot className="w-4 h-4" />
            <span className="text-sm font-semibold">AI Sentiment Analysis</span>
          </div>
          <div className="mt-2 text-sm text-white/80">
            {ai}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              className="badge hover:bg-white/10"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              <ExternalLink className="w-3.5 h-3.5" /> View on {review.source === "mmt" ? "MakeMyTrip" : review.source === "booking" ? "Booking.com" : review.source === "tripadvisor" ? "TripAdvisor" : "Google"}
            </a>
            <button
              className="badge hover:bg-white/10"
              onClick={() => {
                navigator.clipboard.writeText(`Replying to ${review.guestName}: Thank you for your feedback!`).then(() => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                });
              }}
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-positive" /> : <Copy className="w-3.5 h-3.5" />} Quick reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
