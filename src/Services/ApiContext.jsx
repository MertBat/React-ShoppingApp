import { useState, createContext } from "react";
import axios from "axios";
import { Product } from "../components/Content/Product/Product";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const allProducts = response.data.products;
      setProducts(allProducts);
      await setCategories([...new Set(allProducts.map((product) => product.category))]);
      await setBrands([...new Set(allProducts.map((product) => product.brand))]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ApiContext.Provider value={{ getProducts, products, categories, brands }}>
      {children}
    </ApiContext.Provider>
  );
};
