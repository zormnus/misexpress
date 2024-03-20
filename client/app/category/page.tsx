"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import open from "../../assets/open.svg";
import plusCategory from "../../assets/plusCategory.svg";
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

export default function Category() {
  return (
    <main className="container mx-auto mt-[30px] px-[28px] sm:px-0">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Главная страница</BreadcrumbItem>
        <BreadcrumbItem href="/category">Категории</BreadcrumbItem>
      </Breadcrumbs>
      <h2 className="font-bold text-[32px] text-tiffani mt-[49px] mb-[37px]">
        Мужская одежда
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] mb-[47px]">
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Футболки и майки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Брюки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Брюки-чинос</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Джоггеры</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Рубашки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] mb-[47px]">
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Футболки и майки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Брюки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Брюки-чинос</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Джоггеры</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Рубашки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-[32px] text-tiffani mt-[49px] mb-[37px]">
        Женская одежда
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] mb-[47px]">
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Футболки и майки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Брюки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Брюки-чинос</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Джоггеры</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Рубашки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] mb-[47px]">
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Футболки и майки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Брюки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Брюки-чинос</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Джоггеры</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Рубашки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-[32px] text-tiffani mt-[49px] mb-[37px]">
        Детская одежда
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] mb-[47px]">
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Футболки и майки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Брюки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Брюки-чинос</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Джоггеры</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Рубашки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] mb-[47px]">
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Футболки и майки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Брюки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Брюки-чинос</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Джоггеры</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Рубашки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-[32px] text-tiffani mt-[49px] mb-[37px]">
      Постельное бельё
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] mb-[47px]">
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Футболки и майки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Брюки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Брюки-чинос</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Джоггеры</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Рубашки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] mb-[47px]">
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Футболки и майки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Брюки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Брюки-чинос</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Джоггеры</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[208px] bg-black rounded-md mb-[20px]"></div>
          <p className="text-[24px] mb-[26px]">Рубашки</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Базовые футболки</p>
              </div>
              <p>103</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p>Майки</p>
              </div>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">
                  Футболки с коротким рукавом
                </p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки с длинным рукавом</p>
              </div>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[15px]">
                <Image src={plusCategory} alt="plusCategory" />
                <p className="w-[217px] truncate">Футболки Поло</p>
              </div>
              <p>12</p>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between">
              <p className="w-[217px] truncate">Смотреть все</p>
              <p>200</p>
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
