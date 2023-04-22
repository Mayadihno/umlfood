import React from "react";
import "../Home/Shipping.css";

const Shipping = () => {
  return (
    <React.Fragment>
      <div className="container mt-4 py-3">
        <div className="row">
          <div className="col-md-3 mt-2">
            <div className="card">
              <div className="truck">
                <i className="fas fa-truck-field"></i>
                <div className="truck-text">
                  <h6 className="h6style"> Free Shipping</h6>
                  <p className="">On all orders over Kr1000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-2">
            <div className="card">
              <div className="truck">
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                <div className="truck-text">
                  <h6 className="h6style"> Free Returns</h6>
                  <p className="">Returns are free within 5 days</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-2">
            <div className="card">
              <div className="truck">
                <i className="fa-solid fa-user-lock"></i>
                <div className="truck-text">
                  <h6 className="h6style"> 100% Payment Secure</h6>
                  <p className="">Your payment are safe with us.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-2">
            <div className="card">
              <div className="truck">
                <i className="fa-solid fa-headset"></i>
                <div className="truck-text">
                  <h6 className="h6style"> Support 24/7</h6>
                  <p className="">Contact us 24 hours a day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shipping;
