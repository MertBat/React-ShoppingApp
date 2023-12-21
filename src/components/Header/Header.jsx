import React, { useState } from "react";
import Styles from "./Header.module.css";
import { Basket } from "./Basket/Basket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const popup = () =>{
    setShowPopup((prev) => !prev);

  }

  return (
    <div className={Styles.header}>
      <div className={Styles.contents}>
      <img src="src\assets\logo.png" />
      <ul className={Styles.ul}>
        <li></li>
        <li>
        <Link to={"/"} >Home</Link>
        </li>
        <li>
          <Link to={"/product"} >Product</Link>
        </li>
      </ul>
      </div>
      <a
        className={Styles.basket} 
        onClick={popup}
      >
        <div className={Styles.counter}>0</div>
        <FontAwesomeIcon size="lg" color={showPopup? "#3da375":""} icon={faBasketShopping} />
      </a>
      <Basket basketHidden={showPopup} />
    </div>
  );
};
