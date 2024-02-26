"use client";

import Link from "next/link";

import CartItem from "@/app/components/CartItem";

import PageLayout from "@/app/layouts/PageLayout";

import { useCart } from "@/app/_utils/cart-context";
import { useOrder }from "@/app/_utils/order-context";

export default function CartPage() {
  const { cart, cartLength, removeItem, checkout } = useCart();
  const {order, addToOrder} = useOrder();

  const displayedCart = cart.sort((a, b) => a.id - b.id);

  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const CURRENCY = 1.25;

  const cartSubtotal = cartQuantity * CURRENCY;
  const cartTax = cartSubtotal * 0.25;
  const cartTotal = cartSubtotal + cartTax;


  const handleOnCheckoutClick = () => {
    const newOrder = checkout();

    addToOrder(newOrder);
  }

  return (
    <PageLayout>
      <section className="my-4">
        <p className="text-4xl font-semibold text-gray-800">Cart</p>
      </section>

      <section className="flex flex-row w-full justify-between gap-2">
        <div className="flex-1 flex flex-col min-h-fit gap-4 p-4 border shadow-sm bg-gray-50 rounded-md max-h-dvh overflow-auto">
          {cartLength <= 0 ? (
            <div>
              <p className="text-2xl text-gray-700 font-bold">You have no items in your cart...</p>
              <p className="text-lg text-gray-600 font-semibold">Why not add some?</p>
            </div>
          ) : (
            displayedCart.map((item) => (
              <CartItem key={item.id} itemObject={item} />
            ))
          )}
        </div>

        <div className="flex flex-col h-min bg-gray-50 shadow-sm gap-6 border flex-1 p-4 rounded">
          <div>
            <p className="text-xl text-gray-700 font-bold">Summary</p>
            <p className="text-base text-gray-500 font-bold">
              Item count: {cartLength}
            </p>
            <p className="text-base text-gray-500 font-bold">
              Quantity count: {cartQuantity}
            </p>
          </div>

          <div>
            <p className="text-xl text-gray-700 font-bold">Subtotal:</p>
            <p className="text-base text-gray-500 font-bold">
              {cartSubtotal} Doggy coins DG
            </p>
          </div>

          <div>
            <p className="text-xl text-gray-700 font-bold">Order total:</p>
            <div className="flex flex-row justify-between">
              <p className="text-base text-gray-500 font-bold">
                {cartTotal} Doggy coins DG
              </p>
              <p className="text-base text-gray-500 font-bold">
                +{cartTax} DG Tax
              </p>
            </div>
          </div>

          <div className="flex flex-col px-4 gap-4">
            <button className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 active:bg-indigo-600" onClick={handleOnCheckoutClick}>
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
