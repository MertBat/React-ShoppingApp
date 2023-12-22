import React, { useContext, useEffect, useState } from "react";
import Styles from "./Basket.module.css";
import { BasketContext } from "../../../Contexts/BasketContex";
import { ProductsInBasket } from "./ProductsInBasket/ProductsInBasket.jsx";

export const Basket = ({ basketHidden }) => {
  const { basketList } = useContext(BasketContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(basketList.reduce((sum, product)=> sum + (product.price*product.count), 0))
  }, [basketList]);
 
  return (
    <div className={`${Styles.popup} ${basketHidden? Styles.active : ""}`}>
      <div className={Styles.products}>
        {basketList.map((product) => (
          <ProductsInBasket {...product} />
        ))}
      </div>
      <hr className={Styles.line} />
      <h3 className={Styles.price}>
        Total Price: <span>{price} ₺</span>
      </h3>
    </div>
  );
};
