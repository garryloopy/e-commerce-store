"use client";

import Link from "next/link";

import CartItem from "@/app/components/CartItem";

import PageLayout from "@/app/layouts/PageLayout";

import { useCart } from "@/app/_utils/cart-context";
import { useState } from "react";

export default function CartPage() {
  const { cart, cartLength, removeItem } = useCart();

  const handleOnCheckoutClick = () => {};

  return (
    <PageLayout>
      <section className="my-4">
        <p className="text-4xl font-semibold text-gray-800">Cart</p>
      </section>

      <section className="flex flex-row w-full justify-between gap-2">
        <div className="flex-1 flex flex-col min-h-fit gap-4 p-4 border shadow-sm bg-gray-50 rounded-md max-h-screen overflow-auto">
          {cart.map((item, index) => (
            <CartItem key={index} itemObject={item} />
          ))}
        </div>

        <div className="flex flex-col h-min bg-gray-50 shadow-sm gap-6 border flex-1 p-4 rounded">
          <div>
            <p className="text-xl text-gray-700 font-bold">Summary</p>
            <p className="text-base text-gray-500 font-bold">
              Item count: {cartLength}
            </p>
          </div>

          <div>
            <p className="text-xl text-gray-700 font-bold">Subtotal:</p>
            <p className="text-base text-gray-500 font-bold">
              {cartLength * 1.25} Doggy coins DG
            </p>
          </div>

          <div>
            <p className="text-xl text-gray-700 font-bold">Order total:</p>
            <div className="flex flex-row justify-between">
              <p className="text-base text-gray-500 font-bold">
                {cartLength * 1.25 + cartLength * 1.25 * 0.25} Doggy coins DG
              </p>
              <p className="text-base text-gray-500 font-bold">
                +{cartLength * 1.25 * 0.25} DG Tax
              </p>
            </div>
          </div>

          <div className="flex flex-col px-4 gap-4">
            <button className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 active:bg-indigo-600">
              <p className="text-gray-50 text-xl font-bold">
                Proceed to checkout
              </p>
            </button>

            <Link
              className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 active:bg-indigo-600"
              href="/"
            >
              <p className="text-gray-50 text-xl font-bold text-center">
                Continue shopping
              </p>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
