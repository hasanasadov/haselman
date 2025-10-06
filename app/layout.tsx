import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { LangProvider } from "./components/LangSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elman Imamaliyev | Academic Portfolio",
  description:
    "Academic portfolio of Assoc. Prof. Elman Imamaliyev — researcher in cybersecurity and AI.",
  openGraph: {
    title: "Elman Imamaliyev | Academic Portfolio",
    description:
      "Research and publications in cybersecurity, AI and cloud technologies.",
    url: "https://elmanimamaliyev.az/",
    siteName: "Elman Imamaliyev",
    images: [
      {
        url: "/elman.jpg",
        width: 1200,
        height: 630,
        alt: "Elman Imamaliyev Academic Portfolio",
      },
    ],
    locale: "az_AZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="az">
      <body
        className={`${inter.className} antialiased bg-gradient-to-br from-[#0B0C10] via-[#111318] to-[#1B1D25] text-gray-100 overflow-x-hidden`}
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
