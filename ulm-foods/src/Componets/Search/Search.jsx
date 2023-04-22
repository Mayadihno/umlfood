import React from "react";
import "../Search/Search.css";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Search = ({ total_cart_items }) => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <React.Fragment>
      <div className="top header">
        <div className="container">
          <div className="search">
            <div className="tax">
              <h3>
                All Goods in this Store are all in wholesales Price plus Tax
              </h3>
            </div>
            <div className="cartWhat">
              <Link to="/cart">
                <div className="icons">
                  <Badge badgeContent={total_cart_items} color="primary">
                    <ShoppingCart color="white" fontSize="12px" />
                  </Badge>
                </div>
              </Link>
              <a
                href="https://wa.me/+4542226658"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
