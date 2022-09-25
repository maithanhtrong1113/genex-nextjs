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
                  src={"/images/openchain/logo-blockchain.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Openchain Network (Layer 1)
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/openchain/logo-openchain.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Openchain Explorer Scan
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/openchain/logo-opc-wallet.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Openchain Wallet
                </a>
              </h2>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img"></div>
            <div className="cd-timeline-content">
              <a href="/">
                <img
                  src={"/images/openchain/cex-dex.png"}
                  alt=""
                  className="w-100"
                />
              </a>
              <h2 className="font-15 semi-font px-3 mt-2">
                <a
                  href="/"
                  className="fables-second-text-color text-decoration-none"
                >
                  Openchain DEX & CEX
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
