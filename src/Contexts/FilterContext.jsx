import React, { createContext, useEffect, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [readyProducts, setReadyProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [priceLow, setPriceLow] = useState(0);
  const [priceHigh, setPriceHigh] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [renderAfterOrderChange, setRenderAfterOrderChange] = useState(true);

  useEffect(() => {
    let filtered = readyProducts;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    if (selectedRating !== 0) {
      filtered = filtered.filter(
        (product) => Math.ceil(product.rating) >= selectedRating
      );
    }

    if (priceLow >= 0) {
      filtered = filtered.filter((product) => product.price >= priceLow);
    }

    if (priceHigh > 0) {
      filtered = filtered.filter((product) => product.price <= priceHigh);
    }
    setFilteredProducts(filtered);
  }, [
    selectedCategories,
    selectedBrands,
    selectedRating,
    priceLow,
    priceHigh,
    readyProducts,
  ]);

  const orderByPrice= (direction)=>{
    if(direction){
      setFilteredProducts(filteredProducts.sort((a,b)=> a.price - b.price))
    }else{
      setFilteredProducts(filteredProducts.sort((a,b)=> b.price - a.price))
    }
    setRenderAfterOrderChange((prev)=> !prev)
  }

  const orderByRating= (direction)=>{
    if(direction){
      setFilteredProducts(filteredProducts.sort((a,b)=> a.rating - b.rating))
    }else{
      setFilteredProducts(filteredProducts.sort((a,b)=> b.rating - a.rating))
    }
    setRenderAfterOrderChange((prev)=> !prev)
  }
  

  return (
    <FilterContext.Provider
      value={{
        setReadyProducts,
        setSelectedCategories,
        selectedCategories,
        setSelectedBrands,
        selectedBrands,
        setSelectedRating,
        setPriceLow,
        setPriceHigh,
        filteredProducts,
        orderByPrice,
        orderByRating,
        renderAfterOrderChange
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
