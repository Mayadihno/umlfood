import React from "react";

// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Styles.css";

import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import image1 from "../Caroucel/Assets/images/rodnae-productions-7363098.jpg";
import image2 from "../Caroucel/Assets/images/kindel-media-6868788.jpg";
import image3 from "../Caroucel/Assets/images/rodnae-productio.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Carousel = () => {
  return (
    <React.Fragment>
      <section>
        <div className="slid">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectFade, Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <section className="back">
              <SwiperSlide>
                <img src={image1} alt="" />
                <motion.div
                  className="texts"
                  animate={{ y: 20, opacity: 1 }}
                  initial={{ y: -100, opacity: 0.1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 20 }}
                >
                  <h4> Welcome to 3M Logistics Solution</h4>
                  <h2> Where Goods are deliverd at your doorstep</h2>
                  <p>
                    <q>Happiness is not in Money, but in Shopping</q>
                  </p>
                  <Link to="/shop">
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255 255 255)",
                        boxShadow: "0px 0px 8px rgb(255 255 255)",
                      }}
                      animate={{ x: 0 }}
                      initial={{ x: "-120vw" }}
                      transition={{
                        delay: 1.3,
                        type: "spring",
                        stiffness: 500,
                      }}
                    >
                      Shop Now
                    </motion.button>
                  </Link>
                </motion.div>
              </SwiperSlide>
            </section>
            <SwiperSlide>
              <img src={image2} alt="" />
              <motion.div
                animate={{ y: 20, opacity: 1 }}
                initial={{ y: -100, opacity: 0.1 }}
                transition={{ delay: 4.8, type: "spring", stiffness: 20 }}
                className="texts"
              >
                <h4> Welcome to 3M Logistics Solution</h4>
                <h2> Where Goods are deliverd at your doorstep</h2>
                <p>
                  <q>Shop Happily stay Healthy</q>
                </p>
                <Link to="/shop">
                  <motion.button
                    animate={{ x: 0 }}
                    initial={{ x: "-120vw" }}
                    transition={{
                      delay: 5.3,
                      type: "spring",
                      stiffness: 500,
                    }}
                  >
                    Shop Now
                  </motion.button>
                </Link>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="" />
              <motion.div
                className="texts"
                animate={{ y: 20, opacity: 1 }}
                initial={{ y: -100, opacity: 0.1 }}
                transition={{ delay: 9.5, type: "spring", stiffness: 20 }}
              >
                <h4> Welcome to 3M Logistics Solution </h4>
                <h2> Where Goods are deliverd at your doorstep</h2>
                <p>Keep Calm and Shop with us today</p>
                <Link to="/shop">
                  <motion.button
                    animate={{ x: 0 }}
                    initial={{ x: "-120vw" }}
                    transition={{
                      delay: 10,
                      type: "spring",
                      stiffness: 500,
                    }}
                  >
                    Shop Now
                  </motion.button>
                </Link>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Carousel;
