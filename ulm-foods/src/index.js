import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "swiper/css/bundle";
import "../src/Componets/Home/Caroucel/Styles.css";
import ScrollTop from "./Componets/ScrolTop/ScrollTop";
// import UserPersonal from "./Context/UserPersonal";

// import "@splidejs/react-splide/css/skyblue";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop>
        <App />
      </ScrollTop>
    </BrowserRouter>
  </React.StrictMode>
);
