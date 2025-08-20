import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/vue";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Components
import { Header, Footer } from "@/components";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UXJester Dot Dev",
  description:
    "Front-end developer, USAF veteran, motorcycle enthusiast, and dad. I craft clean code with precision, grit, and just enough dad jokes to keep things interesting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-foreground flex min-h-screen flex-col bg-zinc-200 antialiased`}
      >
        <Header />

        <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center bg-white p-6">
          {children}
        </main>

        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
