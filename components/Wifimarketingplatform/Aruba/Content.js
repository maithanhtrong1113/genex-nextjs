import React, { Fragment } from "react";
import Sidebar from "../SideBar";

const Content = () => {
  return (
    <Fragment>
      <div className="docs-wrapper document">
        <Sidebar />
        <div className="docs-content">
          <div className="container">
            <article className="docs-article" id="section-1">
              <header className="docs-header">
                <h1 className="docs-heading fw-bold text-dark">
                  Aruba{" "}
                  <span className="docs-time text-dark fw-bold">
                    Last updated: 2022-09-26
                  </span>
                </h1>
              </header>
              <section className="docs-section" id="item-3-1">
                <h2 className="section-heading fw-bold text-dark mt-2">
                  1. Aruba IAP Virtual Controller
                </h2>
                <ul>
                  <li>Sau khi truy cập vào controller.</li>
                  <li>
                    Trước tiên cần cấu hình để đăng nhập captive portal: Click
                    vào mục Security trên góc
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/1.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/1.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Qua tab Users for Internal Server để tạo user login portal
                  </li>
                  <li>Nhập Username / Password là: genex / genexwifi</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/2.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/2.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Bấm Add</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/3.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/3.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Tiếp tục qua tab External Captive Portal để tạo trang portal
                    và bấm New rồi nhập thông tin như hình sau đó bấm OK
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/4.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/4.png"
                        alt=""
                        style={{ width: "400px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Truy cập vào mục Admin - Wifi Network để lấy link External
                    Portal
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/5.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/5.png"
                        alt=""
                        style={{ width: "400px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Click Captive Portal</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/6.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/6.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Chọn model Aruba VIrtual Controller</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/7.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/7.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Click Generate sau đó click Copy để lấy link cấu hình</li>
                  <li>Click Save lưu lại cấu hình</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/8.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/8.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Lưu ý: Link lấy được sẽ chia làm 2 phần:</li>
                  <p>Ví dụ:</p>
                  <p>
                    http://cloud.genexwifi.com/api/
                    <br />
                    common/5ec230e22be3f0775ff4
                    <br />
                    272b/externalType/aruba
                  </p>
                  <p>
                    Phần sau http:// và phía trước dấu / tiếp đó sẽ điền vào mục
                    IP or hostname, như ví dụ trên là cloud.genexwifi.com. Phần
                    URL còn lại sẽ điền vào mục URL như ví dụ trên sẽ là
                  </p>
                  <p>
                    /api/common/5ec230e22be3f07 75ff4272b/externalType/aruba
                  </p>
                  <li>
                    Tiếp tục qua tab Roles để thêm whitelist domain bấm New bên
                    trái
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/9.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/9.png"
                        alt=""
                        style={{ width: "400px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Nhập Genex-MKT-Whitelisted rồi click OK</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/10.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/10.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Chọn mục đầu tiên khung bên phải sau đó bấm Edit</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/11.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/11.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Sau đó nhập thông tin như hình và bấm OK</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/12.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/12.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Sau đó click OK để lưu lại các cấu hình</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/13.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/13.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Tiếp thep cần tạo SSID để chạy Portal: Click vào New trong
                    mục Networks
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/14.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/14.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Nhập tên sóng và chọn Guest</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/15.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/15.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Có thể set giới hạn băng thông cho từng thiết bị truy cập
                    trong mục Show advance options, sau đó bấm Next
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/16.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/16.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/17.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/17.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Tiếp tục bấm Next mục này nếu không set DHCP và VLAN</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/18.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/18.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Ở mục Security, chọn Splash page type là External</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/19.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/19.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Phần Captive portal profile ta chọn Genex Wifi Marketing như
                    vừa tạo ở trên
                  </li>
                  <li>
                    Phần Reauth Interval dùng để set session timeout, hiện tại
                    là timeout trong 1 tiếng
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/20.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/20.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Các thông tin còn lại kiểm tra như hình sau đó click Next
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/21.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/21.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Ta chọn như hình sau đó bấm Finish để lưu lại cấu hình.
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/22.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/22.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                </ul>
              </section>
              <section className="docs-section" id="item-3-2">
                <h2 className="section-heading fw-bold text-dark mt-3">
                  2. Mobility Controller version cũ
                </h2>
                <ul>
                  <p className="my-2">
                    <strong className="text-dark">
                      Bước 1: Tạo sóng WLAN chạy MKT
                    </strong>
                  </p>
                  <li>
                    Sau khi Login thành công - chọn Configuration - Campus LAN
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/1.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/1.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Chỗ “WLANs for default” - Click nút New để tạo 1 sóng mới
                  </li>

                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/2.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/2.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Nhập tên sóng xong click nút “Next”</li>

                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/3.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/3.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Chọn mặc định như hình, sau đó click nút “Next”</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/4.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/4.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Chọn tiếp mặc định như hình và click nút “Next”</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/5.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/5.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Chọn “Guest” và click nút “Next”</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/6.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/6.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Chọn mặc định như hình trên và click “Next”</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/7.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/7.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Click nút “Next”</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/8.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/8.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Nhập thông tin RADIUS Server của GENEX</li>
                  <ul>
                    <li>IP: 210.211.117.184</li>
                    <li>Shared key: genexwifi123</li>
                  </ul>
                  <li>Sau đó click nút “Next”</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/9.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/9.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Tiếp tục click nút “Next”</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/10.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/10.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Click nút “Finish”</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/11.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/11.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Click nút “Close”</li>
                  <p>
                    <strong className="text-dark">
                      Bước 2: Cấu hình Captive Portal
                    </strong>
                  </p>
                  <li>
                    Vào Configuration - Security - Authentication - L3
                    Authentication - Captive Portal Authentication - click dưới
                    profile có tên sóng WiFi của bạn
                  </li>

                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/12.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/12.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/13.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/13.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Login Page: lấy đường dẫn từ HT GENEX - menu Admin - WiFi
                    Network - click nút “Captive Portal” - click nút “Generate”
                    - click nút “Copy” và paste vô đây
                  </li>

                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/14.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/14.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Welcome page: giữ nguyên mặc định</li>
                  <li>Bỏ “Show Welcome Page”</li>
                  <li>Chọn “Add Switch IP address in the rediction URL”</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/15.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/15.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Click nút “Apply”</li>
                  <p>
                    <strong>Bước 3. Access List</strong>
                  </p>
                  <li>
                    Security - Access List - User Roles - Free WiFi-guest-logon
                    - click nút Edit
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/16.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/16.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/17.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/17.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Click “captiveportal”</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/old/18.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/old/18.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Click nút “Add” sau đó thêm rule như hình đính kèm</li>
                  <ul>
                    <li>Destinaton: 210.211.117.184</li>
                    <li>Action: Permit</li>
                  </ul>
                </ul>
              </section>

              <section className="docs-section" id="item-3-3">
                <h2 className="section-heading fw-bold text-dark mt-2">
                  3. Mobility Controller version mới
                </h2>
                <p>
                  Phiên bản firmware: <b>OS = 8.7</b>
                </p>
                <ul>
                  <p>
                    <strong className="text-dark">Bước 1. Tạo WLAN mới</strong>
                  </p>
                  <li>
                    Sau khi login thành công - click Configuration - chọn
                    Controller
                  </li>
                  <li>Vào WLANs - Click dấu "+" tạo WLAN mới</li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/tao_vlan.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/tao_vlan.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Mục General</li>
                  <ul>
                    <li>Nhập tên sóng: Ví dụ New_MKT</li>
                    <li>Primary usage: Chọn mục Guest</li>
                    <li>Các setting bên dưới giữ mặc định sau đó bấm Next</li>
                  </ul>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/new_wlan.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/new_wlan.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>

                  <p>
                    <strong>B1.1 Thiết lập VLAN cho sóng (nếu có)</strong>
                  </p>
                  <li>
                    Nhập VLAN tương ứng cho mạng WiFi (nếu có) sau đó bấm Next
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/set_vlan.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/set_vlan.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>

                  <p>
                    <strong>B1.2 Cấu hình captive portal cho WLAN</strong>
                  </p>
                  <li>Chọn mục "ClearPass or other external captive portal"</li>
                  <li>Auth servers</li>
                  <p>Click dấu "+" để thêm RADIUS Server</p>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/captive_wlan.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/captive_wlan.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Tiếp tục click dấu "+" để thêm RADIUS Server</li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/add_radius.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/add_radius.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Nhập thông tin như bên dưới sau đó bấm <b>Submit</b>
                  </li>
                  <ul>
                    <li>Name: Genex_wifi</li>
                    <li>IP Address: 210.211.117.184</li>
                    <li>Auth port: 1812</li>
                    <li>Accounting port: 1813</li>
                    <li>Shared key: genexwifi123</li>
                    <li>Retype key: genexwifi123</li>
                    <li>Timeout: 5</li>
                  </ul>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/input_radius.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/input_radius.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Sau đó chọn mục Genex_wifi vừa tạo rồi bấm <b>OK</b>
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/select_radius.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/select_radius.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>

                  <li>CPPM Host và CPPM Page</li>
                  <p>
                    Login HT Cloud GENEX - vô menu Admin - WiFi Network - Click
                    nút "Captive Portal" - click nút "Generate" sau đó click nút
                    Copy để copy link
                  </p>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/get_link.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/get_link.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <p>
                    Với link ví dụ:
                    http://cloud.genexwifi.com/api/common/5e6ee90903f88d7563b850c8/externalType/aruba_mobility
                  </p>
                  <p>2 mục trên sẽ nhập như sau: </p>
                  <ul>
                    <li>CPPM Host: cloud.genexwifi.com</li>
                    <li>
                      CPPM Page:
                      /api/common/5e6ee90903f88d7563b850c8/externalType/aruba_mobility
                    </li>
                  </ul>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/host_page.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/host_page.png"
                        alt=""
                        style={{ width: "300px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>

                  <li>
                    Sau đó bấm <b>Next</b> và <b>Finish</b>
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/finish_1.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/finish_1.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>

                  <p>
                    <strong>Bước 2: Cấu hình whitelist domains</strong>
                  </p>
                  <li>Vào mục Configuration - Roles & Policies - Roles</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/new/b2_1.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/b2_1.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Tiếp tục chọn mục Role có tên sóng vừa chọn:
                    "New_MKT-guest-logon"
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/new/b2_2.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/b2_2.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Kéo xuống dưới cùng đến mục "Rules of this Role only"</li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/new/b2_3.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/b2_3.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Sau đó bấm vào dấu "+" để hiện popup New Rule</li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/new_rule_1.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/new_rule_1.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Chọn Access control sau đó bấm <b>OK</b>
                  </li>
                  <li>Tiếp tục kéo xuống dưới để cấu hình</li>
                  <ul>
                    <li>Source: chọn User</li>
                    <li>Destination: chọn Alias</li>
                  </ul>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/new_rule_2.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/new_rule_2.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Trong mục "Destination alias", bấm dấu mũi tên xuống để mở
                    rộng, sau đó bấm dấu "+" để thêm mới
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/new_rule_3.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/new_rule_3.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Trong popup "Add New Destination"</li>
                  <ul>
                    <li>Destination name: nhập "aeon_src"</li>
                    <figure className="figure docs-figure py-3">
                      <a
                        href="/images/aruba/new/new_rule_4.png"
                        data-toggle="lightbox"
                      >
                        <img
                          className="figure-img img-fluid shadow rounded"
                          src="/images/aruba/new/new_rule_4.png"
                          alt=""
                          style={{ width: "300px" }}
                        />
                      </a>
                      <figcaption className="figure-caption mt-3">
                        <i className="fas fa-info-circle mx-2 "></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                    <li>Click dấu "+" để thêm mới Rule</li>
                    <figure className="figure docs-figure py-3">
                      <a
                        href="/images/aruba/new/new_rule_5.png"
                        data-toggle="lightbox"
                      >
                        <img
                          className="figure-img img-fluid shadow rounded"
                          src="/images/aruba/new/new_rule_5.png"
                          alt=""
                          style={{ width: "300px" }}
                        />
                      </a>
                      <figcaption className="figure-caption mt-3">
                        <i className="fas fa-info-circle mx-2 "></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                    <li>Rule type: Chọn "Name"</li>
                    <li>Domain name: nhập "*.genexwifi.com"</li>
                    <li>
                      Bấm <b>OK</b>
                    </li>
                  </ul>
                  <li>
                    Sau khi thêm thành công Rule như hình thì bấm <b>Submit</b>
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="/images/aruba/new/new_rule_6.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/new_rule_6.png"
                        alt=""
                        style={{ width: "300px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>

                  <p>
                    <strong className="text-dark">
                      Bước 3: Cấu hình captive portal
                    </strong>
                  </p>
                  <li>
                    Vào mục Configuration - Authentication - L3 Authentication
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/new/b3_1.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/b3_1.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Tiếp tục mở rộng mục Captive Portal Authentication, chọn
                    sóng WLAN vừa tạo: ví dụ ở đây là "New_MKT"
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a href="/images/aruba/new/b3_2.png" data-toggle="lightbox">
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="/images/aruba/new/b3_2.png"
                        alt=""
                        style={{ width: "300px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mx-2 "></i>
                      Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>Cấu hình theo thông số như sau:</li>
                  <ul>
                    <li>Redirect Pause: 0</li>
                    <li>Logout popup window: bỏ chọn</li>
                    <li>Use HTTP for authentication: tích chọn</li>
                    <figure className="figure docs-figure py-3">
                      <a
                        href="/images/aruba/new/b3_3.png"
                        data-toggle="lightbox"
                      >
                        <img
                          className="figure-img img-fluid shadow rounded"
                          src="/images/aruba/new/b3_3.png"
                          alt=""
                          style={{ width: "500px" }}
                        />
                      </a>
                      <figcaption className="figure-caption mt-3">
                        <i className="fas fa-info-circle mx-2 "></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                    <li>Show Welcome Page: bỏ chọn</li>
                    <li>
                      Add switch IP address in the redirection URL: tích chọn
                    </li>
                    <figure className="figure docs-figure py-3">
                      <a
                        href="/images/aruba/new/b3_4.png"
                        data-toggle="lightbox"
                      >
                        <img
                          className="figure-img img-fluid shadow rounded"
                          src="/images/aruba/new/b3_4.png"
                          alt=""
                          style={{ width: "500px" }}
                        />
                      </a>
                      <figcaption className="figure-caption mt-3">
                        <i className="fas fa-info-circle mx-2 "></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                    <li>
                      Mục whitelist: Bấm dấu "+" sau đó chọn "aeon_src" như đã
                      tạo ở bước 2
                    </li>
                    <figure className="figure docs-figure py-3">
                      <a
                        href="/images/aruba/new/b3_5.png"
                        data-toggle="lightbox"
                      >
                        <img
                          className="figure-img img-fluid shadow rounded"
                          src="/images/aruba/new/b3_5.png"
                          alt=""
                          style={{ width: "500px" }}
                        />
                      </a>
                      <figcaption className="figure-caption mt-3">
                        <i className="fas fa-info-circle mx-2 "></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                    <li>Các mục còn lại giữ như mặc định</li>
                    <figure className="figure docs-figure py-3">
                      <a
                        href="/images/aruba/new/b3_6.png"
                        data-toggle="lightbox"
                      >
                        <img
                          className="figure-img img-fluid shadow rounded"
                          src="/images/aruba/new/b3_6.png"
                          alt=""
                          style={{ width: "500px" }}
                        />
                      </a>
                      <figcaption className="figure-caption mt-3">
                        <i className="fas fa-info-circle mx-2 "></i>
                        Click vào hình để phóng to
                      </figcaption>
                    </figure>
                  </ul>
                </ul>
              </section>

              <p>
                <strong className="text-dark">
                  Bước 4: Tạo DHCP Scope gán cho lớp mạng của sóng đã tạo
                </strong>
              </p>
              <figure className="figure docs-figure py-3">
                <a href="/images/aruba/new/b3_5.png" data-toggle="lightbox">
                  <img
                    className="figure-img img-fluid shadow rounded"
                    src="/images/aruba/new/b3_5.png"
                    alt=""
                    style={{ width: "500px" }}
                  />
                </a>
                <figcaption className="figure-caption mt-3">
                  <i className="fas fa-info-circle mx-2 "></i>
                  Click vào hình để phóng to
                </figcaption>
              </figure>
              <li>Các mục còn lại giữ như mặc định</li>
              <figure className="figure docs-figure py-3">
                <a href="/images/aruba/new/6.png" data-toggle="lightbox">
                  <img
                    className="figure-img img-fluid shadow rounded"
                    src="/images/aruba/new/6.png"
                    alt=""
                    style={{ width: "500px" }}
                  />
                </a>
                <figcaption className="figure-caption mt-3">
                  <i className="fas fa-info-circle mx-2 "></i>
                  Click vào hình để phóng to
                </figcaption>
              </figure>
            </article>

            <p>
              <strong className="text-dark">Bước 5: Cấu hình firewall</strong>
            </p>
            <li>
              Cho phép thiết bị WCL truy cập đến Server thông tin cụ thể như
              sau:
            </li>
            <ul>
              <li>IP Wan: 210.211.117.184</li>
              <li>Port dịch vụ:</li>
              <ul>
                <li>80 TCP</li>
                <li>443 TCP</li>
                <li>1812 (TCP & UDP)</li>
                <li>1813 (TCP & UDP)</li>
              </ul>
            </ul>

            <footer className="footer">
              <div className="container text-center py-5">
                <small className="copyright">
                  Copyright &copy;{" "}
                  <a href="/https://genexwifi.com" target="_blank">
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
