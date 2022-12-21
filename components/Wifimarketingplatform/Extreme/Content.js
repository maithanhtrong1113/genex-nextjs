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
                  Extreme{" "}
                  <span class="docs-time text-dark fw-bold">
                    Last updated: 2022-07-20
                  </span>
                </h1>
              </header>

              <section class="docs-section">
                <h2 class="section-heading text-dark fw-bold">
                  Cấu hình tích hợp WIFI MARKETING trên Extreme Controller
                </h2>

                <ul>
                  <li>
                    <p>
                      Tạo "Captive Portals" chạy mode <i>"Internal"</i> (không
                      chạy roaming)
                    </p>
                    <code>
                      Vào <b>Configuration</b>{" "}
                      <i class="fas fa-arrow-right"></i> <b>Services</b>{" "}
                      <i class="fas fa-arrow-right"></i> <b>Captive Portals</b>{" "}
                      <i class="fas fa-arrow-right"></i> <b>Captive Portals</b>{" "}
                      <i class="fas fa-arrow-right"></i> <b>Add</b>
                    </code>
                    <ul>
                      <li>
                        <p>
                          Phần <b>Basic Configuration</b>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/extreme_1.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_1.png"
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
                            href="/images/features/extreme_2.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_2.png"
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
                          Phần <b>Web Page</b>
                        </p>
                        <ul>
                          <li>
                            Chọn <b>Captive_Portal_Webpage_External</b>
                          </li>
                          <li>
                            Các link external lấy từ hệ thống WifiMarketing
                            ads-server
                          </li>
                        </ul>

                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/extreme_3.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_3.png"
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
                            href="/images/features/extreme_4.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_4.png"
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

                  <li>
                    <p>
                      Tạo "Captive Portals" chạy mode <i>"Centralized"</i> (chạy
                      mode roaming)
                    </p>

                    <figure class="figure docs-figure py-3">
                      <a
                        href="/images/features/extreme_5.png"
                        data-title="Ảnh minh họa"
                        data-toggle="lightbox"
                      >
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/features/extreme_5.png"
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
                        href="/images/features/extreme_6.png"
                        data-title="Ảnh minh họa"
                        data-toggle="lightbox"
                      >
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/features/extreme_6.png"
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
                      Add <b>DNS Whitelist</b>
                    </p>
                    <code>
                      <b>Configuration</b> <i class="fas fa-arrow-right"></i>{" "}
                      <b>Services</b> <i class="fas fa-arrow-right"></i>{" "}
                      <b>Captive Portals</b> <i class="fas fa-arrow-right"></i>{" "}
                      <b>DNS Whitelist</b> <i class="fas fa-arrow-right"></i>{" "}
                      <b>Add</b>
                    </code>
                    <ul>
                      <li>Add các Ip/HostName cần whitelist</li>
                    </ul>
                    <figure class="figure docs-figure py-3">
                      <a
                        href="/images/features/extreme_7.png"
                        data-title="Ảnh minh họa"
                        data-toggle="lightbox"
                      >
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/features/extreme_7.png"
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
                      Add <b>RF Domain</b>
                    </p>
                    <code>
                      <b>Configuration</b> <i class="fas fa-arrow-right"></i>{" "}
                      <b>RF Domains</b> <i class="fas fa-arrow-right"></i>{" "}
                      <b>Add</b>
                    </code>
                    <ul>
                      <li>Chọn "Time Zone"</li>
                      <li>Chọn "Country"</li>
                    </ul>
                    <figure class="figure docs-figure py-3">
                      <a
                        href="/images/features/extreme_8.png"
                        data-title="Ảnh minh họa"
                        data-toggle="lightbox"
                      >
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/features/extreme_8.png"
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
                      Add <b>Wireless</b>
                    </p>
                    <code>
                      <b>Configuration</b> <i class="fas fa-arrow-right"></i>{" "}
                      <b>Wireless</b> <i class="fas fa-arrow-right"></i>{" "}
                      <b>Wireless LANs</b> <i class="fas fa-arrow-right"></i>{" "}
                      <b>Add</b>
                    </code>
                    <ul>
                      <li>
                        <p>
                          <b>Basic Configuration</b>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/extreme_9.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_9.png"
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
                          <b>Security</b>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/extreme_10.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_10.png"
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
                          <b>Client Settings</b>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/extreme_11.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_11.png"
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

                  <li>
                    <p>
                      Apply <b>Profiles</b>
                    </p>
                    <code>
                      <b>Configuration</b> <i class="fas fa-arrow-right"></i>{" "}
                      <b>Profiles</b> <i class="fas fa-arrow-right"></i> chọn
                      profile mapping với AP
                    </code>
                    <ul>
                      <li>
                        <p>
                          <b>Interface</b> <i class="fas fa-arrow-right"></i>{" "}
                          <b>Ethernet Ports</b>{" "}
                          <i class="fas fa-arrow-right"></i> <b>ge1</b>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/extreme_12.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_12.png"
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
                          <b>Interface</b> <i class="fas fa-arrow-right"></i>{" "}
                          <b>Virtual Interfaces</b>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/extreme_13.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_13.png"
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
                            href="/images/features/extreme_14.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_14.png"
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
                        <b>Interface</b> <i class="fas fa-arrow-right"></i>{" "}
                        <b>Radios</b>
                      </li>

                      <li>
                        Bật <b>radio1</b> và <b>radio2</b>
                      </li>

                      <li>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/extreme_15.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_15.png"
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
                          Vào từng radio <i class="fas fa-arrow-right"></i> chọn
                          tab <b>WLAN Mapping/Mesh Mapping</b>, sau đó mapping
                          wireless vào
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/extreme_16.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_16.png"
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
                          Phần <b>Services</b>{" "}
                          <i class="fas fa-arrow-right"></i> check{" "}
                          <b>Captive Portal Policies</b>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/extreme_17.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/extreme_17.png"
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

                  <li>
                    <p>
                      Chạy testing roaming trên <b>VX-9000</b>
                    </p>
                    <ul>
                      <li>
                        Trên <b>VX-9000</b> thì roaming sẽ được chạy tự động
                      </li>
                      <li>
                        Vào <b>Profiles</b> <i class="fas fa-arrow-right"></i>{" "}
                        <b>default-ap7622</b> <i class="fas fa-arrow-right"></i>{" "}
                        <b>Radios</b> <i class="fas fa-arrow-right"></i> chỉnh{" "}
                        <b>Transmit Power</b> cho cả hai
                        <b>radio1</b> và <b>radio2</b>. Khi chạy thực tế thì số{" "}
                        <b>Transmit Power</b>
                        phù hợp là từ 15-16
                      </li>
                      <li>
                        <p>Khi test roaming thực hiện theo các bước:</p>
                        <ul>
                          <li>
                            Mở 2 con <b>AP1</b> và <b>AP2</b>, chỉnh{" "}
                            <b>Transmit Power</b> cho cả hai AP này là 1 (là
                            phạm vi phát sóng lan tỏa thấp nhất)
                          </li>
                          <li>
                            Kết nối device vào sóng (ví dụ kết nối vào{" "}
                            <b>AP1</b>)
                          </li>
                          <li>Đặt 2 AP cách nhau ít nhất 3-4 mét.</li>
                          <li>
                            Vào config tăng <b>Transmit Power</b> lên cao hơn so
                            với <b>AP1</b> (ví dụ tăng lên 10).
                          </li>
                          <li>
                            Di chuyển client device từ <b>AP1</b> sang{" "}
                            <b>AP2</b> sao cho client device gần với <b>AP2</b>{" "}
                            nhất
                          </li>
                          <li>Vẫn tiếp tục truy cập internet bình thường</li>
                          <li>
                            Đợi 3-4 phút <i class="fas fa-arrow-right"></i>{" "}
                            Check giao diện
                            <b>VX-9000</b>: <b>Statistics</b>{" "}
                            <i class="fas fa-arrow-right"></i>
                            <b>
                              Radios
                            </b> <i class="fas fa-arrow-right"></i>{" "}
                            <b>Status</b> lúc này sẽ thấy client device được
                            roaming sang <b>AP2</b> thành công
                          </li>
                        </ul>
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
