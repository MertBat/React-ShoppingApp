import { createContext, useState } from "react";
import React from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basketList, setBasketList] = useState([]);

  const addToBasket = (product) => {
    if (basketList.some((item) => item.id === product.id)) {
      const updatedBasketList = basketList.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      );
      setBasketList(updatedBasketList);
    } else {
      const updatedProduct = { ...product, count: 1 };
      setBasketList((prev) => [...prev, updatedProduct]);
    }
  };

  const removeFromBasket = (id) => {
    if (basketList.some((item) => item.id === id && item.count > 1)) {
      const updateBasketList = basketList.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
      setBasketList(updateBasketList);
    } else if (basketList.some((item) => item.id === id && item.count == 1)) {
      const updateBasketList = basketList.filter((item)=> item.id !== id);
      setBasketList(updateBasketList);
    }
  };

  return (
    <BasketContext.Provider
      value={{ basketList, addToBasket, removeFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
