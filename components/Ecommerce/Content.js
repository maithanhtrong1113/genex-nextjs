import React, { Fragment } from "react";

import { motion } from "framer-motion";
import { Row, Container, Col } from "reactstrap";
const Content = () => {
  const animateImgeTop = {
    off: { y: -100, opacity: 0 },
    on: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
      },
    },
  };
  return (
    <Fragment>
      <Container>
        <div className="overflow-hidden">
          <div className="text-center ">
            <motion.h2
              className="mt-3 font-18 mb-3 fw-bold text-justify"
              initial={"off"}
              animate={"on"}
              variants={animateImgeTop}
            >
              Ngày nay báo đài nói rất nhiều đến chuyển đổi số, các giải pháp
              công nghệ giúp việc bán hàng tốt hơn, chăm sóc khách hàng tốt hơn
              hay các giải pháp công nghệ tích hợp với các nền tảng thương mại
              điện tử, các sàn thương mại điện tử như Tiki, Lazada, Shopee hay
              Sendo. Những nền tảng thương mại điện tử đang dần dần đi vào cuộc
              sống. Ngoài những nền tảng lớn ra, doanh nghiệp cũng cần phải xây
              dựng nền tảng thương mại điện tử – ecommerce platform cho riêng
              mình, dần dần bước chuyển đổi số, ngoài những nền tảng lớn ra, các
              doanh nghiệp cũng dần nhận biết được đó là xây trên đất nhà người
              khác, chứ không phải đất nhà mình, nên xu hướng tự xây dựng nền
              tảng thương mại điện tử cùng phần mềm đang trở lên cấp bách hơn
              bao giờ hết.
            </motion.h2>
          </div>

          <Row>
            <Col className="col-12 col-lg-12 mb-4">
              <h2 className="fw-bold text-center my-3">
                Nền tảng Ecommerce dApp
              </h2>
              <p className="font-18 container mt-1 font-size-mobile text-justify">
                Chúng tôi cung cấp giải pháp tích hợp ứng dụng phi tập trung vào
                nền tảng thương mại điện tử
              </p>
              <Row className=" overflow-hidden mt-2">
                <Col className="col-12 col-md-12 mb-2 ">
                  <img
                    alt=""
                    src={"/images/ecommerce-dapp/oll.png"}
                    className="w-100"
                  />
                </Col>
              </Row>
              <Row className=" overflow-hidden mt-2">
                <Col className="col-12 col-md-12 mb-2 wow bounceInDown">
                  <img
                    alt=""
                    src={"/images/ecommerce-dapp/oll1.png"}
                    className="w-100"
                  />
                </Col>
              </Row>
              <Row className=" overflow-hidden mt-2">
                <Col className="col-12 col-md-12 mb-2 wow bounceInDown">
                  <img
                    alt=""
                    src={"/images/ecommerce-dapp/oll2.png"}
                    className="w-100"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Content;
