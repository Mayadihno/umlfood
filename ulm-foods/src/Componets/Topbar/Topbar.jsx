import React from "react";
import { useLocation } from "react-router-dom";
import "../Topbar/Topbar.css";

const Topbar = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      {location.pathname === "/" ||
      location.pathname === "/no-permision" ||
      location.pathname === "/personal" ? (
        ""
      ) : (
        <header>
          <div className="topbar">
            <div className="drinks">
              <h5>Welcome to high quality African Foods and Drinks store!</h5>
              <div className="icons">
                <div className="icons-item opening-icon">
                  <i className="fas fa-clock" aria-hidden="true"></i>
                  <div className="icons-text ">
                    <h6>Opening Hour</h6>
                    <small>Mon-Sun, 8:00am-10:00pm</small>
                  </div>
                </div>
                <div className="icons-item phone">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <div className="icons-text ">
                    <h6>Call Us</h6>
                    <small>+4542226658</small>
                  </div>
                </div>
                <div className="icons-item">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <div className="icons-text ">
                    <h6>E-Mail Us</h6>
                    <small> mlogisticssolution@gmail.com</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </React.Fragment>
  );
};

export default Topbar;
