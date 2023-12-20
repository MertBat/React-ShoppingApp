import React, { memo } from 'react'
import Styles from "./Header.module.css"

export const Header = () => {
  return (
    <div className={Styles.header}>
        <ul className={Styles.ul}>
            <li><img src="src\assets\logo.png"/></li>
            <li><a href="/">Home </a></li>
            <li><a href="/product">Products </a></li>
        </ul>
        <p className={Styles.basket}>Basket</p>
    </div>
  )
}
