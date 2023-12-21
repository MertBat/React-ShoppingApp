import { Header } from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.jsx";
import Styles from "./App.module.css";
import { Home } from "./components/Content/Home/Home.jsx";
import { Product } from "./components/Content/Product/Product.jsx";
import { ApiContextProvider } from "./Services/ApiContext.jsx";
import { FilterProvider } from "./Services/FilterContext.jsx";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
