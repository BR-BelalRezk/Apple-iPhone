import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apple",
  description: "Apple Website for Iphone",
  icons: {
    icon: "/images/apple.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} text-white w-dvw overflow-x-hidden h-full bg-black border-[#3b3b3b] select-none`}
      >
        <Navbar />
        <main id="root">{children}</main>
      </body>
    </html>
  );
}
