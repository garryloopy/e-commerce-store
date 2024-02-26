"use client";

import { useContext, createContext, useState } from "react";

const OrderContext = createContext();

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


  export const OrderContextProvider = ({children}) => {
    const [order, setOrder] = useState([]);

    const orderLength = order.length;
  
    const addToOrder = (newOrder) => {

      const newOrders = {
        ...newOrder,
        orderId: generateRandomId(),
        orderDate: new Date(),
        orderQuantity: newOrder.length
      };
  
      setOrder([...order, newOrders]);
    };


    return (
        <OrderContext.Provider value={{order, orderLength, addToOrder}}>
            {children}
        </OrderContext.Provider>
    )
  }

  export const useOrder = () => {
    return useContext(OrderContext);
  }