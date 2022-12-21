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
                  Aerohive{" "}
                  <span class="docs-time text-dark fw-bold">
                    Last updated: 2022-07-20
                  </span>
                </h1>
              </header>

              <section class="docs-section" id="item-3-1">
                <h2 class="section-heading text-dark fw-bold">
                  Cấu hình Aerohive Controller
                </h2>
                <h4 className="text-dark fw-bold">
                  I. Cấu hình “NETWORK POLICY”
                </h4>
                <ul>
                  <p>Vào “CONFIGURE” - “ADD NETWORK POLICY”</p>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/1.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/1.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <p>Nhập “Plolicy Name”</p>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/2.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/2.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <p>
                    “Wireless Networks” - “Add” - Chọn “All other Networks
                    (standard)”
                  </p>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/3.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/3.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <p>Nhập “Name (SSID)” và “Broadcast Name”</p>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/4.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/4.png"
                        alt=""
                        style={{ width: "800px" }}
                      />
                    </a>
                  </figure>
                  <p>Phần “SSID Usage”:</p>
                  <li>Chọn mode “SSID Authentication”:</li>
                  <li>Chọn mode “Open”</li>
                  <li>Bật on nút “Enable Captive Web Portal”</li>
                  <li>Check “User Auth on Captive Web Portal”</li>
                  <li>Uncheck “Enable UPA”</li>
                  <li>Chọn “Redirect to External URL for”</li>
                  <li>Check “Send Client's Requested URL in Clear Text”</li>
                  <li>
                    Phần “Default Captive Web Portal” có thể chọn “Select” từ
                    danh sách cấu hình có sẵn, hoặc “Add” mới
                  </li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/5.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/5.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/6.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/6.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <li>Nếu “Add” mới - popup ô nhập thông tin:</li>
                  <ul>
                    <li>Nhập “Name”</li>
                    <li>
                      Nhập “Login URL” (lấy external login link từ hệ thống wifi
                      marketing)
                    </li>
                    <li>
                      Phần “Password Encryption” - “No Encryption (Plaintext
                      Password)”
                    </li>
                    <li>Phần “Authentication Method” - “MS-CHAP V2”</li>
                    <li>Nút “Success Page” - “OFF”</li>
                    <li>
                      Check “Redirectclientsafterasuccessful
                      <br />
                      loginattempt.” - check “Toaspecified URL” - Nhập vào link
                      success (lấy external success link từ hệ thống wifi
                      marketing)
                    </li>
                    <li>Nút “Failure Page” - “OFF”</li>
                    <li>
                      Phần “Advanced Configuration” - check “Enable HTTPS”
                    </li>
                    <li>
                      Phần “Walled Garden” - “Add” - Chọn “Service Type”: “All”
                      - nhập IP/Host Name
                    </li>
                  </ul>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/7.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/7.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/8.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/8.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/9.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/9.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/10.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/10.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <p>Phần “Authentication Settings”:</p>
                  <li>Click “Add”</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/11.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/11.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <li>Hiện popup:</li>
                  <ul>
                    <li>Nhập “RADIUS Server Group Name”</li>
                    <li>Click “Add”</li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/aerohive/12.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/aerohive/12.png"
                          alt=""
                          style={{ width: "600px" }}
                        />
                      </a>
                    </figure>
                    <li>
                      Nhập “Name”, “IP/Host Name”, “Server Type”, “Shared
                      Secret”
                    </li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/aerohive/13.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/aerohive/13.png"
                          alt=""
                          style={{ width: "600px" }}
                        />
                      </a>
                    </figure>
                    <li>
                      “SAVE EXTERNAL RADIUS” - sau khi save xong - trong danh
                      sách vừa thêm - select - “SAVE RADIUS”
                    </li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/aerohive/14.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/aerohive/14.png"
                          alt=""
                          style={{ width: "600px" }}
                        />
                      </a>
                    </figure>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/aerohive/15.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/aerohive/15.png"
                          alt=""
                          style={{ width: "600px" }}
                        />
                      </a>
                    </figure>
                  </ul>
                  <p>Phần “User Access Settings”:</p>
                  <li>Click “Add” để thêm profile mới</li>
                  <li>Hiện popup:</li>
                  <ul>
                    <li>
                      Đặt tên “User Profile Name” như hình - “SAVE USER PROFILE”
                    </li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/aerohive/16.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/aerohive/16.png"
                          alt=""
                          style={{ width: "600px" }}
                        />
                      </a>
                    </figure>
                  </ul>
                  <p>
                    Sau khi cấu hình “Wireless Networks” - save tiếp tục cho đến
                    tab “Additional Settings”
                  </p>
                  <li>Phần “DNS Server” - “OFF”</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/17.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/17.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <p>
                    Save tiếp tục để đến tab “Deploy Policy” - có thể chọn danh
                    sách AP có sẵn để upload cấu hình xuống AP, hoặc nếu chưa có
                    AP thì exit cấu hình tại đây.
                  </p>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/18.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/18.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                </ul>
                <h4 className="text-dark fw-bold">
                  II. Thêm AP mới vào controller Aerohive
                </h4>
                <ul>
                  <p>
                    Vào “MONITOR” - “DEVICE” - “ADD” - Chọn “Quick Add Devices”
                  </p>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/19.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/19.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <li>Nhập “serial numbers” (lấy ở mặt phía sau AP)</li>
                  <li>Chọn policy cần apply cho AP - “ADD DEVICES”</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/20.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/20.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <p>Sau khi add thành công vào danh sách:</p>
                  <li>
                    Trên dòng vừa mới add - chọn ở ô “Host Name” để vào cấu hình
                    cho AP vừa mới add
                  </li>
                  <li>
                    Popup cấu hình - chọn “Configure” - “Device Configuration”
                  </li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/21.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/21.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <li>Đặt lại tên cho AP</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/22.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/22.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                  </figure>
                  <li>Phần “IPv4” - chọn DHCP</li>
                  <li>“SAVE DEVICE CONFIGURATION”</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/aerohive/23.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/aerohive/23.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
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
