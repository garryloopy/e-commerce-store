"use client";

import Image from "next/image";

import { IoHeart } from "react-icons/io5";

import { useState } from "react";

import { useFavorite } from "../_utils/favorite-context";

const QuantityButton = ({ children, isSelected, onClick }) => {

  const handleOnClick = () => {
    if (onClick) {
      onClick(children);
    }
  };

  return (
    <button
      className={`w-10 h-10 border rounded-md ${
        isSelected
          ? "bg-indigo-600 hover:bg-indigo-700 border-0 shadow-sm active:bg-indigo-600"
          : ""
      } hover:bg-gray-100 hover:shadow-md active:bg-gray-50 flex-shrink-0`}
      onClick={handleOnClick}
    >
      <p
        className={`text-base font-semibold ${
          isSelected ? "text-gray-50" : "text-gray-700"
        }`}
      >
        {children}
      </p>
    </button>
  );
};

import { useCart } from "../_utils/cart-context";

export default function StoreItem({ storeItem, isFavorite, onAddToCart }) {

  const { addFavorite, removeFavorite } = useFavorite();

  const { imagePath, name, availableQuantityOptions} = storeItem;

  const [selectedQuantity, setSelectedQuantity] = useState(null);

  const itemName = name;

  const { addToCart } = useCart();

  const handleOnQuantityClick = (data) => {
    setSelectedQuantity(data);
  };

  const handleOnAddToCart = () => {
    if (selectedQuantity == null) return;

    const cartItem = {
      name: itemName,
      quantity: selectedQuantity,
      image: imagePath,
    };

    addToCart(cartItem);

    if (onAddToCart) {
      onAddToCart(cartItem);
    }
  };

  const handleOnFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(storeItem);
    }
    else {
      addFavorite(storeItem);
    }
  }

  return (
    <div className="bg-gray-50 w-full flex flex-row h-72 rounded-md border shadow-sm overflow-auto">
      <div className="relative w-1/3 h-full bg-gray-400">
        <Image src={imagePath} layout="fill" objectFit="cover" alt={name} />
      </div>
      
      <div className="relative py-4 px-8 w-2/3 flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row justify-between">
            <p className="text-xl font-bold text-gray-700">{itemName}</p>
            <p className="text-lg font-semibold text-gray-500">In stock</p>
          </div>

          <div className="flex flex-col gap-4 border-b pb-4">
            <p className="text-lg font-semibold text-gray-700">Quantity:</p>
            <div className="flex flex-row gap-6">
              {
                availableQuantityOptions.map(
                  (quantity) => (
                    <QuantityButton
                      key={quantity}
                      onClick={handleOnQuantityClick}
                      isSelected={selectedQuantity == quantity}
                    >
                      {quantity}
                    </QuantityButton>
                  
                  )
                )
              }
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-2">
          <div className="flex flex-row gap-3">
            <button className="border w-36 h-12 rounded-md hover:bg-gray-100 hover:shadow-md active:bg-gray-50">
              <p className="text-lg font-medium text-gray-700">Buy now</p>
            </button>
            <button
              className="border w-36 h-12 rounded-md hover:bg-gray-100 hover:shadow-md active:bg-gray-50"
              onClick={handleOnAddToCart}
            >
              <p className="text-lg font-medium text-gray-700">Add to cart</p>
            </button>
          </div>
          <button className="border w-12 h-12 rounded-md text-center flex flex-shrink-0 items-center justify-center hover:bg-gray-100 hover:shadow-md active:bg-gray-50"
          onClick={handleOnFavoriteClick}>
            <IoHeart size={25} className={`${isFavorite ? "text-red-700" : "text-gray-700/50"}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
