"use client";

import PageLayout from "@/app/layouts/PageLayout";
import { useFavorite } from "@/app/_utils/favorite-context";

import StoreItem from "@/app/components/StoreItem";

import StoreModal from "@/app/components/StoreModal";

import { useState } from "react";

export default function FavoritePage() {
  const { favorite, favoriteLength, findFavorite } = useFavorite();


  const [storeModal, setStoreModal] = useState({});
  const [storeModalOpen, setStoreModalOpen] = useState(false);

  const handleOnAddToCart = (item) => {
    setStoreModalOpen(true);
    setStoreModal(item);
  }

  return (
    <PageLayout>
      {
        storeModalOpen && storeModal && (
          <StoreModal modalObject={storeModal}/>
        )
      }
      <p className="text-4xl font-semibold text-gray-700 my-4">Favorites</p>
      <section className="flex flex-col gap-12">
        {favoriteLength > 0 ? (
          favorite.map((item) => (
            <StoreItem storeItem={item} key={item.id} isFavorite={findFavorite(item)} onAddToCart={handleOnAddToCart}/>
          ))
        ) : (
          <p className="text-xl font-semibold text-gray-500">No favorites yet</p>
        )}
      </section>

    </PageLayout>
  );
}
