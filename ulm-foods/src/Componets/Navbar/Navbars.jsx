import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Navbar/Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import { NavDropdown } from "react-bootstrap";
import React from "react";

function Navbars({ total_cart_items, product }) {
  const location = useLocation();
  // when header scroll at top
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <React.Fragment>
      {location.pathname === "/" || location.pathname === "/no-permision" ? (
        ""
      ) : (
        <div className="header">
          <Navbar expand="lg">
            <Container>
              <Link to="/home" className="logo">
                3M<small className="solution">Logistics Solution</small>
              </Link>

              <Navbar.Toggle
                id="navbarBtn"
                className="navbar-toggler"
                data-bs-target="#navbarNav"
                data-bs-toggle="collapse"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              />

              <Navbar.Collapse className="navbar-collapse" id="navbarNav">
                <Nav className="ms-auto links nav-link-mobile">
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive ? "active-links" : ""
                    }
                  >
                    Home
                  </NavLink>
                  <NavDropdown title="Store" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/shop">
                      All Product
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categories">
                      Product Per Categories
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive ? "active-links" : ""
                    }
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                      isActive ? "active-links" : ""
                    }
                  >
                    Contact Us
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="searchComp">
            <Search total_cart_items={total_cart_items} product={product} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Navbars;
