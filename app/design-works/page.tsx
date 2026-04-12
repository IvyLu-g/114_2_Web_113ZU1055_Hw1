"use client"

import Menu from "@/component/Menu";
import Link from "next/link";
import Image from "next/image"

export default function DesignWorks() {

  let projectData = {
    "1": {
      "name":"布畫",
      "imageUrl": "/designwork1_cloth.jpg"
    },
    "2": {
      "name":"PS海報設計_梵谷與我",
      "imageUrl": "/ps_poster.png"
    },
  };

  return (
    <>
      <div className="flex h-full bg-slate-950 overflow-hidden">
        <Link href="/" className="sm:hidden absolute left-2 top-2 bg-white">  
            Back
        </Link>
        <div className="sm:block hidden">
          <Menu />
        </div>
        <div className="w-full h-screen overflow-y-auto">
          <div className="text-[36px] text-white font-bold text-center m-[20px]
                          underline underline-offset-17 decoration-4 decoration-slate-400/35">設計作品</div>
          <section className="bg-slate-900/20 h-[500px] w-full my-[20px] p-[20px] rounded-2xl">
            <div className="text-[28px] text-white font-bold">社團表演照片後製</div>
            <div className="text-[16px] text-slate-400 ">ฅ^•ﻌ•^ฅ 照片加字 & 繪圖設計</div>

            <>
              <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide my-[40px]">
                <div className="snap-center shrink-0 w-[300px] p-2">
                  <Image src="/club1.png" alt="club design1" width={300} height={300} className="w-full h-auto object-cover"/>
                </div>
                <div className="snap-center shrink-0 w-[300px] p-2">
                  <Image src="/club2.png" alt="club design2" width={300} height={300} className="w-full h-auto object-cover"/>
                </div>
                <div className="snap-center shrink-0 w-[300px] p-2">
                  <Image src="/club3.png" alt="club design3" width={300} height={300} className="w-full h-auto object-cover"/>
                </div>
                <div className="snap-center shrink-0 w-[300px] p-2">
                  <Image src="/club4.png" alt="club design4" width={300} height={300} className="w-full h-auto object-cover"/>
                </div>
                <div className="snap-center shrink-0 w-[300px] p-2">
                  <Image src="/club5.png" alt="club design5" width={300} height={300} className="w-full h-auto object-cover"/>
                </div>
                <div className="snap-center shrink-0 w-[300px] p-2">
                  <Image src="/club6.png" alt="club design6" width={300} height={300} className="w-full h-auto object-cover"/>
                </div>
                <div className="snap-center shrink-0 w-[300px] p-2">
                  <Image src="/club7.png" alt="club design7" width={300} height={300} className="w-full h-auto object-cover"/>
                </div>
                <div className="snap-center shrink-0 w-[300px] p-2">
                  <Image src="/club8.png" alt="club design8" width={300} height={300} className="w-full h-auto object-cover"/>
                </div>
              </div>
            </>



          </section>

          <section className="bg-slate-900/20 h-[1000px] w-full my-[20px] p-[20px] rounded-2xl">
            <div className="text-[28px] text-white font-bold">繪圖作品</div>
            <div className="text-[16px] text-slate-400 ">ฅ^•ﻌ•^ฅ就是一些我畫的東西</div>
            
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-6 m-[26px]">
              <div className="bg-slate-900 rounded-2xl h-full flex justify-center items-center 
                                row-span-2 bg-center bg-cover relative">
                <div className="bg-slate-900 rounded-2xl h-full overflow-hidden flex justify-center items-center aspect-auto">
                   <img src={projectData["1"]["imageUrl"]} alt="clothPainting"
                        className="h-full w-full object-contain"/>
                </div>

                <div className="text-slate-300 bg-black/15 w-full h-[30px] flex 
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0">
                  { projectData["1"]["name"] }
                </div>

              </div>



              <div className="bg-slate-900 rounded-2xl h-full flex justify-center items-center 
                                 overflow-hidden aspect-auto">
                <img src={projectData["2"]["imageUrl"]} alt="psPoster"
                     className="h-full w-full object-contain saturate-80"/>

                <div className="text-white bg-black/15 w-full h-[80px] flex 
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0">
                  { projectData["2"]["name"] }
                </div>
                
              </div>
              
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案2</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案3</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案4</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案5</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案6</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案7</div>
            </div>
          </section>
        </div>
      </div>

    </>
  );
}
