import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import Header from "@/components/layout/Header";
import ParticlesBackground from "@/components/backgrounds/Particles";
import { Analytics } from "@vercel/analytics/react";

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sorai Academy — تعلم. ابتكر. أنجز",
  description:
    "منصة تعليمية حديثة تقدم دورات متقدمة في التقنية والإبداع مع خبراء ومشاريع عملية.",
  metadataBase: new URL("https://sorai.academy"),
  icons: {
    icon: "/publiclogo.png",
    shortcut: "/publiclogo.png",
    apple: "/publiclogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/publiclogo.png" />
        <link rel="apple-touch-icon" href="/publiclogo.png" />
      </head>
      <body className={`${arabic.variable} font-sans antialiased bg-background text-foreground`}>
        <LenisProvider>
          <ParticlesBackground />
          <Header />
          <div className="pt-16">{children}</div>
          <Analytics />
        </LenisProvider>
      </body>
    </html>
  );
}
