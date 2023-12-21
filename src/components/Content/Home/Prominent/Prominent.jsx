import React, { useContext, useEffect } from "react";
import Styles from "./Prominent.module.css";
import { ApiContext } from "../../../../Contexts/ApiContext.jsx";
import {Card} from "../../../../Common/Card.jsx"

export const Prominent = () => {
  const { getProducts, products } = useContext(ApiContext);

  useEffect(() => {
    (async () => {
      await getProducts();
    })();
    
  }, []);
  return (
    <div className={Styles.cards}>
      {products.map((product) => 
        <Card
          id={product.id}
          title={product.title}
          image={product.thumbnail}
          price={product.price}
          description={product.description}
        ></Card>
      )
      }
    </div>
  );
};
