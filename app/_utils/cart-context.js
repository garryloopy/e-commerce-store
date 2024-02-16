"use client";
 
import { useContext, createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const cartLength = cart.length;


    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    return (
        <CartContext.Provider value={{ cartLength, cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => {
    return useContext(CartContext);
}