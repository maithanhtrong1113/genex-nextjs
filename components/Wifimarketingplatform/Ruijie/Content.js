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
                  Ruijie{" "}
                  <span class="docs-time text-dark fw-bold">
                    Last updated: 2022-07-20
                  </span>
                </h1>
              </header>

              <section class="docs-section" id="item-8-1">
                <h2 class="section-heading text-dark fw-bold my-3">
                  Public Cloud
                </h2>
                <h4 class="section-heading text-dark fw-bold ">
                  1. Cấu hình trên Wifi Marketing Portal
                </h4>
                <ul>
                  <li>Vào Admin - Wifi Network</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/ruijie/1.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/ruijie/1.png"
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
                    <a href="/images/ruijie/2.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/ruijie/2.png"
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
                    Chọn model <strong>Ruijie</strong>
                  </li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/ruijie/3.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/unruijieifi/3.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Click Generate sau đó click Copy để dán vào mục Portal
                    Server URL trong cấu hình Auth cho Ruijie.
                  </li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/ruijie/4.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/ruijie/4.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Có thể cấu hình thêm thời gian truy cập tối đa của thiết bị
                    trong mục Session Timeout (đơn vị giây).
                  </li>
                  <li>
                    Sau đó click <strong>Save</strong>
                  </li>
                </ul>
                <h4 class="section-heading text-dark fw-bold">
                  2. Cấu hình trên Cloud Ruijie Controller
                </h4>
                <ul>
                  <li>
                    Đăng nhập vào Ruijie MACC:
                    https://cloud-as.ruijienetworks.com/
                  </li>
                  <li>Username / password: demo / 12345678</li>
                  <ul>
                    <p>a. Thêm SSID:</p>
                    <li>
                      Vào CONFIGURATION - BASIC, click dấu + bên cạnh SSID
                    </li>

                    <figure class="figure docs-figure py-3">
                      <a href="/images/ruijie/5.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/ruijie/5.png"
                          alt=""
                          style={{ width: "400px" }}
                        />
                      </a>
                      <figcaption class="figure-caption mt-3">
                        <i class="fas fa-info-circle mr-2"></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                    <li>Nhập tên SSID, và bật Auth</li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/ruijie/6.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/ruijie/6.png"
                          alt=""
                          style={{ width: "400px" }}
                        />
                      </a>
                      <figcaption class="figure-caption mt-3">
                        <i class="fas fa-info-circle mr-2"></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                    <li>
                      Chọn chế độ External Portal, Portal Server URL là URL đã
                      tạo ở trên và Portal IP là 103.136.114.6
                    </li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/ruijie/7.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/ruijie/7.png"
                          alt=""
                          style={{ width: "400px" }}
                        />
                      </a>
                      <figcaption class="figure-caption mt-3">
                        <i class="fas fa-info-circle mr-2"></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                    <p>b. Thêm tên miền whitelist:</p>
                    <li>
                      Kéo chuột xuống mục Advanced Settings(Optional) và bấm mở
                      rộng để hiện phần Whitelist
                    </li>
                    <li>Thêm tên miền genexwifi.com</li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/ruijie/8.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/ruijie/8.png"
                          alt=""
                          style={{ width: "400px" }}
                        />
                      </a>
                      <figcaption class="figure-caption mt-3">
                        <i class="fas fa-info-circle mr-2"></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                    <li>Bấm Save góc trên bên phải để lưu lại cấu hình:</li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/ruijie/9.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/ruijie/9.png"
                          alt=""
                          style={{ width: "400px" }}
                        />
                      </a>
                      <figcaption class="figure-caption mt-3">
                        <i class="fas fa-info-circle mr-2"></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                  </ul>
                </ul>
              </section>
              <section class="docs-section" id="item-8-2">
                <h2 class="section-heading">Gateway</h2>
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
