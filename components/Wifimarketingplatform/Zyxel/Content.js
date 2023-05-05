import React, { Fragment } from "react";
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
                <h1 class="docs-heading text-dark fw-bold">
                  Zyxel Nebula{" "}
                  <span class="docs-time text-dark fw-bold">
                    Last updated: 2022-09-26
                  </span>
                </h1>
              </header>

              <section class="docs-section" id="item-9-1">
                <h2 class="section-heading text-dark fw-bold">
                  Cấu hình tích hợp WIFI MARKETING trên Zyxel Nebula Controller
                </h2>
                <ul>
                  <li>
                    <p>Đăng nhập vào Zyxel Nebula Controller</p>
                  </li>

                  <li>
                    <p>
                      Tạo SSID để chạy Portal:
                      <code>
                        Vào <b>Access point</b>{" "}
                        <i class="fas fa-arrow-right"></i> <b>SSID Settings</b>
                      </code>
                    </p>
                    <figure class="figure docs-figure py-3">
                      <a
                        href="/images/zyxel/menu1.png"
                        data-title="Ảnh minh họa"
                        data-toggle="lightbox"
                      >
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/zyxel/menu1.png"
                          alt=""
                          style={{ width: "300px" }}
                        />
                      </a>
                      <figcaption class="figure-caption mt-3">
                        <i class="fas fa-info-circle mr-2"></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                    <ul>
                      <li>
                        <p>
                          Click vào + Add SSID Network, sau đó điền vào các
                          thông tin:
                        </p>
                        <ul>
                          <li>Name (tên của SSID đang chạy Portal)</li>
                          <li>Enabled (enable)</li>
                        </ul>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/zyxel/ssid.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/zyxel/ssid.png"
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
                          Tiếp tục cấu hình Captive portal advance setting:
                          <code>
                            Vào <b>Access point</b>{" "}
                            <i class="fas fa-arrow-right"></i>{" "}
                            <b>SSID advanced settings</b>
                          </code>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/zyxel/menu2.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/zyxel/menu2.png"
                              alt=""
                              style={{ width: "300px" }}
                            />
                          </a>
                          <figcaption class="figure-caption mt-3">
                            <i class="fas fa-info-circle mr-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <p>Kéo xuống đến mục Captive portal advance setting</p>
                        <ul>
                          <li>Walled garden (enable)</li>
                          <li>
                            Walled garden ranges: Nhập genexwifi.com, zyxel.com
                            và nebula.zyxel.com
                          </li>
                          <li>
                            Reauth time: tùy chọn session timeout sẽ bị kickout
                            sau khoảng thời gian kết nối
                          </li>
                        </ul>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/zyxel/advanced.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/zyxel/advanced.png"
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption class="figure-caption mt-3">
                            <i class="fas fa-info-circle mr-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/zyxel/session.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/zyxel/session.png"
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
                          Tiếp tục cấu hình kết nối portal với Wifi Marketing
                          Platform
                          <code>
                            Vào <b>Access point</b>{" "}
                            <i class="fas fa-arrow-right"></i>{" "}
                            <b>Captive portal customization</b>
                          </code>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/zyxel/menu3.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/zyxel/menu3.png"
                              alt=""
                              style={{ width: "300px" }}
                            />
                          </a>
                          <figcaption class="figure-caption mt-3">
                            <i class="fas fa-info-circle mr-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>

                      <li>
                        <p>Kéo xuống đến mục External captive portal URL</p>
                        <ul>
                          <li>
                            URL: enable và nhập đường dẫn External URL từ giao
                            diện Wifi Marketing Platform (*)
                          </li>
                          <li>
                            Stay on Captive portal authenticated successfully
                            page: Chọn mục này{" "}
                          </li>
                        </ul>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/zyxel/captive.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/zyxel/captive.png"
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
                        <p>Click Save</p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/zyxel/save.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/zyxel/save.png"
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
                  Copyright &copy; <a href="https://genexwifi.com">GENEX</a>{" "}
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
