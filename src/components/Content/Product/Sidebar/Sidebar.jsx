import React, { useContext, useState } from "react";
import Styles from "./Sidebar.module.css";
import { CheckBox } from "../../../../Common/CheckBox";
import { ApiContext } from "../../../../Contexts/ApiContext";
import { FilterContext } from "../../../../Contexts/FilterContext";

export const Sidebar = () => {
  const [rating, setRating] = useState(1);
  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(0);
  const { categories, brands } = useContext(ApiContext);
  const {
    setSelectedCategories,
    selectedCategories,
    setSelectedBrands,
    selectedBrands,
    setSelectedRating,
    setPriceLow,
    setPriceHigh,
  } = useContext(FilterContext);

  const filterCategory = (name) => {
    setSelectedCategories([...selectedCategories, name]);
  };
  const deFilterCategory = (name) => {
    setSelectedCategories(selectedCategories.filter((item) => item !== name));
  };

  const filterBrand = (name) => {
    setSelectedBrands([...selectedBrands, name]);
  };
  const deFilterBrand = (name) => {
    setSelectedBrands(selectedBrands.filter((item) => item !== name));
  };

  const handleRatingChange = (event) => {
    const newRating = parseInt(event.target.value, 10);
    setRating(newRating);
    setSelectedRating(newRating);
  };

  const filterPrice = () => {
    if (highPrice >= 0 && highPrice >= lowPrice) {
      setPriceLow(lowPrice);
      setPriceHigh(highPrice);
    }
  };

  return (
    <div className={Styles.sidebar}>
      <h3>Categories</h3>
      <div className={Styles.categories}>
        {categories.map((category) => (
          <CheckBox
            name={category}
            checked={filterCategory}
            unchecked={deFilterCategory}
          />
        ))}
      </div>
      <hr />
      <h3>Brands</h3>
      <div className={Styles.brands}>
        {brands.map((brand) => (
          <CheckBox
            name={brand}
            checked={filterBrand}
            unchecked={deFilterBrand}
          ></CheckBox>
        ))}
      </div>
      <hr />
      <div className={Styles.radio}>
        <h3>Rating</h3>
        <label>
          <input
            type="radio"
            name="rate"
            value={4}
            checked={rating === 4}
            onChange={handleRatingChange}
          />
          4 stars and above
        </label>
        <label>
          <input
            type="radio"
            name="rate"
            value={3}
            checked={rating === 3}
            onChange={handleRatingChange}
          />
          3 stars and above
        </label>
        <label>
          <input
            type="radio"
            name="rate"
            value={2}
            checked={rating === 2}
            onChange={handleRatingChange}
          />
          2 stars and above
        </label>
        <label>
          <input
            type="radio"
            name="rate"
            value={1}
            checked={rating === 1}
            onChange={handleRatingChange}
          />
          1 stars and above
        </label>
      </div>
      <hr />
      <h3>Price</h3>
        <div className={Styles.price}>
          <input
            type="number"
            placeholder="Lowest"
            value={lowPrice}
            onChange={(e) => setLowPrice(e.target.value)}
          />
          <span> &nbsp; - &nbsp; </span>
          <input
            type="number"
            placeholder="Highest"
            value={highPrice}
            onChange={(e) => setHighPrice(e.target.value)}
          />
        </div>
        <br />
        <center>
          <button onClick={filterPrice} className={Styles.button}>Filter</button>
        </center>
    </div>
  );
};
