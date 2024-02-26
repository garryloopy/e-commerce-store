"use client";

import StoreItem from "./StoreItem";
import { useFavorite } from "@/app/_utils/favorite-context";

export default function StoreItemList({ storeItems, onAddToCart} ) {

    const { findFavorite } = useFavorite();

    const handleOnAddToCart = (item) => {
        if (onAddToCart) onAddToCart(item);
    }

    return (
        <section className="flex flex-col gap-12 items-center">
        {
          storeItems.map((item) => (
            <StoreItem storeItem={item} onAddToCart={handleOnAddToCart} key={item.id} isFavorite={findFavorite(item)}/>
          ))
        }
      </section>
    )
}