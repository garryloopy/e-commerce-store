"use client";

import { motion } from "framer-motion";

import {
  IoCartOutline,
  IoPersonOutline,
  IoMenuSharp,
  IoClose,
} from "react-icons/io5";

import Link from "next/link";

import { useState } from "react";

export default function NavBar() {
  // Used for menu
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleOnMenuClick = () => {
    setIsMenuOpened(true);
  };

  const handleOnMenuCloseClick = () => {
    setIsMenuOpened(false);
  };

  return (
    <header className="bg-gray-50 w-full h-20 fixed top-0 left-0 px-10 flex items-center sm:justify-between justify-end border shadow-sm">
      <div className="sm:flex flex-row gap-10 hidden">
        <Link href="/" className="font-semibold text-2xl text-gray-600">
          Home
        </Link>
        <Link href="/cats" className="font-semibold text-2xl text-gray-600">
          Cats
        </Link>
        <Link href="/dogs" className="font-semibold text-2xl text-gray-600">
          Dogs
        </Link>
      </div>
      <div className="sm:flex hidden flex-row gap-10">
        <IoCartOutline size="30" />
        <IoPersonOutline size="30" />
      </div>
      <div className="sm:hidden block">
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