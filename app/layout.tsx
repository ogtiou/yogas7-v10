import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const gunsan = localFont({
  src: "./fonts/Gunsan.ttf",
  variable: "--font-gunsan",
});

export const metadata: Metadata = {
  title: "YOGAS7",
  description: "Yoga studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gunsan.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
