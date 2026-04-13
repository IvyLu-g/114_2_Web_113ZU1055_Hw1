"use client"
import Menu from "@/component/Menu";
import Image from "next/image"
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import { FaFire } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function ClubActivity() {
  
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

        <div className="w-full h-screen overflow-y-auto">
          <div className="text-[36px] text-white font-bold text-center m-[20px]
                          underline underline-offset-17 decoration-4 decoration-slate-400/35">社團活動</div>
          
          <section className="bg-slate-800/20 min-h-[820px] h-auto w-auto m-[20px] p-[30px] rounded-2xl">
            <div className="flex gap-3 items-center">
              <FaFire className="text-white h-[28px] w-auto"/>
              <div className="text-[28px] text-white font-bold">政大火舞社</div>
              <div className="text-[16px] text-slate-300 "> 擔任 113-2 美宣 & 114 總務/公關</div>
            </div>

            <div className="flex">
              <a href="https://www.instagram.com/nccu.firedance_" target="_blank" className="flex gap-0.5 items-center">
                <RiInstagramFill className="text-slate-300/65"/>
                <h4 className="text-slate-300"> nccu.firedance_</h4>
              </a>
            </div>

            <p className="text-slate-500 p-3">
              不只研究火舞不同道具的技術，更是研究如何透過道具與肢體表演表達情感<br />
              讓更多人了解火舞看的不是它的危險，而是它的唯美</p>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 m-[26px]">
              <div className="rounded-2xl flex justify-center items-center relative aspect-video">
                <Image src="/firedance2.jpg" alt="firedance" fill
                       className="saturate-40 contrast-120 rounded-2xl object-cover h-auto"/>
              </div>

              <div className="rounded-2xl flex justify-center items-center relative aspect-video">
                <Image src="/firedance3.jpg" alt="my photo" fill
                       className="saturate-80 brightness-80 contrast-107 rounded-2xl object-cover h-auto"/>
              </div>

              <div className="rounded-2xl flex justify-center items-top relative aspect-video">
                <Image src="/firedance5.jpg" alt="firedance" fill
                       className="saturate-50 brightness-80 contrast-112 rounded-2xl object-cover object-bottom h-auto"/>
              </div>

              <div className="rounded-2xl flex justify-center items-center relative aspect-video">
                <Image src="/firedance6.jpg" alt="firedance" fill
                       className="rounded-2xl object-cover h-auto"/>
              </div>
            </div>    

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 m-[26px]">
              <div className="rounded-2xl flex justify-center items-center relative aspect-9/10">
                <Image src="/firedance1.jpg" alt="firedance" fill
                       className="saturate-70 brightness-80 contrast-107 rounded-2xl object-cover h-auto"/>
              </div>

              <div className="rounded-2xl flex justify-center items-center relative aspect-9/10">
                <Image src="/firedance4.jpg" alt="my photo" fill
                       className="saturate-70 brightness-80 contrast-107 rounded-2xl object-cover h-auto"/>
              </div>
            </div>     

          </section>

        </div>
      </div>
      
    </>
  );
}
