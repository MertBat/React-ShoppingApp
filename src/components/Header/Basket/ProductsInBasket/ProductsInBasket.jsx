import React, { useContext } from "react";
import Styles from "./ProductsInBasket.module.css";
import { BasketContext } from "../../../../Contexts/BasketContex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ProductsInBasket = ({ id, title, count, image, price }) => {
  const { addToBasket, removeFromBasket } = useContext(BasketContext);

  return (
    <div>
      <div className={Styles["product-in-basket"]}>
        <img src={image} className={Styles.img} />
        <h4 className={Styles.title}>{title}</h4>
        <p className={Styles.price}>{count * price} ₺</p>
        <div className={Styles["count-info"]}>
          <button
            className={Styles.button}
            onClick={() => addToBasket({ id, title, count, image, price })}
          >
            +
          </button>
          <p className={Styles.count}>{count}</p>
          <button
            className={Styles.button}
            onClick={() => removeFromBasket(id)}
          >
            {count === 1 ? (
              <FontAwesomeIcon
                icon={faTrash}
                size="sm"
              />
            ) : (
              "-"
            )}
          </button>
        </div>
      </div>
      <hr className={Styles.line} />
    </div>
  );
};
