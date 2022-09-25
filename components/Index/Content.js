import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import bg from "../../public/images/index/background1_e4e081d.jpg";
import { Modal, ModalBody } from "reactstrap";
import { Figure } from "react-bootstrap";
import { motion } from "framer-motion";
const Content = () => {
  const [modal, setModal] = useState(false);
  const [choose, setChoose] = useState(false);
  const [choose1, setChoose1] = useState(false);
  const [choose2, setChoose2] = useState(false);
  const [choose3, setChoose3] = useState(false);
  const toggle = () => {
    setChoose(!choose);
    setModal(!modal);
  };
  const toggle1 = () => {
    setChoose1(!choose1);
    setModal(!modal);
  };
  const toggle2 = () => {
    setChoose2(!choose2);
    setModal(!modal);
  };
  const toggle3 = () => {
    setChoose3(!choose3);
    setModal(!modal);
  };
  const animateImgeTop = {
    off: { y: -100, opacity: 0 },
    on: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
        bounce: 0.7,
      },
    },
    hover: {
      opacity: 0.6,
      marginLeft: 20,
      marginRight: 20,
      transition: { duration: 0.4 },
    },
  };
  const animateImgeLeft = {
    off: { x: -100, opacity: 0 },
    on: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
      },
    },
  };
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
  const animateImgeTopRoTate = {
    off: { y: -100, opacity: 0 },
    on: {
      y: 0,
      opacity: 1,
      rotate: 360,
      transition: {
        duration: 4,
        type: "spring",
        bounce: 0.5,
      },
    },
    hover: {
      opacity: 0.6,
      marginLeft: 10,
      transition: { duration: 0.4 },
    },
  };
  const animateImgeBotRoTate = {
    off: { y: 50, opacity: 0 },
    on: {
      y: 0,
      opacity: 1,
      rotate: 360,
      transition: {
        duration: 4,
        type: "spring",
        bounce: 0.5,
      },
    },
    hover: {
      opacity: 0.6,
      marginLeft: 10,
      transition: { duration: 0.4 },
    },
  };

  const animateImgeBot = {
    off: { y: 80, opacity: 0 },
    on: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
        bounce: 0.7,
      },
    },
    hover: {
      opacity: 0.6,
      marginLeft: 10,
      transition: { duration: 0.4 },
    },
  };

  return (
    <Fragment>
      <Container>
        <Row className="col-12">
          <h2 className="fw-bold text-center my-4 my-lg-5">
            QUẢNG CÁO WIFI GỒM NHỮNG HÌNH THỨC DƯỚI ĐÂY QUÝ KHÁCH CÓ THỂ THAM
            KHẢO
          </h2>
        </Row>
        <Row className="col-12">
          <Col className="col-4 col-md-2 mb-4 mb-lg-5">
            <div className="image-container translate-effect-right1">
              <a href="/">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  whileHover={"hover"}
                  variants={animateImgeTop}
                  src="images/index/phone-banner/banner-phone.png"
                  alt=""
                />
              </a>
            </div>
            <p className="fables-forth-text-color font-14">
              Yêu cầu người dùng đăng nhập xem banner quảng cáo
            </p>
          </Col>
          <Col className="col-4 col-md-2 mb-4 mb-lg-5">
            <div className="image-container translate-effect-right1">
              <a href="/">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  whileHover={"hover"}
                  variants={animateImgeBot}
                  src="images/index/phone-banner/banner-phone-video.png"
                  alt=""
                />
              </a>
            </div>
            <p className="fables-forth-text-color font-14">
              Yêu cầu người dùng xem video giới thiệu
            </p>
          </Col>
          <Col className="col-4 col-md-2 mb-4 mb-lg-5">
            <div className="image-container translate-effect-right1">
              <a href="/">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  whileHover={"hover"}
                  variants={animateImgeTop}
                  src="images/index/phone-banner/landingPage.png"
                  alt=""
                />
              </a>
            </div>
            <p className="fables-forth-text-color font-14">
              Yêu cầu người dùng truy cập website của doanh nghiệp
            </p>
          </Col>
          <Col className="col-4 col-md-2 mb-4 mb-lg-5">
            <div className="image-container translate-effect-right1">
              <a href="/">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  whileHover={"hover"}
                  variants={animateImgeBot}
                  src="images/index/phone-banner/banner-phone-Share.png"
                  alt=""
                />
              </a>
            </div>
            <p className="fables-forth-text-color font-14">
              Yêu cầu người dùng chia sẻ lên mạng xã hội.
            </p>
          </Col>
          <Col className="col-4 col-md-2 mb-4 mb-lg-5">
            <div className="image-container translate-effect-right1">
              <a href="/">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  whileHover={"hover"}
                  variants={animateImgeTop}
                  src="images/index/phone-banner/banner-phone-survey.png"
                  alt=""
                />
              </a>
            </div>
            <p className="fables-forth-text-color font-14">
              Yêu cầu người dùng điền thông tin doanh nghiệp cần khai thác như:
              Độ tuổi, giới tính, công việc,…
            </p>
          </Col>
          <Col className="col-4 col-md-2 mb-4 mb-lg-5">
            <div className="image-container translate-effect-right1">
              <a href="/">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  whileHover={"hover"}
                  variants={animateImgeBot}
                  src="images/index/phone-banner/banner-phone-downapp.png"
                  alt=""
                />
              </a>
            </div>
            <p className="fables-forth-text-color font-14">
              Yêu cầu người dùng download ứng dụng hoặc Game
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="font-30 fw-bold  fables-second-text-color text-center ">
              Những ai sẽ xem quảng cáo Wifi Marketing?
            </h2>
            <p className="fables-forth-text-color fw-normal  font-size-mobile text-justify">
              Bất kỳ ai muốn sử dụng Wifi MIỄN PHÍ tại những khu vực đơn vị
              quảng cáo cài đặt cơ sở hạ tầng để quảng cáo Wifi. Quảng cáo Wifi
              Marketing sẽ hiển thị với tất cả những người dùng có thiết bị di
              động như: Laptop, Smart Phone, Tabblet,… Thông qua việc yêu cầu
              truy cập sử dụng Wifi Miễn Phí sẽ giúp đơn vị quảng cáo giới thiệu
              sản phẩm, dịch vụ tới khách hàng và nâng cao khả năng nhận diện
              thương hiệu doanh nghiệp.
            </p>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
        className="fables-testimonial fables-after-overlay py-3 bg-rules"
      >
        <Container>
          <Row>
            <Col>
              {" "}
              <h3 className="font-30 fw-bold text-light text-center mb-3 position-relative z-index">
                Địa điểm thực hiện quảng cáo wifi tại đâu?
              </h3>
              <p className=" fw-normal text-light position-relative z-index text-justify ">
                Việc triển khai quảng cáo wifi markting khá đơn giản, chỉ cần
                địa điểm đó đáp ứng được cơ sở hạ tầng có mạng Wifi là chúng ta
                có thể thực hiện quảng cáo, tất nhiên sẽ cần lắp đặt một số
                thiết bị để cấu hình hiển thị quảng cáo đúng với mục đích quảng
                cáo của quý khách hàng. Quảng cáo Wifi Marketing đang được thực
                hiện chủ yếu tại những địa điểm tập trung đông người qua lại như
                sân bay, trường học, bệnh viện, quán café, siêu thị, trung tâm
                thương mại, nhà hàng,..
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row>
          <Col className="col-12">
            <h2 className="font-30 fw-bold text-center py-2 fables-main-text-color">
              Khách hàng quảng cáo Wifi sẽ được những gì?
            </h2>
          </Col>
          <Col className="col-6 col-md-3 mb-lg-5">
            <div className="image-container translate-effect-right1 animation-circle1">
              <a href="/">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  whileHover={"hover"}
                  variants={animateImgeTopRoTate}
                  src={"/images/index/banner-circle/TradeMark.png"}
                />
              </a>
            </div>
            <p className="fables-forth-text-color font-14">
              Nâng cao khả năng nhận diện thương hiệu của doanh nghiệp đối với
              người dùng.
            </p>
          </Col>
          <Col className="col-6 col-md-3 mb-lg-5">
            <div className="image-container translate-effect-right1 animation-circle2">
              <a href="/">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  whileHover={"hover"}
                  variants={animateImgeBotRoTate}
                  src={"/images/index/banner-circle/ClickTrade.png"}
                />
              </a>
            </div>
            <p className="fables-forth-text-color font-14">
              Giới thiệu dịch vụ, sản phẩm của doanh nghiệp đến người dùng chỉ
              với 1 click.
            </p>
          </Col>
          <Col className="col-6 col-md-3 mb-lg-5">
            <div className="image-container translate-effect-right1 animation-circle3">
              <a href="/">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  whileHover={"hover"}
                  variants={animateImgeTopRoTate}
                  src={"/images/index/banner-circle/INFO.png"}
                />
              </a>
            </div>
            <p className="fables-forth-text-color font-14">
              Tiếp nhận thông tin khách hàng để thực hiện chiến lược marketing
              hiệu quả.
            </p>
          </Col>
          <Col className="col-6 col-md-3 mb-lg-5">
            <div className="image-container translate-effect-right1 animation-circle4">
              <a href="/">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  whileHover={"hover"}
                  variants={animateImgeBotRoTate}
                  src={"/images/index/banner-circle/SOCIAL.png"}
                />
              </a>
            </div>
            <p className="fables-forth-text-color font-14">
              Kết nối quảng cáo với mạng xã hội (Social Wifi Marketing) tạo sức
              mạnh lan truyền mạnh mẽ.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2 className="font-30 fw-bold text-center fables-main-text-color my-3">
          báo cáo - thống kê chi tiết
        </h2>
        <Row className="overflow-hidden">
          <div className="col-12 col-md-12 mb-4 ">
            <motion.img
              initial={"off"}
              whileInView={"on"}
              variants={animateImgeLeft}
              src={"/images/index/report.jpg"}
              className="w-100"
              alt="img"
            />
          </div>
        </Row>
      </Container>

      <Container>
        <Row className="overflow-hidden">
          <Col className="col-12">
            <h2 className="font-30 fw-bold text-center mb-2 fables-main-text-color">
              Ecommerce Platform
            </h2>
            <p className="font-22  font-size-mobile text-justify">
              Ecommerce Platform là nền tảng thương mại điện tử. Nó là cửa hàng
              trực tuyến để các cá nhân, doanh nghiệp kinh doanh sản phẩm, dịch
              vụ.
            </p>
          </Col>
          <Col className="col-12 col-md-6 mb-1 mb-lg-5 ">
            <Figure className="figure docs-figure py-3 pointer">
              <a onClick={toggle}>
                <Modal isOpen={choose} toggle={toggle}>
                  <ModalBody>
                    <img
                      src={"/images/banner-sliders/asa1.png"}
                      className="img-fluid"
                    />
                  </ModalBody>
                </Modal>
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeLeft}
                  className="figure-img img-fluid shadow rounded"
                  src={"/images/banner-sliders/asa1.png"}
                  alt=""
                  style={{ width: "600px" }}
                />
              </a>
            </Figure>
            <p className="position-relative z-index font-22 text-center px-5 font-size-mobile">
              Giao diện trang chủ
            </p>
          </Col>
          <Col className="col-12 col-md-6 mb-1 mb-lg-5 ">
            <Figure className="figure docs-figure py-3 pointer">
              <a onClick={toggle1}>
                <Modal isOpen={choose1} toggle={toggle1}>
                  <ModalBody>
                    <img
                      src={"/images/banner-sliders/asa3.png"}
                      className="img-fluid"
                    />
                  </ModalBody>
                </Modal>
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  className="figure-img img-fluid shadow rounded"
                  src={"/images/banner-sliders/asa3.png"}
                  style={{ width: "600px" }}
                />
              </a>
            </Figure>
            <p className="position-relative z-index font-22 text-center px-5 font-size-mobile">
              Giao diện trang thông tin sản phẩm
            </p>
          </Col>
          <Col className="col-12 col-md-6 mb-1 mb-lg-5 ">
            <Figure className="figure docs-figure py-3 pointer">
              <a onClick={toggle2}>
                <Modal
                  isOpen={choose2}
                  toggle={toggle2}
                  style={{ height: "510px", maxWidth: "930px" }}
                >
                  <ModalBody>
                    <img
                      src={"/images/banner-sliders/asa-vendor.png"}
                      className="img-fluid"
                    />
                  </ModalBody>
                </Modal>
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeLeft}
                  className="figure-img img-fluid shadow rounded"
                  src={"/images/banner-sliders/asa-vendor.png"}
                  style={{ width: "600px" }}
                />
              </a>
            </Figure>
            <p className="position-relative z-index font-22 text-center px-5 font-size-mobile">
              Trang dashboard cho Shop owner
            </p>
          </Col>
          <Col className="col-12 col-md-6 mb-1 mb-lg-5">
            <Figure className="figure docs-figure py-3 pointer">
              <a onClick={toggle3}>
                <Modal
                  isOpen={choose3}
                  toggle={toggle3}
                  style={{ height: "510px", maxWidth: "930px" }}
                >
                  <ModalBody>
                    <img
                      src={"/images/banner-sliders/dashboard-admin.png"}
                      className="img-fluid"
                    />
                  </ModalBody>
                </Modal>
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  className="figure-img img-fluid shadow rounded"
                  src={"/images/banner-sliders/dashboard-admin.png"}
                  alt=""
                  style={{ width: "600px" }}
                />
              </a>
            </Figure>
            <p className="position-relative z-index font-22 text-center px-5 font-size-mobile">
              Trang dashboard cho Admin.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2 className="font-30 fw-bold text-center fables-main-text-color">
          Dịch vụ gia công Blockchain
        </h2>
        <Row>
          <Col className="col-md-6 mb-3">
            <div className="pages-block-2-box h-100">
              <p className="pages-block-2-box-title">
                <img
                  className="me-1"
                  width="24"
                  height="25"
                  alt="outsourcing.svg"
                  src={"/images/icon/outsourcing.svg"}
                />
                Gia công ứng dụng blockchain
              </p>

              <p className="text-justify">
                Chúng tôi thiết kế và triển khai các giải pháp cấp doanh nghiệp,
                dựa trên công nghệ blockchain, cho các ngành như tài chính, bảo
                mật thông tin, bất động sản, v.v.
                <br />
                Chúng tôi có thể phát triển, tích hợp và triển khai các cổng
                tiền điện tử vào sản phẩm của bạn.
              </p>
            </div>
          </Col>
          <Col className="col-md-6 mb-3">
            <div className="pages-block-2-box h-100">
              <p className="pages-block-2-box-title">
                <img
                  className="me-1"
                  width="24"
                  height="25"
                  alt="outsourcing.svg"
                  src={"/images/icon/blockchain.png"}
                />
                Xây dựng mạng riêng
              </p>

              <p className="text-justify">
                Đây là điểm khác biệt chính của chúng tôi so với các công ty chỉ
                sử dụng mạng public, GENEX còn có khả năng xây dựng mạng
                blockchain từ bước tạo thuật toán đồng thuận, dựng server full
                node,…
              </p>
            </div>
          </Col>
          <Col className="col-md-6 mb-3">
            <div className="pages-block-2-box h-100">
              <p className="pages-block-2-box-title">
                <img
                  className="me-1"
                  width="24"
                  height="25"
                  src={"/images/icon/smartcontract.svg"}
                />
                Phát triển hợp đồng thông minh
              </p>

              <p className="text-justify">
                Sử dụng các nền tảng đang hot trên thị trường hiện nay như
                Openchain, Ethereum, Binance,...chúng tôi phát triển các giải
                pháp hợp đồng thông minh cho các dự án tập trung vào Defi (tài
                chính phi tập trung) và các lĩnh vực khác.
              </p>
            </div>
          </Col>
          <Col className="col-md-6 mb-3">
            <div className="pages-block-2-box h-100">
              <p className="pages-block-2-box-title">
                <img
                  className="me-1"
                  width="24"
                  height="25"
                  alt="exchange.svg"
                  src={"/images/icon/exchange.svg"}
                />
                Cryptocurrency exchanges
              </p>

              <p className="text-justify">
                Gia công phát triển các sàn giao dịch tiền mã hoá chẳng hạn như
                sàn tập trung (Centralized Exchange - CEX) và sàn phi tập trung
                (Decentralized Exchange), hổ trợ đa chain (Ethereum, BNB Chain,
                Polygon, Avalanche, Openchain, ...)
                <br />
                Phát triển nền tảng OTC.
              </p>
            </div>
          </Col>
          <Col className="col-md-6 mb-3">
            <div className="pages-block-2-box h-100">
              <p className="pages-block-2-box-title">
                <img
                  className="me-1"
                  width="24"
                  height="25"
                  alt="defi.svg"
                  src={"/images/icon/defi.svg"}
                />
                DeFi
              </p>

              <p className="text-justify">
                Phát triển các dApp cho tài chính phi tập trung, bao gồm các sản
                phẩm để Farming, Staking, DEX. Phát triển một sản phẩm từ đầu,
                cũng như một loạt các giải pháp hiện có và đã được chứng minh
                trên thị trường, chẳng hạn như: Uniswap, Sushiswap, Pancakeswap.
              </p>
            </div>
          </Col>
          <Col className="col-md-6 mb-3">
            <div className="pages-block-2-box h-100">
              <p className="pages-block-2-box-title">
                <img
                  className="me-1"
                  width="24"
                  height="25"
                  alt="dapp.svg"
                  src={"/images/icon/dapp.svg"}
                />
                dApp
              </p>

              <p className="text-justify">
                Gia công phát triển các ứng dụng phi tập trung (dApp) theo yêu
                cầu, tương thích nhiều Chain (Ethereum, BNB Chain, Polygon,
                Avalanche, ...)
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Content;
