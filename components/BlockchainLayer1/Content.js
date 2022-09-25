import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import bg from "../../public/images/products/dsp.jpg";
const Content = () => {
  const animateImgeRight = {
    off: { x: 100, opacity: 0 },
    on: {
      x: 0,
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
        <div className="my-2 my-md-2 overflow-hidden">
          <Row>
            <Col className="col-12">
              <Row>
                <Col className="col-sm-5 mt-12">
                  <img
                    alt="img"
                    src={"/images/openchain/blockchain.gif"}
                    className="w-100"
                  />
                </Col>
                <Col className="col-12 py-lg-0 col-sm-7 p-sm-0">
                  <motion.div
                    className="fables-bussiness-caption p-4"
                    initial={"off"}
                    whileInView={"on"}
                    variants={animateImgeRight}
                  >
                    <h2 className="fables-second-text-color my-0 font-25 fw-bold position-relative z-index  title-3">
                      Layer 1 Blockchain là gì?
                    </h2>
                    <div className="fables-forth-text-color position-relative z-index mt-2 mb-1  text-justify content-dsp">
                      <span>
                        <img
                          alt="img"
                          src={"/images/products/tick-green.png"}
                          className="img-tick"
                        />
                      </span>
                      Layer 1 là một nền tảng chẳng hạn như Bitcoin, BNB Chain,
                      Ethereum hoặc Openchain và cơ sở hạ tầng cơ bản của nó.
                      Các layer 1 có thể xác thực và hoàn thiện các giao dịch mà
                      không cần mạng khác. Việc cải thiện khả năng mở rộng của
                      layer 1 là rất khó, như chúng ta đã thấy với Bitcoin. Như
                      một giải pháp, các nhà phát triển tạo ra các giao thức
                      layer 2 dựa trên layer 1 để bảo mật và đồng thuận.
                      Lightning Network của Bitcoin là một ví dụ về layer 2. Nó
                      cho phép người dùng thực hiện các giao dịch một cách tự do
                      trước khi ghi chúng vào chuỗi chính. <br />
                      <br />
                      <span>
                        <img
                          alt="img"
                          src={"/images/products/tick-green.png"}
                          className="img-tick"
                        />
                      </span>
                      Tóm lại đơn giản Layer 1 là lớp đầu tiên – blockchain ban
                      đầu, lớp này có thiếu sót gì cần cải thiện thì sẽ sinh ra
                      Layer 2 – lớp công nghệ giải quyết vấn đề còn thiếu sót
                      của lớp đầu tiên. <br />
                      <br />
                    </div>
                  </motion.div>
                </Col>
              </Row>

              <div
                className="fables-after-overlay py-1 py-lg-3 bg-rules"
                style={{
                  backgroundImage: `url(${bg.src})`,
                }}
              >
                <Container>
                  <h2 className="position-relative z-index white-color font-25 fw-bold text-center mb-4 title-3">
                    Phát triển sản phẩm
                  </h2>
                  <Carousel className="z-index fixCarouselDSP1">
                    <Carousel.Item>
                      <Row className="text-center fables-testimonial-carousel-item rounded py-4">
                        <div className="col-12 col-md-3">
                          <h3 className="font-14 semi-font text-white text-4">
                            OpenChain Development
                          </h3>
                        </div>
                        <div className="col-12 col-md-9 p-0 p-md-2">
                          <div className="fables-testimonial-detail font-15 fst-italic text-justify text-white p-4 position-relative">
                            Chúng tôi đang làm việc trên OpenChain, một cơ sở hạ
                            tầng blockchain, là một mạng hiệu suất cao, gần như
                            bằng 0 (về mặt kinh tế) và blockchain liên kết tức
                            thì có thể xử lý hàng tỷ giao dịch mỗi ngày.
                          </div>
                        </div>
                      </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Row className="text-center fables-testimonial-carousel-item rounded py-4">
                        <div className="col-12 col-md-3">
                          <h3 className="font-14 semi-font text-white text-4">
                            OpenChain
                          </h3>
                        </div>
                        <div className="col-12 col-md-9 p-0 p-md-2">
                          <div className="fables-testimonial-detail font-15 fst-italic text-justify text-white p-4 position-relative">
                            Theo quan điểm của chúng tôi, một ví tiền xu an toàn
                            và thân thiện với người dùng, cung cấp quyền kiểm
                            soát tài chính trở lại cho người dùng là một trong
                            những phần quan trọng nhất của cơ sở hạ tầng của
                            "Internet of Value". Nó sẽ thu hẹp khoảng cách giữa
                            người đam mê tiền điện tử và người dùng phổ thông -
                            và có thể tăng tỷ lệ chấp nhận tiền điện tử lên gấp
                            10 lần nếu làm đúng. OpenChain chia sẻ cùng một cơ
                            sở hạ tầng phụ trợ của ứng dụng OpenChain như
                            ReplyBlock, các API của bên thứ ba, hệ thống nhận
                            dạng phi tập trung, hợp đồng thông minh trao đổi
                            tiền xu và các API, v.v.
                          </div>
                        </div>
                      </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Row className="text-center fables-testimonial-carousel-item rounded py-4">
                        <div className="col-12 col-md-3">
                          <h3 className="font-14 semi-font text-white text-4">
                            OpenChain DEX & dApp
                          </h3>
                        </div>
                        <div className="col-12 col-md-9 p-0 p-md-2">
                          <div className="fables-testimonial-detail font-15 fst-italic text-justify text-white p-4 position-relative">
                            Poolswap.ai: Poolswap là một sàn giao dịch phi tập
                            trung chạy trên Openchain, với rất nhiều tính năng
                            khác cho phép bạn kiếm và giành được mã thông báo,
                            nhiều cầu nối (BSC, ETH, TRON, POLYGON, SOLANA,
                            v.v.).
                          </div>
                        </div>
                      </Row>
                    </Carousel.Item>
                  </Carousel>
                </Container>
              </div>

              <div
                className=" fables-after-overlay text-center"
                style={{
                  backgroundImage: `url(${bg.src})`,
                }}
              >
                <Container>
                  <Row>
                    <div className="col-12 col-md-12">
                      <h3 className="position-relative z-index white-color font-22 fw-bold text-center mb-4 title-3">
                        Hy vọng bài viết trên đã giúp bạn hiểu hơn về mạng
                        Openchain là gì và biết cách ứng dụng blockchain phù hợp
                        với doanh nghiệp của mình!!
                      </h3>
                    </div>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Content;
