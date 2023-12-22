import { useContext, useState } from "react";
import Styles from "./Card.module.css";
import { BasketContext } from "../Contexts/BasketContex";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

export const Card = ({ id, title, price, description, image, rating }) => {
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
      <div className={Styles["star-rating"]}>
      {rating>=1?<FontAwesomeIcon icon={faStar} className={Styles["solid-star"]} size="xs"/>:<FontAwesomeIcon icon={faStarHalfAlt} className={Styles["half-star"]}size="xs"/>}
      {rating>1 && rating<2?<FontAwesomeIcon icon={faStarHalfAlt} className={Styles["half-star"]}size="xs"/>:""}
      {rating>=2?<FontAwesomeIcon icon={faStar} className={Styles["solid-star"]} size="xs"/>:<FontAwesomeIcon icon={farStar} className={Styles["regular-star"]}size="xs"/>}
      {rating>2 && rating<3?<FontAwesomeIcon icon={faStarHalfAlt} className={Styles["half-star"]}size="xs"/>:""}
      {rating>=3?<FontAwesomeIcon icon={faStar} className={Styles["solid-star"]} size="xs"/>:<FontAwesomeIcon icon={farStar} className={Styles["regular-star"]}size="xs"/>}
      {rating>3 && rating<4?<FontAwesomeIcon icon={faStarHalfAlt} className={Styles["half-star"]}size="xs"/>:""}
      {rating>=4?<FontAwesomeIcon icon={faStar} className={Styles["solid-star"]} size="xs"/>:<FontAwesomeIcon icon={farStar} className={Styles["regular-star"]}size="xs"/>}
      {rating>4 && rating<5?<FontAwesomeIcon icon={faStarHalfAlt} className={Styles["half-star"]}size="xs"/>:<FontAwesomeIcon icon={farStar} className={Styles["regular-star"]}size="xs"/>}
      {rating == 5? <FontAwesomeIcon icon={faStar} className={Styles["solid-star"]} size="xs"/>:""}
    </div>
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
