"use client";

import PageLayout from "@/app/layouts/PageLayout";
import { useFavorite } from "@/app/_utils/favorite-context";

import StoreItem from "@/app/components/StoreItem";

export default function FavoritePage() {
  const { favorite, favoriteLength, findFavorite } = useFavorite();

  return (
    <PageLayout>
      <p className="text-4xl font-semibold text-gray-700 my-4">Favorites</p>
      <section className="flex flex-col gap-12">
        {favoriteLength > 0 ? (
          favorite.map((item) => (
            <StoreItem storeItem={item} key={item.id} isFavorite={findFavorite(item)}/>
          ))
        ) : (
          <p className="text-xl font-semibold text-gray-500">No favorites yet</p>
        )}
      </section>

    </PageLayout>
  );
}
