"use client";

import Image from "next/image";
import { useState } from "react";
import Rating from "../../components/Rating";

export default function Home() {
  const [rating, setRating] = useState(0);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-[4rem] bg-[#F5F5F4] flex items-center px-4">
        <Image src="/images/logo.webp" alt="An image showing Max" width={30} height={30} />
      </div>
      <div className="p-6 w-full">
        <div className="flex gap-4">
          <Rating rating={rating} />
          <div>
            <h1 className="text-xl font-bold text-black/80">How has Taro helped you in your career?</h1>
            <div className="flex w-full gap-2">
              <Image src="/images/logo.webp" alt="An image showing Max" className="rounded-full w-[30px] h-[30px]" width={30} height={30} />
              <div>
                <h2 className="font-bold">Mid-Level Software Engineer at Taro Community</h2>
                <p className="text-black/80 text-sm">a day ago</p>
              </div>
            </div>
            <div className="flex m-1 gap-2">
              <div className="border-[1px] border-[#9B31A0] rounded-3xl px-2 text-[#9B31A0] text-sm p-1 ">Mid-level Engineer</div>
              <div className="border-[1px] border-[#9B31A0] rounded-3xl px-2 text-[#9B31A0] text-sm p-1 ">Taro</div>
            </div>
            <p className="text-black/80 m-2 my-4">For people not in US looks harder to engage with this community. So I wonder how taro has helped you in your journey?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
