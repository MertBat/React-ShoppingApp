import { createContext, useState } from "react";
import React from 'react'

export const BasketContext = createContext();

export const BasketProvider = ({children}) => {
    const [basketList, setBasketList] = useState([]);

    const addToBasket= (product) =>{
      if (basketList.some((item) => item.id === product.id)) {
        const updatedBasketList = basketList.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
        setBasketList(updatedBasketList);
      } else {
        const updatedProduct = { ...product, count: 1 };
        setBasketList((prev) => [...prev, updatedProduct]);
      }
    }
    console.log(basketList);
    const removeFromBasket= (product) =>{
        // setBasketList((prev) => prev.slice(0, prev.indexOf(product)))
    }

  return (
    <BasketContext.Provider value={{basketList, addToBasket, removeFromBasket}}>
    {children}
    </BasketContext.Provider>
  )
}
