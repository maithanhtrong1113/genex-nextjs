import React, { Fragment, useEffect, useState } from "react";
import $ from "jquery";
import Link from "next/link";

const SideBar = () => {
  useEffect(() => {
    $(document).on("click", "ul li a", function () {
      $(".active").removeClass("active");
      $(this).addClass("active");
    });
  });
  useEffect(() => {
    $(window).on("load resize", function () {
      //Add/remove class based on browser size when load/resize
      var w = $(window).width();

      if (w >= 1200) {
        // if larger
        $("#docs-sidebar")
          .addClass("sidebar-visible")
          .removeClass("sidebar-hidden");
      } else {
        // if smaller
        $("#docs-sidebar")
          .addClass("sidebar-hidden")
          .removeClass("sidebar-visible");
      }
    });
    $("#docs-sidebar-toggler").on("click", function () {
      if ($("#docs-sidebar").hasClass("sidebar-visible")) {
        $("#docs-sidebar")
          .removeClass("sidebar-visible")
          .addClass("sidebar-hidden");
      } else {
        $("#docs-sidebar")
          .removeClass("sidebar-hidden")
          .addClass("sidebar-visible");
      }
    });
  });
  return (
    <Fragment>
      <div id="docs-sidebar" className="docs-sidebar">
        <nav id="docs-nav" className="docs-nav navbar">
          <ul className="section-items list-unstyled nav flex-column pb-3">
            <li className="nav-item section-title ">
              <Link href="/wifimarketingplatform">
                <div>
                  <img
                    width="40"
                    className="pointer"
                    height="32"
                    alt="exchange.svg"
                    src={"/images/wifi.png"}
                  />
                  <span className="text-blue mx-3 fw-bold pointer">
                    Hệ Thống Wifi Marketing
                  </span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-1"
              >
                1. Truy cập portal
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-2"
              >
                2. Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-3"
              >
                3. CRM
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-4"
              >
                4. Tạo Wifi Network
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-5"
              >
                5. Tạo Location
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-6"
              >
                6. Thêm AP vào location
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-7"
              >
                7. Tạo Brand
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-8"
              >
                8. Tạo Creative Ads
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-9"
              >
                9. Quản lý Campaign
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-10"
              >
                10. Campaign chạy Facebook Login/Share
              </a>
            </li>
            <li className="nav-item section-title mt-3">
              <Link href="/wifimarketingplatform/ruckus">
                <img
                  className="pointer"
                  width="90"
                  height="40"
                  alt="exchange.svg"
                  src={"/images/logo/ruckus.png"}
                />
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform/ruckus#item-2-1"
              >
                Unleashed AP
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform/ruckus#item-2-2"
              >
                Zone Director & Virtual Smart Zone
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scrollto"
                href="/wifimarketingplatform/ruckus#item-2-3"
              >
                Public Cloud
              </a>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/aruba">
                <img
                  width="60"
                  height="60"
                  alt="exchange.svg"
                  src="/images/logo/aruba.svg"
                />
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-3-1">
                Aruba IAP Virtual Controller
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-3-2">
                Mobility Controller version củ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-3-3">
                Mobility Controller version mới
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="zyxel.html">
                <img
                  width="55"
                  height="35"
                  alt="exchange.svg"
                  src="/images/logo/zyxel.png"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-4-1">
                Public Cloud
              </a>
            </li>

            <li className="nav-item section-title mt-3 ">
              <a href="engenius.html">
                <img
                  width="60"
                  height="30"
                  alt="exchange.svg"
                  src="/images/logo/engenius.png"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-5-1">
                Controller Appliance
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-5-1">
                Public Cloud
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="mikrotik.html">
                <img
                  width="65"
                  height="50"
                  alt="exchange.svg"
                  src={"/images/logo/mikrotik.jpeg"}
                />
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="cisco.html">
                <img
                  width="60"
                  height="50"
                  alt="exchange.svg"
                  src={"/images/logo/cisco.jpeg"}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-6-1">
                Controller Appliance
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="meraki.html">
                <img
                  width="60"
                  height="50"
                  alt="exchange.svg"
                  src={"/images/logo/meraki.png"}
                />
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="unifi.html">
                <img
                  width="60"
                  height="30"
                  alt="exchange.svg"
                  src={"/images/logo/unifi.png"}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-7-1">
                Software Controller
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-7-1">
                Controller Appliance
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="ruijie.html">
                <img
                  width="50"
                  height="27"
                  alt="exchange.svg"
                  src={"/images/logo/ruijie.png"}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="ruijie.html#item-8-1">
                Public Cloud
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#item-8-2">
                Gateway
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="tplink.html">
                <img
                  width="70"
                  height="40"
                  alt="exchange.svg"
                  src={"/images/logo/tplink.svg"}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="tplink.html#item-9-1">
                Omada Controller
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="aerohive.html">
                <img
                  width="95"
                  height="30"
                  alt="exchange.svg"
                  src={"/images/logo/aerohive.png"}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="aerohive.html#item-10-1">
                Public Cloud
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="extreme.html">
                <img
                  width="80"
                  height="38"
                  alt="exchange.svg"
                  src={"/images/logo/extreme.jpeg"}
                />
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="draytek.html">
                <img
                  width="65"
                  height="45"
                  alt="exchange.svg"
                  src={"/images/logo/draytek.png"}
                />
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="teltonika.html">
                <img
                  width="85"
                  height="30"
                  alt="exchange.svg"
                  src={"/images/logo/teltonika.png"}
                />
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="peplink.html">
                <img
                  width="65"
                  height="60"
                  alt="exchange.svg"
                  src={"/images/logo/peplink.png"}
                />
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="pepwave.html">
                <img
                  width="65"
                  height="60"
                  alt="exchange.svg"
                  src={"/images/logo/pepwave.jpeg"}
                />
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a href="openwrt.html">
                <img
                  width="60"
                  height="60"
                  alt="exchange.svg"
                  src={"/images/logo/openwrt.png"}
                />
              </a>
            </li>

            <li className="nav-item section-title mt-3">
              <a className="nav-link scrollto" href="#section-10">
                <span className="theme-icon-holder mr-2">
                  <i className="fas fa-cogs"></i>
                </span>
                Others
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideBar;
