import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ritam Reviews Dashboard",
  description: "Unified hotel review intelligence for India",
  themeColor: "#0b1020",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
