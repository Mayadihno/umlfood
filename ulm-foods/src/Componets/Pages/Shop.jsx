import React, { useState } from "react";
// import Footer from "../Footer/Footer";
// import Navbars from "../Navbar/Navbars";
// import Topbar from "../Topbar/Topbar";
import Products from "./Products";

const Shop = ({ product, addTocart }) => {
  const [state, setState] = useState();
  const display = product
    .filter((product) => {
      if (state == null) {
        return product;
      } else {
        return product.name.toLowerCase().includes(state.toLowerCase());
      }
    })
    .map((product) => {
      return (
        <div className="col-md-4" key={product.id}>
          <Products product={product} addTocart={addTocart} />
        </div>
      );
    });

  return (
    <React.Fragment>
      {/* <Topbar />
      <Navbars /> */}
      <div className="container mt-5 py-3 shop">
        <input
          type="text"
          name=""
          id=""
          placeholder="search For available Goods here"
          onChange={(e) => setState(e.target.value)}
          className="input"
        />
        <div className="row">{display}</div>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Shop;
