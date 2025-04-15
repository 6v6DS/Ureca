import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Styles from "./page.module.css";
import Navigation from "@/components/common/Navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//server component
export const metadata: Metadata = {
  title: {
    template: "%s | Ureca",
    default: "Uplus| Ureca",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={Styles.main}>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
