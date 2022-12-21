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
                <h1 class="docs-heading text-dark fw-bold">
                  EnGenius{" "}
                  <span class="docs-time text-dark fw-bold">
                    Last updated: 2022-07-20
                  </span>
                </h1>
              </header>

              <section class="docs-section" id="item-5-1">
                <h2 class="section-heading text-dark fw-bold mt-3">
                  Cấu hình tích hợp WIFI MARKETING trên EnGenius ezMaster
                </h2>
                <ul>
                  <li>
                    <p>
                      Tạo Project:
                      <code>
                        <b>Project</b> <i class="fas fa-arrow-right"></i>{" "}
                        <b>Create New Project</b>
                      </code>
                    </p>
                    <figure class="figure docs-figure py-3">
                      <a
                        href="/images/features/en_ez_1.png"
                        data-title="Ảnh minh họa"
                        data-toggle="lightbox"
                      >
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/features/en_ez_1.png"
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
                      Thêm Device:
                      <code>
                        Vào <b>Device Inventory</b>, thêm theo format:{" "}
                        <b>MAC Address;Check Code;Description</b>
                      </code>
                    </p>
                    <figure class="figure docs-figure py-3">
                      <a
                        href="/images/features/en_ez_2.png"
                        data-title="Ảnh minh họa"
                        data-toggle="lightbox"
                      >
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/features/en_ez_2.png"
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
                      Vào lại <b>Project</b>, qua tab <b>Pending Approval</b>,
                      lúc này đã có MAC Address của AP vừa mới thêm, sau đó chọn
                      và <b>Add</b>
                    </p>
                    <figure class="figure docs-figure py-3">
                      <a
                        href="/images/features/en_ez_3.png"
                        data-title="Ảnh minh họa"
                        data-toggle="lightbox"
                      >
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/features/en_ez_3.png"
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
                      Cấu hình AP Groups: vào <b>Device Management</b>{" "}
                      <i class="fas fa-arrow-right"></i>
                      <b>AP Groups</b>
                    </p>

                    <figure class="figure docs-figure py-3">
                      <a
                        href="/images/features/en_ez_4.png"
                        data-title="Ảnh minh họa"
                        data-toggle="lightbox"
                      >
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/features/en_ez_4.png"
                          alt=""
                          style={{ width: "600px" }}
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
                          Tab <b>General Settings</b>: Điền vào{" "}
                          <i>"Group Name"</i>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/en_ez_5.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/en_ez_5.png"
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
                          Tab <b>Member Setting</b>: click <i>"Add"</i> xuất
                          hiện modal, chọn những AP nào cần add vào group hiện
                          tại, sau đó click <i>"Confirm"</i>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/en_ez_6.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/en_ez_6.png"
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
                          Tab <b>LAN Port Settings</b>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/en_ez_7.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/en_ez_7.png"
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
                          Tab <b>Wireless Radio Settings</b>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/en_ez_8.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/en_ez_8.png"
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
                          Tab <b>WLAN Settings</b>:
                        </p>
                        <ul>
                          <li>
                            <p>Chọn một SSID, ví dụ "SSID_1"</p>
                            <figure class="figure docs-figure py-3">
                              <a
                                href="/images/features/en_ez_9.png"
                                data-title="Ảnh minh họa"
                                data-toggle="lightbox"
                              >
                                <img
                                  class="figure-img img-fluid shadow rounded"
                                  src="/images/features/en_ez_9.png"
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
                            <p>Xuất hiện modal</p>
                            <table class="table table-bordered">
                              <tbody>
                                <tr>
                                  <th class="theme-bg-light">Enable</th>
                                  <td>chọn 2.4Ghz, 5Ghz</td>
                                </tr>
                                <tr>
                                  <th class="theme-bg-light">SSID</th>
                                  <td>Nhập SSID</td>
                                </tr>
                                <tr>
                                  <th class="theme-bg-light">Hidden SSID</th>
                                  <td>Disable</td>
                                </tr>
                                <tr>
                                  <th class="theme-bg-light">L2 Isolation</th>
                                  <td>Disable</td>
                                </tr>
                                <tr>
                                  <th class="theme-bg-light">VLAN Isolation</th>
                                  <td>Disable</td>
                                </tr>
                                <tr>
                                  <th class="theme-bg-light">Band Steering</th>
                                  <td>Disable</td>
                                </tr>
                                <tr>
                                  <th class="theme-bg-light">Captive Portal</th>
                                  <td>
                                    Status (Enable), Profile (chọn profile bên
                                    phần
                                    <b>Hotspot Service</b>{" "}
                                    <i class="fas fa-arrow-right"></i>
                                    <b>Captive Portal</b>)
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <figure class="figure docs-figure py-3">
                              <a
                                href="/images/features/en_ez_10.png"
                                data-title="Ảnh minh họa"
                                data-toggle="lightbox"
                              >
                                <img
                                  class="figure-img img-fluid shadow rounded"
                                  src="/images/features/en_ez_10.png"
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
                          Tab <b>Advanced Settings</b>
                        </p>
                        <figure class="figure docs-figure py-3">
                          <a
                            href="/images/features/en_ez_11.png"
                            data-title="Ảnh minh họa"
                            data-toggle="lightbox"
                          >
                            <img
                              class="figure-img img-fluid shadow rounded"
                              src="/images/features/en_ez_11.png"
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
                      Thêm Captive Portal:
                      <code>
                        <b>Hotspot Service</b>{" "}
                        <i class="fas fa-arrow-right"></i> <b>Captive Portal</b>
                        , click <b>Add</b> để thêm vào một Captive Portal mới
                      </code>
                    </p>
                    <figure class="figure docs-figure py-3">
                      <a
                        href="/images/features/en_ez_12.png"
                        data-title="Ảnh minh họa"
                        data-toggle="lightbox"
                      >
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/features/en_ez_12.png"
                          alt=""
                          style={{ width: "600px" }}
                        />
                      </a>
                      <figcaption class="figure-caption mt-3">
                        <i class="fas fa-info-circle mr-2"></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                    <p>Thêm vào những thông tin như sau:</p>

                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th class="theme-bg-light">Profile Name</th>
                          <td>Điền vào tên profile</td>
                        </tr>

                        <tr>
                          <th class="theme-bg-light">Authentication Type</th>
                          <td>Chọn "Splash & go"</td>
                        </tr>

                        <tr>
                          <th class="theme-bg-light">Splash Page</th>
                          <td>
                            Chọn "External Splash Page URL", nhập vào link từ
                            cloud WIFI MARKETING
                          </td>
                        </tr>

                        <tr>
                          <th class="theme-bg-light">Enable Session Timeout</th>
                          <td>Một session truy cập của user</td>
                        </tr>

                        <tr>
                          <th class="theme-bg-light">Enable Idle Timeout</th>
                          <td>
                            Thời gian user không sử dụng internet sẽ bị kick out
                          </td>
                        </tr>

                        <tr>
                          <th class="theme-bg-light">Walled Garden</th>
                          <td>
                            Chọn "Enable", nhập vào các domain/ip cho phép pass.
                            Có các domain/ip sau bắt buộc phải nhập:
                            <ul>
                              <li>
                                <i>210.211.117.184</i>
                              </li>
                              <li>
                                <i>cloud.genexwifi.com</i>
                              </li>
                              <li>
                                <i>gapis.genexwifi.com</i>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <figure class="figure docs-figure py-3">
                      <a
                        href="/images/features/en_ez_13.png"
                        data-title="Ảnh minh họa"
                        data-toggle="lightbox"
                      >
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/features/en_ez_13.png"
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
                        href="/images/features/en_ez_14.png"
                        data-title="Ảnh minh họa"
                        data-toggle="lightbox"
                      >
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/features/en_ez_14.png"
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
