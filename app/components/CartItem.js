"use client";

import Image from "next/image";

import {
    useState
} from "react";

export default function CartItem({quantity, name, image}) {
    const [selectedQuantity, setSelectedQuantity] = useState(quantity);
    

    return (
        <div className="flex flex-row">
            <Image src={image} width={250} height={250} alt="Dog" />
            <div className="flex flex-col gap-4 px-4">
                <p className="text-gray-700 text-lg font-bold">{name}</p>

                <div>
                    <p className="text-gray-700 text-base font-semibold">Quantity:</p>
                    <select value={selectedQuantity} onChange={(e) => setSelectedQuantity(e.target.value)} className="px-4 py-2 border border-gray-500 rounded-md">
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
    )
}