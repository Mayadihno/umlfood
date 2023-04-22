import "./App.css";
import React, { useEffect } from "react";
import Topbar from "./Componets/Topbar/Topbar";
import Navbars from "./Componets/Navbar/Navbars";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../src/Componets/Home/Home";
import About from "../src/Componets/Pages/About";
import Shop from "../src/Componets/Pages/Shop";
import Contact from "../src/Componets/Pages/Contact";
import Login from "../src/Componets/Pages/Login";
import Permision from "../src/Componets/Permission/Permission";

//import commercejs api
import { commerce } from "./Componets/lib/Commerce";
import { useState } from "react";
import Description from "./Componets/Pages/Description";
import Cart from "./Componets/Carts/Cart";
import Checkout from "./Componets/Checkout/Checkout";
import Footer from "./Componets/Footer/Footer";
import ErrorPage from "./Componets/Pages/ErrorPage";
import Categories from "./Componets/Categories/Categories";
import NoPermision from "./Componets/Permission/NoPermision";
// import Personal from "./Componets/Personal/Personal";

function App() {
  const [product, setProduct] = useState([]);
  const [carts, setCarts] = useState({});

  //Fetch all the product from the commerce js api
  const fetchProduct = async () => {
    const { data } = await commerce.products.list({ limit: 200 });

    setProduct(data);
  };
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();
    setCarts(data);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCarts(item);
  };
  const handleUpdateQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCarts(response);
  };
  const handleRemoveCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCarts(response);
  };
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCarts(response);
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCarts(newCart);
  };

  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, []);

  return (
    <div className="App">
      <React.Fragment>
        <Topbar />
        <Navbars total_cart_items={carts.total_items} product={product} />
        <ToastContainer
          theme="dark"
          style={{ fontSize: "15px", color: "white", wordSpacing: "3px" }}
        />
        <Routes>
          <Route path="/" element={<Permision />} />
          {/* <Route path="/personal" element={<Personal />} /> */}
          <Route path="/home" element={<Home />} />
          <Route
            path="/categories"
            element={<Categories addTocart={handleAddToCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/shop"
            element={<Shop product={product} addTocart={handleAddToCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/description/:name"
            element={<Description addTocart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={carts}
                handleUpdateQty={handleUpdateQty}
                handleRemoveCart={handleRemoveCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout cart={carts} refreshCart={refreshCart} />}
          />
          <Route path="/no-permision" element={<NoPermision />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
