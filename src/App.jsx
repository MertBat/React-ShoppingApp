import { Header } from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.jsx";
import Styles from "./App.module.css";
import { Home } from "./components/Content/Home/Home.jsx";
import { Product } from "./components/Content/Product/Product.jsx";
import { ApiContextProvider } from "./Contexts/ApiContext.jsx";
import { FilterProvider } from "./Contexts/FilterContext.jsx";
import { BasketProvider } from "./Contexts/BasketContex.jsx";

function App() {
  return (
    <BrowserRouter>
    <BasketProvider>
      <div>
        <div className={Styles.header}>
          <Header></Header>
        </div>
        <hr className={Styles.line}/>
        <div className={Styles.content}>
          <ApiContextProvider>
            <FilterProvider>   
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
              </Routes>
            </FilterProvider>
          </ApiContextProvider>
        </div>
        <div className={Styles.footer}>
          <Footer></Footer>
        </div>
      </div>
      </BasketProvider>
    </BrowserRouter>
  );
}

export default App;
