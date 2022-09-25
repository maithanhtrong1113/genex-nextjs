import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import bg from "../../public/images/footer-back.jpg";
import { motion } from "framer-motion";
const Footer = () => {
  const animateImgeTop = {
    off: { scale: 0.6, opacity: 0.6 },
    on: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
      },
    },
  };
  return (
    <Fragment>
      <motion.div initial={"off"} whileInView={"on"} variants={animateImgeTop}>
        <Container
          fluid
          className="fables-footer-image fables-after-overlay white-color py-4 py-lg-5 bg-rules"
          style={{
            backgroundRepeat: " no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(${bg.src})`,
          }}
        >
          <Container>
            <Row>
              <Col className="col-12 col-lg-4 mb-4 mb-lg-0">
                <a
                  href="/"
                  className="fables-second-border-color border-bottom pb-3 d-block mb-3 mt-18"
                >
                  <img
                    className="img-footer"
                    src={"/images/logo/logo-genexwifi-flatform-footer.png"}
                  />
                </a>
                <p className="font-15 fables-third-text-color text-justify">
                  Tất cả các thông tin trên website này là bản quyền của GENEX.
                  Mọi sự sao chép vui lòng ghi rõ nguồn.
                </p>
              </Col>

              <Col className="col-12 col-sm-6 col-lg-4">
                <h2
                  className="font-20 semi-font fables-second-border-color border-bottom pb-3"
                  style={{ color: "white" }}
                >
                  Contact us
                </h2>
                <div className="my-3">
                  <h4 className="font-16 semi-font" style={{ color: "white" }}>
                    <span className="fables-iconmap-icon fables-second-text-color  font-20 mt-1 px-2 d-inline-block "></span>
                    Address
                  </h4>
                  <p className="font-14 fables-fifth-text-color mt-2 ml-4">
                    17/39 Đường Thanh Đa, Phường 27, Quận Bình Thạnh, Thành phố
                    Hồ Chí Minh, Việt Nam
                  </p>
                </div>
                <div className="my-3">
                  <h4 className="font-16 semi-font" style={{ color: "white" }}>
                    <span className="fables-iconphone fables-second-text-color px-2 font-20 mt-1 d-inline-block"></span>
                    Call Now
                  </h4>
                  <p className="font-14 fables-fifth-text-color mt-2 ml-4">
                    (+84) 907-981-778
                  </p>
                </div>
                <div className="my-3">
                  <h4 className="font-16 semi-font" style={{ color: "white" }}>
                    <span className="fables-iconemail fables-second-text-color px-2 font-20 mt-1 d-inline-block"></span>
                    Mail
                  </h4>
                  <p className="font-14 fables-fifth-text-color mt-2 ml-4">
                    tiennn@genexwifi.com
                  </p>
                </div>
              </Col>
              <Col className="col-12 col-sm-6 col-lg-4">
                <h2
                  className="font-20 semi-font fables-second-border-color border-bottom pb-3 mb-3"
                  style={{ color: "white" }}
                >
                  EXPLORE OUR SITE
                </h2>
                <ul className="nav fables-footer-links">
                  <li>
                    <a href="/product">Sản phẩm</a>
                  </li>
                  <li>
                    <a href="/wifiMarketing">Giải pháp Wifi Marketing</a>
                  </li>
                  <li>
                    <a href="/hospitality">
                      Giải pháp Hospitality Internet Billing
                    </a>
                  </li>
                  <li>
                    <a href="/wifiDspplaform">Wifi DSP Platform</a>
                  </li>
                  <li>
                    <a href="/partner">Khách hàng - Đối tác</a>
                  </li>
                  <li>
                    <a href="/about">Về GENEX</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container
          fluid
          className="copyright fables-main-background-color mt-0 border-0 white-color"
        >
          <ul className="nav fables-footer-social-links justify-content-center fables-light-footer-links">
            <li>
              <a href="http://fb.me/genex.wifi">
                <i className="fab fa-google-plus-square"></i>
              </a>
            </li>
            <li>
              <a href="http://fb.me/genex.wifi">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="http://fb.me/genex.wifi">
                <i className="fab fa-pinterest-square"></i>
              </a>
            </li>
          </ul>
          <p className="mb-0" style={{ marginRight: "13px" }}>
            Copyright © GENEX 2019. All rights reserved.
          </p>
        </Container>
      </motion.div>
    </Fragment>
  );
};

export default Footer;
