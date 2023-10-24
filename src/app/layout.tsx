import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EREC 2024",
  description:
    "European Reformed Evangelical Convention 2024, March 29 - April 1 2024, Halle (Saale), Germany",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="format-detection" content="telephone=no" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
