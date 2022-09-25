import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  TabContent,
  TabPane,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Modal,
  ModalBody,
} from "reactstrap";

import bg from "../../public/images/choose-us-background.jpg";
import bg1 from "../../public/images/index-services-bg.jpg";
import bg2 from "../../public/images/products/dsp.jpg";
import bg3 from "../../public/images/index-services-bg.jpg";
import $ from "jquery";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
const Content = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [open, setOpen] = useState("1");
  const [modal, setModal] = useState(false);
  const [choose, setChoose] = useState(false);
  const [choose1, setChoose1] = useState(false);
  const [choose2, setChoose2] = useState(false);
  const [choose3, setChoose3] = useState(false);
  const [choose4, setChoose4] = useState(false);
  const [choose5, setChoose5] = useState(false);
  const [choose6, setChoose6] = useState(false);
  const toggleModal = () => {
    setChoose(!choose);
    setModal(!modal);
  };
  const toggleModal1 = () => {
    setChoose1(!choose1);
    setModal(!modal);
  };
  const toggleModal2 = () => {
    setChoose2(!choose2);
    setModal(!modal);
  };
  const toggleModal3 = () => {
    setChoose3(!choose3);
    setModal(!modal);
  };
  const toggleModal4 = () => {
    setChoose4(!choose4);
    setModal(!modal);
  };
  const toggleModal5 = () => {
    setChoose5(!choose5);
    setModal(!modal);
  };
  const toggleModal6 = () => {
    setChoose6(!choose6);
    setModal(!modal);
  };

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
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
    hover: {
      opacity: 0.6,
      scale: 1.05,
      transition: { duration: 0.4 },
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
    hover: {
      opacity: 0.6,
      marginLeft: 20,
      marginRight: 20,
      transition: { duration: 0.4 },
    },
  };
  useEffect(() => {
    var clickStepDesktop = document.querySelectorAll(".show-image-step");

    clickStepDesktop.forEach((element, i) => {
      element.addEventListener("click", function () {
        var valueImage = element.className.split(" ")[1].split("");
        var num = parseInt(valueImage[valueImage.length - 1]);

        if (
          num === 1 ||
          num === 2 ||
          num === 3 ||
          num === 4 ||
          num === 5 ||
          num === 6 ||
          num === 7
        ) {
          $(`.guide-${valueImage[valueImage.length - 1]}`).show();
          for (var k = 1; k <= clickStepDesktop.length; k++) {
            if (k !== num) {
              $(`.guide-${k}`).hide();
            }
          }
        }
      });
    });
  }, []);
  useEffect(() => {
    $("#nav-desc-tab").click(() => {
      $("#change-bg-title-2").addClass("change-bg-title");
      $("#change-bg-title-1").removeClass("change-bg-title");
      $("#icon1").css("display", "none");
      $("#icon2").css("display", "block");
    });

    $("#nav-info-tab").click(() => {
      $("#change-bg-title-1").addClass("change-bg-title");
      $("#change-bg-title-2").removeClass("change-bg-title");
      $("#icon1").css("display", "block");
      $("#icon2").css("display", "none");
    });
  }, []);
  return (
    <Fragment>
      <Container>
        <div className="my-4 my-md-5 overflow-hidden">
          <motion.div
            className="text-center mb-5"
            initial={"off"}
            animate={"on"}
            variants={animateImgeTop}
          >
            <h3 className="fables-about-top-head fables-forth-text-color font-15 semi-font d-inline-block bg-white position-relative">
              <span className="mx-4">Products & Services</span>
            </h3>
            <h2 className="fables-second-text-color mt-3 font-30 fw-bold text-center">
              Provide you the great Products & Services
            </h2>
          </motion.div>
          {/* <!-- start tablist --> */}

          <Row>
            <Col className="col-12 tablist-desktop">
              <Nav tabs>
                <Col
                  className="col-lg-6 col-12 text-center fables-single-item nav-link fables-forth-text-color fables-second-active fables-second-hover-color fables-forth-after border-0 px-3 px-md-5 font-15 semi-font active rounded-0 py-3 pointer  "
                  id="nav-info-tab"
                >
                  {" "}
                  <div
                    className={activeTab == "1" ? "active" : ""}
                    onClick={() => setActiveTab("1")}
                  >
                    <div className="fables-about-icon-style">
                      <span className="fables-iconmobileApp-icon fables-second-text-color fa-3x"></span>

                      <h2
                        className="fables-second-text-color fables-about-icon-head mt-3 mb-2 font-18 semi-font change-bg-title pointer"
                        id="change-bg-title-1"
                      >
                        Hệ thống Ad Serving
                      </h2>

                      <i
                        className="fas fa-caret-down font-20 icon-1"
                        id="icon1"
                      ></i>
                      <span className="fables-title-border fables-second-background-color"></span>
                      <div className="fables-forth-text-color mt-3 font-14">
                        Quản trị chiến dịch quảng cáo cho kênh WiFi.
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  className="col-lg-6 col-12 text-center fables-single-item nav-link fables-forth-text-color fables-second-active fables-second-hover-color fables-forth-after px-3 px-md-5 font-15 semi-font border-0 rounded-0 py-3 pointer  "
                  id="nav-desc-tab"
                >
                  <div
                    className={activeTab == "2" ? "active" : ""}
                    onClick={() => setActiveTab("2")}
                  >
                    <div className="fables-about-icon-style">
                      <span className="fables-iconwebDesign-icon fables-second-text-color fa-3x"></span>

                      <h2
                        className="fables-second-text-color fables-about-icon-head mt-3 mb-2 font-18 semi-font change-bg-title pointer"
                        id="change-bg-title-2"
                      >
                        WiFi DSP Platform
                      </h2>

                      <i
                        className="fas fa-caret-down font-20 icon-2"
                        id="icon2"
                      ></i>
                      <span className="fables-title-border fables-second-background-color"></span>
                      <div className="fables-forth-text-color mt-3 font-14">
                        Nền tảng WiFi DSP đầu tiên cho kênh quảng cáo WiFi.
                      </div>
                    </div>
                  </div>
                </Col>
              </Nav>
              {/* <!-- start popup-background --> */}

              {/* <!-- end popup-background --> */}
              <TabContent activeTab={activeTab}>
                {/* <!-- start tab AD Serving --> */}
                <TabPane tabId="1">
                  <Row>
                    <Col className="col-12 col-lg-12">
                      <div
                        className=" fables-after-overlay py-4 py-md-5 bg-rules overflow-hidden px-3 px-md-0"
                        style={{
                          backgroundImage: `url(${bg.src})`,
                        }}
                      >
                        <div className="container position-relative z-index">
                          <Row>
                            <Col className="col-12 col-lg-6 p-0 image-container  position-relative translate-effect-right  mb-3 mb-md-0 pointer bg-white">
                              <motion.div
                                className="guide-1"
                                initial={"off"}
                                whileInView={"on"}
                                whileHover={"hover"}
                                variants={animateImgeLeft}
                              >
                                <img
                                  onClick={toggleModal}
                                  src={"/images/products/guide-1.jpg"}
                                  className="w-100"
                                />
                                <Modal
                                  isOpen={choose}
                                  toggle={toggleModal}
                                  style={{ maxWidth: "80%" }}
                                >
                                  <ModalBody>
                                    <img
                                      src={
                                        "images/products/popup-steps-desktop/product-popup-B1.png"
                                      }
                                      className="img-fluid w-100"
                                      style={{ height: "480px" }}
                                    />
                                  </ModalBody>
                                </Modal>
                                <i
                                  className="fas fa-search-plus icon-popup-desktop"
                                  onClick={toggleModal}
                                ></i>
                              </motion.div>
                              <motion.div
                                initial={"off"}
                                whileInView={"on"}
                                whileHover={"hover"}
                                variants={animateImgeLeft}
                                className="guide guide-2"
                                style={{ display: "none" }}
                              >
                                <img
                                  onClick={toggleModal1}
                                  src={"/images/products/guide-2.jpg"}
                                  className="w-100"
                                />
                                <Modal
                                  isOpen={choose1}
                                  toggle={toggleModal1}
                                  style={{ maxWidth: "80%" }}
                                >
                                  <ModalBody>
                                    <img
                                      src={
                                        "images/products/popup-steps-desktop/product-popup-B2.png"
                                      }
                                      className="img-fluid w-100"
                                      style={{ height: "480px" }}
                                    />
                                  </ModalBody>
                                </Modal>
                                <i
                                  className="fas fa-search-plus icon-popup-desktop"
                                  onClick={toggleModal1}
                                ></i>
                              </motion.div>
                              <motion.div
                                initial={"off"}
                                whileInView={"on"}
                                whileHover={"hover"}
                                variants={animateImgeLeft}
                                className="guide guide-3"
                                style={{ display: "none" }}
                              >
                                <img
                                  onClick={toggleModal2}
                                  src={"/images/products/guide-3.jpg"}
                                  className="w-100"
                                />
                                <Modal
                                  isOpen={choose2}
                                  toggle={toggleModal2}
                                  style={{ maxWidth: "80%" }}
                                >
                                  <ModalBody>
                                    <img
                                      src={
                                        "images/products/popup-steps-desktop/product-popup-B3.png"
                                      }
                                      className="img-fluid w-100"
                                      style={{ height: "480px" }}
                                    />
                                  </ModalBody>
                                </Modal>
                                <i
                                  className="fas fa-search-plus icon-popup-desktop"
                                  onClick={toggleModal2}
                                ></i>
                              </motion.div>
                              <motion.div
                                initial={"off"}
                                whileInView={"on"}
                                whileHover={"hover"}
                                variants={animateImgeLeft}
                                className="guide guide-4"
                                style={{ display: "none" }}
                              >
                                <img
                                  src={"/images/products/guide-4.jpg"}
                                  className="w-100"
                                  onClick={toggleModal3}
                                />
                                <Modal
                                  isOpen={choose3}
                                  toggle={toggleModal3}
                                  style={{ maxWidth: "80%" }}
                                >
                                  <ModalBody>
                                    <img
                                      src={
                                        "images/products/popup-steps-desktop/product-popup-B4.png"
                                      }
                                      className="img-fluid w-100"
                                      style={{ height: "480px" }}
                                    />
                                  </ModalBody>
                                </Modal>

                                <i
                                  className="fas fa-search-plus icon-popup-desktop"
                                  onClick={toggleModal3}
                                ></i>
                              </motion.div>
                              <motion.div
                                initial={"off"}
                                whileInView={"on"}
                                whileHover={"hover"}
                                variants={animateImgeLeft}
                                className="guide guide-5"
                                style={{ display: "none" }}
                              >
                                <img
                                  src={"/images/products/guide-5.jpg"}
                                  className="w-100"
                                  onClick={toggleModal4}
                                />
                                <Modal
                                  isOpen={choose4}
                                  toggle={toggleModal4}
                                  style={{ maxWidth: "80%" }}
                                >
                                  <ModalBody>
                                    <img
                                      src={
                                        "images/products/popup-steps-desktop/product-popup-B5.png"
                                      }
                                      className="img-fluid w-100"
                                      style={{ height: "480px" }}
                                    />
                                  </ModalBody>
                                </Modal>
                                <i
                                  className="fas fa-search-plus icon-popup-desktop"
                                  onClick={toggleModal4}
                                ></i>
                              </motion.div>
                              <motion.div
                                initial={"off"}
                                whileInView={"on"}
                                whileHover={"hover"}
                                variants={animateImgeLeft}
                                className="guide guide-6"
                                style={{ display: "none" }}
                              >
                                <img
                                  src={"/images/products/guide-6.jpg"}
                                  className="w-100"
                                  onClick={toggleModal5}
                                />
                                <Modal
                                  isOpen={choose5}
                                  toggle={toggleModal5}
                                  style={{ maxWidth: "80%" }}
                                >
                                  <ModalBody>
                                    <img
                                      src={
                                        "images/products/popup-steps-desktop/product-popup-B6.png"
                                      }
                                      className="img-fluid w-100"
                                      style={{ height: "480px" }}
                                    />
                                  </ModalBody>
                                </Modal>
                                <i
                                  className="fas fa-search-plus icon-popup-desktop"
                                  onClick={toggleModal5}
                                ></i>
                              </motion.div>
                              <motion.div
                                initial={"off"}
                                whileInView={"on"}
                                whileHover={"hover"}
                                variants={animateImgeLeft}
                                className="guide guide-7"
                                style={{ display: "none" }}
                              >
                                <img
                                  src={"/images/products/guide-7.jpg"}
                                  className="w-100"
                                  onClick={toggleModal6}
                                />
                                <Modal
                                  isOpen={choose6}
                                  toggle={toggleModal6}
                                  style={{ maxWidth: "80%" }}
                                >
                                  <ModalBody>
                                    <img
                                      src={
                                        "images/products/popup-steps-desktop/product-popup-B7.png"
                                      }
                                      className="img-fluid w-100"
                                      style={{ height: "480px" }}
                                    />
                                  </ModalBody>
                                </Modal>
                                <i
                                  className="fas fa-search-plus icon-popup-desktop"
                                  onClick={toggleModal6}
                                ></i>
                              </motion.div>
                            </Col>
                            <Col className="col-12 col-lg-6 bg-white px-6 py-3 py-md-5  pd-bt">
                              <motion.div
                                initial={"off"}
                                whileInView={"on"}
                                variants={animateImgeRight}
                              >
                                <h2 className="font-25 fw-bold fables-second-text-color mb-3">
                                  Tạo trang quảng cáo dễ dàng, trực quan
                                </h2>

                                <Accordion open={open} toggle={toggle}>
                                  <AccordionItem>
                                    <AccordionHeader
                                      targetId="1"
                                      className="show-image-step show-image-step-1 "
                                      id="headingOne"
                                    >
                                      Bước 1
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1">
                                      <code>
                                        Click vào nút Create Splashpage để tạo.
                                      </code>
                                    </AccordionBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionHeader
                                      targetId="2"
                                      className="show-image-step show-image-step-2"
                                      id="headingTwo"
                                    >
                                      Bước 2 ( 2 Lựa chọn)
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2">
                                      <code>
                                        1) Sau khi hiện ra giao diện, đặt tên
                                        cho Splashpage và chọn Past Code để nạp
                                        code HTML vào trường Input your HTML
                                        Code và click Create để tạo. <br />
                                        2) Sau khi hiện ra giao diện, đặt tên
                                        cho Splashpage và chọn Static Code, sẽ
                                        xuất hiện giao diện có thể tùy chình
                                        trang splashpage theo ý muốn mà không
                                        cần nạp
                                      </code>
                                    </AccordionBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionHeader
                                      targetId="3"
                                      className="show-image-step show-image-step-3"
                                      id="headingThree"
                                    >
                                      Bước 3
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3">
                                      <code>
                                        Xuất hiện giao diện Static Code
                                      </code>
                                    </AccordionBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionHeader
                                      targetId="4"
                                      className="show-image-step show-image-step-4"
                                      id="headingFour"
                                    >
                                      Bước 4
                                    </AccordionHeader>
                                    <AccordionBody accordionId="4">
                                      <code>
                                        Chọn Settings để tùy chỉnh kích cỡ hình
                                        ảnh, font chữ, vị trí button,...
                                      </code>
                                    </AccordionBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionHeader
                                      targetId="5"
                                      className="show-image-step show-image-step-5"
                                      id="headingFive"
                                    >
                                      Bước 5
                                    </AccordionHeader>
                                    <AccordionBody accordionId="5">
                                      <code>
                                        Chọn templates để sử dụng những mẫu
                                        splashpage có sẵn
                                      </code>
                                    </AccordionBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionHeader
                                      targetId="6"
                                      className="show-image-step show-image-step-6"
                                      id="headingSix"
                                    >
                                      Bước 6
                                    </AccordionHeader>
                                    <AccordionBody accordionId="6">
                                      <code>
                                        Sau khi tạo xong, click vào icon Save để
                                        lưu lại.
                                      </code>
                                    </AccordionBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionHeader
                                      targetId="7"
                                      className="show-image-step show-image-step-7"
                                      id="headingSeven"
                                    >
                                      Bước 7
                                    </AccordionHeader>
                                    <AccordionBody accordionId="7">
                                      <code>
                                        Sau khi lưu lại sẽ được chuyển tới giao
                                        diện để xem lại splashpage vừa tạo và
                                        click create để tạo nếu thấy hợp lí.
                                      </code>
                                    </AccordionBody>
                                  </AccordionItem>
                                </Accordion>
                              </motion.div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>

                    {/* <!-- start slider Campaign --> */}
                    <Container className=" mt-4 mt-lg-5 text-center">
                      <h2>Quản lý chiến dịch Wifi Marketing đa dạng</h2>

                      <Carousel>
                        <Carousel.Item>
                          <a href="">
                            <img
                              src={"/images/products/slider-campaign-2.jpg"}
                              className="w-100"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item>
                          <a href="">
                            <img
                              src={"/images/products/slider-campaign-3.jpg"}
                              className="w-100"
                            />
                          </a>
                        </Carousel.Item>
                      </Carousel>
                    </Container>
                    {/* <!-- end slider Campaign --> */}

                    {/* <!-- start slider report --> */}
                    <Container className="mt-4 mt-lg-5 text-center">
                      <h2>Cung cấp nhiều report về WiFi Analytic</h2>
                      <Carousel>
                        <Carousel.Item>
                          <a href="">
                            <img
                              src={"/images/products/rp-campaign.jpg"}
                              className="w-100"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item>
                          <a href="">
                            <img
                              src={"/images/products/rp-behaviour.jpg"}
                              className="w-100"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item>
                          <a href="">
                            <img
                              src={"/images/products/rp-gender.jpg"}
                              className="w-100"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item>
                          <a href="">
                            <img
                              src={"/images/products/rp-device-type.jpg"}
                              className="w-100"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item>
                          <a href="">
                            <img
                              src={"/images/products/rp-income.jpg"}
                              className="w-100"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item>
                          <a href="">
                            <img
                              src={"/images/products/rp-age.jpg"}
                              className="w-100"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item>
                          <a href="">
                            <img
                              src={"/images/products/rp-frquently.jpg"}
                              className="w-100"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item>
                          <a href="">
                            <img
                              src={"/images/products/rp-source.jpg"}
                              className="w-100"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item>
                          <a href="">
                            <img
                              src={"/images/products/rp-Topwebsite.jpg"}
                              className="w-100"
                            />
                          </a>
                        </Carousel.Item>
                      </Carousel>
                    </Container>
                    {/* <!-- end slider report --> */}
                  </Row>
                </TabPane>
                {/* <!-- end tab AD Serving -->

              <!-- start tab DSP --> */}
                <TabPane tabId="2">
                  <Container fluid className=" my-0 my-lg-5">
                    <Row>
                      <Col className="col-12 col-lg-2 p-0 position-relative">
                        <div className="text-center fables-main-background-color fables-sqr-rotation fables-second-border-color fables-sqr-rotation-services width-1">
                          <div className="text-rotate text-product">
                            <h2 className="text-white font-25 title-product">
                              DSP Platform là gì ?
                            </h2>
                            <p className="fables-third-text-color mt-4 mb-3 mb-lg-5 content-product text-center">
                              Để bắt đầu tìm hiểu khái niệm, chúng ta sẽ tham
                              khảo hình sau đây
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col className="col-12 col-lg-10 p-0">
                        <div
                          className="fables-after-overlay py-md-5 px-3 pr-md-4 pl-md-5 bg-rules sm-index-products mt-lg-0 mt-xl-5"
                          style={{
                            backgroundImage: `url(${bg1.src})`,
                          }}
                        >
                          <Container className="z-index position-relative">
                            <Row>
                              <div className="col-12 col-sm-2"></div>
                              <div className="col-12 col-sm-10 pb-lg-5 mt-4 mt-lg-0">
                                <motion.img
                                  initial={"off"}
                                  whileInView={"on"}
                                  variants={animateImgeRight}
                                  alt="img"
                                  src={"/images/products/dsp-define.jpg"}
                                  className="w-100"
                                />
                              </div>
                            </Row>
                          </Container>
                        </div>
                      </Col>
                    </Row>
                  </Container>

                  <div className="fables-bussiness-section bg-rules">
                    <Container>
                      <Row>
                        <Col className="col-12 col-sm-6 mt-5 text-center">
                          <img
                            alt="img"
                            src={"/images/products/dsp.jpg"}
                            className="w-100 top-left"
                          />
                        </Col>
                        <Col className="col-12 py-3 py-lg-0 col-sm-6 p-sm-0 ">
                          <motion.div
                            className="fables-bussiness-caption p-4"
                            initial={"off"}
                            whileInView={"on"}
                            variants={animateImgeRight}
                          >
                            <h2 className="fables-second-text-color my-0 font-30 fw-bold position-relative z-index ">
                              DSP là gì?
                            </h2>
                            <div className="fables-forth-text-color position-relative z-index mt-4 mb-5  text-justify">
                              <span>
                                <img
                                  alt="src"
                                  src={"/images/products/tick-green.png"}
                                  className="img-tick"
                                />
                              </span>
                              Một cách dễ hiểu, DSP (Demand Side Platform là nền
                              tảng cho phép các nhà quảng cáo sử dụng để mua
                              không gian quảng cáo tự động và quản lý các chiến
                              dịch quảng cáo. Trong quảng cáo, DSP hoặc nền tảng
                              bên cầu, là dịch vụ xử lý việc đặt giá thầu và mua
                              quảng cáo trực tuyến dựa trên việc đấu giá thay
                              mặt cho một công ty khác. DSP có thể cung cấp cho
                              khách hàng quyền truy cập vào nhiều mạng quảng cáo
                              cùng một lúc, nhiều mạng quảng cáo chính, chẳng
                              hạn như Yahoo! và Google để điều hành DSP của
                              riêng họ.
                              <br />
                              <br />
                              <span>
                                <img
                                  alt="img"
                                  src={"/images/products/tick-green.png"}
                                  className="img-tick"
                                />
                              </span>
                              Đối tượng chính sử dụng DSP thường là các nhà
                              quảng cáo, hoặc các agency với mong muốn mua vị
                              trí hiển thị quảng cáo đẹp, dễ thu hút người vào
                              trang của publisher. Đồng thời, DSP cho phép các
                              nhà quảng cáo và các agency quảng cáo tiếp cận và
                              tham gia đấu giá không gian quảng cáo trên các sàn
                              đấu giá quảng cáo tự do Ad Exchange. <br />
                              <br />
                              <span>
                                <img
                                  alt="img"
                                  src={"/images/products/tick-green.png"}
                                  className="img-tick"
                                />
                              </span>
                              Khi làm việc với nền tảng này, bạn cung cấp các
                              quảng cáo, chẳng hạn như đồ họa biểu ngữ, cùng với
                              thị trường mục tiêu mong muốn và ngân sách tối đa
                              của bạn. Sau đó, nền tảng sẽ xác định các cơ hội
                              quảng cáo trên nhiều trang mạng, tìm giá tốt nhất
                              phù hợp với nhân khẩu học mục tiêu của bạn và mua
                              các không gian quảng cáo đó thay cho bạn cho đến
                              khi ngân sách của bạn cạn hết.
                            </div>
                          </motion.div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div
                    className="fables-after-overlay py-3 py-lg-5 bg-rules"
                    style={{
                      backgroundImage: `url(${bg2.src})`,
                    }}
                  >
                    <Container>
                      <h2 className="position-relative z-index white-color font-35 fw-bold text-center mb-4">
                        Những điều bạn nhất định phải biết về DSP là gì?
                      </h2>
                      <Carousel className="z-index fixCarouselDSP">
                        <Carousel.Item>
                          <div className="row text-center fables-testimonial-carousel-item rounded py-4    ">
                            <Col className="col-12 col-md-3">
                              <h3 className="font-14 semi-font text-white text-4">
                                Tính minh bạch
                              </h3>
                            </Col>
                            <Col className="col-12 col-md-9 p-0 p-md-2">
                              <div className="fables-testimonial-detail font-15 fst-italic text-justify text-white p-4 position-relative">
                                rất quan trọng đối với việc đánh giá nền tảng
                                này. Với một bộ đầy đủ các báo cáo có liên quan,
                                bạn có thể tối ưu hóa các chiến dịch của bạn và
                                nhận được hiệu quả truyền thông thực sự.
                              </div>
                            </Col>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item>
                          <div className="row text-center fables-testimonial-carousel-item rounded py-4">
                            <Col className="col-12 col-md-3">
                              <h3 className="font-14 semi-font text-white text-4">
                                Số truy vấn mỗi giây (QPS)
                              </h3>
                            </Col>
                            <Col className="col-12 col-md-9 p-0 p-md-2">
                              <div className="fables-testimonial-detail text-justify font-15 fst-italic text-white p-4 position-relative">
                                là số liệu phản ánh số lần DSP được gọi để đặt
                                giá thầu trên vị trí đặt quảng cáo để tiếp cận
                                người dùng. QPS cao hơn đại diện cho tốc độ và
                                tần suất phân tích và hành động trên các giá
                                thầu đó. Quy mô chiến dịch quảng cáo càng lớn –
                                khả năng hiển thị đặt giá thầu cao hơn sẽ tăng
                                lên. Nó cung cấp các công cụ quyết định với
                                nhiều thông tin hơn. Sau khi đặt giá thầu để
                                tiếp cận một người dùng duy nhất ở một mức giá
                                cụ thể, DSP sẽ biết liệu giá có được chấp nhận
                                hay không. Nếu giá không được chấp nhận, DSP sẽ
                                nhận thấy rằng nó có thể yêu cầu giá cao hơn để
                                giành được giá thầu trong tương lai. Trên thực
                                tế, nhiều DSP có tùy chọn lọc lưu lượng truy cập
                                kém.
                              </div>
                            </Col>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item>
                          <div className="row text-center fables-testimonial-carousel-item rounded py-4">
                            <Col className="col-12 col-md-3">
                              <h3 className="font-14 semi-font text-white text-4">
                                Phân tích theo thời gian thực
                              </h3>
                            </Col>
                            <Col className="col-12 col-md-9 p-0 p-md-2">
                              <div className="fables-testimonial-detail font-15 text-justify fst-italic text-white p-4 position-relative">
                                Giao diện DSP phải gần với thời gian thực nhất
                                có thể – bạn cần số liệu thống kê mới nhất để
                                xem hiệu suất chiến dịch. Quyết định xem “thời
                                gian thực” có quan trọng đối với doanh nghiệp
                                của bạn hay không và yêu cầu DSP bạn xem xét sử
                                dụng, mức độ chậm trễ trong phân tích.
                              </div>
                            </Col>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item>
                          <div className="row text-center fables-testimonial-carousel-item rounded py-4">
                            <Col className="col-12 col-md-3">
                              <h3 className="font-14 semi-font text-white text-4">
                                Các định dạng quảng cáo khác nhau
                              </h3>
                            </Col>
                            <Col className="col-12 col-md-9 p-0 p-md-2">
                              <div className="fables-testimonial-detail font-15 text-justify fst-italic text-white p-4 position-relative">
                                Tiêu chí đánh giá DSP rất quan trọng là khả năng
                                chạy chiến dịch quảng cáo đa kênh với các định
                                dạng quảng cáo. Vì DSP phát sinh chi phí lớn về
                                xử lý hiển thị, chúng thường tập trung vào một
                                kênh cụ thể (ví dụ: hiển thị trên máy tính để
                                bàn nhiều hơn các kênh khác. Xác định 2-3 kênh
                                quảng cáo hàng đầu mà nhà quảng cáo của bạn cần
                                và lọc DSP theo các kênh quảng cáo đó.
                              </div>
                            </Col>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item>
                          <div className="row text-center fables-testimonial-carousel-item rounded py-4">
                            <Col className="col-12 col-md-3">
                              <h3 className="font-14 semi-font text-white text-4">
                                Định giá
                              </h3>
                            </Col>
                            <Col className="col-12 col-md-9 p-0 p-md-2">
                              <div className="fables-testimonial-detail font-15 text-justify fst-italic text-white p-4 position-relative">
                                Chi phí sử dụng DSP thường phụ thuộc vào kích
                                thước của chiến dịch hoặc ngân sách truyền thông
                                bạn cam kết với nền tảng. Một số DSP tính phí cố
                                định trong khi một số khác nhận hoa hồng theo số
                                lượng. Các gã khổng lồ DSP như Beeswax tính phí
                                tối thiểu là $ 8500 phí hàng tháng + 5% chia sẻ
                                doanh thu, vì vậy nếu kế hoạch định giá khiến
                                bạn sợ, hãy xem xét các nhà cung cấp nhỏ hơn như
                                Amobee, AdSpirit, White Label DSP. Trước khi hợp
                                tác với DSP, hãy làm rõ nếu có bất kỳ khoản phí
                                bổ sung nào cho nhân viên hỗ trợ của DSP để
                                thiết lập và tối ưu hóa chiến dịch của bạn và
                                cũng hiểu liệu bạn có nên thanh toán cho dữ liệu
                                nâng cao hay không.
                              </div>
                            </Col>
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </Container>
                  </div>

                  <div
                    className=" fables-after-overlay bg-rules py-4 py-lg-5 text-center text-hope"
                    style={{
                      backgroundImage: `url(${bg2.src})`,
                    }}
                  >
                    <Container>
                      <Row>
                        <Col className="col-12 col-md-12 ">
                          <h3 className="position-relative z-index white-color mb-3 fw-bold text-hope1">
                            Hy vọng bài viết trên đã giúp bạn hiểu hơn về DSP là
                            gì và biết cách ứng dụng DSP phù hợp với doanh
                            nghiệp của mình!!
                          </h3>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <Container fluid className=" my-0 my-lg-5">
                    <Row>
                      <Col className="col-12 col-lg-2 p-0 position-relative">
                        <div className="text-center fables-main-background-color fables-sqr-rotation fables-second-border-color fables-sqr-rotation-services width-product">
                          <div className="text-rotate text-2product">
                            <h2 className="text-white title-2product fw-bold">
                              WiFi DSP Platform là gì ?
                            </h2>
                            <p className="fables-third-text-color mt-4 mb-3 mb-lg-5 content-2product text-justify">
                              GENEX WiFi DSP sẽ là một platform trung gian, kết
                              nối việc mua và bán WiFi inventory giữa Publisher
                              và Advertiser, các giao dịch mua bán được diễn ra
                              tự động, trong suốt và theo tiêu chuẩn đấu giá
                              thời gian thực
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col className="col-12 col-lg-10 p-0">
                        <div
                          className=" fables-after-overlay py-md-5 px-3 pr-md-4 pl-md-5 bg-rules sm-index-products mt-lg-0 mt-xl-5"
                          style={{
                            backgroundImage: `url(${bg3.src})`,
                          }}
                        >
                          <div className="container z-index position-relative">
                            <Row>
                              <Col className="col-12 col-lg-2"></Col>
                              <Col className="col-12 col-lg-5 mt-4 mt-lg-0 img-des-mobile">
                                <img
                                  alt="img"
                                  src={"/images/products/wifi-dsp.jpg"}
                                  className="w-100 img-2"
                                />
                              </Col>
                              <Col className="col-12 col-lg-5 mt-4 mt-lg-0 content-3 text-justify">
                                <span className="content-span3">
                                  Các giá trị mang lại cho Publisher &
                                  Advertiser
                                </span>
                                <br />
                                <span className="content-span2 col-lg-12">
                                  Đối với Publisher
                                </span>
                                <br />
                                <span>
                                  <img
                                    alt="img"
                                    src={"/images/products/tick-green.png"}
                                    className="img-tick"
                                  />
                                </span>
                                Publisher có thể tiếp cận tập nhà quảng cáo mới
                                hơn, lớn hơn, đa dạng hơn, từ đó kỳ vọng sẽ tăng
                                tỷ lệ khai thác quảng cáo và tăng doanh thu
                                <br />
                                <span>
                                  <img
                                    alt="img"
                                    src={"/images/products/tick-green.png"}
                                    className="img-tick"
                                  />
                                </span>
                                Chỉ cần đầu tư hạ tầng, bán quảng cáo hãy để
                                WiFi DSP Platform lo
                                <br />
                                <span>
                                  <img
                                    alt="img"
                                    src={"/images/products/tick-green.png"}
                                    className="img-tick"
                                  />
                                </span>
                                Khả năng cao sẽ có lợi nhuận sau khi đầu tư hạ
                                tầng
                                <br />
                                <span className="content-span1 col-lg-12">
                                  Đối với Advertiser{" "}
                                </span>
                                <br />
                                <span>
                                  <img
                                    alt="img"
                                    src={"/images/products/tick-green.png"}
                                    className="img-tick"
                                  />
                                </span>
                                Giúp cho họ có một công cụ online, trực quan,
                                tiện dụng, dễ quản trị trong việc triển khai
                                chiến dịch quảng cáo trên WiFi trên diện rộng
                                <br />
                                <span>
                                  <img
                                    alt="img"
                                    src={"/images/products/tick-green.png"}
                                    className="img-tick"
                                  />
                                </span>
                                Tiếp cận tâp WiFi Inventory lớn, tập audience đủ
                                rộng, và đặc biệt là tập trung tại một chổ
                                <br />
                                <span>
                                  <img
                                    alt="img"
                                    src={"/images/products/tick-green.png"}
                                    className="img-tick"
                                  />
                                </span>
                                WiFi DSP còn giúp các nhà quảng cáo linh hoạt
                                điều chỉnh, tối ưu ngân sách nhưng vẫn đảm bảo
                                các giá trị cốt lỗi để cho chiến dịch thành công
                              </Col>
                              <Col className="col-12 col-lg-5 mt-4 mt-lg-0 img-des-desktop">
                                <img
                                  alt="img"
                                  src={"/images/products/wifi-dsp.jpg"}
                                  className="w-100 img-2"
                                />
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </TabPane>
                {/* <!-- End tab DSP --> */}
              </TabContent>
            </Col>
          </Row>
          {/* <!-- end tablist --> */}
        </div>
      </Container>
    </Fragment>
  );
};

export default Content;
