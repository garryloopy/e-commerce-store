"use client";

import Image from "next/image";

import { IoHeart } from "react-icons/io5";

import { useState } from "react";

const QuantityButton = ({ children, isSelected, onClick }) => {

  const handleOnClick = () => {
    if (onClick) {
      onClick(children);
    }
  }

  return (
    <button className={`w-10 h-10 border rounded-md ${isSelected ? "bg-indigo-600 hover:bg-indigo-700 border-0 shadow-sm active:bg-indigo-600" : ""} hover:bg-gray-100 hover:shadow-md active:bg-gray-50`}
            onClick={handleOnClick}>
      <p className={`text-base font-semibold ${isSelected ? "text-gray-50" : "text-gray-700"}`}>{children}</p>
    </button>
  );
};

import { useCart } from "../_utils/cart-context";

export default function StoreItem({image, name}) {
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  const itemName = name;

  const { addToCart } = useCart();

  const handleOnQuantityClick = (data) => {
    setSelectedQuantity(data);
  }

  const handleOnAddToCart = () => {
    if (selectedQuantity == null) return;


    addToCart({
      name: itemName,
      quantity: selectedQuantity,
      image: image
    });


    setSelectedQuantity(null);
  }

  return (
    <div className="bg-gray-50 flex sm:flex-row flex-col sm:w-full w-fit items-center rounded-md border shadow-sm">
      <Image src={image} width={500} height={500} alt={name} />
      <div className="p-8 w-full flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row justify-between">
            <p className="text-xl font-bold text-gray-700">{itemName}</p>
            <p className="text-lg font-semibold text-gray-500">In stock</p>
          </div>

          <div className="flex flex-col gap-4 border-b pb-4">
            <p className="text-lg font-semibold text-gray-700">Quantity:</p>
            <div className="flex flex-row gap-6">
              <QuantityButton onClick={handleOnQuantityClick} isSelected={selectedQuantity == 1}>1</QuantityButton>
              <QuantityButton onClick={handleOnQuantityClick} isSelected={selectedQuantity == 2}>2</QuantityButton>
              <QuantityButton onClick={handleOnQuantityClick} isSelected={selectedQuantity == 3}>3</QuantityButton>
              <QuantityButton onClick={handleOnQuantityClick} isSelected={selectedQuantity == 4}>4</QuantityButton>
              <QuantityButton onClick={handleOnQuantityClick} isSelected={selectedQuantity == 5}>5</QuantityButton>
              <QuantityButton onClick={handleOnQuantityClick} isSelected={selectedQuantity == 6}>6</QuantityButton>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <button className="border w-36 h-12 rounded-md hover:bg-gray-100 hover:shadow-md active:bg-gray-50">
              <p className="text-lg font-medium text-gray-700">Buy now</p>
            </button>
            <button className="border w-36 h-12 rounded-md hover:bg-gray-100 hover:shadow-md active:bg-gray-50" onClick={handleOnAddToCart}>
              <p className="text-lg font-medium text-gray-700">Add to cart</p>
            </button>
          </div>
          <button className="border w-12 h-12 rounded-md text-center flex items-center justify-center hover:bg-gray-100 hover:shadow-md active:bg-gray-50">
            <IoHeart size={25} className="text-gray-700/50" />
          </button>
        </div>
      </div>
    </div>
  );
}
