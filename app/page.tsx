"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"

export default function Home() {
  
  return (
    <>
      <div className="flex h-screen w-full bg-slate-950 overflow-hidden">
        <div className="sm:block hidden">
          {/* 電腦版 */}
          <Menu />
        </div>
        <div className="sm:hidden w-full flex justify-center">
          {/* 手機版 */}
          <Menu />
        </div>
      </div>
    </>
  );
}
