"use client";

import Image from "next/image";
import magnumCargo from "../../assets/magnumCargo.png";
import skKargo from "../../assets/skKargo.png";
import kargo63 from "../../assets/kargo63.png";
import kitkaTrans from "../../assets/kitkaTrans.png";
import coupex from "../../assets/coupex.png";

export default function Delivery() {
  return (
    <main className="container mx-auto mt-[30px] mb-[100px] px-[28px] md:px-0">
      <div className="w-full mt-[48px]">
        <div className="w-full flex flex-col items-center mb-[100px]">
          <h5 className="mb-[10px]">Доставка</h5>
          <h1 className="text-[40px] text-tiffani font-semibold mb-[20px]">
            Карго
          </h1>
          <p className="text-gray/500 text-center mb-[40px]">
            Узнайте о вариантах доставки нашей компании
          </p>
        </div>
        <div className="flex flex-col items-center gap-[100px]">
          <div className="flex flex-col md:flex-row justify-between gap-[100px]">
            <Image className="w-full" src={skKargo} alt="kargo" />
            <Image className="w-full" src={kitkaTrans} alt="kargo" />
            <Image className="w-full" src={magnumCargo} alt="kargo" />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-[100px]">
            <Image className="w-full" src={coupex} alt="kargo" />
            <Image className="w-full" src={kargo63} alt="kargo" />
          </div>
        </div>
      </div>
    </main>
  );
}
