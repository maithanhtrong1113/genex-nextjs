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
                  Draytek{" "}
                  <span class="docs-time text-dark fw-bold">
                    Last updated: 2022-07-20
                  </span>
                </h1>
              </header>

              <section class="docs-section " id="item-3-1">
                <h4 className="text-dark fw-bold">
                  Bước 1: Hotspot Web Portal - Profile Setup
                </h4>
                <figure class="figure docs-figure py-3">
                  <a href="/images/draytek/1.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/draytek/1.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <h4 className="text-dark fw-bold">Bước 2: Login Method</h4>
                <figure class="figure docs-figure py-3">
                  <a href="/images/draytek/2.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/draytek/2.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Chọn “Enable this profile”</li>
                  <li>Phần Portal Server</li>
                  <ul>
                    <li>Chọn External Portal Server</li>

                    <li>
                      Captive Portal URL: copy đường dẫn External Captive Portal
                      URL từ giao diện GENEX WiFi Marketing Platform (*)
                    </li>

                    <li>Redirection URL: để mặc định như hình</li>
                  </ul>

                  <li>Phần Radius Server</li>
                  <ul>
                    <li>
                      Authentication Method chọn External RADIUS Server và
                      Profile 1 như hình
                    </li>
                  </ul>
                </ul>
                <h4 className="text-dark fw-bold">Bước 3: Whitelist setting</h4>
                <figure class="figure docs-figure py-3">
                  <a href="/images/draytek/3.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/draytek/3.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/draytek/4.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/draytek/4.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>
                    Chọn tab “Dest Domain”, sau đó khai báo các domain,
                    subdomain dạng wildcard để Draytek cho phép thiết bị người
                    dùng (Laptop, Tablet, Smartphone) truy cập trang web (http,
                    https) với các domain được khai báo.
                  </li>
                  <ul>
                    <li>
                      Phần Destination Domain Whitelist, nhập “*.genexwifi.com”
                      như hình{" "}
                    </li>
                  </ul>
                  <li>
                    Chọn tab “Dest IP”, sau đó khai báo các địa chỉ IP các máy
                    chủ ứng dụng, máy chủ wifi marketing platform, dns server,
                    Radius server, để Draytek cho phép thiết bị người dùng
                    (Laptop, Tablet, Smartphone) truy cập được tới máy chủ này
                  </li>
                  <ul>
                    <li>
                      Phần Destination IP Whitelist, thêm IP 210.211.117.184 (IP
                      của máy chủ GENEX), và các IP DNS Server mà phía khách
                      hàng sử dụng trong phần DHCP Server cấp IP cho người dùng
                    </li>
                  </ul>
                </ul>
                <h4 className="text-dark fw-bold">Bước 4: More Options</h4>
                <figure class="figure docs-figure py-3">
                  <a href="/images/draytek/5.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/draytek/5.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Phần Web Portal Options, chọn như hình</li>
                  <ul>
                    <li>Chọn “HTTPS Redirection”</li>
                    <li>Chọn “Captive Portal Detection”</li>
                    <li>Bỏ chọn “Bypass”</li>
                  </ul>
                </ul>
                <figure class="figure docs-figure py-3">
                  <a href="/images/draytek/6.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/draytek/6.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>Phần Landing page After Authentication</li>
                  <ul>
                    <li>Chọn “User Requested URL”</li>
                    <li>
                      Force Landing Page Stay, chọn Enable và chọn số giây bạn
                      muốn giữ trang website, fanpage của bạn sau khi người dùng
                      đã authenticate (xác thực), hết thời gian này thì Android
                      sẽ tự tắt trang popup, iOS sẽ báo trạng thái “DONE hoặc
                      SUCCESS”
                    </li>
                  </ul>
                </ul>
                <h4 className="text-dark fw-bold">Bước 5: Cấu hình RADIUS</h4>
                <figure class="figure docs-figure py-3">
                  <a href="/images/draytek/7.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/draytek/7.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <figure class="figure docs-figure py-3">
                  <a href="/images/draytek/8.png" data-toggle="lightbox">
                    <img
                      class="figure-img img-fluid shadow rounded"
                      src="/images/draytek/8.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                </figure>
                <ul>
                  <li>
                    Vào phần RADIUS và khai báo RADIUS Server của GENEX như sau
                  </li>
                  <ul>
                    <li>IP: 210.211.117.184</li>
                    <li>Authentication port: 1812</li>
                    <li>Accounting Port: 1813</li>
                    <li>Secret key: genexwifi123</li>
                  </ul>
                </ul>
              </section>
            </article>

            <footer class="footer">
              <div class="container text-center py-5">
                <small class="copyright">
                  Copyright &copy;{" "}
                  <a href="https://genexwifi.com" ">
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
