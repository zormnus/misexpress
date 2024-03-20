"use client";

import Image from "next/image";
import Link from "next/link";
import { Select, SelectItem } from "@nextui-org/react";
import rus from "../../assets/rus.svg";
import logo from "../../assets/logo.svg";
import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";

const categories = [
  {
    label: "Мужская одежда",
    value: "Мужская одежда",
    description: "",
  },
  {
    label: "Женская одежда",
    value: "Женская одежда",
    description: "",
  },
];

export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto mb-[47px] px-[28px] md:px-0">
        <div className="hidden md:flex justify-between items-center mb-[32px]">
          <Image src={logo} alt="logo" />
          <div className="flex gap-[57px]">
            <Link href="/about">О нас</Link>
            <Link href="/delivery">Доставка</Link>
            <Link href="/payment">Оплата</Link>
            <Link href="#">Политика конфиденциальности</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:flex w-full justify-between">
          <div className="flex flex-col md:hidden justify-between md:items-center gap-[18px] md:gap-0">
            <Image src={logo} alt="logo" />
            <div className="flex flex-col gap-[16px] md:gap-[57px]">
              <Link href="/about">О нас</Link>
              <Link href="/delivery">Доставка</Link>
              <Link href="/payment">Оплата</Link>
              <Link href="/contacts">Контакты</Link>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse md:flex-row md:justify-between items-center gap-[10px] md:gap-[32px]">
            <div className="w-full flex flex-col-reverse md:flex-col gap-[12px] md:gap-[32px]">
              <p className="text-[12px] sm:text-[16px] font-bold">
                Oba Mahallesi 225 Dk. Summer Park <br /> Sitesi C Block Kat: 3
                No: 13 ALANYA
              </p>
              <div className="flex flex-col sm:flex-row lg:hidden sm:items-center gap-[13px]">
                <p className="font-bold">Напишите нам:</p>
                <div className="flex gap-[13px]">
                  <Image src={telegram} alt="telegram" />
                  <Image src={whatsapp} alt="whatsapp" />
                  <Image src={instagram} alt="instagram" />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row justify-between gap-[15px]">
              <div className="flex flex-col">
                <Link href="tel:+90-552-597-78-88">+905525977888</Link>
                <Link href="tel:+90-552-688-36-66">+905526883666</Link>
              </div>
              <div className="flex flex-col">
                <Link
                  className="text-[14px] sm:text-[16px] text-tiffani font-bold"
                  href="mailto:mis.express@mail.ru"
                >
                  mis.express@mail.ru
                </Link>
                <p className="hidden md:block text-[10px]">Пишите в любое время дня и ночи</p>
              </div>
            </div>
            <div className="w-full hidden lg:flex items-center justify-end gap-[13px]">
              <p className="font-bold">Напишите нам:</p>
              <Image src={telegram} alt="telegram" />
              <Image src={whatsapp} alt="whatsapp" />
              <Image src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-full bg-tiffani mb-[24px]">
        <div className="w-full container mx-auto flex justify-between text-white py-[20px]">
          <Link href="#">Мужская одежда</Link>
          <Link href="#">Женская одежда</Link>
          <Link href="#">Детская одежда</Link>
          <Link href="#">Постельное белье</Link>
          <Link href="#">Текстиль</Link>
        </div>
      </div>
      <div className="w-full container mx-auto flex justify-between items-center mb-4 px-[28px] sm:px-0">
        <p className="text-[10px]">
          Использование и копирование материалов с сайта запрещено
        </p>
        <p className="hidden sm:block">© Mis Express</p>
      </div>
    </footer>
  );
}
