export type Review = {
  id: string;
  source: "google" | "mmt" | "booking" | "tripadvisor";
  guestName: string;
  rating: number; // 0-5
  snippet: string;
  fullText: string;
  date: string; // ISO
  sentiment: "positive" | "negative" | "neutral";
};

export const reviews: Review[] = [
  {
    id: "1",
    source: "google",
    guestName: "Priya S.",
    rating: 4.5,
    snippet: "Great stay, staff were attentive and rooms were clean...",
    fullText:
      "Great stay, staff were attentive and rooms were clean. The breakfast spread had both South Indian and continental options. Will definitely recommend for business travel.",
    date: "2025-10-20",
    sentiment: "positive",
  },
  {
    id: "2",
    source: "mmt",
    guestName: "Rahul K.",
    rating: 2.0,
    snippet: "Air conditioning was noisy and check-in took too long...",
    fullText:
      "Air conditioning was noisy and check-in took too long. The room view was nice but overall not worth the price I paid on MMT.",
    date: "2025-10-18",
    sentiment: "negative",
  },
  {
    id: "3",
    source: "booking",
    guestName: "Aisha M.",
    rating: 3.5,
    snippet: "Decent location near the metro, average breakfast...",
    fullText:
      "Decent location near the metro, average breakfast. Staff were helpful with late checkout. Could improve bathroom amenities.",
    date: "2025-10-17",
    sentiment: "neutral",
  },
  {
    id: "4",
    source: "tripadvisor",
    guestName: "Vikram P.",
    rating: 5,
    snippet: "Excellent hospitality, rooftop restaurant is a must-try!...",
    fullText:
      "Excellent hospitality, rooftop restaurant is a must-try! The GM personally checked on our comfort, felt very well taken care of.",
    date: "2025-10-15",
    sentiment: "positive",
  },
];
