"use client";

import PageLayout from "./layouts/PageLayout";

import Image from "next/image";

import Link from "next/link";

import catImage from "@/public/images/cats/pixabay.jpg";

export default function HomePage() {
  return (

    <PageLayout className="lg:px-0 md:px-0 px-0">
      <section className="relative w-full h-screen bg-gray">
        <div className="relative h-full w-full blur-sm">
            <Image src={catImage} layout="fill" objectFit="cover" alt="Picture of a cat"/>
            
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center py-4">
        <p className="absolute bottom-0 left-0 text-base font-medium text-gray-500">Featuring: Pixabay</p>
          <div className="px-4 py-3 flex flex-col justify-center items-center">
            <p className="text-indigo-800 font-bold text-5xl">Welcome to Virtual Pets</p>
            <p className="text-indigo-800 font-bold text-xl">A store that allows you to purchase virtual pats</p>
          </div>
          <div className="px-4 py-3 flex flex-col justify-center items-center gap-2">
            <p className="text-indigo-800 font-bold text-2xl">Jump right in:</p>
            <div className="flex flex-row w-full justify-between items-center gap-4">
              <Link href="/dogs" className="flex-1 text-center px-4 py-2 bg-indigo-700 rounded-md text-lg font-semibold shadow-md hover:bg-indigo-800 active:bg-indigo-700 text-gray-50">Dogs</Link>
              <Link href="/cats" className="flex-1 text-center px-4 py-2 bg-indigo-700 rounded-md text-lg font-semibold shadow-md hover:bg-indigo-800 active:bg-indigo-700 text-gray-50">Cats</Link>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>

  );
}
