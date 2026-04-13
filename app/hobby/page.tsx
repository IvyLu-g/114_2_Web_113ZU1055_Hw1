"use client"
import Menu from "@/component/Menu";
import Image from "next/image"
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";

export default function Hobby() {
  
  return (
    <>
      <div className="flex h-full bg-slate-950 overflow-hidden">
        <Link href="/" className="sm:hidden absolute left-4 top-5 bg-slate-800 rounded-4xl 
                                text-white p-[5px] flex items-center animate-pulse z-110">  
            <div> <GoChevronLeft /> </div>
            <div className="m-1"> Back </div>
        </Link>
        <div className="sm:block hidden">
          <Menu />
        </div>
        <div className="bg-slate-950 text-white w-full">
          我的興趣
        </div>
      </div>
      
    </>
  );
}
