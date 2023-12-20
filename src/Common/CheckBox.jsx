import React, { useState } from "react";
import Styles from "./CheckBox.module.css";

export const CheckBox = ({ name, checked, unchecked }) => {
  const [inputChecked, setInputChecked] = useState(true);

  const clicked = () => {
    setInputChecked(inputChecked ? false : true);
    if (inputChecked) {
      checked(name);
    } else {
      unchecked(name);
    }
  };

  return (
    <label className={Styles.checkBox}>
      <input type="checkbox" onChange={clicked} />
      {name}
      <span className={Styles.checkmark}></span>
    </label>
  );
};
