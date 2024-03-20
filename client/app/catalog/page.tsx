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
import Link from "next/link";

export default function Category() {
  return (
    <main className="container mx-auto mt-[30px] mb-[100px] px-[28px] md:px-0">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Главная страница</BreadcrumbItem>
        <BreadcrumbItem href="/category">Категория</BreadcrumbItem>
        <BreadcrumbItem href="/catalog">Каталог</BreadcrumbItem>
      </Breadcrumbs>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-[80px] gap-[27px] mb-[28px]">
        <div className="w-full col-span-2 lg:col-span-1">
          <h5 className="text-[24px] mb-[25px]">Фильтры</h5>
          <div className="rounded-sm border-1 border-border shadow-sm py-[25px] px-[14px]">
            <div className="flex flex-col md:flex-row lg:flex-col gap-[18px] mb-[23px]">
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
                      value="15"
                    />
                    <input
                      className="w-full rounded-sm border-1 border-border bg-select p-[16px]"
                      type="number"
                      value="250"
                    />
                  </div>
                </div>
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
            <div className="flex justify-center">
              <Button className="w-[270px] h-[44px] bg-tiffani text-white" radius="sm">
                Показать
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full col-span-2 flex flex-col mt-[60px] gap-[27px]">
          <div className="w-full flex flex-col md:flex-row gap-[27px]">
            <div className="w-full flex flex-col shadow-xl rounded-sm border-1 border-border p-[25px]">
              <div className="w-full relative">
                <Image
                  className="w-full mb-[25px]"
                  src={cardImg}
                  alt="cardImg"
                />
                <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
                  <p>Top</p>
                </div>
                <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
                  <Image className="w-[20px] h-[20px]" src={like} alt="like" />
                </div>
              </div>
              <div className="flex flex-col">
                <Link href='/product' className="text-2xl">Название товара</Link>
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
                <Image
                  className="w-full mb-[25px]"
                  src={cardImg}
                  alt="cardImg"
                />
                <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
                  <p>Top</p>
                </div>
                <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
                  <Image className="w-[20px] h-[20px]" src={like} alt="like" />
                </div>
              </div>
              <div className="flex flex-col">
                <Link href='/product' className="text-2xl">Название товара</Link>
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
          <div className="w-full flex flex-col md:flex-row gap-[27px]">
            <div className="flex flex-col w-full shadow-xl rounded-sm border-1 border-border p-[25px]">
              <div className="relative">
                <Image
                  className="w-full mb-[25px]"
                  src={cardImg}
                  alt="cardImg"
                />
                <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
                  <p>Top</p>
                </div>
                <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
                  <Image className="w-[20px] h-[20px]" src={like} alt="like" />
                </div>
              </div>
              <div className="flex flex-col">
                <Link href='/product' className="text-2xl">Название товара</Link>
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
                <Image
                  className="w-full mb-[25px]"
                  src={cardImg}
                  alt="cardImg"
                />
                <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
                  <p>Top</p>
                </div>
                <div className="absolute top-[14px] right-[14px] bg-white rounded-full p-[10px]">
                  <Image className="w-[20px] h-[20px]" src={like} alt="like" />
                </div>
              </div>
              <div className="flex flex-col">
                <Link href='/product' className="text-2xl">Название товара</Link>
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
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[27px] mb-[27px]">
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
            <Link href='/product' className="text-2xl">Название товара</Link>
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
            <Link href='/product' className="text-2xl">Название товара</Link>
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
            <Link href='/product' className="text-2xl">Название товара</Link>
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
      <div className="flex flex-col md:flex-row gap-[27px] mb-[27px]">
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
            <Link href='/product' className="text-2xl">Название товара</Link>
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
            <Link href='/product' className="text-2xl">Название товара</Link>
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
            <Link href='/product' className="text-2xl">Название товара</Link>
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
      <div className="flex flex-col md:flex-row gap-[27px] mb-[27px]">
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
            <Link href='/product' className="text-2xl">Название товара</Link>
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
            <Link href='/product' className="text-2xl">Название товара</Link>
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
            <Link href='/product' className="text-2xl">Название товара</Link>
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
