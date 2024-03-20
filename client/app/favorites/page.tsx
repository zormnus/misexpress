"use client";

import Image from "next/image";
import cardImg from "../../assets/cardImg.png";
import like from "../../assets/like3.svg";
import { Button } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";

export default function Favorites() {
  return (
    <main className="container mx-auto mt-[30px] mb-[100px] px-[28px] sm:px-0">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Главная страница</BreadcrumbItem>
        <BreadcrumbItem href="/favorites">Избранное</BreadcrumbItem>
      </Breadcrumbs>
      {true ? (
        <>
          <h5 className="text-[24px] mb-[25px] mt-[25px]">Избранное</h5>
          <div className="flex flex-col sm:flex-row gap-[27px] mb-[27px]">
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
                <div className="absolute top-[14px] right-[14px] bg-pink rounded-full p-[10px]">
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
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">XXL</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">XL</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">L</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">M</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
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
                <div className="absolute top-[14px] right-[14px] bg-pink rounded-full p-[10px]">
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
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">XXL</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">XL</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">L</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">M</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
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
                <Image
                  className="w-full mb-[25px]"
                  src={cardImg}
                  alt="cardImg"
                />
                <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
                  <p>Top</p>
                </div>
                <div className="absolute top-[14px] right-[14px] bg-pink rounded-full p-[10px]">
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
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">XXL</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">XL</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">L</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">M</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
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
          <div className="flex flex-col sm:flex-row gap-[27px] mb-[27px]">
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
                <div className="absolute top-[14px] right-[14px] bg-pink rounded-full p-[10px]">
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
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">XXL</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">XL</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">L</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">M</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
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
                <div className="absolute top-[14px] right-[14px] bg-pink rounded-full p-[10px]">
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
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">XXL</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">XL</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">L</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">M</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
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
                <Image
                  className="w-full mb-[25px]"
                  src={cardImg}
                  alt="cardImg"
                />
                <div className="absolute top-[14px] left-[14px] rounded-sm text-white bg-pink px-[10px]">
                  <p>Top</p>
                </div>
                <div className="absolute top-[14px] right-[14px] bg-pink rounded-full p-[10px]">
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
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">XXL</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">XL</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">L</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
                    <p className="font-medium">M</p>
                  </div>
                  <div className="w-fit py-[5px] px-[10px] cursor-pointer border-1 border-border hover:border-tiffani">
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
        </>
      ) : (
        <div className="w-full flex flex-col items-center">
          <h5 className="mb-[10px]">Избранное</h5>
          <h1 className="text-[40px] text-tiffani font-semibold mb-[20px]">
            Избранное пока пустое!
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
    </main>
  );
}
