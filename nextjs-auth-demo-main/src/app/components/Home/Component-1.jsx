import React from 'react'
import BackHome from "../../../../public/IMG/BackgroundHome.jpg"
import ButtonJoin from "../../components/Home-header/ButtonJoin";
import Image from "next/image";

function Component1() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={BackHome}
        className="w-full h-[35rem] object-cover"
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
  )
}

export default Component1