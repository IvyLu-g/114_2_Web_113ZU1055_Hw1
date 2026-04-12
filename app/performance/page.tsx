"use client"
import Menu from "@/component/Menu";
import Image from "next/image"
import Link from "next/link";

export default function Performance() {
  
  return (
    <>
      <div className="flex h-full bg-slate-950 overflow-hidden">
        <Link href="/" className="sm:hidden absolute left-2 top-2 bg-slate-950 text-white animate-pulse">  
            Back
        </Link>
        <div className="sm:block hidden">
          <Menu />
        </div>
        <div className="bg-slate-950 text-white w-full">
          設計作品
        </div>
      </div>
      
    </>
  );
}
