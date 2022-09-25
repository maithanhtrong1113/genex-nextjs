import React from "react";

import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
const CarouselProduct = () => {
  return (
    <React.Fragment>
      <Col className="col-12 col-lg-12 mt-8 ">
        <Carousel>
          <Carousel.Item>
            <img
              src={"/images/banner-sliders/banner-slider-1.jpg"}
              className="w-100 fixHeight"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={"/images/banner-sliders/banner-slider-4.jpg"}
              className="w-100 fixHeight"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={"/images/banner-sliders/banner-slider-5.jpeg"}
              className="w-100 fixHeight"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={"/images/banner-sliders/banner-slider-6.jpeg"}
              className="w-100 fixHeight"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </React.Fragment>
  );
};

export default CarouselProduct;
