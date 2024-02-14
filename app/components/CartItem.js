"use client";

import Image from "next/image";

import dog from "@/public/pexels-kat-smith-551628.jpg";

export default function CartItem() {
    return (
        <div className="flex flex-row">
            <Image src={dog} width={250} height={250} alt="Dog" />
            <div className="flex flex-col gap-4 p-4">
                <p className="text-gray-700 text-lg font-bold">Kat</p>

                <p className="text-gray-700 text-base font-semibold">Quantity:</p>
            </div>
        </div>
    )
}