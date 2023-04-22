import React from "react";
import Carousel from "./Caroucel/Carousel";
import Features from "./Features/Features";
import Popular from "./Popular/Popular";
import Shipping from "./Shipping";
import Smiles from "../Smiles/Smiles";

const Home = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Shipping />
      <Popular />
      <Features />
      <Smiles />
    </React.Fragment>
  );
};

export default Home;
