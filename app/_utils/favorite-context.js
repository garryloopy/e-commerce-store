"use client";

import { useContext, createContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const favoriteLength = favorite.length;

  const addFavorite = (item) => {
    setFavorite([...favorite, item]);
  };

  const removeFavorite = (itemToRemove) => {
    const newFavorite = favorite.filter(
      (currentItem) => currentItem.id != itemToRemove.id
    );

    setFavorite(newFavorite);
  };
  
  const findFavorite = (itemToFind) => favorite.some((item) => item.id === itemToFind.id);

  return (
    <FavoriteContext.Provider value={{ favorite, favoriteLength, addFavorite, removeFavorite, findFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  return useContext(FavoriteContext);
};
