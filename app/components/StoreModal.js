"use client";

import { motion } from "framer-motion";

import Link from "next/link";

export default function StoreModal({ modalObject, onCloseModal }) {
  const handleOnCloseModal = () => {
    if (onCloseModal) onCloseModal();
  };

  return (
    <motion.section
      className="flex fixed z-10 top-0 left-0 bg-opacity-0 w-full h-full items-center justify-center backdrop-brightness-75"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-gray-50 p-8 rounded-md shadow-xl flex flex-col gap-5">
        <p className="text-gray-700 text-xl font-semibold">
          This item has been added to your cart
        </p>
        <div className="flex flex-col">
          <div className="flex flex-row gap-4">
            <p className="text-gray-600 font-semibold text-lg">Name:</p>
            <p className="text-gray-600 font-semibold text-lg">
              {modalObject.name}
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <p className="text-gray-600 font-semibold text-lg">Quantity:</p>
            <p className="text-gray-600 font-semibold text-lg">
              {modalObject.quantity}
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-4">
          <Link
            href="/cart"
            className="text-base font-semibold text-gray-600 border flex-1 px-2 py-3 rounded-md hover:shadow-md hover:bg-gray-100 active:bg-gray-50 text-center"
          >
            View Cart
          </Link>
          <button
            className="text-base font-semibold text-gray-600 border flex-1 px-2 py-3 rounded-md hover:shadow-md hover:bg-gray-100 active:bg-gray-50"
            onClick={handleOnCloseModal}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </motion.section>
  );
}
