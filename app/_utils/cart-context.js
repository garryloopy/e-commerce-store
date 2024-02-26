"use client";

import { useContext, createContext, useState } from "react";

const CartContext = createContext();

const generateRandomId = () => {
  const characters =
    "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

  let randomId = "";
  const ID_LENGTH = 10;

  for (let i = 0; i < ID_LENGTH; i++) {
    const currentChar = characters.charAt(
      Math.random() * (characters.length - 1)
    );

    randomId += currentChar;
  }

  return randomId;
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartLength = cart.length;

  const addToCart = (item) => {
    const newCartItem = {
      ...item,
      id: generateRandomId(),
      cartQuantity: cartLength
    };
    setCart([...cart, newCartItem]);
  };

  const checkout = () => {
    const order = cart;

    setCart([]);

    return order;
  }

  const removeItem = (itemToRemove) => {
    const newCart = cart.filter(
      (currentItem) => currentItem.id != itemToRemove.id
    );

    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cartLength, cart, addToCart, removeItem, checkout }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
