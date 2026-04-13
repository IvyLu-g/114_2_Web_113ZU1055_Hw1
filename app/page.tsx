"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"

export default function Home() {
  
  return (
    <>
      <div className="flex min-h-screen w-full bg-slate-950">
        <div className="sm:flex hidden w-full h-screen overflow-hidden">
          {/* 電腦版 */}
          <Menu />
          <div className="flex-1 h-full relative overflow-hidden">
            <Image src="/home_background.png" alt="background" fill priority 
                   className="object-cover object-top saturate-50 hue-rotate-180 brightness-80 animate-pulse"/>
            <div className="absolute flex justify-center top-1/3 left-3/8">
              <h1 className="text-white text-5xl font-bold tracking-[.25em]">歡迎來到我的網站</h1>
            </div>
            <div className="absolute flex justify-center top-1/2 right-1/5 rotate-6">
              <h1 className="text-slate-100 text-5xl font-bold tracking-widest">ฅ^•ﻌ•^ฅ</h1>
            </div>
          </div>
        </div>
        <div className="sm:hidden w-full flex justify-center overflow-y-auto">
          {/* 手機版 */}
          <Menu />
        </div>
      </div>
    </>
  );
}
