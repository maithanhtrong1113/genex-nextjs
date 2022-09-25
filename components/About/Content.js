import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
const Content = () => {
  const animateImgeTop = {
    off: { scale: 0.4 },
    on: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };
  return (
    <Fragment>
      <Container>
        <Row className=" my-4 my-md-5 overflow-hidden">
          <Col className="col-12 col-sm-6 col-md-3 text-center mb-4 mb-md-0 ">
            <motion.div
              initial={"off"}
              animate={"on"}
              variants={animateImgeTop}
            >
              <span className="fables-iconmap-icon fa-2x fables-second-background-color1 text-white rounded-circle d-inline-block p-4"></span>
              <h2 className="font-16 semi-font fables-second-text-color my-3">
                Address
              </h2>
              <p className="font-14 fables-forth-text-color semi-font">
                17/39 Đường Thanh Đa, Phường 27, Quận Bình Thạnh, Thành phố Hồ
                Chí Minh, Việt Nam
              </p>
            </motion.div>
          </Col>
          <Col className="col-12 col-sm-6 col-md-3 text-center mb-4 mb-md-0 ">
            <motion.div
              initial={"off"}
              animate={"on"}
              variants={animateImgeTop}
            >
              <span className="fables-iconbussiness fa-2x fables-second-background-color1 text-white rounded-circle d-inline-block p-4"></span>
              <h2 className="font-16 semi-font fables-second-text-color my-3">
                Office
              </h2>
              <p className="font-14 fables-forth-text-color semi-font">
                247/8B Đường Hoàng Hoa Thám, Phường 5, Quận Phú Nhuận, Tp.HCM,
                Việt Nam
              </p>
            </motion.div>
          </Col>
          <Col className="col-12 col-sm-6 col-md-3 text-center mb-4 mb-md-0 ">
            <motion.div
              initial={"off"}
              animate={"on"}
              variants={animateImgeTop}
            >
              <span className="fables-iconphone fa-2x fables-second-background-color1 text-white rounded-circle d-inline-block p-4"></span>
              <h2 className="font-16 semi-font fables-second-text-color my-3">
                Mail & Phone number
              </h2>
              <p className="font-14 fables-forth-text-color semi-font">
                tiennn@genexwifi.com
              </p>
              <p className="font-14 fables-forth-text-color semi-font">
                (+84) 907-981-778
              </p>
            </motion.div>
          </Col>
          <Col className="col-12 col-sm-6 col-md-3 text-center mb-4 mb-md-0 ">
            <motion.div
              initial={"off"}
              animate={"on"}
              variants={animateImgeTop}
            >
              <span className="fables-iconshare-icon fa-2x fables-second-background-color1 text-white rounded-circle d-inline-block p-4"></span>
              <h2 className="font-16 semi-font fables-second-text-color my-3">
                Stay In Touch
              </h2>
              <ul className="nav fables-contact-social-links">
                <li>
                  <a href="http://fb.me/genex.wifi">
                    <i className="fab fa-facebook-f fables-forth-text-color fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-instagram fables-forth-text-color fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-twitter fables-forth-text-color fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-linkedin fables-forth-text-color fa-fw"></i>
                  </a>
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Content;
