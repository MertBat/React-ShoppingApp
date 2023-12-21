import React, { useContext, useEffect } from "react";
import { Orderbar } from "./OrderBar/OrderBar";
import { ProductList } from "./ProductList/ProductList";
import Styles from "./Product.module.css";
import { ApiContext } from "../../../Contexts/ApiContext";
import { Sidebar } from "./Sidebar/Sidebar";
import { FilterContext } from "../../../Contexts/FilterContext";

export const Product = () => {
  const { getProducts, products } = useContext(ApiContext);
  const{setReadyProducts} = useContext(FilterContext)

  useEffect(() => {
    getProducts();
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
