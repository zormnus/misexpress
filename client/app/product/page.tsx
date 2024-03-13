"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import rec from "../../assets/recproduct.png";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plusMini.svg";
import close from "../../assets/close.svg";
import search2 from "../../assets/search2.svg";
import cardImg from "../../assets/cardImg.png";
import like from "../../assets/like.png";
import arrow from "../../assets/arrow.svg";
import arrowBlack from "../../assets/arrowBlack.svg";
import { Pagination } from "swiper/modules";
import { Button, Select, SelectItem, cn } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function Product() {
  return (
    <main className="container mx-auto mt-[30px] mb-[100px]">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Главная страница</BreadcrumbItem>
        <BreadcrumbItem href="/category">Категория</BreadcrumbItem>
        <BreadcrumbItem href="/catalog">Каталог</BreadcrumbItem>
        <BreadcrumbItem href={`/product`}>
          Лонгслив HEATTECH С ХЛОПКОМ
        </BreadcrumbItem>
      </Breadcrumbs>
      <div className="flex flex-col mt-[48px] mb-[54px]">
        <h1 className="text-[32px] font-medium mb-[24px]">
          Лонгслив HEATTECH С ХЛОПКОМ
        </h1>
        <div className="flex gap-[21px] mb-[54px]">
          <div className="w-[560px] flex flex-col gap-[14px]">
            <Image className="w-full h-full object-cover" src={rec} alt="rec" />
            <div className="flex gap-[12px]">
              <div className="bg-black w-full h-[71px]"></div>
              <div className="bg-black w-full h-[71px]"></div>
              <div className="bg-black w-full h-[71px]"></div>
              <div className="bg-black w-full h-[71px]"></div>
              <div className="bg-black w-full h-[71px]"></div>
            </div>
          </div>
          <div className="w-full grid grid-cols-5 grid-rows-5 p-[61px] border-1 border-border shadow-xl gap-[42px]">
            <div className="flex flex-col col-span-3 row-span-4 gap-[11px]">
              <div className="flex mb-[33px]">
                <p className="text-textAcc">Артикул:&nbsp;</p>
                <p>123456789</p>
              </div>
              <div className="flex w-full">
                <p className="text-textAcc">Состав:&nbsp;</p>
                <p className="truncate">Хлопок - 53%, Акрил - 4</p>
              </div>
              <div className="flex w-full">
                <p className="text-textAcc">Производитель:&nbsp;</p>
                <p className="truncate">Uniqlo</p>
              </div>
              <div className="flex w-full">
                <p className="text-textAcc">Сезон:&nbsp;</p>
                <p className="truncate">Мульти</p>
              </div>
              <div className="flex w-full">
                <p className="text-textAcc">Узор:&nbsp;</p>
                <p className="truncate">Однотонный</p>
              </div>
              <div className="flex w-full">
                <p className="text-textAcc">Страна производства:&nbsp;</p>
                <p className="truncate">Турция</p>
              </div>
              <div className="flex w-full">
                <p className="text-textAcc">Цвет:&nbsp;</p>
                <p className="truncate">Белый</p>
              </div>
            </div>
            <div className="col-span-2 row-span-4">
              <p className="text-[32px] font-medium">10.00 $</p>
              <p className="text-textAcc mb-[22px]">В наличии</p>
              <div className="flex flex-wrap gap-[10px] mb-[26px]">
                <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                  <p className="font-medium">XXL</p>
                </div>
                <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                  <p className="font-medium">XL</p>
                </div>
                <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                  <p className="font-medium">L</p>
                </div>
                <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                  <p className="font-medium">M</p>
                </div>
                <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                  <p className="font-medium">S</p>
                </div>
              </div>
              <div className="flex gap-[10px] mb-[26px]">
                <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
                <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
                <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
                <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
              </div>
            </div>
            <div className="flex justify-between row-span-2 col-span-5">
              <div className="flex">
                <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer border-1 border-tiffani">
                  <Image src={minus} alt="minus" />
                </div>
                <div className="w-[40px] h-[30px] flex items-center justify-center border-t-1 border-b-1 border-tiffani">
                  <p>2</p>
                </div>
                <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer border-1 border-tiffani">
                  <Image src={plus} alt="plus" />
                </div>
              </div>
              <div className="flex gap-[16px]">
                <p className="text-[25px] font-semibold">20.00&nbsp;$</p>
                <Button className="bg-tiffani text-white rounded-md w-[200px] h-[44px] py-[10px]">
                  Купить
                </Button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[24px] font-medium">Описание товара</p>
        <p>
          Джемпер из коллекции теплосберегающего белья HEATTECH. Инновационный
          материал помогает сохранить тепло вашего тела, быстро сохнет и
          обеспечивает ощущение комфорта в течение дня, несмотря на перепады
          температур. Лонгслив HEATTECH С ХЛОПКОМ от UNIQLO по выгодной цене с
          доставкой по всему миру купить онлайн от проверенного поставщика.{" "}
        </p>
      </div>
      <p className="text-[32px] font-medium mb-[31px]">Похожие товары</p>
      <div className="flex gap-[27px] mb-[27px]">
        <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
          <div className="relative">
            <Image className="w-full mb-[25px]" src={cardImg} alt="cardImg" />
            <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
              <p>Top</p>
            </div>
            <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
              <Image className="w-[20px] h-[20px]" src={like} alt="like" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Название товара</p>
            <p className="text-tiffani mb-[24px]">Категория</p>
            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XXL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">L</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">M</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">S</p>
              </div>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
            </div>
            <Button className="bg-tiffani text-white rounded-md w-full h-[44px] py-[10px]">
              Купить
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
          <div className="relative">
            <Image className="w-full mb-[25px]" src={cardImg} alt="cardImg" />
            <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
              <p>Top</p>
            </div>
            <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
              <Image className="w-[20px] h-[20px]" src={like} alt="like" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Название товара</p>
            <p className="text-tiffani mb-[24px]">Категория</p>
            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XXL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">L</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">M</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">S</p>
              </div>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
            </div>
            <Button className="bg-tiffani text-white rounded-md w-full h-[44px] py-[10px]">
              Купить
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
          <div className="relative">
            <Image className="w-full mb-[25px]" src={cardImg} alt="cardImg" />
            <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
              <p>Top</p>
            </div>
            <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
              <Image className="w-[20px] h-[20px]" src={like} alt="like" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Название товара</p>
            <p className="text-tiffani mb-[24px]">Категория</p>
            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XXL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">L</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">M</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">S</p>
              </div>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
            </div>
            <Button className="bg-tiffani text-white rounded-md w-full h-[44px] py-[10px]">
              Купить
            </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-[27px] mb-[27px]">
        <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
          <div className="relative">
            <Image className="w-full mb-[25px]" src={cardImg} alt="cardImg" />
            <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
              <p>Top</p>
            </div>
            <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
              <Image className="w-[20px] h-[20px]" src={like} alt="like" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Название товара</p>
            <p className="text-tiffani mb-[24px]">Категория</p>
            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XXL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">L</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">M</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">S</p>
              </div>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
            </div>
            <Button className="bg-tiffani text-white rounded-md w-full h-[44px] py-[10px]">
              Купить
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
          <div className="relative">
            <Image className="w-full mb-[25px]" src={cardImg} alt="cardImg" />
            <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
              <p>Top</p>
            </div>
            <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
              <Image className="w-[20px] h-[20px]" src={like} alt="like" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Название товара</p>
            <p className="text-tiffani mb-[24px]">Категория</p>
            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XXL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">L</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">M</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">S</p>
              </div>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
            </div>
            <Button className="bg-tiffani text-white rounded-md w-full h-[44px] py-[10px]">
              Купить
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
          <div className="relative">
            <Image className="w-full mb-[25px]" src={cardImg} alt="cardImg" />
            <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
              <p>Top</p>
            </div>
            <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
              <Image className="w-[20px] h-[20px]" src={like} alt="like" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Название товара</p>
            <p className="text-tiffani mb-[24px]">Категория</p>
            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XXL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">L</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">M</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">S</p>
              </div>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
            </div>
            <Button className="bg-tiffani text-white rounded-md w-full h-[44px] py-[10px]">
              Купить
            </Button>
          </div>
        </div>
      </div>
      <p className="text-[32px] font-medium mb-[31px]">Популярные товары</p>
      <div className="flex gap-[27px] mb-[27px]">
        <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
          <div className="relative">
            <Image className="w-full mb-[25px]" src={cardImg} alt="cardImg" />
            <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
              <p>Top</p>
            </div>
            <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
              <Image className="w-[20px] h-[20px]" src={like} alt="like" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Название товара</p>
            <p className="text-tiffani mb-[24px]">Категория</p>
            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XXL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">L</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">M</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">S</p>
              </div>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
            </div>
            <Button className="bg-tiffani text-white rounded-md w-full h-[44px] py-[10px]">
              Купить
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
          <div className="relative">
            <Image className="w-full mb-[25px]" src={cardImg} alt="cardImg" />
            <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
              <p>Top</p>
            </div>
            <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
              <Image className="w-[20px] h-[20px]" src={like} alt="like" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Название товара</p>
            <p className="text-tiffani mb-[24px]">Категория</p>
            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XXL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">L</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">M</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">S</p>
              </div>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
            </div>
            <Button className="bg-tiffani text-white rounded-md w-full h-[44px] py-[10px]">
              Купить
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
          <div className="relative">
            <Image className="w-full mb-[25px]" src={cardImg} alt="cardImg" />
            <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
              <p>Top</p>
            </div>
            <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
              <Image className="w-[20px] h-[20px]" src={like} alt="like" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Название товара</p>
            <p className="text-tiffani mb-[24px]">Категория</p>
            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XXL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">L</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">M</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">S</p>
              </div>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
            </div>
            <Button className="bg-tiffani text-white rounded-md w-full h-[44px] py-[10px]">
              Купить
            </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-[27px] mb-[27px]">
        <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
          <div className="relative">
            <Image className="w-full mb-[25px]" src={cardImg} alt="cardImg" />
            <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
              <p>Top</p>
            </div>
            <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
              <Image className="w-[20px] h-[20px]" src={like} alt="like" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Название товара</p>
            <p className="text-tiffani mb-[24px]">Категория</p>
            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XXL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">L</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">M</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">S</p>
              </div>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
            </div>
            <Button className="bg-tiffani text-white rounded-md w-full h-[44px] py-[10px]">
              Купить
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
          <div className="relative">
            <Image className="w-full mb-[25px]" src={cardImg} alt="cardImg" />
            <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
              <p>Top</p>
            </div>
            <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
              <Image className="w-[20px] h-[20px]" src={like} alt="like" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Название товара</p>
            <p className="text-tiffani mb-[24px]">Категория</p>
            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XXL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">L</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">M</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">S</p>
              </div>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
            </div>
            <Button className="bg-tiffani text-white rounded-md w-full h-[44px] py-[10px]">
              Купить
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
          <div className="relative">
            <Image className="w-full mb-[25px]" src={cardImg} alt="cardImg" />
            <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
              <p>Top</p>
            </div>
            <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
              <Image className="w-[20px] h-[20px]" src={like} alt="like" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Название товара</p>
            <p className="text-tiffani mb-[24px]">Категория</p>
            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XXL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">XL</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">L</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">M</p>
              </div>
              <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                <p className="font-medium">S</p>
              </div>
            </div>
            <div className="flex gap-[10px] mb-[26px]">
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-blue border-2 border-white"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-white border-2 border-gray-color"></div>
              <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-brown border-2 border-white"></div>
            </div>
            <Button className="bg-tiffani text-white rounded-md w-full h-[44px] py-[10px]">
              Купить
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
