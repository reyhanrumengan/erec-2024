import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Header from "./header/page";
import Footer from "./footer/page";
import "@mantine/core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EREC 2024",
  description:
    "European Reformed Evangelical Convention 2024, March 29 - April 1 2024, Halle (Saale), Germany",
  keywords: [
    "European Reformed Evangelical Convention",
    "European Reformed Evangelical Convention 2024",
    "EREC 2024",
    "EREC",
    "IREC",
    "IREC Europe",
    "IREC retreat",
    "reformed retreat",
    "GRII",
    "Assurance of Grace",
    "MRII Berlin",
    "MRII Hamburg",
    "PRII Stockholm",
    "MRII Munich",
    "MRII Bern",
  ],
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <head>
        <ColorSchemeScript />
      </head>
      <body className={styles.page}>
        <MantineProvider>{children}</MantineProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
