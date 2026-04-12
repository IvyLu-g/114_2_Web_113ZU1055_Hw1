
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "../component/Menu";
import Image from "next/image";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ฅ^•ﻌ•^ฅ盧家愛的個人網站",
  description: "ฅ^•ﻌ•^ฅ盧家愛的個人網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[250px] pointer-events-none z-100
                         animate-pulse">
           <Image src="/stars.png" alt="stars" width={1000} height={1000}
            className="w-full h-auto object-contain object-top" priority/>
         </div>

        {children}
      </body>
    </html>
  );
}
