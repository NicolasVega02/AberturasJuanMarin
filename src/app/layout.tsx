import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/top-nav";
import { SiteFooter } from "@/components/site-footer";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aberturas Juan Marin",
  description:
    "Cerramientos arquitectónicos de alta gama en aluminio, PVC y madera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${inter.variable} h-full`}>
      <head>
        <Script
          src="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          strategy="beforeInteractive"
        />
      </head>
      <body className="flex min-h-full flex-col bg-surface font-body text-on-surface antialiased">
        <TopNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
