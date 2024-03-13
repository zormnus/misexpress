"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import arrowUp from "../../assets/arrowUp.svg";
import arrowDown from "../../assets/arrowDown.svg";
import { Breadcrumbs, BreadcrumbItem, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Basket() {
  const [items, setItems] = useState([
    {
      title: "Лонгслив HEATTECH С ХЛОПКОМ",
      cost: 10.0,
      count: 0,
      result: 0,
    },
    {
      title: "Лонгслив HEATTECH С ХЛОПКОМ",
      cost: 10.0,
      count: 0,
      result: 0,
    },
    {
      title: "Лонгслив HEATTECH С ХЛОПКОМ",
      cost: 10.0,
      count: 0,
      result: 0,
    },
    {
      title: "Лонгслив HEATTECH С ХЛОПКОМ",
      cost: 10.0,
      count: 0,
      result: 0,
    },
    {
      title: "Лонгслив HEATTECH С ХЛОПКОМ",
      cost: 10.0,
      count: 0,
      result: 0,
    },
  ]);

  const onClick = (e: any) => {
    if (items.length != 0) {
      if (e.target.getAttribute("aria-details") == "up") {
        let tempF = items;
        let count = tempF[e.target.getAttribute("aria-colindex")].count;
        tempF[e.target.getAttribute("aria-colindex")].count = count + 1;
        count++;

        tempF[e.target.getAttribute("aria-colindex")].result =
          tempF[e.target.getAttribute("aria-colindex")].cost * count;
        setItems([...tempF]);
      } else {
        let tempF = items;
        let count = tempF[e.target.getAttribute("aria-colindex")].count;
        tempF[e.target.getAttribute("aria-colindex")].count = count - 1;
        count--;

        tempF[e.target.getAttribute("aria-colindex")].result =
          tempF[e.target.getAttribute("aria-colindex")].cost * count;
        setItems([...tempF]);
      }
    }
  };

  return (
    <main className="container mx-auto mt-[30px] mb-[100px] px-[28px] md:px-0">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Главная страница</BreadcrumbItem>
        <BreadcrumbItem href="/basket">Корзина</BreadcrumbItem>
      </Breadcrumbs>
      <div className="w-full mt-[48px]">
        {items.length != 0 ? (
          <>
            <h5 className="text-[24px] mb-[25px]">Корзина</h5>
            <div className="flex flex-col gap-[23px]">
              {items.map((item, i) => {
                return (
                  <div
                    key={item.title + i}
                    className="flex flex-col md:flex-row md:justify-between md:items-end border-1 border-border shadow-lg gap-[12px] md:gap-0 px-[25px] py-[20px]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-[25px]">
                      <div className="w-full sm:w-[178px] h-[115px] bg-black"></div>
                      <div className="flex flex-col gap-[7px]">
                        <p className="text-[20px] sm:text-[24px]">{item.title}</p>
                        <div className="flex gap-[20px]">
                          <div className="flex flex-col gap-[5px]">
                            <p className="text-[12px] text-textAcc">Размер</p>
                            <div className="w-fit py-[5px] px-[10px] border-1 border-border cursor-pointer hover:border-tiffani">
                              <p className="font-medium">XXL</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[5px]">
                            <p className="text-[12px] text-textAcc">Цвет</p>
                            <div className="w-[30px] h-[30px] rounded-full drop-shadow-md bg-black border-2 border-white"></div>
                          </div>
                          <div className="flex flex-col gap-[5px]">
                            <p className="text-[12px] text-textAcc">
                              Стоимость, ед.
                            </p>
                            <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
                              <p className="font-medium">${item.cost}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-[24px] md:gap-[49px]">
                      <div className="flex items-center gap-[15px]">
                        <div className="flex flex-col gap-[4px]">
                          <Image
                            className="cursor-pointer"
                            onClick={onClick}
                            aria-details="up"
                            aria-colindex={i}
                            src={arrowUp}
                            alt="arrow up"
                          />
                          <Image
                            className="cursor-pointer"
                            onClick={onClick}
                            aria-details="down"
                            aria-colindex={i}
                            src={arrowDown}
                            alt="arrow down"
                          />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                          <p className="text-[12px] text-textAcc">Количество</p>
                          <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
                            <p className="font-medium">{item.count}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5px]">
                        <p className="text-[12px] text-textAcc">
                          Стоимость, всего
                        </p>
                        <div className="w-fit py-[5px] px-[10px] border-1 border-border rounded-md mb-[15px]">
                          <p className="font-medium">${item.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-between items-end">
                <Button className="bg-tiffani text-white rounded-md w-[278px] h-[51px] py-[10px]">
                  <Link
                    className="w-full h-full flex items-center justify-center"
                    href="/order"
                  >
                    Продолжить
                  </Link>
                </Button>
                <p className="text-[24px]">Итого: $500.00</p>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full flex flex-col items-center">
            <h5 className="mb-[10px]">Корзина</h5>
            <h1 className="text-[40px] text-tiffani font-semibold mb-[20px]">
              Корзина пока пуста!
            </h1>
            <p className="text-gray/500 mb-[40px]">
              Пришла пора отправиться за покупками!
            </p>
            <Button className="bg-tiffani text-white rounded-md w-[278px] h-[51px] py-[10px]">
              <Link
                className="w-full h-full flex items-center justify-center"
                href="/catalog"
              >
                В каталог
              </Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
