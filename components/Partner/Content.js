import React, { Fragment, useEffect } from "react";
import $ from "jquery";
import { Container } from "reactstrap";

const Content = () => {
  useEffect(() => {
    $(document).ready(function ($) {
      var div = $(".line"),
        // divHeight = div.height(),
        scroll;

      $(window).scroll(function () {
        scroll = $(this).scrollTop();
        div.height(scroll);
      });

      var timelineBlocks = $(".cd-timeline-block"),
        offset = 0.8;

      //hide timeline blocks which are outside the viewport
      hideBlocks(timelineBlocks, offset);

      //on scolling, show/animate timeline blocks when enter the viewport
      $(window).on("scroll", function () {
        !window.requestAnimationFrame
          ? setTimeout(function () {
              showBlocks(timelineBlocks, offset);
            }, 100)
          : window.requestAnimationFrame(function () {
              showBlocks(timelineBlocks, offset);
            });
      });

      function hideBlocks(blocks, offset) {
        blocks.each(function () {
          $(this).offset().top >
            $(window).scrollTop() + $(window).height() * offset &&
            $(this)
              .find(".cd-date, .cd-timeline-img, .cd-timeline-content")
              .addClass("is-hidden");
        });
      }

      function showBlocks(blocks, offset) {
        blocks.each(function () {
          $(this).offset().top <=
            $(window).scrollTop() + $(window).height() * offset &&
            $(this).find(".cd-date, .cd-timeline-img").hasClass("is-hidden") &&
            $(this)
              .find(".cd-date, .cd-timeline-img, .cd-timeline-content")
              .removeClass("is-hidden")
              .addClass("bounce-in");
        });
      }
    });
  });
  return (
    <Fragment>
      <Container>
        <div
          id="cd-timeline"
          className="cd-container gallery-timeline my-4 my-md-5"
        >
          <span className="fables-second-background-color1 line"></span>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/aruba.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Hãng Aruba.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/logo-ruckus.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Hãng Ruckus.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/zyxel.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Hãng Zyxel.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/FirmEngenius.jpg"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Hãng Engenius.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/TPLINK.svg"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Hãng TP-Link.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/ruijie.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Hãng Ruijie.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/logo-nam-a.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Ngân hàng Nam Á.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/logo-an-binh.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Ngân hàng An Bình.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/partner-Prudential.jpg"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Chuỗi phòng giao dịch khách hàng của Cty Shinhan Finance.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/logo-aeon.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  AEON Mall.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/logo-conasi.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Conasi (Mall, Hotel, Resort).
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/logo-CTIN.jpeg"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Công ty cổ phần Viễn thông Tin học Bưu điện (CTIN).
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/svtech.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Công ty Cổ phần Phát triển Công nghệ Viễn thông Tin học Sun
                  Việt.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/one-corp.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Công ty Cổ phần Truyền thông Số 1.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/dong-quan.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Công Ty TNHH Công Nghệ Tư Vấn Thương Mại Đông Quân.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/logo-teknik.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Công Ty TNHH Teknik
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/logo-qdtek.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Công ty Công nghệ Quang Dũng.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/logo_lehoang_07.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Lê Hoàng.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/logo-di-an.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Thành phố Dĩ An Bình Dương.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/logo-tan-uyen.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Huyện Tân Uyên Bình Dương.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/desart.jpg"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Des Arts Hotel.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/partner-PV.jpg"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Công ty phân phối Phương Việt – Nhà phân phối thiết bị
                  Engenius.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block mt-5">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/partner-line.jpg"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Đối tác về đường truyền Internet: Viettel, FPT, VNPT, CMC,
                  Tpcoms, Minh Tú, ….
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/banvien.jpg"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Công ty phần mềm Bản Viên.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block mb-5">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img src={"/images/partner/NGM.jpg"} alt="" className="w-100" />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Hệ thống 250 điểm Free Wifi cho Công nhân lắp đặt tại tỉnh
                  Quảng Nam của Công ty NGM.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/marker-small.jpg"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Ngoài ra còn có một số điểm nhỏ lẻ khác.
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/partner/HLPD.jpg"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Khu dân cư Himlam của Cty Phú Đông Group.
                </a>
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Content;
