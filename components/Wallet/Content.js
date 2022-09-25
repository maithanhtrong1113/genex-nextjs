import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
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
        <Row>
          <Col className="col-12 col-lg-12">
            <motion.h2
              className="fw-bold my-3 text-center"
              initial={"off"}
              whileInView={"on"}
              variants={animateImgeTop}
            >
              Blockchain Wallet là gì?
            </motion.h2>
            <p className="container font-size-mobile">
              Bản chất là nó nơi lưu trữ tiền điện tử của bạn, nó được dùng để
              gửi, nhận tiền và theo dõi số dư.
            </p>
            <p className="container font-size-mobile">
              Ví của tiền điện tử (A cryptocurrency wallet) là một phần mềm lưu
              trữ khóa riêng và công khai. Nếu bạn muốn sử dụng Bitcoin hay bất
              cứ tiền điện tử nào khác, bạn cần có ví để đựng nó.
            </p>
            <p className="container font-size-mobile">
              Ví có thể dùng để lưu trữ nhiều loại coin hay token cùng một lúc,
              nhưng hầu hết các ví sẽ chỉ hỗ trợ một số loại tiền điện tử nhất
              định.
            </p>
          </Col>

          <Col className="col-12 col-lg-12">
            <h2 className="fw-bold my-3 text-center">
              OpenChain Wallet là gì?
            </h2>
            <p className="container mt-4 font-size-mobile">
              OpenChain Wallet là một trong những sản phẩm mà GENEX đã phát
              triển, gia công cho khách hàng. Ví tiền điện tử Openchain wallet
              dựa trên nền tảng OpenChain network(OPC), đồng thời là một plugin
              add-on có thể chạy một Dapps ngay trên trình duyệt máy tính. Hiện
              tại, ví hỗ trợ trình duyệt Chrome, FireFox, Opera và Brave.
            </p>
            <p className="container font-size-mobile">
              OpenChain Wallet như một cánh cổng kết nối ví của người dùng với
              dự án như AMM (sàn phi tập trung), Lending (cho vay), Farming
              (cung cấp thanh khoản),…
            </p>
            <p className="container font-size-mobile">
              Bằng cách tự tạo ví hoặc nhập Private Key, Seed Phrase vào
              OpenChain Wallet, hệ thống sẽ truy xuất tài sản trong ví và hiện
              lên cửa sổ OpenChain Wallet, từ đó người dùng có thể tham gia các
              hoạt động trên DeFi.
            </p>
          </Col>
          <Col className="col-12 col-lg-12">
            <h2 className="fw-bold my-3 text-center">
              Các tính năng của OpenChain Wallet
            </h2>
            <p className="container font-size-mobile">
              Hình bên dưới là giao diện cơ bản của Openchain wallet. Bạn có thể
              tải về extension
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://chrome.google.com/webstore/detail/openchain-wallet/gckeinaemakjllipmkjapfkpiimjpcla/related"
                className="css-3r945m etyh6ra0"
              >
                Tại đây
              </a>
            </p>
          </Col>

          <Col className="col-12">
            <Carousel className="fixCusWallet">
              <Carousel.Item>
                <Row className="text-center d-flex justify-content-center fables-testimonial-carousel-item rounded py-4">
                  <img src={"/images/wallet/index.png"} className="wwallet" />
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className=" text-center d-flex justify-content-center fables-testimonial-carousel-item rounded py-4">
                  <img
                    src={"/images/wallet/create-pass.png"}
                    className=" wwallet"
                  />
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className=" text-center d-flex justify-content-center fables-testimonial-carousel-item rounded py-4">
                  <img src={"/images/wallet/name.png"} className="wwallet " />
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className=" text-center d-flex justify-content-center fables-testimonial-carousel-item rounded py-4">
                  <img
                    src={"/images/wallet/token-manage.png"}
                    className="wwallet"
                  />
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className=" text-center d-flex justify-content-center fables-testimonial-carousel-item rounded py-4">
                  <img
                    src={"/images/wallet/send-token.png"}
                    className=" wwallet"
                  />
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Content;
