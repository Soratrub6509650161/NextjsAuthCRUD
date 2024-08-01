"use client";

import Image from "next/image";
import Footer from "./components/Footer";
import { useSession } from "next-auth/react";
import BackHome from "../../public/IMG/BackgroundHome.jpg"
import ButtonJoin from "./components/Home-header/ButtonJoin";
import Image2 from "../../public/IMG/HomePage2.jpg"
import Card from "./components/Home-card/Card";
import ShirtHome1 from "../../public/IMG/Shirt-Home1.jpg"
import ShirtHome2 from "../../public/IMG/Shirt-Home2.jpg"
import ShirtHome3 from "../../public/IMG/Shirt-Home3.jpg"




export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <div className="relative w-full h-96">
        <Image
          src={BackHome}
          className="w-full h-full object-cover"
          alt="BackGround Header"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5">
          <h1 className="text-white text-1xl font-bold">
            แฟชั่นแนวใหม่ใน 5 สไตล์สุดล้ำ ขับเคลื่อนโดยดีไซเนอร์ผู้มากฝีมือ สร้างสรรค์เพื่อคุณ
          </h1>
          <h1 className="text-white text-7xl font-bold">
            WIZ
          </h1>
          <ButtonJoin />
        </div>
      </div>
      <div className="relative">
        <Image
          src={Image2}
          className="w-full h-[40rem] object-cover"
          alt="BackGround Header"
        />
        <div className="absolute inset-0 px-[10rem] py-[2.5rem]">
          <h1 className="text-black text-6xl mb-[3rem]">
            สินค้าแนะนำ
          </h1>
          <div className="flex space-x-10">
            <Card img={ShirtHome1} title="Nike" discrip="NikeNikeNikeNike" />
            <Card img={ShirtHome2} title="Nike" discrip="NikeNikeNikeNike" />
            <Card img={ShirtHome3} title="Nike" discrip="NikeNikeNikeNike" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
