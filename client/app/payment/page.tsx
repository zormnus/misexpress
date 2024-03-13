"use client";

import Image from "next/image";
import featureIcon from "../../assets/featureIcon.svg";
import paymentIcon from "../../assets/paymentIcon.svg";
import paperIcon from "../../assets/paperIcon.svg";
import cryptoIcon from "../../assets/cryptoIcon.svg";
import linkIcon from "../../assets/linkIcon.svg";

import Link from "next/link";

export default function Payment() {
  return (
    <main className="container mx-auto mt-[30px] mb-[100px] px-[28px] md:px-0">
      <div className="w-full mt-[48px]">
        <div className="w-full flex flex-col items-center mb-[60px]">
          <h5 className="mb-[10px]">О нас</h5>
          <h1 className="text-[40px] text-tiffani font-semibold mb-[20px]">
            Оплата
          </h1>
          <p className="text-gray/500 text-center mb-[40px]">
            Узнайте о вариантах оплаты товаров нашей компании
          </p>
        </div>
        <div className="flex flex-col items-center gap-[50px]">
          <div className="flex flex-col md:flex-row justify-between gap-[30px]">
            <div className="flex flex-col items-center gap-[6px]">
              <Image src={featureIcon} alt="featureIcon" />
              <p className="text-tiffani font-medium">Банковский перевод</p>
              <p className="text-gray/500 text-center text-[13px]">
                Самый удобный вариант для перевода по реквизитам компании
              </p>
            </div>
            <div className="flex flex-col items-center gap-[6px]">
              <Image src={paymentIcon} alt="paymentIcon" />
              <p className="text-tiffani font-medium">Оплата картой</p>
              <p className="text-gray/500 text-center text-[13px]">
                Оплата кредитной или дебетовой картой онлайн
              </p>
            </div>
            <div className="flex flex-col items-center gap-[6px]">
              <Image src={paperIcon} alt="paperIcon" />
              <p className="text-tiffani font-medium">Выставление счёта</p>
              <p className="text-gray/500 text-center text-[13px]">
                Осуществление платежа по счёту. Автоматически сформируем по
                реквизитам
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-[50px]">
            <div className="flex flex-col items-center gap-[6px]">
              <Image src={cryptoIcon} alt="cryptoIcon" />
              <p className="text-tiffani font-medium">Криптовалюта</p>
              <p className="text-gray/500 text-center text-[13px]">
                Оплата с помощью криптовалюты через онлайн-сервис
              </p>
            </div>
            <div className="flex flex-col items-center gap-[6px]">
              <Image src={linkIcon} alt="linkIcon" />
              <p className="text-tiffani font-medium">PayPal</p>
              <p className="text-gray/500 text-center text-[13px]">
                Перевод по ссылке, которую мы пришлём после оформления заказа
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
