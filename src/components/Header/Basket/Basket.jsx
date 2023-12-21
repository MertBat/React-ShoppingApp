import React from 'react';
import Styles from "./Basket.module.css"

export const Basket = ({ basketHidden }) => {
  return (
    <div className={`${Styles.popup} ${basketHidden ? Styles.active : ''}`}>
      <p>This is the popup content</p>
    </div>
  );
};
