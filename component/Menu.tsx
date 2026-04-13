"use client"
import Image from "next/image"
import Link from "next/link";
import { TbActivity } from "react-icons/tb";

export default function Menu() {
  
  return (
    <>
      <div className="bg-slate-900 w-full sm:w-[350px] h-[calc(100vh-40px)] rounded-2xl relative overflow-hidden m-[20px]">
        <div className="absolute right-1/15 -bottom-2 rotate-12">
          <Image src="/illustration1.png" alt="illustration1" width={120} height={120} className="opacity-50"/>
        </div>

        <div className="flex">
          <Link href="/">  
              <div className="text-white py-[10px] px-[20px] animate-pulse"> HOME </div>
          </Link>
        </div>

        <div className="flex justify-center items-center w-full p-[7px]">
          <div className="bg-gray-200 w-[100px] h-[100px] rounded-full overflow-hidden
                            flex justify-center items-center">
            <Image className="saturate-50 brightness-80" src="/MyPhoto1.jpg" alt="my photo"
                   width={100} height={100} />
          </div>
        </div>

        <div className="text-center text-white font-bold text-[20px] p-[3px] underline underline-offset-7
                        decoration-1 decoration-slate-400/35">盧家愛</div>
        <div className="text-center text-slate-200 text-[13px] font-light">政大創新國際學院學士班大二生</div>


        <Link href="/about">
          <div className="bg-slate-950 p-[30px] mx-[24px] my-[30px] rounded-md text-white
                            transition delay-150 duration-300 ease-in-out hover:scale-103 hover:bg-slate-800">關於我</div>
        </Link>

        {/* <Link href="/hobby">
          <div className="bg-slate-950 p-[30px] mx-[24px] my-[30px] rounded-md text-white
                            transition delay-100 duration-300 ease-in-out hover:scale-103 hover:bg-slate-800">我的興趣</div>
        </Link> */}

        <Link href="/design-works">
          <div className="bg-slate-950 p-[30px] mx-[24px] my-[30px] rounded-md text-white
                            transition delay-100 duration-300 ease-in-out hover:scale-103 hover:bg-slate-800">設計作品</div>
        </Link>

        <Link href="/club-activities">
          <div className="bg-slate-950 p-[30px] mx-[24px] my-[30px] rounded-md text-white
                            transition delay-100 duration-300 ease-in-out hover:scale-103 hover:bg-slate-800">社團活動</div>
        </Link>


        </div>
    </>
  );
}
