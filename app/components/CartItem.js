"use client";

import Image from "next/image";

import { useState } from "react";

import { useCart } from "../_utils/cart-context";

import { IoTrashOutline } from "react-icons/io5";

export default function CartItem({ itemObject }) {
  const [selectedQuantity, setSelectedQuantity] = useState(itemObject.quantity);

  const { removeItem } = useCart();

  const handleOnItemRemove = () => {
    removeItem(itemObject);
  };

  return (
    <div className="flex flex-row border rounded-md">
      <Image src={itemObject.image} width={250} height={250} alt="Dog" />
      <div className="flex flex-col gap-4 p-4 w-full">
        <div className="flex flex-row justify-between">
          <p className="text-gray-700 text-lg font-bold">{itemObject.name}</p>
          <IoTrashOutline
            size={25}
            className="text-red-600 hover:cursor-pointer"
            onClick={handleOnItemRemove}
          >
            Delete Item
          </IoTrashOutline>
        </div>

        <div>
          <p className="text-gray-700 text-base font-semibold">Quantity:</p>
          <select
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(e.target.value)}
            className="px-4 py-1 border border-gray-500 rounded-md"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
      </div>
    </div>
  );
}
