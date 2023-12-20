import { useContext, useEffect } from 'react'
import Styles from "./ProductList.module.css"
import { ApiContext } from '../../../../Services/ApiContext';
import { Card } from '../../../../Common/Card';
import { FilterContext } from '../../../../Services/FilterContext';

export const ProductList = () => {
  const { products } = useContext(ApiContext);
  const{filteredProducts, renderAfterOrderChange} = useContext(FilterContext)

  useEffect(() => {

  }, [renderAfterOrderChange]);
  return (
    <div className={Styles["product-list"]}>
      {filteredProducts.map((product) => 
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
  )
}
