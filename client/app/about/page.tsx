"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import airplane from "../../assets/airplane.png";
import packageImg from "../../assets/package.png";
import vectorMap from "../../assets/vectorMap.svg";
import lcWaikiki from "../../assets/lcWaikiki.png";
import armani from "../../assets/armani.png";
import mavi from "../../assets/mavi.png";
import koton from "../../assets/koton.png";
import prada from "../../assets/prada.png";
import fangi from "../../assets/fangi.png";
import chanel from "../../assets/chanel.png";
import defacto from "../../assets/defacto.png";
import dior from "../../assets/dior.png";
import luiviton from "../../assets/luiviton.png";
import rolex from "../../assets/rolex.png";
import colins from "../../assets/colins.png";
import mapImg from "../../assets/mapImg.png";
import arrowBlack from "../../assets/arrowBlack.svg";
import Link from "next/link";

export default function About() {
  return (
    <main className="container mx-auto mt-[30px] mb-[100px] px-[28px] md:px-0">
      <div className="w-full mt-[48px]">
        <div className="w-full flex flex-col items-center mb-[124px]">
          <h5 className="mb-[10px]">О нас</h5>
          <h1 className="text-[40px] text-tiffani font-semibold mb-[20px]">
            Mis Express
          </h1>
          <p className="text-gray/500 mb-[40px]">
            Узнайте больше о нашей компании
          </p>
        </div>
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-[80px]">
          <div className="w-full h-[460px] bg-black"></div>
          <div className="flex flex-col">
            <h5 className="mb-[10px]">
              Мы помогаем компаниям продавать товары из Турции
            </h5>
            <h2 className="text-[40px] text-tiffani font-semibold mb-[20px]">
              За все время нашей работы
            </h2>
            <div className="flex gap-[60px]">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col">
                  <p className="font-semibold text-[40px]">1000+</p>
                  <p className="text-tiffani text-[15px]">
                    Заказов реализовано
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-[40px]">15k</p>
                  <p className="text-tiffani text-[15px]">Товаров в наличии</p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col">
                  <p className="font-semibold text-[40px]">20+</p>
                  <p className="text-tiffani text-[15px]">
                    Стран уже работают с нами
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-[40px]">200+</p>
                  <p className="text-tiffani text-[15px]">Оценок в 5 звёзд</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center relative mb-[100px]">
          <div className="flex flex-col gap-[40px] mt-[100px]">
            <div className="flex gap-[30px] lg:gap-[50px] ml-[67px] cursor-pointer">
              <Image
                className="w-[100px] object-contain"
                src={lcWaikiki}
                alt="lcWaikiki"
              />
              <Image
                className="w-[100px] object-contain"
                src={armani}
                alt="armani"
              />
              <Image
                className="w-[100px] object-contain"
                src={mavi}
                alt="mavi"
              />
              <Image
                className="w-[100px] object-contain"
                src={koton}
                alt="koton"
              />
              <Image
                className="w-[100px] object-contain"
                src={prada}
                alt="prada"
              />
              <Image
                className="w-[100px] object-contain"
                src={fangi}
                alt="fangi"
              />
            </div>
            <div className="flex gap-[30px] lg:gap-[50px] cursor-pointer">
              <Image
                className="w-[100px] object-contain"
                src={chanel}
                alt="chanel"
              />
              <Image
                className="w-[100px] object-contain"
                src={defacto}
                alt="defacto"
              />
              <Image
                className="w-[100px] object-contain"
                src={dior}
                alt="dior"
              />
              <Image
                className="w-[100px] object-contain"
                src={luiviton}
                alt="luiviton"
              />
              <Image
                className="w-[100px] object-contain"
                src={rolex}
                alt="rolex"
              />
              <Image
                className="w-[100px] object-contain"
                src={colins}
                alt="colins"
              />
            </div>
          </div>
          <div className="absolute right-0 bottom-[-50px] flex gap-[7px] items-center mt-[30px]">
            <Link href="/manufacturers">Смотреть все</Link>
            <Image src={arrowBlack} alt="arrowBlack" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[44px]">
          <h2 className="text-tiffani text-[40px] font-semibold">
            Популярные направления
          </h2>
          <Image src={mapImg} alt="map" />
          <div className="w-full flex justify-evenly">
            <div className="flex flex-col items-center gap-[12px]">
              <p className="text-tiffani font-semibold">Поддержка</p>
              <p className="text-gray/500 text-[14px] text-center">Мы всегда готовы вам помочь!</p>
              <Link href="mailto:mis.express@mail.ru" className="font-semibold text-[14px]">mis.express@mail.ru</Link>
            </div>
            <div className="flex flex-col items-center gap-[12px]">
              <p className="text-tiffani font-semibold">Номер телефона</p>
              <p className="text-gray/500 text-[14px] text-center">Понедельник-Пятница с 9 до 18</p>
              <Link href="tel:+905525977888" className="font-semibold text-[14px]">+905525977888</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
