import { useContext, useEffect } from "react";
import Styles from "./ProductList.module.css";
import { Card } from "../../../../Common/Card";
import { FilterContext } from "../../../../Contexts/FilterContext";

export const ProductList = () => {
  const { filteredProducts, renderAfterOrderChange } =
    useContext(FilterContext);

  useEffect(() => {}, [renderAfterOrderChange]);

  return (
    <div className={Styles["product-list"]}>
      {filteredProducts.length === 0 ? (
        <h3>There is nothing to show</h3>
      ) : (
        filteredProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.thumbnail}
            price={product.price}
            description={product.description}
            rating = {product.rating}
          ></Card>
        ))
      )}
    </div>
  );
};
