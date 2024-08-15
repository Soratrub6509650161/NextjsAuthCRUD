import React from 'react'
import Image from "next/image";
import Image2 from "../../../../public/IMG/HomePage2.jpg"
import Card from "../../components/Home-card/Card";
import ShirtHome1 from "../../../../public/IMG/Shirt-Home1.jpg"
import ShirtHome2 from "../../../../public/IMG/Shirt-Home2.jpg"
import ShirtHome3 from "../../../../public/IMG/Shirt-Home3.jpg"


function Component2() {
  return (
    <div className="relative">
        <Image
          src={Image2}
          className="w-full h-[40rem] object-cover"
          alt="BackGround Header"
        />
        <div className="absolute inset-0 px-[10rem] py-[2.5rem]">
          <h1 className="text-black text-5xl mb-[3rem]">
            สินค้าแนะนำ
          </h1>
          <div className="flex space-x-10">
            <Card img={ShirtHome1} title="Rebel Gesture Tee" discrip="Express your bold attitude with this iconic gesture tee. Perfect for those who dare to stand out." />
            <Card img={ShirtHome2} title="Floral Bohemian Blouse" discrip="Embrace your free spirit with this delicate floral blouse, blending comfort with effortless style." />
            <Card img={ShirtHome3} title="Timex Classic Watch" discrip="A timeless piece that combines elegance and functionality, making it a perfect accessory for any occasion." />
          </div>
        </div>
      </div>
  )
}

export default Component2