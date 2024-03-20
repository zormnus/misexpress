"use client";

import Image from "next/image";
import emailIcon from "../../assets/emailIcon.svg";
import addressIcon from "../../assets/adressIcon.svg";
import phoneIcon from "../../assets/phoneIcon.svg";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import Link from "next/link";

export default function Contacts() {
  return (
    <main className="container mx-auto mt-[30px] mb-[100px] px-[28px] md:px-0">
      <div className="w-full mt-[48px]">
        <div className="w-full flex flex-col mb-[60px]">
          <h5 className="mb-[10px] text-tiffani">Контакты</h5>
          <h1 className="text-[40px] font-semibold mb-[20px]">Mis Express</h1>
          <p className="text-gray/500 mb-[40px]">
            Наша дружная команда ждёт вас!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-[50px]">
          <div className="flex flex-col gap-[40px]">
            <div className="flex gap-[14px]">
              <Image className="w-[40px] h-[40px]" src={emailIcon} alt="emailIcon" />
              <div className="flex flex-col">
                <p className="font-medium">Email</p>
                <p className="text-gray/500 text-[13px] mb-[12px]">
                Мы всегда готовы помочь!
                </p>
                <Link className="text-tiffani text-[13px] font-semibold" href="mailto:mis.express@mail.ru">mis.express@mail.ru</Link>
              </div>
            </div>
            <div className="flex gap-[14px]">
              <Image className="w-[40px] h-[40px]" src={addressIcon} alt="addressIcon" />
              <div className="flex flex-col">
                <p className="font-medium">Офис компании</p>
                <p className="text-gray/500 text-[13px] mb-[12px]">
                Для тех, кто хочет прийти в гости.
                </p>
                <p className="text-tiffani text-[13px] font-semibold">Antalya/Alanya: 07400. İlçe Alanya, Oba Mahallesi, 225</p>
              </div>
            </div>
            <div className="flex gap-[14px]">
              <Image className="w-[40px] h-[40px]" src={phoneIcon} alt="phoneIcon" />
              <div className="flex flex-col">
                <p className="font-medium">Номер телефона</p>
                <p className="text-gray/500 text-[13px] mb-[12px]">
                Понедельник-Пятница с 9 до 18
                </p>
                <Link className="text-tiffani text-[13px] font-semibold" href="tel:+1 (555) 000-0000">+1 (555) 000-0000</Link>
              </div>
            </div>
          </div>
          <YMaps>
            <div className="w-full">
              <Map
                className="w-full h-full min-h-[250px]"
                defaultState={{ center: [36.542576, 32.037462], zoom: 14 }}
              />
            </div>
          </YMaps>
        </div>
      </div>
    </main>
  );
}
