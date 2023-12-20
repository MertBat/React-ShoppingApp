import React, { useContext, useEffect } from "react";
import { Orderbar } from "./OrderBar/OrderBar";
import { ProductList } from "./ProductList/ProductList";
import Styles from "./Product.module.css";
import { ApiContext } from "../../../Services/ApiContext";
import { Sidebar } from "./Sidebar/Sidebar";
import { FilterContext } from "../../../Services/FilterContext";

export const Product = () => {
  const { getProducts, products } = useContext(ApiContext);
  const{setReadyProducts} = useContext(FilterContext)

  useEffect(async() => {
   await getProducts();
  }, []);

  useEffect(()=>{
    setReadyProducts(products);
  },[products])

  return (
    <div className={Styles.products}>
      <Sidebar />
      <div className={Styles["view-products"]}>
        <Orderbar />
        <ProductList />
      </div>
    </div>
  );
};
