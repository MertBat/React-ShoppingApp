import { useContext, useState } from "react";
import Styles from "./Card.module.css";
import { BasketContext } from "../Contexts/BasketContex";

export const Card = ({ id, title, price, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToBasket } = useContext(BasketContext);

  const addProduct = () => {
    addToBasket({id,title,price, image})
  };

  return (
    <div
      className={Styles.card}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} className={Styles.img} />
      <h3 className={Styles.title}>{title}</h3>
      <p className={Styles.description}>{description}</p>
      <div className={Styles.others}>
        {isHovered ? (
          <button className={Styles["add-basket"]} onClick={addProduct}>Sepete Ekle</button>
        ) : (
          <p className={Styles.price}>
            {price} ₺
          </p>
        )}
      </div>
    </div>
  );
};
