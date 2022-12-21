import React, { Fragment } from "react";
import SideBar from "../SideBar";

const Content = () => {
  return (
    <Fragment>
      <div className="docs-wrapper document">
        <SideBar />
        <div class="docs-content">
          <div class="container">
            <article class="docs-article" id="section-1">
              <header class="docs-header">
                <h1 class="docs-heading text-dark fw-bold">
                  Unifi{" "}
                  <span class="docs-time text-dark fw-bold">
                    Last updated: 2022-07-20
                  </span>
                </h1>
              </header>

              <section class="docs-section" id="item-7-1">
                <h2 class="section-heading text-dark fw-bold">
                  1. Software Controller
                </h2>
                <ul>
                  <li>Vào Admin - Wifi Network</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/unifi/1.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/unifi/1.png"
                        alt=""
                        style={{ width: "400px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Click Captive Portal</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/unifi/2.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/unifi/2.png"
                        alt=""
                        style={{ width: "800px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Chọn model UniFi.</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/unifi/3.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/unifi/3.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Sau đó nhập thông tin:</li>
                  <ul>
                    <li>Base URL: Host của UniFi cloud controller</li>
                    <li>
                      Username: tài khoản để đăng nhập vào UniFi cloud
                      controller
                    </li>
                    <li>
                      Password: mật khẩu để đăng nhập vào UniFi cloud controller
                    </li>
                    <li>
                      Session Timeout: phiên truy cập của 1 user client được
                      phép truy cập internet từ hệ thống wifi, sau thời gian này
                      user client sẽ bị đá ra
                    </li>
                    <li>
                      Upload Limit/ Download Limit: băng thông truy cập internet
                    </li>
                  </ul>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/unifi/4.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/unifi/4.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                </ul>
              </section>
              <section class="docs-section" id="item-7-2">
                <h2 class="section-heading text-dark fw-bold">
                  2. Controller Appliance
                </h2>
                <ul>
                  <li class="text-justify">
                    Đăng nhập với đường dẫn:{" "}
                    <a href="https://unifi.genexwifi.com:8443/" target="_blank">
                      https://unifi.genexwifi.com:8443/
                    </a>
                  </li>
                  <li>Username / password: demo / genexwifi@12345</li>
                  <p>
                    <strong>2.1. Setting “Site”:</strong>
                  </p>

                  <figure class="figure docs-figure py-3">
                    <a href="/images/unifi/5.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/unifi/5.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <p>
                    <strong>2.2. Setting “Wireless Networks”:</strong>
                  </p>
                  <li>Click vào “CREATE NEW WIRELESS NETWORK” để tạo</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/unifi/6.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/unifi/6.png"
                        alt=""
                        style={{ width: "800px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Nhập các tham số như hình</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/unifi/7.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/unifi/7.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <p>
                    <strong>2.3. Setting “Networks”:</strong>
                  </p>
                  <li>Click vào “CREATE NEW NETWORK” để tạo</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/unifi/8.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/unifi/8.png"
                        alt=""
                        style={{ width: "800px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Tham khảo các tham số như hình để tạo</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/unifi/9.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/unifi/9.png"
                        alt=""
                        style={{ width: "800px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <p>
                    <strong>2.4. Setting “Guest Control”:</strong>
                  </p>
                  <li>Nhập các thông tin như hình</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/unifi/10.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/unifi/10.png"
                        alt=""
                        style={{ width: "800px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Thêm “ACCESS CONTROL”. Phần này có các tên miền bắt buộc
                    thêm để pass whitelist:
                  </li>
                  <ul>
                    <li>103.136.114.6</li>
                    <li>cloud.genexwifi.com</li>
                    <li>static.genexwifi.vn</li>
                    <li>gapis.genexwifi.com</li>
                  </ul>
                  <li>
                    Nếu muốn whitelist toàn bộ những domain khác có đuôi “.net”
                    thì thêm vào “.net”, hoặc có thể thêm vào từng domain riêng
                    biệt như hình ví dụ.
                  </li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/unifi/11.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/unifi/11.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                </ul>
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
