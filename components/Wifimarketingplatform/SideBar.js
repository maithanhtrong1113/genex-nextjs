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
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-1"
              >
                1. Truy cập portal
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-2"
              >
                2. Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-3"
              >
                3. CRM
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-4"
              >
                4. Tạo Wifi Network
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-5"
              >
                5. Tạo Location
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-6"
              >
                6. Thêm AP vào location
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-7"
              >
                7. Tạo Brand
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-8"
              >
                8. Tạo Creative Ads
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-9"
              >
                9. Quản lý Campaign
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform#item-1-10"
              >
                10. Campaign chạy Facebook Login/Share
              </Link>
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
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/ruckus#item-2-1"
              >
                Unleashed AP
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/ruckus#item-2-2"
              >
                Zone Director & Virtual Smart Zone
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/ruckus#item-2-3"
              >
                Public Cloud
              </Link>
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
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/aruba#item-3-1"
              >
                Aruba IAP Virtual Controller
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/aruba#item-3-2"
              >
                Mobility Controller version cũ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/aruba#item-3-3"
              >
                Mobility Controller version mới
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/zyxel">
                <img
                  width="55"
                  height="35"
                  alt="exchange.svg"
                  src="/images/logo/zyxel.png"
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/zyxel#item-4-1"
              >
                Public Cloud
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer ">
              <Link href="/wifimarketingplatform/engenius">
                <img
                  width="60"
                  height="30"
                  alt="exchange.svg"
                  src="/images/logo/engenius.png"
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/engenius#item-5-1"
              >
                Controller Appliance
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/mikrotik">
                <img
                  width="65"
                  height="50"
                  alt="exchange.svg"
                  src={"/images/logo/mikrotik.jpeg"}
                />
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/cisco">
                <img
                  width="60"
                  height="50"
                  alt="exchange.svg"
                  src={"/images/logo/cisco.jpeg"}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/cisco#item-6-1"
              >
                Controller Appliance
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/meraki">
                <img
                  width="60"
                  height="50"
                  alt="exchange.svg"
                  src={"/images/logo/meraki.png"}
                />
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/unifi">
                <img
                  width="60"
                  height="30"
                  alt="exchange.svg"
                  src={"/images/logo/unifi.png"}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/unifi#item-7-1"
              >
                Software Controller
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/unifi#item-7-2"
              >
                Controller Appliance
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/ruijie">
                <img
                  width="50"
                  height="27"
                  alt="exchange.svg"
                  src={"/images/logo/ruijie.png"}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/ruijie#item-8-1"
              >
                Public Cloud
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/ruijie#item-8-2"
              >
                Gateway
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/tplink">
                <img
                  width="70"
                  height="40"
                  alt="exchange.svg"
                  src={"/images/logo/tplink.svg"}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/tplink#item-9-1"
              >
                Omada Controller
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/aerohive">
                <img
                  width="95"
                  height="30"
                  alt="exchange.svg"
                  src={"/images/logo/aerohive.png"}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scrollto"
                href="/wifimarketingplatform/aerohive#item-10-1"
              >
                Public Cloud
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/extreme">
                <img
                  width="80"
                  height="38"
                  alt="exchange.svg"
                  src={"/images/logo/extreme.jpeg"}
                />
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/draytek">
                <img
                  width="65"
                  height="45"
                  alt="exchange.svg"
                  src={"/images/logo/draytek.png"}
                />
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/teltonika">
                <img
                  width="85"
                  height="30"
                  alt="exchange.svg"
                  src={"/images/logo/teltonika.png"}
                />
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/peplink">
                <img
                  width="65"
                  height="60"
                  alt="exchange.svg"
                  src={"/images/logo/peplink.png"}
                />
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/pepwave">
                <img
                  width="65"
                  height="60"
                  alt="exchange.svg"
                  src={"/images/logo/pepwave.jpeg"}
                />
              </Link>
            </li>

            <li className="nav-item section-title mt-3 pointer">
              <Link href="/wifimarketingplatform/openwrt">
                <img
                  width="60"
                  height="60"
                  alt="exchange.svg"
                  src={"/images/logo/openwrt.png"}
                />
              </Link>
            </li>

            <li className="nav-item section-title mt-3">
              <Link className="nav-link scrollto" href="#section-10">
                <span className="theme-icon-holder mr-2">
                  <i className="fas fa-cogs"></i>
                </span>
                Others
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideBar;
