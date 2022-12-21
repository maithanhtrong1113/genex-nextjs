import React, { Fragment } from "react";
import { Container } from "reactstrap";
import Sidebar from "../SideBar";

const Content = () => {
  return (
    <Fragment>
      <div className="docs-wrapper document">
        <Sidebar />
        <div class="docs-content">
          <div class="container">
            <article class="docs-article" id="section-1">
              <header class="docs-header">
                <h1 class="docs-heading fw-bold text-dark">
                  Cisco WLC
                  <span class="docs-time fw-bold text-dark">
                    Last updated: 2022-09-26
                  </span>
                </h1>
              </header>

              <section class="docs-section" id="item-3-1">
                <ul>
                  <p>
                    <strong className="fw-bold text-dark">
                      Bước 1. Tạo WLAN
                    </strong>
                  </p>
                  <li>Sau khi login thành công - click WLANs - chọn WLANs</li>
                  <li>Mục General</li>
                  <ul>
                    <li>Profile Name: nhập tên Profile WLANs</li>
                    <li>SSID: nhập tên sóng WLAN</li>
                  </ul>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/1.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/1.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Mục Security</li>
                  <li>Tab Layer 2</li>
                  <ul>
                    <li>Layer 2 Security: None</li>
                  </ul>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/2.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/2.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Tab Layer 2</li>
                  <ul>
                    <li>Layer 3 Security: Web Policy</li>
                    <li>Captive Network Assistant Bypass: None</li>
                    <li>Tích chọn Passthrough</li>
                  </ul>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/3.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/3.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/4.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/4.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Tab AAA Servers</li>
                  <ul>
                    <li>Authentication Servers</li>
                    <li>Server 1</li>
                    <li>IP: 210.211.117.184</li>
                    <li>Port: 1812</li>
                  </ul>
                  <li>Các setting còn lại giữ nguyên</li>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/5.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/5.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/6.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/6.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Order Used For Authentication</li>
                  <ul>
                    <li>LOCAL</li>
                    <li>RADIUS</li>
                    <li>LDAP</li>
                  </ul>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/7.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/7.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Mục QoS</li>
                  <ul>
                    <li>Quality of Service (QoS): Silver (best effect)</li>
                    <li>
                      Override Per-User Bandwidth Contracts (kbps): Chỉnh lưu
                      lượng băng thông cho phép user sử dụng{" "}
                    </li>
                  </ul>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/8.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/8.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/9.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/9.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/10.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/10.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>

                <ul>
                  <li>Mục Policy-Mapping: giữ mặc định</li>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/11.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/11.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Mục Advanced</li>
                  <ul>
                    <li>
                      Enable Session Timeout: giới hạn thời gian sử dụng tính
                      bằng giây
                    </li>
                  </ul>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/12.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/12.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/13.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/13.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/14.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/14.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/15.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/15.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/16.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/16.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>
                    Vào mục SECURITY - Access Control Lists - Access Control
                    Lists
                  </li>
                  <ul>
                    <li>Enable Counters: bật tất cả</li>
                  </ul>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/17.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/17.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Bấm vào mục Test</li>
                  <li>Sau đó thêm các rule như hình dưới</li>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/18.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/18.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Vào mục SECURITY - Web Auth - Web Login Page</li>
                  <ul>
                    <li>
                      Web Authentication Type: External (Redirect to external
                      server)
                    </li>
                    <li>Redirect URL after login: bỏ trống</li>
                    <li>Login Success Page Type: Default</li>
                    <li>
                      External Webauth URL: Login HT Cloud GENEX - vô menu Admin
                      - WiFi Network - Click nút "Captive Portal" - click nút
                      "Generate" sau đó click nút Copy để copy link
                    </li>
                  </ul>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/19.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/19.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/20.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/20.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Vào mục SECURITY - Web Auth - Secure Web</li>
                  <ul>
                    <li>SSLV3: bỏ chọn</li>
                    <li>Cipher-Option High: bỏ chọn</li>
                  </ul>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/21.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/21.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Kiểm tra lại các Interface trong mục CONTROLLER</li>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/22.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/22.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/23.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/23.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/cisco/24.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/cisco/24.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
              </section>
            </article>

            <footer class="footer">
              <div class="container text-center py-5">
                <small class="copyright">
                  Copyright &copy;{" "}
                  <a href="https://genexwifi.com" target="_blank">
                    GENEX
                  </a>{" "}
                  2019. All rights reserved.
                </small>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
