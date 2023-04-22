import React from "react";
import "../Features/Features.css";
import { useState } from "react";
import { useEffect } from "react";
import { commerce } from "../../lib/Commerce";
import "../Popular/Popular.css";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Features = () => {
  const [state, setState] = useState([]);

  const fetchProduct = async () => {
    const { data } = await commerce.products.list({
      limit: 6,
      sortDirection: "asc",
    });

    setState(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <React.Fragment>
      <section>
        <div className="popular">
          <div className="container mt-4 py-4">
            <div className="col-12 text-center">
              <h3>Featured categories Goods</h3>
              <div className="borders"></div>
              <h5>Swipe left to See Our Featured categorie for this week</h5>
            </div>
            <div className="popular-category">
              <div className="row">
                <Splide
                  options={{
                    perPage: 3,
                    breakpoints: {
                      1024: {
                        perPage: 2,
                      },
                      767: {
                        perPage: 3,
                      },
                      640: {
                        perPage: 1,
                      },
                    },
                    drag: "free",
                    pagination: false,
                    arrows: false,
                    gap: "3rem",
                  }}
                >
                  {state.map((items) => {
                    return (
                      <SplideSlide key={items.id}>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 100 }}
                          className="items-image"
                        >
                          <Link to={"/description/" + items.id}>
                            <img
                              src={items.image.url}
                              alt=""
                              className="img-fluid"
                            />
                            <p>{items.name}</p>
                          </Link>
                        </motion.div>
                      </SplideSlide>
                    );
                  })}
                </Splide>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Features;
