import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      {location.pathname === "/" || location.pathname === "/no-permision" ? (
        ""
      ) : (
        <div className="footer">
          <div className="container mt-4 py-3">
            <div className="row">
              <div className="col-md-4 mt-3">
                <Link to="/home" className="logoss">
                  3M<small className="solution">Logistics Solution</small>
                </Link>
                <div className="icons">
                  <i className="fa-brands fa-facebook text-primary"></i>
                  <i className="fa-brands fa-twitter text-info"></i>
                  <i className="fa-brands fa-google text-danger"></i>
                  <i className="fa-brands fa-instagram text-warning"></i>
                </div>
                <div className="location">
                  <div className="local">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="local-info">
                    <p>
                      Hyden Alle 48.1.th 2770, <br /> kastrup, <br /> Denmark.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 contact_info">
                <h3>Company Contact Information</h3>
                <div className="info">
                  <p className="fw-bold">You can reach us on:</p>
                  <h6>Phone: +4542226658</h6>
                  <h6>WhatsApp: +4542226658</h6>
                  <h6>Email: mlogisticssolution@gmail.com</h6>
                  <p>
                    For further enquiries, questions, and feedback, kindly fill
                    our form by clicking here
                    <Link to="/contact">
                      <span> Contact Form</span>
                    </Link>
                    and we shall get back to you.
                  </p>
                </div>
              </div>
              <div className="col-md-4 features mt-3">
                <h3>3M Logistics Solution Features</h3>
                <div className="a-links">
                  <Link to="/shop">Store</Link>
                  <Link to="/contact">Contact Us</Link>
                  <Link to="/about">About Us</Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="text-center mt-2 py-2 developer">
              <h6 className="text-white">
                Maintained and Developed by Mayadihno@gmail.com ||
                <a
                  href="https://wa.me/+2348136908207"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-whatsapp whatsapp"></i>
                </a>
              </h6>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Footer;
