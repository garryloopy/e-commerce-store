"use client";

import dog from "@/public/pexels-kat-smith-551628.jpg";

import Image from "next/image";

import { IoHeart } from "react-icons/io5";

const QuantityButton = ({ children, isSelected }) => {
  return (
    <button className="w-10 h-10 border rounded-md hover:bg-gray-100 hover:shadow-md active:bg-gray-50">
      <p className="text-base font-semibold text-gray-700">{children}</p>
    </button>
  );
};

export default function StoreItem() {
  return (
    <div className="bg-gray-50 flex sm:flex-row flex-col w-full items-center rounded-md">
      <Image src={dog} width={500} height={500} alt="Dog" />
      <div className="p-8 w-full flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row justify-between">
            <p className="text-xl font-bold text-gray-700">Kat</p>
            <p className="text-lg font-semibold text-gray-500">In stock</p>
          </div>

          <div className="flex flex-col gap-4 border-b pb-4">
            <p className="text-lg font-semibold text-gray-700">Quantity:</p>
            <div className="flex flex-row gap-6">
              <QuantityButton>XS</QuantityButton>
              <QuantityButton>S</QuantityButton>
              <QuantityButton>M</QuantityButton>
              <QuantityButton>L</QuantityButton>
              <QuantityButton>XL</QuantityButton>
              <QuantityButton>XXL</QuantityButton>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row sm:gap-8 gap-4">
            <button className="border w-36 h-12 rounded-md hover:bg-gray-100 hover:shadow-md active:bg-gray-50">
              <p className="text-lg font-medium text-gray-700">Buy now</p>
            </button>
            <button className="border w-36 h-12 rounded-md hover:bg-gray-100 hover:shadow-md active:bg-gray-50">
              <p className="text-lg font-medium text-gray-700">Add to cart</p>
            </button>
          </div>
          <button className="border w-12 h-12 rounded-md text-center flex items-center justify-center hover:bg-gray-100 hover:shadow-md active:bg-gray-50">
            <IoHeart size={25} className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
