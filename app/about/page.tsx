"use client"
import Image from "next/image"
import Menu from "../../component/Menu"
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

export default function About() {
  
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
                          underline underline-offset-17 decoration-4 decoration-slate-400/35">關於我</div>

          <section className="bg-slate-800/20 h-auto min-h-[820px] w-auto m-[20px] p-[20px] rounded-2xl 
                                flex-1 flex-col pt-[90px] relative overflow-hidden">
            <Image src="/myphoto3.jpg" alt="background" fill
                   className="object-cover object-top brightness-50 z-0"/>

            <div className="relative z-20">
              <div className="flex gap-2 items-center justify-center">
                <BsFillMoonStarsFill className="text-slate-200/50 w-auto h-[35px]"/>
                <h1 className="text-white sm:text-5xl text-3xl font-bold tracking-widest">盧家愛</h1>
                <h1 className="text-slate-300 sm:text-3xl text-xl tracking-widest">Chia-Ai, Lu</h1>
              </div>

              <div className="mt-[20px] sm:pl-6 justify-center flex">
                <p className="text-slate-300 sm:text-[16px] text-[12px] tracking-widest leading-loose">
                就讀政治大學創新國際學院學士班，並修習數位內容學程<br />
                興趣是繪畫/設計/表演，很多事情都還在努力中！</p>
              </div>

              <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 m-[26px]">
                <div className="rounded-2xl flex justify-center items-center">
                  <Image src="/myphoto2.jpg" alt="my photo" width={260} height={260}
                         className="saturate-50 brightness-80 rounded-2xl object-cover h-auto"/>
                </div>

                <div className="rounded-2xl flex justify-center items-center">
                  <Image src="/self_photo.jpg" alt="my photo" width={260} height={260}
                         className="saturate-50 brightness-80 rounded-2xl object-cover h-auto"/>
                </div>
              </div>

              <div className="mt-[20px] pl-6 justify-center flex items-center gap-1">
                <IoMail className="text-slate-400 w-auto h-[16px]"/>
                <p className="text-slate-400 text-[16px] tracking-widest leading-loose">
                電子信箱: t3312089@gmail.com</p>
              </div>
            </div>


          </section>


        </div>

      </div>
    </>
  );
}
