import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bet4.win - Premium Casino Games & RGS Platform",
  description: "We craft thrilling slot games that players love to replay. Certified RNG, sweepstakes & social-friendly games for operators worldwide.",
  keywords: "casino games, slot games, RGS platform, gaming, betting, online casino",
  openGraph: {
    title: "Bet4.win - Premium Casino Games",
    description: "Where technology meets entertainment. Premium slot games and RGS solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
