"use client";

import { motion } from "framer-motion";

import {
  IoCartOutline,
  IoPersonOutline,
  IoMenuSharp,
  IoClose,
  IoHeartOutline,
} from "react-icons/io5";

import Link from "next/link";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { useCart } from "../_utils/cart-context";

export default function NavBar() {
  // Used for menu
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const { cartLength } = useCart();

  const pathname = usePathname();

  const handleOnMenuClick = () => {
    setIsMenuOpened(true);
  };

  const handleOnMenuCloseClick = () => {
    setIsMenuOpened(false);
  };

  return (
    <header className="bg-gray-50/95 bg-opacity-95 w-full h-20 fixed top-0 left-0 sm:px-40 px-4 flex items-center sm:justify-between justify-end border shadow-sm">
      <div className="sm:flex flex-row gap-10 hidden">
        <Link
          href="/"
          className={`font-semibold text-xl ${
            pathname == "/" ? "text-indigo-700" : "text-gray-600"
          }`}
        >
          Home
        </Link>
        <Link
          href="/cats"
          className={`font-semibold text-xl ${
            pathname == "/cats" ? "text-indigo-700" : "text-gray-600"
          }`}
        >
          Cats
        </Link>
        <Link
          href="/dogs"
          className={`font-semibold text-xl ${
            pathname == "/dogs" ? "text-indigo-700" : "text-gray-600"
          }`}
        >
          Dogs
        </Link>
      </div>
      <div className="sm:flex hidden flex-row gap-10">
        <Link href="/favorite">
          <IoHeartOutline
            size="25"
            className={`font-semibold text-2xl ${
              pathname == "/favorite" ? "text-indigo-700" : "text-gray-600"
            }`}
          />
        </Link>

        <Link href="/cart" className="relative">
          <IoCartOutline
            size="25"
            className={`font-semibold text-2xl ${
              pathname == "/cart" ? "text-indigo-700" : "text-gray-600"
            }`}
          />
          {cartLength > 0 && (
            <div className="bg-indigo-800/75 bg-opacity-100 w-5 h-5 absolute top-0 right-0 rounded-full flex items-center justify-center">
              <p className="text-gray-50 text-xs">{cartLength}</p>
            </div>
          )}
        </Link>
        <Link href="/profile">
          <IoPersonOutline
            size="25"
            className={`font-semibold text-2xl ${
              pathname == "/profile" ? "text-indigo-700" : "text-gray-600"
            }`}
          />
        </Link>
      </div>
      <div className="sm:hidden flex">
        {isMenuOpened ? (
          <motion.button
            onClick={handleOnMenuCloseClick}
            animate={{ rotate: 90 }}
            transition={{ duration: 0.25 }}
          >
            <IoClose size={30} />
          </motion.button>
        ) : (
          <button onClick={handleOnMenuClick}>
            <IoMenuSharp size={30} />
          </button>
        )}
      </div>
    </header>
  );
}
