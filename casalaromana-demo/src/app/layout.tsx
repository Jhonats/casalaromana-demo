import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsappPopUp from "./components/Home/WhatsappPopUp";
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
  title: "Casa La Romana",
  description: "Casa La Romana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WhatsappPopUp />
        {children}
      </body>
    </html>
  );
}
