"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../app/globals.css";
import slide1 from "../assets/slide1.png";
import back1 from "../assets/back1.png";
import back2 from "../assets/back2.png";
import back3 from "../assets/back3.png";
import airplane from "../assets/airplane.png";
import packageImg from "../assets/package.png";
import lcWaikiki from "../assets/lcWaikiki.png";
import armani from "../assets/armani.png";
import mavi from "../assets/mavi.png";
import koton from "../assets/koton.png";
import prada from "../assets/prada.png";
import fangi from "../assets/fangi.png";
import chanel from "../assets/chanel.png";
import defacto from "../assets/defacto.png";
import dior from "../assets/dior.png";
import luiviton from "../assets/luiviton.png";
import rolex from "../assets/rolex.png";
import colins from "../assets/colins.png";
import cardImg from "../assets/cardImg.png";
import like from "../assets/like.png";
import like3 from "../assets/like3.svg";
import arrow from "../assets/arrow.svg";
import arrowBlack from "../assets/arrowBlack.svg";
import search2 from "../assets/search2.svg";
import open from "../assets/open.svg";
import close from "../assets/close.svg";
import { Pagination } from "swiper/modules";
import { Button, Select, SelectItem, cn } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import Link from "next/link";

const filters = [
  {
    label: "Популярные",
    value: "Популярные",
    description: "",
  },
  {
    label: "Топ рейтинга",
    value: "Топ рейтинга",
    description: "",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto mt-[30px] px-[28px] sm:px-0">
      <div className="flex flex-col lg:flex-row gap-[15px] lg:gap-[24px] mb-[15px] lg:mb-[24px]">
        <div className="max-h-[300px] lg:max-h-[230px] w-full h-[200px] sm:h-[240px] lg:h-auto flex-col p-[24px] sm:p-[36px] text-white relative">
          <Image
            className="absolute top-0 left-0 w-full h-full rounded-md z-0"
            src={back1}
            alt="back1"
          />
          <h3 className="relative z-10 text-[26px] sm:text-[42px]">Новые поступления</h3>
          <p className="relative z-10">
            Узнайте первыми о товарах, создающих будущее индустрии
          </p>
          <div className="flex absolute right-[20px] bottom-[16px] gap-[7px] items-center">
            <p>Подробнее</p>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[15px]">
          <div className="relative rounded-md text-white bg-pink h-[177px] sm:h-auto flex lg:hidden flex-col py-[24px] sm:py-[30px] px-[20px] sm:px-[24px]">
            <Image
              className="absolute bottom-0 right-0"
              src={airplane}
              alt="airplane"
            />
            <h5 className="font-bold text-[26px]">Доставка</h5>
            <p className="font-light">Узнайте о наших способах доставки</p>
          </div>
          <Swiper
            className="sm:min-w-[400px] w-full h-[177px] lg:max-w-[400px] min-h-[230px]"
            spaceBetween={0}
            slidesPerView={1}
            watchSlidesProgress
            modules={[Pagination]}
            pagination={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="w-full h-full relative flex flex-col items-center justify-center text-center text-white">
                <Image
                  className="absolute w-full h-full z-0"
                  src={slide1}
                  alt="slide1"
                />
                <h5 className="relative z-10 font-bold text-[26px]">
                  Производитель месяца
                </h5>
                <p className="relative z-10 font-light">
                  Узнайте, что сейчас в тренде!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full relative flex flex-col items-center justify-center text-center text-white">
                <Image
                  className="absolute w-full h-full z-0"
                  src={slide1}
                  alt="slide1"
                />
                <h5 className="relative z-10 font-bold text-[26px]">
                  Производитель месяца
                </h5>
                <p className="relative z-10 font-light">
                  Узнайте, что сейчас в тренде!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full relative flex flex-col items-center justify-center text-center text-white">
                <Image
                  className="absolute w-full h-full z-0"
                  src={slide1}
                  alt="slide1"
                />
                <h5 className="relative z-10 font-bold text-[26px]">
                  Производитель месяца
                </h5>
                <p className="relative z-10 font-light">
                  Узнайте, что сейчас в тренде!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full relative flex flex-col items-center justify-center text-center text-white">
                <Image
                  className="absolute w-full h-full z-0"
                  src={slide1}
                  alt="slide1"
                />
                <h5 className="relative z-10 font-bold text-[26px]">
                  Производитель месяца
                </h5>
                <p className="relative z-10 font-light">
                  Узнайте, что сейчас в тренде!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 sm:h-[230px] gap-[15px] lg:gap-[24px]">
        <div className="relative rounded-md text-white h-[177px] sm:h-auto flex flex-col items-center justify-center">
          <Image
            className="absolute w-full h-full z-0"
            src={back2}
            alt="back2"
          />
          <h5 className="relative z-10 font-bold text-[26px]">Акции</h5>
          <p className="relative z-10 font-light">Скидки до 35%</p>
        </div>
        <div className="hidden lg:flex relative rounded-md text-white bg-pink flex-col py-[30px] px-[24px]">
          <Image
            className="absolute bottom-0 right-0"
            src={airplane}
            alt="airplane"
          />
          <h5 className="font-bold text-[26px]">Доставка</h5>
          <p className="font-light">Узнайте о наших способах доставки</p>
        </div>
        <div className="relative rounded-md text-white h-[177px] sm:h-auto flex flex-col items-center justify-center p-4">
          <Image
            className="absolute object-cover w-full h-full rounded-md z-0"
            src={back3}
            alt="back3"
          />
          <h5 className="relative z-10 font-bold text-[26px] text-center">
            Сезонная одежда
          </h5>
        </div>
        <div className="relative rounded-md text-white h-[177px] sm:h-auto bg-tiffani flex flex-col items-start sm:items-center py-[24px] sm:py-[30px] px-[20px] sm:px-[24px]">
          <Image
            className="w-[150px] sm:w-auto absolute bottom-0 right-0 sm:left-0"
            src={packageImg}
            alt="packageImg"
          />
          <p className="text-[26px] font-bold sm:text-[20px]">Подобрать товар</p>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center relative">
        <div className="flex flex-col gap-[40px] mt-[100px]">
          <div className="flex gap-[30px] lg:gap-[50px] ml-[67px] cursor-pointer">
            <Image className="w-[100px] object-contain" src={lcWaikiki} alt="lcWaikiki" />
            <Image className="w-[100px] object-contain" src={armani} alt="armani" />
            <Image className="w-[100px] object-contain" src={mavi} alt="mavi" />
            <Image className="w-[100px] object-contain" src={koton} alt="koton" />
            <Image className="w-[100px] object-contain" src={prada} alt="prada" />
            <Image className="w-[100px] object-contain" src={fangi} alt="fangi" />
          </div>
          <div className="flex gap-[30px] lg:gap-[50px] cursor-pointer">
            <Image className="w-[100px] object-contain" src={chanel} alt="chanel" />
            <Image className="w-[100px] object-contain" src={defacto} alt="defacto" />
            <Image className="w-[100px] object-contain" src={dior} alt="dior" />
            <Image className="w-[100px] object-contain" src={luiviton} alt="luiviton" />
            <Image className="w-[100px] object-contain" src={rolex} alt="rolex" />
            <Image className="w-[100px] object-contain" src={colins} alt="colins" />
          </div>
        </div>
        <div className="absolute right-0 bottom-[-50px] flex gap-[7px] items-center mt-[30px]">
          <Link href="/manufacturers">Смотреть все</Link>
          <Image src={arrowBlack} alt="arrowBlack" />
        </div>
      </div>
      <div className="flex flex-col mt-[90px]">
        <div className="flex justify-between mb-[26px]">
          <h5 className="text-[24px]">Хиты продаж</h5>
          <div className="flex gap-[7px] items-center">
            <p>Смотреть все</p>
            <Image src={arrowBlack} alt="arrowBlack" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[27px]">
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
              <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-tiffani px-[10px]">
                <p>Sale</p>
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
          <div className="hidden lg:flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
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
              <Button className="bg-pink text-white rounded-md w-full h-[44px] py-[10px]">
                Купить
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[40px] md:mb-[80px]">
        <h5 className="text-[24px] mt-[80px] mb-[25px]">Подберите товар</h5>
        <div className="rounded-sm md:border-1 border-border md:shadow-md py-[25px] md:px-[24px] lg:px-[65px] md:mb-[37px]">
          <Select
            label="Фильтр"
            className="hidden md:block max-w-xs"
            classNames={{
              trigger:
                "rounded-sm bg-select shadow-none border-1 border-border w-[170px]",
              innerWrapper: "w-fit",
              popoverContent: "w-[180px]",
              mainWrapper: "w-[170px]",
              base: "w-[170px]",
            }}
          >
            {filters.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
          <Divider className="hidden md:block my-4" />
          <div className="flex flex-col md:flex-row gap-[18px]">
            <div className="w-full h-fit flex flex-col rounded-sm border-1 border-border py-[24px] px-[18px]">
              <Input
                type="text"
                placeholder="Поиск"
                classNames={{
                  base: "mb-[16px]",
                  inputWrapper:
                    "bg-select rounded-sm border-1 border-border py-[12px] px-[20px]",
                  input: "ps-2.5",
                }}
                startContent={
                  <Image
                    className="w-[20px] h-[20px]"
                    src={search2}
                    alt="search2"
                  />
                }
              />
              <Accordion isCompact>
                <AccordionItem
                  key="1"
                  aria-label="Мужская одежда"
                  title="Мужская одежда"
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <Image src={open} alt="open" />
                    ) : (
                      <Image src={close} alt="close" />
                    )
                  }
                  classNames={{
                    content: "text-textAcc text-[12px] mb-[8px]",
                  }}
                >
                  <div className="flex flex-col gap-[8px]">
                    <p>Смотреть все</p>
                    <p>Подкатегория 1</p>
                    <p>Подкатегория 2</p>
                    <p>Подкатегория 3</p>
                    <p>Подкатегория 4</p>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Женская одежда"
                  title="Женская одежда"
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <Image src={open} alt="open" />
                    ) : (
                      <Image src={close} alt="close" />
                    )
                  }
                  classNames={{
                    content: "text-textAcc text-[12px] mb-[8px]",
                  }}
                >
                  <div className="flex flex-col gap-[8px]">
                    <p>Смотреть все</p>
                    <p>Подкатегория 1</p>
                    <p>Подкатегория 2</p>
                    <p>Подкатегория 3</p>
                    <p>Подкатегория 4</p>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Детская одежда"
                  title="Детская одежда"
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <Image src={open} alt="open" />
                    ) : (
                      <Image src={close} alt="close" />
                    )
                  }
                  classNames={{
                    content: "text-textAcc text-[12px] mb-[8px]",
                  }}
                >
                  <div className="flex flex-col gap-[8px]">
                    <p>Смотреть все</p>
                    <p>Подкатегория 1</p>
                    <p>Подкатегория 2</p>
                    <p>Подкатегория 3</p>
                    <p>Подкатегория 4</p>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Постельное бельё"
                  title="Постельное бельё"
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <Image src={open} alt="open" />
                    ) : (
                      <Image src={close} alt="close" />
                    )
                  }
                  classNames={{
                    content: "text-textAcc text-[12px] mb-[8px]",
                  }}
                >
                  <div className="flex flex-col gap-[8px]">
                    <p>Смотреть все</p>
                    <p>Подкатегория 1</p>
                    <p>Подкатегория 2</p>
                    <p>Подкатегория 3</p>
                    <p>Подкатегория 4</p>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="Текстиль"
                  title="Текстиль"
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <Image src={open} alt="open" />
                    ) : (
                      <Image src={close} alt="close" />
                    )
                  }
                  classNames={{
                    content: "text-textAcc text-[12px] mb-[8px]",
                  }}
                >
                  <div className="flex flex-col gap-[8px]">
                    <p>Смотреть все</p>
                    <p>Подкатегория 1</p>
                    <p>Подкатегория 2</p>
                    <p>Подкатегория 3</p>
                    <p>Подкатегория 4</p>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="w-full flex flex-col gap-[16px]">
              <div className="w-full flex flex-col rounded-sm border-1 border-border py-[24px] px-[18px]">
                <h5 className="font-bold mb-[20px]">Цвет</h5>
                <RadioGroup>
                  <div className="w-full flex justify-between">
                    <Radio
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Чёрный"
                    >
                      Чёрный
                    </Radio>
                    <p className="text-[12px] text-textAcc">103</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Radio
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Синий"
                    >
                      Синий
                    </Radio>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Radio
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Коричневый"
                    >
                      Коричневый
                    </Radio>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Radio
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Белый"
                    >
                      Белый
                    </Radio>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Radio
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Жёлтый"
                    >
                      Жёлтый
                    </Radio>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Radio
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Зелёный"
                    >
                      Зелёный
                    </Radio>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                </RadioGroup>
              </div>
              <div className="w-full flex flex-col rounded-sm border-1 border-border py-[24px] px-[18px]">
                <h5 className="font-bold mb-[20px]">Размер</h5>
                <RadioGroup>
                  <div className="w-full flex justify-between">
                    <Radio
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Extra Large"
                    >
                      Extra Large
                    </Radio>
                    <p className="text-[12px] text-textAcc">103</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Radio
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Large"
                    >
                      Large
                    </Radio>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Radio
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Medium"
                    >
                      Medium
                    </Radio>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Radio
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Small"
                    >
                      Small
                    </Radio>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Radio
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Extra Small"
                    >
                      Extra Small
                    </Radio>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="w-full flex flex-col gap-[16px]">
              <div className="w-full flex flex-col rounded-sm border-1 border-border py-[24px] px-[18px]">
                <h5 className="font-bold mb-[20px]">Фильтр стоимости</h5>
                <Slider
                  step={15}
                  minValue={0}
                  maxValue={500}
                  defaultValue={[15, 250]}
                  formatOptions={{ style: "currency", currency: "RUB" }}
                  className="w-full max-w-md"
                  classNames={{
                    base: "max-w-md gap-3",
                    filler: "bg-tiffani",
                  }}
                  renderThumb={({ index, ...props }) => (
                    <div
                      {...props}
                      className="group p-1 top-1/2 bg-tiffani border-tiffani border-small shadow-lg rounded-full"
                    >
                      <span
                        className={cn(
                          "transition-transform bg-tiffani shadow-sm rounded-full w-3 h-3 block group-data-[dragging=true]:scale-80",
                          index === 0
                            ? "opacity-0" // first thumb
                            : "opacity-0" // second thumb
                        )}
                      />
                    </div>
                  )}
                />
                <div className="w-full flex mt-[16px] gap-[10px]">
                  <input
                    className="w-full rounded-sm border-1 border-border bg-select p-[16px]"
                    type="number"
                    defaultValue="15"
                  />
                  <input
                    className="w-full rounded-sm border-1 border-border bg-select p-[16px]"
                    type="number"
                    defaultValue="250"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col rounded-sm border-1 border-border py-[24px] px-[18px]">
                <h5 className="font-bold mb-[20px]">Бренды</h5>
                <CheckboxGroup>
                  <div className="w-full flex justify-between">
                    <Checkbox
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Бренд 1"
                    >
                      Бренд 1
                    </Checkbox>
                    <p className="text-[12px] text-textAcc">103</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Checkbox
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Бренд 2"
                    >
                      Бренд 2
                    </Checkbox>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Checkbox
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Бренд 3"
                    >
                      Бренд 3
                    </Checkbox>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Checkbox
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Бренд 4"
                    >
                      Бренд 4
                    </Checkbox>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Checkbox
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Бренд 5"
                    >
                      Бренд 5
                    </Checkbox>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Checkbox
                      classNames={{ label: "text-[12px] text-textAcc" }}
                      value="Бренд 6"
                    >
                      Бренд 6
                    </Checkbox>
                    <p className="text-[12px] text-textAcc">23</p>
                  </div>
                </CheckboxGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="w-full md:w-[270px] h-[44px] bg-tiffani text-white" radius="sm">
            Показать
          </Button>
        </div>
      </div>
    </main>
  );
}
