import { useState } from "react";
import Styles from "./Card.module.css"

export const Card = ({id,title,price,description,image} ) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={Styles.card}>
        <img src={image} className={Styles.img} />
        <h3 className={Styles.title}>{title}</h3>
        <p className={Styles.description} >{description}</p>
        <div className={Styles.others} onMouseOver={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        {isHovered ? (
          <button className={Styles["add-basket"]}>Sepete Ekle</button>
        ) : (
          <p className={Styles.price} >{price} ₺</p>
        )}
        </div>
    </div> 
  )
}
