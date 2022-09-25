import React from "react";
import bg from "../../public/images/index/background-new-white.jpg";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
const CarouselHome = () => {
  const animateImgeBot = {
    off: { y: 300, opacity: 0 },
    on: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
      },
    },
  };
  const animateImgeBot1 = {
    off: { y: 300, opacity: 0 },
    on: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 4,
        type: "spring",
      },
    },
  };
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className="fables-after-overlay overlay-lighter bg-rules "
    >
      <Container>
        <Row>
          <Col className="col-md-12 col-lg-12 mx-auto nav-0 z-index pt-md-5 ">
            <Carousel className=" z-index py-md-5 fixCus">
              <Carousel.Item className="head-padding">
                <motion.h1
                  className="fables-main-text-color text-center fw-bold mb-1"
                  initial={"off"}
                  animate={"on"}
                  variants={animateImgeBot}
                >
                  WiFi Marketing Platform
                </motion.h1>
                <motion.p
                  className="mb-3 light-font fables-header-slider-details"
                  initial={"off"}
                  animate={"on"}
                  variants={animateImgeBot1}
                >
                  GENEX cung cấp giải pháp
                  <span id="spWifi"> Wifi Marketing</span>, quảng cáo dựa trên
                  truy cập của người dùng thông qua mạng wifi công cộng được cài
                  đặt cấu hình những bước yêu cầu đăng nhập của đơn vị quảng cáo
                  nhằm giới thiệu tới người sử dụng mạng Wifi những sản phẩm,
                  dịch vụ, thương hiệu của doanh nghiệp.
                </motion.p>
              </Carousel.Item>
              <Carousel.Item className="head-padding">
                <h1 className="fables-main-text-color text-center fw-bold mb-1">
                  Blockchain Development
                </h1>
                <p className=" mb-3 light-font fables-header-slider-details ">
                  GENEX không chỉ hỗ trợ các bạn xây dựng Defi - Dapps trên các
                  mạng blockchain như Ethereum, Binance, ... GENEX còn còn có
                  khả năng
                  <span id="spWifi"> xây dựng mạng blockchain </span>
                  từ bước tạo thuật toán đồng thuận, dựng server full node, dựng
                  explorer, và các ứng dụng nền tảng đi kèm cho một mạng
                  blockchain hoàn chỉnh.
                </p>
              </Carousel.Item>
              <Carousel.Item className="head-padding">
                <h1 className="fables-main-text-color text-center fw-bold mb-1">
                  Ecommerce Platform
                </h1>
                <p className=" mb-3 light-font fables-header-slider-details">
                  GENEX cung cấp dịch vụ outsource website thương mại điện tử
                  với đầy đủ tính năng, giao diện đẹp, độc đáo, sáng tạo phù hợp
                  với từng cá nhân, doanh nghiệp.
                </p>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CarouselHome;
