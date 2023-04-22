import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import ScrollTop from "../ScrolTop/ScrollTop";

const EmptyCart = () => {
  return (
    <React.Fragment>
      <ScrollTop>
        <div className="container mt-5 py-3">
          <h3 className="text-center">
            You have No item in your Shopping Cart,start adding some !
          </h3>
          <Link to="/shop">
            <button className="btn btn-dark mt-3">Go Back To Store</button>
          </Link>
          <div className="text-center mx-auto">
            <Loading />
          </div>
        </div>
      </ScrollTop>
    </React.Fragment>
  );
};

export default EmptyCart;
