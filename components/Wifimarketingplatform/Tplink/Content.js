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
                  Tp-link{" "}
                  <span class="docs-time text-dark fw-bold">
                    Last updated: 2022-07-20
                  </span>
                </h1>
              </header>
              <section class="docs-section" id="item-9-1">
                <h2 class="section-heading text-dark fw-bold my-2">
                  Cấu hình tích hợp WIFI MARKETING trên tp-link Omada Controller
                </h2>
                <ul>
                  <li>
                    <p>Đăng nhập vào Omada controller</p>
                  </li>

                  <li>
                    <p>
                      Tạo SSID để chạy Portal:
                      <code>
                        Vào <b>Wireless Setting</b>{" "}
                        <i class="fas fa-arrow-right"></i>{" "}
                        <b>Basic Wireless Setting</b>{" "}
                        <i class="fas fa-arrow-right"></i> <b>Add</b>
                      </code>
                    </p>
                    <ul>
                      <li>
                        <p>Click vào "Add", sau đó điền vào các thông tin:</p>
                        <ul>
                          <li>SSID Name (tên của SSID đang chạy Portal)</li>
                          <li>Band</li>
                          <li>Guest Network (enable)</li>
                          <li>Security Mode</li>
                        </ul>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/tplink_1.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/tplink_1.png"
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption class="figure-caption mt-3">
                            <i class="fas fa-info-circle mr-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>

                      <li>
                        <p>
                          Để tùy chỉnh Upload/Download Limit:
                          <code>
                            Vào <b>Advance Setting</b>{" "}
                            <i class="fas fa-arrow-right"></i> <b>SSID</b>
                          </code>
                        </p>
                        <ul>
                          <li>Broadcast (enable)</li>
                          <li>Rate Limit (enable)</li>
                          <li>
                            Điền vào upload/download muốn limit (đơn vị Kbps)
                          </li>
                        </ul>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/tplink_2.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/tplink_2.png"
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption class="figure-caption mt-3">
                            <i class="fas fa-info-circle mr-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>

                      <li>
                        <p>
                          Sau khi tạo SSID xong, cần cấu hình Portal{" "}
                          <i class="fas fa-arrow-right"></i>
                          click vào WirelessControl
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/tplink_3.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/tplink_3.png"
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption class="figure-caption mt-3">
                            <i class="fas fa-info-circle mr-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>

                      <li>
                        <p>
                          Chọn vào “Portal” và click “Add a New Portal” để tạo
                          “Portal”
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/tplink_4.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/tplink_4.png"
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption class="figure-caption mt-3">
                            <i class="fas fa-info-circle mr-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>

                      <li>
                        <p>Điền vào các thông số:</p>
                        <ul>
                          <li>Portal Name: tên portal</li>
                          <li>SSID: tên sóng sẽ chạy trang quảng cáo</li>
                          <li>
                            Authentication Type: chọn External RADIUS Server
                          </li>
                          <li>
                            Authentication Timeout: chọn custom để tùy chỉnh
                            thời gian truy cập (Session Time Out)
                          </li>
                          <li>
                            RADIUS Server IP: ip của server làm RADIUS là{" "}
                            <b>210.211.117.184</b>
                          </li>
                          <li>
                            RADIUS Port: port của RADIUS Server là <b>1812</b>
                          </li>
                          <li>
                            RADIUS Password: Password của RADIUS Server là{" "}
                            <b>genexwifi123</b>
                          </li>
                          <li>Authentication: chọn kiểu chứng thực</li>
                          <li>
                            Portal Customization: chọn External Web Portal
                          </li>
                          <li>
                            External Web Portal URL: link đã copy được sau khi
                            generate từ “location group” trên cloud
                          </li>
                        </ul>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/tplink_5.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/tplink_5.png"
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption class="figure-caption mt-3">
                            <i class="fas fa-info-circle mr-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>

                      <li>
                        <p>
                          Lưu ý không chọn thuộc tính <b>Redirect</b>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/tplink_6.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/tplink_6.png"
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption class="figure-caption mt-3">
                            <i class="fas fa-info-circle mr-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>

                      <li>
                        <p>Click "Apply"</p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/tplink_7.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/tplink_7.png"
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption class="figure-caption mt-3">
                            <i class="fas fa-info-circle mr-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </li>
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
