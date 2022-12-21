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
                <h1 class="docs-heading fw-bold text-dark">
                  Mikrotik{" "}
                  <span class="docs-time fw-bold text-dark">
                    Last updated: 2022-07-20
                  </span>
                </h1>
              </header>
              <section class="docs-section" id="item-3-1">
                <h2 class="section-heading fw-bold text-dark">
                  Cấu hình WIFI MARKETING trên Mikrotik RouterOS
                </h2>
                <ul>
                  <li>Dùng WinBox truy cập vào Router.</li>
                  <p>
                    <strong>
                      a. Cấu hình hotspot: IP Hotspot Servers Tab, Hotspot Setup
                    </strong>
                  </p>
                  <li>
                    Cấu hình hotspot các thông tin sau (2. Follow Hotspot
                    Setup):
                  </li>
                  <ul>
                    <li>Hotspot Interface: cổng bridge để chạy hotspot.</li>
                    <li>Local Address of Network: lớp mạng chạy hotspot.</li>
                    <li>
                      Address Pool of Network: Dải địa chỉ IP được cấp cho
                      client khi chạy hotspot.
                    </li>
                    <li>
                      Select Certificate: chọn <strong>none.</strong>
                    </li>
                    <li>
                      IP Address of SMTP Server: nhập <strong>0.0.0.0</strong>
                    </li>
                    <li>
                      DNS Servers: <strong>8.8.8.8 / 8.8.4.4</strong>
                    </li>
                    <li>DNS Name: bỏ trống.</li>
                    <li>
                      Name of Local HotSpot User: nhập <strong>user</strong>
                    </li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/mikrotik/1.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/mikrotik/1.png"
                          alt=""
                          style={{ width: "600px" }}
                        />
                      </a>
                    </figure>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/mikrotik/2.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/mikrotik/2.png"
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
                  <p>
                    <strong>b. Cập nhật cấu hình Hotspot:</strong>
                  </p>
                  <ul>
                    <li>
                      Vào mục <strong>IP Hotspot User ProfilesDefault</strong> ,
                      General Tab, clear mục Shared User sau đó click OK
                    </li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/mikrotik/3.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/mikrotik/3.png"
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
                      Tiếp tục vào mục:{" "}
                      <strong>IP Hotspot Server Profiles</strong> chọn hsprof1,
                      chọn Login Tab và check HTTP PAP.
                    </li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/mikrotik/4.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/mikrotik/4.png"
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
                      Chọn qua Tab RADIUS và cấu hình như hình dưới, sau đó
                      click <strong>OK.</strong>
                    </li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/mikrotik/5.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/mikrotik/5.png"
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
                  <p>
                    Thêm Walled Garden: Vào mục <strong>System Scripts</strong>,
                    click + để tạo script
                  </p>
                  <ul>
                    <li>Name: WalledGarden</li>
                    <li>Source:</li>
                    <code>
                      /ip hotspot walled-garden ip <br />
                      add dst-address=210.211.117.184 <br />
                      /ip hotspot walled-garden <br />
                      add dst-host=*.genexwifi.com <br />
                      add dst-host=*.facebook.com <br />
                      add dst-host=*.akamaihd.net <br />
                      add dst-host=*.akamai.net <br />
                      add dst-host=*.edgecastcdn.net <br />
                      add dst-host=*.edgekey.net <br />
                      add dst-host=*.akamaiedge.net <br />
                      add dst-host=*.twitter.com <br />
                      add dst-host=twitter.com <br />
                      add dst-host=*.twimg.com <br />
                      add dst-host=*.fastly.net <br />
                      add dst-host=*.licdn.net <br />
                      add dst-host=*.cloudfront.net <br />
                      add dst-host=facebook.com <br />
                      add dst-host=*.fbcdn.net <br />
                      add dst-host=*.instagram.com <br />
                      add dst-host=instagram.com <br />
                      add dst-host=*.cdninstagram.com <br />
                      add dst-host=*.linkedin.com <br />
                      add dst-host=linkedin.com <br />
                      add dst-host=*.licdn.com
                    </code>
                    <p>
                      Sau đó click <strong>Apply, Run Script</strong> và{" "}
                      <strong>OK.</strong>
                    </p>
                  </ul>
                  <p>
                    <strong>d. Chèn code login:</strong>
                  </p>
                  <li>
                    Vào mục <strong>Files</strong>, tìm đường dẫn file{" "}
                    <strong>login.html</strong>, thường là{" "}
                    <strong>flash/hotspot/login.html</strong> hoặc
                    <strong>hotspot/login.html.</strong>
                  </li>
                  <li>
                    Như hiện tại đang là{" "}
                    <strong>flash/hotspot/login.html.</strong>
                  </li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/mikrotik/6.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/mikrotik/6.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Sau đó vào cloud ads, vào Admin Wifi Network</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/mikrotik/7.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/mikrotik/7.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption class="figure-caption mt-3">
                      <i class="fas fa-info-circle mr-2"></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Click Captive Portal</li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/mikrotik/8.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/mikrotik/8.png"
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
                    Chọn model <strong>Mikrotik RouterOS.</strong>
                  </li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/mikrotik/9.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/mikrotik/9.png"
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
                    Tiếp tục nhập đường dẫn file login.html vào ô{" "}
                    <strong>Hotspot HTML Directory</strong> sau đó nhấn{" "}
                    <strong>Generate.</strong>
                  </li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/mikrotik/10.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/mikrotik/10.png"
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
                    Nhấn <strong>Copy</strong> để lấy nội dung tạo script.
                  </li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/mikrotik/11.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/mikrotik/11.png"
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
                    Tuỳ chỉnh cấu hình bên dưới sau đó ấn <strong>Save.</strong>
                  </li>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/mikrotik/12.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/mikrotik/12.png"
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
                    <strong>
                      c. Trên Winbox vào mục <strong>System Scripts</strong>,
                      click + để tạo script
                    </strong>
                  </li>
                  <ul>
                    <li>Name: ReplaceLoginPage</li>
                    <li>Source: Dán nội dung vừa Copy bên trên vào.</li>
                    <figure class="figure docs-figure py-3">
                      <a href="/images/mikrotik/13.png" data-toggle="lightbox">
                        <img
                          class="figure-img img-fluid shadow rounded"
                          src="/images/mikrotik/13.png"
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
                      Sau đó click <strong>Apply, Run Script</strong> và{" "}
                      <strong>OK.</strong>
                    </p>
                  </ul>
                  <p>
                    <strong>e. Cấu hình Radius:</strong>
                  </p>
                  <li>
                    Trên Winbox vào mục: <strong>Radius</strong>, click + để tạo
                    mới
                  </li>
                  <li>Nhập thông tin như hình:</li>
                  <ul>
                    <li>
                      Address: <strong>210.211.117.184</strong>
                    </li>
                    <li>
                      Secret: <strong>genexwifi123</strong>
                    </li>
                  </ul>
                  <figure class="figure docs-figure py-3">
                    <a href="/images/mikrotik/14.png" data-toggle="lightbox">
                      <img
                        class="figure-img img-fluid shadow rounded"
                        src="/images/mikrotik/14.png"
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
                    Sau đó click <strong>OK.</strong>
                  </p>
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
