import React, { useContext, useState,useEffect } from "react";
import Styles from "./Header.module.css";
import { Basket } from "./Basket/Basket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { BasketContext } from "../../Contexts/BasketContex";

export const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [count, setCount] = useState(0);
  const { basketList } = useContext(BasketContext);

  useEffect(() => {
    setCount(basketList.reduce((sum, product) => sum + product.count, 0));
  }, [basketList]);

  const popup = () => {
    setShowPopup((prev) => !prev);
  };

  return (
    <div className={Styles.header}>
      <div className={Styles.contents}>
        <img src="src\assets\logo.png" />
        <ul className={Styles.ul}>
          <li></li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
        </ul>
      </div>
      <div onMouseEnter={popup} onMouseLeave={popup}>
        <a className={Styles.basket}>
          <div className={Styles.counter}>{count}</div>
          <FontAwesomeIcon
            size="lg"
            color={showPopup ? "#3da375" : ""}
            icon={faBasketShopping}
          />
        </a>
        <Basket basketHidden={showPopup} />
      </div>
    </div>
  );
};
