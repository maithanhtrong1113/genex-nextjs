import React, { Fragment } from "react";
import SideBar from "../SideBar";

const Content = () => {
  return (
    <Fragment>
      <div className="docs-wrapper document">
        <SideBar />
        <div className="docs-content">
          <div className="container">
            <article className="docs-article" id="section-1">
              <header className="docs-header">
                <h1 className="docs-heading fw-bold text-dark">
                  Ruckus{" "}
                  <span className="docs-time fw-bold">
                    Last updated: 2022-07-20
                  </span>
                </h1>
              </header>
              <section className="docs-section" id="item-2-1">
                <h2 className="section-heading fw-bold text-dark">
                  1. Ruckus Unleashed AP
                </h2>
                <ul>
                  <li>
                    <p>Đăng nhập vào Ruckus</p>
                    <figure className="figure docs-figure py-3">
                      <a
                        href="/images/features/ruckus_1.png"
                        data-toggle="lightbox"
                      >
                        <img
                          className="figure-img img-fluid shadow rounded"
                          src={"/images/features/ruckus_1.png"}
                          alt=""
                          style={{ width: "600px" }}
                        />
                      </a>
                      <figcaption className="figure-caption mt-3">
                        <i className="fas fa-info-circle me-2"></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                  </li>

                  <li>
                    <p>Tạo RADIUS Server</p>
                    <ul>
                      <li>
                        <code>
                          Vào <b>Admin & Services</b>{" "}
                          <i className="fas fa-arrow-right"></i> <b>Services</b>{" "}
                          <i className="fas fa-arrow-right"></i>{" "}
                          <b>AAA Server</b>{" "}
                          <i className="fas fa-arrow-right"></i> tab{" "}
                          <b>Authentication Servers</b>{" "}
                          <i className="fas fa-arrow-right"></i>{" "}
                          <b>Create New</b>
                        </code>
                        <figure className="figure docs-figure py-3">
                          <a
                            href="/images/features/ruckus-1.png"
                            data-toggle="lightbox"
                          >
                            <img
                              className="figure-img img-fluid shadow rounded"
                              src={"/images/features/ruckus-1.png"}
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption className="figure-caption mt-3">
                            <i className="fas fa-info-circle me-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>

                      <li>
                        <p>Nhập các thông tin:</p>
                        <ul>
                          <li>
                            <b>Name:</b> tên RADIUS Server
                          </li>
                          <li>
                            <b>Type:</b> RADIUS
                          </li>
                          <li>
                            <b>IP Address :</b> ip của RADIUS Server
                          </li>
                          <li>
                            <b>Shared Secret :</b> mã chứng thực nhập{" "}
                            <b>genexwifi123</b>
                          </li>
                          <li>
                            <b> Confirm Secret :</b> xác nhận mã chứng thực nhập{" "}
                            <b>genexwifi123</b>
                          </li>
                        </ul>
                        <figure className="figure docs-figure py-3">
                          <a
                            href="/images/features/ruckus-2.png"
                            data-toggle="lightbox"
                          >
                            <img
                              className="figure-img img-fluid shadow rounded"
                              src={"/images/features/ruckus-2.png"}
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption className="figure-caption mt-3">
                            <i className="fas fa-info-circle me-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p>Sau khi tạo xong RADIUS Server</p>
                    <ul>
                      <li>
                        <code>
                          Vào <b>Admin & Services</b>{" "}
                          <i className="fas fa-arrow-right"></i> <b>Services</b>{" "}
                          <i className="fas fa-arrow-right"></i>{" "}
                          <b>Hotspot Services</b>{" "}
                          <i className="fas fa-arrow-right"></i> tab{" "}
                          <b>Hotspot Services</b>{" "}
                          <i className="fas fa-arrow-right"></i>{" "}
                          <b>Create New</b>
                        </code>
                      </li>

                      <li>
                        <code>
                          tab <b>General</b> điền vào các thông tin:
                        </code>
                        <ul>
                          <li>Name: tên Portal</li>
                          <li>
                            Login Page: paste vào link đã copy ở “Wifi NetWork”
                            trên cloud
                          </li>
                          <li>
                            Session Timeout: thời gian sử dụng cho mỗi lần truy
                            cập SSID
                          </li>
                        </ul>
                        <figure className="figure docs-figure py-3">
                          <a
                            href="/images/features/ruckus_4.png"
                            data-toggle="lightbox"
                          >
                            <img
                              className="figure-img img-fluid shadow rounded"
                              src={"/images/features/ruckus_4.png"}
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption className="figure-caption mt-3">
                            <i className="fas fa-info-circle me-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>

                      <li>
                        <code>
                          tab <b>Authentication</b> điền vào các thông tin:
                        </code>
                        <ul>
                          <li>
                            Authentication: tên RADIUS Server đã tạo ở bước trên
                          </li>
                        </ul>
                        <figure className="figure docs-figure py-3">
                          <a
                            href="/images/features/ruckus_5.png"
                            data-toggle="lightbox"
                          >
                            <img
                              className="figure-img img-fluid shadow rounded"
                              src={"/images/features/ruckus_5.png"}
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption className="figure-caption mt-3">
                            <i className="fas fa-info-circle me-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>

                      <li>
                        <code>
                          tab <b>Walled Garden</b>
                        </code>
                        <ul>
                          <li>Chọn Create New để thêm các ip cho phép pass</li>
                        </ul>
                        <figure className="figure docs-figure py-3">
                          <a
                            href="/images/features/ruckus_6.png"
                            data-toggle="lightbox"
                          >
                            <img
                              className="figure-img img-fluid shadow rounded"
                              src={"/images/features/ruckus_6.png"}
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption className="figure-caption mt-3">
                            <i className="fas fa-info-circle me-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p>
                      Sau khi đã tạo xong Portal{" "}
                      <i className="fas fa-arrow-right"></i> tạo SSID
                    </p>
                    <ul>
                      <li>
                        <code>
                          Vào <b>WIFI Networks</b>{" "}
                          <i className="fas fa-arrow-right"></i> click{" "}
                          <b>Create</b>
                        </code>
                        <br />
                        <figure className="figure docs-figure py-3">
                          <a
                            href="/images/features/ruckus_7.png"
                            data-toggle="lightbox"
                          >
                            <img
                              className="figure-img img-fluid shadow rounded"
                              src={"/images/features/ruckus_7.png"}
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption className="figure-caption mt-3">
                            <i className="fas fa-info-circle me-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>

                      <li>
                        <p>Điền vào các thông số sau:</p>
                        <ul>
                          <li>Name: tên SSID</li>
                          <li>Usage Type: chọn Hotspot Service</li>
                          <li>
                            Hotspot Services : chọn tên Portal đã được tạo ở
                            bước trên
                          </li>
                        </ul>
                        <figure className="figure docs-figure py-3">
                          <a
                            href="/images/features/ruckus_8.png"
                            data-toggle="lightbox"
                          >
                            <img
                              className="figure-img img-fluid shadow rounded"
                              src={"/images/features/ruckus_8.png"}
                              alt=""
                              style={{ width: "600px" }}
                            />
                          </a>
                          <figcaption className="figure-caption mt-3">
                            <i className="fas fa-info-circle me-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>

                      <li>
                        <p>
                          Để Upload/Download Limit: vào{" "}
                          <b>Show Advanced Options</b>{" "}
                          <i className="fas fa-arrow-right"></i>
                          <b>Access Control</b>
                        </p>
                        <ul>
                          <li>
                            Enable Per SSID Uplink: enable lên và tùy chỉnh số
                            mbps
                          </li>
                          <li>
                            Enable Per SSID Downlink: enable lên và tùy chỉnh số
                            mbps
                          </li>
                        </ul>
                        <figure className="figure docs-figure py-3">
                          <a
                            href="/images/features/ruckus_9.png"
                            data-toggle="lightbox"
                          >
                            <img
                              className="figure-img img-fluid shadow rounded"
                              src={"/images/features/ruckus_9.png"}
                              alt=""
                              style={{ width: "700px" }}
                            />
                          </a>
                          <figcaption className="figure-caption mt-3">
                            <i className="fas fa-info-circle me-2"></i>
                            Click vào hình để phóng to
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>
              <section className="docs-section" id="item-2-2">
                <h2 className="section-heading fw-bold text-dark">
                  2. Cấu hình Zone Director hoặc Virtual Smart Zone
                </h2>
                <ul>
                  <p className="my-2">Bước 1. Wireless LAN</p>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/features/zone_director_1.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src={"/images/features/zone_director_1.png"}
                        alt=""
                        style={{ width: "700px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle me-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Phần Authentication Options</li>
                  <ul>
                    <li>Chọn (WISPr) mode</li>
                  </ul>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/features/zone_director_2.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src={"/images/features/zone_director_2.png"}
                        alt=""
                        style={{ width: "700px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle me-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Phần Hotspot Portal</li>
                  <ul>
                    <li>
                      Hotspot (WISPr) Portal: tạo 1 trang portal page mới, và
                      đặt tên theo bạn muốn
                    </li>
                    <li>
                      Authentication server: tạo RADIUS Server profile trỏ về
                      RADIUS Server của GENEX
                    </li>
                    <li>
                      Accouting server: tạo RADIUS Server profile trỏ về RADIUS
                      Server của GENEX
                    </li>
                    <li>Bypass CNA: chọn Off</li>
                  </ul>
                  <p>
                    Bước 2. Edit setting của trang Hotspot (WISPr) Portal Page
                  </p>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/features/zone_director_3.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src={"/images/features/zone_director_3.png"}
                        alt=""
                        style={{ width: "700px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle me-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Phần Redirection</li>
                  <ul>
                    <li>
                      Redirect unauthenticated user: copy đường dẫn từ giao diện
                      Wifi Marketing Platform và paste vào đây
                    </li>
                    <li>Các setting khác thiết lập như hình</li>
                  </ul>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/features/zone_director_4.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src={"/images/features/zone_director_4.png"}
                        alt=""
                        style={{ width: "700px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle me-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Phần Wall Garden</li>
                  <ul>
                    <li>
                      Thêm “*.genexwifi.com” và IP “210.211.117.184” (IP máy chủ
                      GENEX) và các DNS Server như “4.2.2.2” và “8.8.8.8” vào
                      danh sách này
                    </li>
                  </ul>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/features/zone_director_5.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src={"/images/features/zone_director_5.png"}
                        alt=""
                        style={{ width: "700px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle me-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <p>Bước 3. Cấu hình RADIUS Server</p>
                  <li>
                    Phần AAA Server <i className="fas fa-arrow-right"></i>
                    {""} Primary server (Authentication server)
                  </li>
                  <ul>
                    <li>IP: 210.211.117.184</li>
                    <li>Port: 1812</li>
                    <li>Shared Secret: genexwifi123</li>
                  </ul>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/features/zone_director_6.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src={"/images/features/zone_director_6.png"}
                        alt=""
                        style={{ width: "700px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle me-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Phần AAA Server <i className="fas fa-arrow-right"></i>
                    {""} Primary server (Accouting server)
                  </li>
                  <ul>
                    <li>IP: 210.211.117.184</li>
                    <li>Port: 1813</li>
                    <li>Shared Secret: genexwifi123</li>
                  </ul>
                </ul>
              </section>
              <section className="docs-section" id="item-2-3">
                <h2 className="section-heading text-dark fw-bold">
                  3. Public Cloud
                </h2>
                <ul>
                  <p>Bước 1. Cấu hình Network</p>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/features/ruckus_1.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src={"/images/features/ruckus_1.png"}
                        alt=""
                        style={{ width: "700px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle me-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Phần Network Details</li>
                  <ul>
                    <li>Network Name: nhập tên sóng Wifi (SSID Name)</li>
                    <li>
                      Network Type: chọn “3rd Party Captive Portal (WISPr)”
                    </li>
                  </ul>
                  <p>Bước 2. Cấu hình Onboarding</p>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/features/ruckus_2.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src={"/images/features/ruckus_2.png"}
                        alt=""
                        style={{ width: "700px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle me-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Phần Onboarding</li>
                  <ul>
                    <li>Portal Provider: other provider</li>
                    <li>
                      Captive Portal URL: copy đường dẫn External URL từ giao
                      diện Wifi Marketing Platform (*)
                    </li>
                    <li>Chọn “Enable MAC auth bypass”</li>
                    <li>
                      Phần Walled Garden: nhập vào “210.211.117.184” và
                      “*.wispr.ruckus.cloud” như hình
                    </li>
                    <li>Các setting khác thiết lập như hình trên</li>
                  </ul>
                  <p>Bước 3. Cấu hình RADIUS Server</p>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/features/ruckus_3.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src={"/images/features/ruckus_3.png"}
                        alt=""
                        style={{ width: "700px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle me-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Phần Authentication Service</li>
                  <ul>
                    <li>IP: 210.211.117.184</li>
                    <li>Port: 1812</li>
                    <li>Shared Secret: genexwifi123</li>
                  </ul>
                  <li>Phần Accouting Service</li>
                  <ul>
                    <li>IP: 210.211.117.184</li>
                    <li>Port: 1813</li>
                    <li>Shared Secret: genexwifi123</li>
                  </ul>
                </ul>
              </section>
            </article>

            <footer className="footer">
              <div className="container text-center py-5">
                <small className="copyright">
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
