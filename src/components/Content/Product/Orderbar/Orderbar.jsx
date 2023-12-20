import React, { useContext, useState } from "react";
import Styles from "./OrderBar.module.css";
import { FilterContext } from "../../../../Services/FilterContext";

export const Orderbar = () => {
  const [priceActive, setPriceActive] = useState(0);
  const [ratingActive, setRatingActive] = useState(0);
  const {orderByRating, orderByPrice} = useContext(FilterContext)

  const orderPrice = (condition) => {
    if (condition === 1 && condition !== priceActive) {
      setPriceActive(1);
      orderByPrice(true);
    } else if (condition === 2 && condition !== priceActive) {
      setPriceActive(2);
      orderByPrice(false);
    } else {
      setPriceActive(0);
    }
  };

  const orderRating = (condition) => {
    if (condition === 1 && condition !== ratingActive) {
      setRatingActive(1);
      orderByRating(true);
    } else if (condition === 2 && condition !== ratingActive) {
      setRatingActive(2);
      orderByRating(false);
    } else {
      setRatingActive(0);
    }
  };

  return (
    <div className={Styles.orderbar}>
      <button
        onClick={() => orderPrice(1)}
        className={priceActive === 1 ? Styles.active : ""}
      >
        Low Price
      </button>
      <button
        onClick={() => orderPrice(2)}
        className={priceActive === 2 ? Styles.active : ""}
      >
        High Price
      </button>
      /
      <button
        onClick={() => orderRating(1)}
        className={ratingActive === 1 ? Styles.active : ""}
      >
        Low Rating
      </button>
      <button
        onClick={() => orderRating(2)}
        className={ratingActive === 2 ? Styles.active : ""}
      >
        High Rating
      </button>
    </div>
  );
};
