import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Header from "./header/page";
import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EREC 2024",
  description:
    "European Reformed Evangelical Convention 2024, March 29 - April 1 2024, Halle (Saale), Germany",
  keywords: [
    "European Reformed Evangelical Convention",
    "European Reformed Evangelical Convention 2024",
    "EREC 2024",
    "IREC retreat",
    "reformed retreat",
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
      <body className={inter.className}>{children}</body>
      {/* <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body> */}
    </html>
  );
}
