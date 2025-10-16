import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Loan Processing",
  description: "White-glove contract processing for elite Loan Officers and brokerages.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
