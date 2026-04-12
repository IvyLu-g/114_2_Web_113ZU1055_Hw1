"use client"
import Image from "next/image"
import Menu from "../../component/Menu"
import Link from "next/link";

export default function About() {
  
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
          關於我
        </div>

      </div>
    </>
  );
}
