"use client";

import Image from "next/image";
import cardImg from "../../assets/cardImg.png";
import like from "../../assets/like3.svg";
import Link from "next/link";
import search from "../../assets/search.svg";
import address from "../../assets/adress.svg";
import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";

const categories = [
  {
    label: "+7",
    value: "+7",
    description: "",
  },
  {
    label: "+8",
    value: "+8",
    description: "",
  },
];

export default function Order() {
  return (
    <main className="container mx-auto mt-[30px] mb-[100px]">
      <div className="w-full grid grid-cols-2 gap-[79px]">
        <div className="flex flex-col">
          <h2 className="text-[32px] font-semibold mb-[46px]">Личные данные</h2>
          <form className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[17px]">
              <label htmlFor="" className="text-[18px]">
                Имя *
              </label>
              <Input
                classNames={{
                  input: "px-[21px]",
                  inputWrapper: "border-1 border-border shadow-none rounded-md",
                }}
                placeholder="Имя *"
              />
            </div>
            <div className="flex flex-col gap-[17px]">
              <label htmlFor="" className="text-[18px]">
                Номер телефона *
              </label>
              <div className="flex">
                <Select
                  defaultSelectedKeys={["+7"]}
                  className="max-w-xs"
                  classNames={{
                    trigger:
                      "rounded-md rounded-r-none shadow-none w-[74px] border-1 border-r-0 border-border",
                    innerWrapper: "w-fit",
                    popoverContent: "w-[74px]",
                    mainWrapper: "w-[74px]",
                    base: "w-[74px]",
                  }}
                >
                  {categories.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </Select>
                <input
                  className="w-full bg-gray-search focus:outline-none border-1 border-border px-[21px] rounded-r-md"
                  placeholder="(999) 999-99-99"
                  type="phone"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[17px]">
              <label htmlFor="" className="text-[18px]">
                Email *
              </label>
              <Input
                classNames={{
                  input: "px-[21px]",
                  inputWrapper: "border-1 border-border shadow-none rounded-md",
                }}
                placeholder="Email *"
              />
              <p className="text-[12px] text-textAcc">
                На данную почту мы отправим номер и статус заказа, чек
              </p>
            </div>
            <div className="flex flex-col gap-[17px]">
              <label htmlFor="" className="text-[18px]">
                Адрес доставки
              </label>
              <div className="flex h-[56px]">
                <div className="flex items-center w-[600px] h-full bg-gray-search border-1 border-border rounded-l-md gap-[40px]">
                  <input
                    className="w-full bg-gray-search focus:outline-none px-[16px]"
                    type="text"
                    placeholder="Поиск"
                  />
                  <div className="flex items-center w-[160px] h-full border-l-1 border-border p-[13px] gap-[14px]">
                    <Image
                      className="w-[16px] h-[20px]"
                      src={address}
                      alt="address"
                    />
                    <p className="text-textAcc text-[14px]">Россия</p>
                  </div>
                </div>
                <button className="h-full bg-tiffani rounded-r-md px-[28px]">
                  <Image src={search} alt="search" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[32px] font-semibold mb-[46px]">В корзине</h2>
          <p className="text-[12px] text-textGray">Итого:</p>
          <div className="flex flex-col gap-[4px] text-textGray mb-[23px]">
            <div className="flex justify-between">
              <p className="text-[24px] text-textGray">Сумма заказа</p>
              <p className="text-[24px] text-tiffani">500 $</p>
            </div>
            <div className="flex justify-between">
              <p>5 товаров</p>
              <p>500 $</p>
            </div>
            <div className="flex justify-between">
              <p>Доставка</p>
              <p>1000 $</p>
            </div>
            <div className="flex justify-between">
              <p>Скидка по промокоду</p>
              <p>- 500$</p>
            </div>
          </div>
          <Button className="bg-tiffani text-[24px] text-white rounded-lg w-full h-[73px] py-[10px] mb-[14px]">
            Подтвердить заказ
          </Button>
          <p className="text-textAcc mb-[42px]">
            Нажимая кнопку "Подтвердить заказ", вы соглашаетесь с{" "}
            <span className="text-textGray">
              политикой конфиденциальности и пользовательским соглашением
            </span>
          </p>
          <div className="flex flex-col">
            <p className="text-[18px] mb-[14px]">Выберите способ оплаты</p>
            <RadioGroup>
              <Radio
                classNames={{ label: "text-textAcc" }}
                value="Банковский перевод"
              >
                Банковский перевод
              </Radio>
              <Radio
                classNames={{ label: "text-textAcc" }}
                value="Оплата картой"
              >
                Оплата картой
              </Radio>
              <Radio classNames={{ label: "text-textAcc" }} value="По счёту">
                По счёту
              </Radio>
              <Radio
                classNames={{ label: "text-textAcc" }}
                value="В криптовалюте"
              >
                В криптовалюте
              </Radio>
              <Radio classNames={{ label: "text-textAcc" }} value="PayPal">
                PayPal
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </div>
    </main>
  );
}
