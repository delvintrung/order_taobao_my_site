"use client";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Provider from "../components/Provider";
import { usePathname } from "next/navigation";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans`}>
        <Provider>
          <Analytics />
          {!isAdmin && <Header />}
          {children}
          {!isAdmin && <Footer />}
        </Provider>
      </body>
    </html>
  );
}
