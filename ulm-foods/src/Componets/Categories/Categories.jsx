import { Container } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { commerce } from "../lib/Commerce";
import ProductCart from "./ProductCart";
import "../Categories/Categories.css";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

const Categories = ({ addTocart }) => {
  const [products, setProduct] = useState([]);

  const fetchProduct = async () => {
    const { data: products } = await commerce.products.list();
    const { data: categoriesData } = await commerce.categories.list({
      sortDirection: "asc",
    });

    const productsPerCategory = categoriesData.reduce((acc, category) => {
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter((product) =>
            product.categories.find((cat) => cat.id === category.id)
          ),
        },
      ];
    }, []);

    setProduct(productsPerCategory);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <React.Fragment>
      {products.map((category, index) => {
        return (
          <Container id="products" key={index}>
            <div className="headline">
              <h3 className="text-center">{category.name}</h3>
              <small>Swipe right to see more product</small>
            </div>

            <Splide
              options={{
                perPage: 3,
                breakpoints: {
                  1024: {
                    perPage: 2,
                  },
                  767: {
                    perPage: 2,
                  },
                  640: {
                    perPage: 1,
                  },
                },
                drag: "free",
                pagination: false,
                arrows: false,
                gap: "2rem",
              }}
            >
              {category.productsData.map((product) => (
                <SplideSlide key={product.id}>
                  <ProductCart product={product} addTocart={addTocart} />
                </SplideSlide>
              ))}
            </Splide>
          </Container>
        );
      })}
    </React.Fragment>
  );
};

export default Categories;
