import React, { useContext, useEffect } from "react";
import Styles from "./Prominent.module.css";
import { ApiContext } from "../../../../Contexts/ApiContext.jsx";
import { Card } from "../../../../Common/Card.jsx";
import { faHourglass3 } from "@fortawesome/free-solid-svg-icons";
import { matchPath } from "react-router-dom";

export const Prominent = () => {
  const { getProducts, products } = useContext(ApiContext);

  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);
  return (
    <div className={Styles.cards}>
      {products
        .filter((product) => product.rating > 4.5)
        .map((product) => (
          <Card
          key={product.id}
            id={product.id}
            title={product.title}
            image={product.thumbnail}
            price={product.price}
            description={product.description}
            rating = {product.rating}
          ></Card>
        ))}
    </div>
  );
};
