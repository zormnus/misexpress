"use client";

import Image from "next/image";
import Link from "next/link";
import { Select, SelectItem } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";
import rus from "../../assets/rus.svg";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import searchMobile from "../../assets/searchMobile.svg";
import shopping1 from "../../assets/shopping1.svg";
import shopping from "../../assets/shopping.svg";
import heart from "../../assets/heart.svg";
import burger from "../../assets/burger.svg";
import person from "../../assets/person.svg";
import { useState } from "react";

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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <div className="container mx-auto px-[29px] sm:px-0">
        <div className="hidden lg:flex justify-between py-[25px]">
          <div className="flex gap-2">
            <Image src={rus} alt="rus" />
            <Link href="tel:+90-552-597-78-88">+90 552 597 78 88 </Link>
          </div>
          <div className="flex gap-[75px]">
            <Link href="/catalog">Каталог</Link>
            <Link href="/about">О нас</Link>
            <Link href="/delivery">Доставка</Link>
            <Link href="/contacts">Контакты</Link>
          </div>
        </div>
        <div className="flex justify-between mb-[25px] gap-[46px] pt-[25px] lg:pt-0">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <div className="hidden lg:flex h-[56px]">
            <div className="flex items-center w-[600px] h-full bg-gray-search rounded-l-xl gap-[40px]">
              <Select
                label="Все категории"
                className="max-w-xs"
                classNames={{
                  trigger: "rounded-r-none shadow-none w-[170px]",
                  innerWrapper: "w-fit",
                  popoverContent: "w-[180px]",
                  mainWrapper: "w-[170px]",
                  base: "w-[170px]",
                }}
              >
                {categories.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </Select>
              <input
                className="w-full bg-gray-search focus:outline-none"
                type="text"
                placeholder="Поиск по каталогу"
              />
            </div>
            <button className="h-full bg-tiffani rounded-r-xl px-[28px]">
              <Image src={search} alt="search" />
            </button>
          </div>
          <div className="hidden lg:flex gap-[30px]">
            <Link href="/favorites" className="flex flex-col items-center">
              <Image src={heart} alt="heart" />
              <p>Избранное</p>
            </Link>
            <Link href="/basket" className="flex flex-col items-center">
              <Badge content="3" color="danger">
                <Image src={shopping1} alt="shopping" />
              </Badge>
              <p>Корзина</p>
            </Link>
          </div>
          <div className="flex lg:hidden items-center gap-[20px]">
            <Image className="w-[28px] md:w-[32px]" src={searchMobile} alt="searchMobile" />
            <Link href="/basket" className="">
              <Badge content="3" color="danger">
                <Image className="w-[24px] md:w-[32px]" src={shopping} alt="shopping" />
              </Badge>
            </Link>
            <Image className="w-[30px] md:w-[44px] cursor-pointer" onClick={openModal} src={burger} alt="burger" />
          </div>
        </div>
        <div className={`${isOpen ? 'grid' : 'hidden'}  sm:grid-cols-2 text-textAcc`}>
          <div className="grid grid-cols-2 grid-rows-5 gap-[20px] sm:gap-0">
            <div className="flex flex-col gap-[20px] row-span-4">
              <Link href="/catalog">Каталог</Link>
              <Link href="/about">О нас</Link>
              <Link href="/delivery">Доставка</Link>
              <Link href="/contacts">Контакты</Link>
              <Link href="tel:+90(552)597-78-88">+90 552 597 78 88 </Link>
            </div>
            <div className="flex flex-col gap-[20px] row-span-4">
              <Link href="/category">Мужская одежда</Link>
              <Link href="/category">Женская одежда</Link>
              <Link href="/category">Детская одежда</Link>
              <Link href="/category">Постельное белье</Link>
              <Link href="/category">Текстиль</Link>
            </div>
            <div className="sm:hidden flex items-center row-span-1 col-span-2 gap-[20px]">
              <Link href="/" className="block">
                <div className="flex items-center gap-[12px]">
                  <Image src={person} alt="person" />
                  <p>Войти</p>
                </div>
              </Link>
              <Link href="/favorite" className="block">
                <div className="flex items-center gap-[12px]">
                  <Image src={heart} alt="heart" />
                  <p>Избранное</p>
                </div>
              </Link>
              <Image src={rus} alt="rus" />
            </div>
          </div>
          <div className="hidden sm:grid grid-cols-2 grid-rows-5 border-l-1 border-border gap-[24px] pl-[38px]">
            <div className="flex flex-col gap-[24px] col-span-1 row-span-4">
              <Link href="/category">Категория 1</Link>
              <Link href="/category">Категория 1</Link>
              <Link href="/category">Категория 1</Link>
              <Link href="/category">Категория 1</Link>
            </div>
            <div className="flex flex-col gap-[24px] col-span-1  row-span-4">
              <Link href="/category">Категория 1</Link>
              <Link href="/category">Категория 1</Link>
              <Link href="/category">Категория 1</Link>
              <Link href="/category">Категория 1</Link>
            </div>
            <div className="flex items-center row-span-2 col-span-2 gap-[20px]">
              <Link href="/" className="block">
                <div className="flex items-center gap-[12px]">
                  <Image src={person} alt="person" />
                  <p>Войти</p>
                </div>
              </Link>
              <Link href="/favorite" className="block">
                <div className="flex items-center gap-[12px]">
                  <Image src={heart} alt="heart" />
                  <p>Избранное</p>
                </div>
              </Link>
              <Image src={rus} alt="rus" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-full bg-tiffani">
        <div className="w-full container mx-auto flex justify-between text-white py-[20px]">
          <Link href="/category">Мужская одежда</Link>
          <Link href="/category">Женская одежда</Link>
          <Link href="/category">Детская одежда</Link>
          <Link href="/category">Постельное белье</Link>
          <Link href="/category">Текстиль</Link>
        </div>
      </div>
    </header>
  );
}
