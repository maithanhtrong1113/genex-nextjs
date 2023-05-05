import React, { Fragment } from "react";
import { Container } from "reactstrap";
import Sidebar from "./SideBar";

const Content = () => {
  return (
    <Fragment>
      <div className="docs-wrapper document">
        <Sidebar />
        <div className="docs-content">
          <Container>
            <article className="docs-article" id="section-1">
              <header className="docs-header">
                <h1 className="docs-heading fw-bold text-dark">
                  Hệ thống Wifi Marketing
                  <span className="docs-time fw-bold">
                    Last updated: 2022-07-20
                  </span>
                </h1>
                <section className="docs-intro">
                  <div className="alert alert-info" role="alert">
                    <ul>
                      <li>
                        Là hình thức hiển thị trang chào khi người dùng truy cập
                        vào sóng Wifi
                      </li>
                      <li>
                        Thông qua Wifi Marketing, chủ địa điểm hoặc nhà quảng
                        cáo sẽ triển khai các chiến dịch truyền thông online
                        tương tác với khách hàng khi dùng Wifi
                      </li>
                    </ul>
                  </div>
                </section>
              </header>

              <section className="docs-section" id="item-1-1">
                <h2 className="section-heading fw-bold text-dark">
                  1. Truy cập portal
                </h2>
                <p className="my-3">
                  Truy cập vào portal theo địa chỉ &nbsp;
                  <a
                    className="fw-bold"
                    style={{ color: "#1c6fdc" }}
                    href="http://cloud.genexwifi.com"
                  >
                    http://cloud.genexwifi.com
                  </a>
                  , xuất hiện hình như bên dưới.
                </p>

                <figure className="figure docs-figure py-3">
                  <a
                    href="images/features/login_form.png"
                    data-toggle="lightbox"
                  >
                    <img
                      className="figure-img img-fluid shadow rounded"
                      src="images/features/login_form.png"
                      alt=""
                      style={{ width: "400px" }}
                    />
                  </a>
                  <figcaption className="figure-caption mt-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Click vào hình để phóng to
                  </figcaption>
                </figure>

                <ul>
                  <li>
                    <strong className="mr-1">Username:</strong>{" "}
                    <code>demo</code>
                  </li>
                  <li>
                    <strong className="mr-1">Password:</strong>{" "}
                    <code>12345678</code>
                  </li>
                </ul>
                <p>
                  Sau khi điền 2 thông tin trên, click “Sign In” để truy cập vào
                  Portal Đây là tài khoản Admin, có đầy đủ các quyền.
                </p>
              </section>

              <section className="docs-section" id="item-1-2">
                <h2 className="section-heading fw-bold text-dark my-3">
                  2. Dashboard
                </h2>
                <p className="my-2">
                  Sau khi truy cập thành công, xuất hiện Dashboard như hình
                </p>

                <figure className="figure docs-figure py-3">
                  <a
                    href="images/features/dashboard.png"
                    data-toggle="lightbox"
                  >
                    <img
                      className="figure-img img-fluid shadow rounded"
                      src="images/features/dashboard.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                  <figcaption className="figure-caption mt-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Click vào hình để phóng to
                  </figcaption>
                </figure>

                <p className="text-justify mb-3">
                  CAMPAIGN METRIC: Hiển thị thời gian thực số lượt hiển thị
                  (Impression), lượt click (Click) trong một tuần của tất cả các
                  chiến dịch đã chạy
                </p>

                <p className="text-justify my-3">
                  USER: Hiển thị thời gian thực số lượng người dùng (Visitor)
                  trong một tuần, trong ngày hiện tại, trong giờ hiện tại của
                  tất cả chiến dịch đã chạy
                </p>

                <p className="text-justify my-3">
                  SOURCE: Hiển thị thời gian thực tỷ lệ % các nguồn dữ liệu lấy
                  thông tin demography của người dùng
                </p>

                <p className="text-justify my-3">
                  TOP LOCATION: Hiển thị thời gian thực tỷ lệ % các địa điểm có
                  số người dùng sử dụng WiFi nhiều nhất
                </p>

                <p className="text-justify my-3">
                  BEHAVIOUR: Thống kê tỷ lệ số lượng bao nhiêu người dùng là mới
                  (New User), bao nhiêu là củ (Return), bao nhiêu người dùng
                  Walkthrough
                </p>

                <p className="text-justify my-3">
                  GENDER: Thống kê tỷ lệ giới tính của khách truy cập Wifi,
                  thông tin giới tính mà hệ thống lấy được thông qua hiển thị
                  trang khảo sát lấy thông tin này
                </p>

                <p className="text-justify my-3">
                  AGE: Thống kê tỷ lệ các mức độ tuổi của khách truy cập Wifi,
                  thông tin các mức tuổi mà hệ thống lấy được thông qua hiển thị
                  trang khảo sát lấy các thông tin này
                </p>

                <p className="text-justify my-3">
                  INCOME: Thống kê tỷ lệ các mức thu nhập của khách truy cập
                  Wifi, thông tin các thu nhập mà hệ thống lấy được thông qua
                  hiển thị trang khảo sát lấy các thông tin này
                </p>

                <p className="text-justify my-3">
                  DEVICE TYPE: Thống kê tỷ lệ các loại thiết bị người dùng truy
                  cập trên hệ thống Wifi, các loại thiết bị như: Laptop, Tablet,
                  Smartphone.
                </p>

                <p className="text-justify my-3">
                  OS: Thống kê tỷ lệ các kiểu hệ điều hành mà người dùng Wifi sử
                  dụng, các loại hệ điều hành bao gồm: IOS (Iphone, Ipad,..),
                  Android, Windows Phone, Windows PC, Linux, ...
                </p>
                <figure className="figure docs-figure py-3">
                  <a href="images/features/filter.png" data-toggle="lightbox">
                    <img
                      className="figure-img img-fluid shadow rounded"
                      src="images/features/filter.png"
                      alt=""
                      style={{ width: "800px" }}
                    />
                  </a>
                  <figcaption className="figure-caption mt-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Click vào hình để phóng to
                  </figcaption>
                </figure>
                <ul>
                  <li>Report Date: Khoảng thời gian cần xem report</li>
                  <li>Campaign: chọn tên campaign muốn xem report</li>
                  <li>Location: chọn địa điểm muốn xem report</li>
                  <li>Splashpage: chọn trang banner muốn xem report</li>
                </ul>
              </section>

              <section className="docs-section" id="item-1-3">
                <h2 className="section-heading fw-bold text-dark">3. CRM</h2>

                <p className="text-justify my-3">
                  Để xem thông tin chi tiết trong CRM, click “Report CRM” như
                  hình:
                </p>

                <figure className="figure docs-figure py-3">
                  <a href="images/features/crm-1.png" data-toggle="lightbox">
                    <img
                      className="figure-img img-fluid shadow rounded"
                      src="images/features/crm-1.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                  <figcaption className="figure-caption mt-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Click vào hình để phóng to
                  </figcaption>
                </figure>
                <p className="text-justify mb-3">
                  Các thông tin về người dùng (CRM Data), bao gồm: địa chỉ MAC
                  thiết bị, Facebook ID, Name (nếu trang QC lấy trường Name),
                  Email (nếu trang QC lấy email), Phone (nếu trang QC lấy số
                  phone), Gender, Age, Income (nếu trang QC lấy các thông tin
                  này), OS (hệ thống tự lấy thông tin), Device (hệ thống tự phân
                  loại), Last session (thời gian truy cập lần cuối của người
                  dùng).
                </p>
                <p className="text-justify my-3">
                  Ngoài ra, còn hiển thị thêm các trường động, ví dụ nếu trang
                  QC lấy ý kiến từ khách hàng đối với thái độ dịch vụ của nhân
                  viên, giả sử câu hỏi có hai giá trị trả lời: “Hài lòng” và
                  “Không hài lòng”. Khi đó, trong bảng CRM này, sẽ xuất hiện
                  thêm một cột “cauhoi_1” (giả sử trường sẽ lưu ý kiến khách
                  hàng có tên là “cauhoi_1”), chứa các giá trị mà người dùng
                  tương tác.
                </p>

                <p className="text-justify mb-3">
                  Hệ thống hổ trợ cho phép lọc lại dữ liệu thỏa các điều kiện
                  tìm kiếm, chẳng hạn như:
                </p>
                <figure className="figure docs-figure py-3">
                  <a href="images/features/crm-2.png" data-toggle="lightbox">
                    <img
                      className="figure-img img-fluid shadow rounded"
                      src="images/features/crm-2.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                  <figcaption className="figure-caption mt-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Click vào hình để phóng to
                  </figcaption>
                </figure>
                <p className="text-justify">
                  Hổ trợ kết xuất dữ liệu này ra file CSV: click nút “Export” sẽ
                  kết xuất dữ liệu đã lựa chọn ra file CSV (Mở file bằng Excel)
                </p>
              </section>

              <section className="docs-section" id="item-1-4">
                <h2 className="section-heading fw-bold text-dark">
                  4. Tạo wifi network
                </h2>
                <div className="alert alert-info my-3" role="alert">
                  <ul>
                    <li>
                      Wifi network là một nhóm chung các điểm wifi có chạy wifi
                      marketing, các điểm wifi thuộc cùng một Wifi network sẽ kế
                      thừa chung tập cấu hình External Captive Portal URL
                    </li>
                  </ul>
                </div>
                <div className="callout-block callout-block-success">
                  <div className="content">
                    <h4 className="callout-title">
                      <span className="callout-icon-holder mr-1">
                        <i className="fas fa-thumbs-up"></i>
                      </span>
                      &nbsp; Tip
                    </h4>
                    <p>
                      truy cập
                      <b>
                        <i>&nbsp;Admin</i>{" "}
                        <i className="fas fa-arrow-right"></i>
                        <i> &nbsp;Wifi Network</i>
                      </b>
                    </p>
                  </div>
                </div>

                <figure className="figure docs-figure py-3">
                  <a
                    href="images/features/wifi-network-1.png"
                    data-toggle="lightbox"
                  >
                    <img
                      className="figure-img img-fluid shadow rounded"
                      src="images/features/wifi-network-1.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                  <figcaption className="figure-caption mt-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Click vào hình để phóng to
                  </figcaption>
                </figure>

                <figure className="figure docs-figure py-3">
                  <a
                    href="images/features/wifi-network-2.png"
                    data-toggle="lightbox"
                  >
                    <img
                      className="figure-img img-fluid shadow rounded"
                      src="images/features/wifi-network-2.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                  <figcaption className="figure-caption mt-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Click vào hình để phóng to
                  </figcaption>
                </figure>
              </section>

              <section className="docs-section" id="item-1-5">
                <h2 className="section-heading fw-bold text-dark">
                  5. Tạo location
                </h2>
                <div className="alert alert-info my-3" role="alert">
                  <ul>
                    <li>
                      Location là một địa điểm nào đó, có hệ thống Wifi và chạy
                      Wifi marketing
                    </li>
                  </ul>
                </div>

                <div className="callout-block callout-block-success">
                  <div className="content">
                    <h4 className="callout-title">
                      <span className="callout-icon-holder mr-1">
                        <i className="fas fa-thumbs-up"></i>
                      </span>
                      &nbsp; Tip
                    </h4>
                    <p>
                      truy cập
                      <b>
                        <i> &nbsp;Admin</i>{" "}
                        <i className="fas fa-arrow-right"></i>
                        <i> &nbsp;Location</i>
                      </b>
                    </p>
                  </div>
                </div>

                <figure className="figure docs-figure py-3">
                  <a
                    href="images/features/create_location_1.png"
                    data-toggle="lightbox"
                  >
                    <img
                      className="figure-img img-fluid shadow rounded"
                      src="images/features/create_location_1.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                  <figcaption className="figure-caption mt-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Click vào hình để phóng to
                  </figcaption>
                </figure>
                <figure className="figure docs-figure py-3">
                  <a
                    href="images/features/create_location_2.png"
                    data-toggle="lightbox"
                  >
                    <img
                      className="figure-img img-fluid shadow rounded"
                      src="images/features/create_location_2.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                  <figcaption className="figure-caption mt-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Click vào hình để phóng to
                  </figcaption>
                </figure>
              </section>

              <section className="docs-section" id="item-1-6">
                <h2 className="section-heading fw-bold text-dark">
                  6. Thêm AP vào location
                </h2>

                <p className="my-3">- Click Add AP trong giao diện Location.</p>

                <figure className="figure docs-figure py-3">
                  <a href="images/features/ap-1.png" data-toggle="lightbox">
                    <img
                      className="figure-img img-fluid shadow rounded"
                      src="images/features/ap-1.png"
                      alt=""
                      style={{ width: "800px" }}
                    />
                  </a>
                  <figcaption className="figure-caption mt-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Click vào hình để phóng to
                  </figcaption>
                </figure>

                <p>- Nhập Name và địa chỉ MAC tương ứng</p>
                <figure className="figure docs-figure py-3">
                  <a href="images/features/ap-2.png" data-toggle="lightbox">
                    <img
                      className="figure-img img-fluid shadow rounded"
                      src="images/features/ap-2.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                  <figcaption className="figure-caption mt-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Click vào hình để phóng to
                  </figcaption>
                </figure>
                <p>- Sau đó click Create.</p>
              </section>

              <section className="docs-section" id="item-1-7">
                <h2 className="section-heading fw-bold text-dark">
                  7. Tạo brand
                </h2>
                <div className="alert alert-info" role="alert">
                  <ul>
                    <li>
                      Brand là tài khoản có quyền view các thống kê quảng cáo
                      (lượt hiển thị, lượt click, dữ liệu về người dùng, …) đối
                      với các chiến dịch mà người quản trị chọn gán vào
                    </li>
                  </ul>
                </div>

                <div className="callout-block callout-block-success">
                  <div className="content">
                    <h4 className="callout-title">
                      <span className="callout-icon-holder mr-1">
                        <i className="fas fa-thumbs-up"></i>
                      </span>
                      &nbsp; Tip
                    </h4>
                    <p>
                      truy cập
                      <b>
                        <i>Admin</i> <i className="fas fa-arrow-right"></i>
                        <i>Account</i>
                      </b>
                    </p>
                  </div>
                </div>

                <figure className="figure docs-figure py-3">
                  <a
                    href="images/features/create_brand.png"
                    data-toggle="lightbox"
                  >
                    <img
                      className="figure-img img-fluid shadow rounded"
                      src="images/features/create_brand.png"
                      alt=""
                      style={{ width: "600px" }}
                    />
                  </a>
                  <figcaption className="figure-caption mt-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    &nbsp; Click vào hình để phóng to
                  </figcaption>
                </figure>
              </section>

              <section className="docs-section" id="item-1-8">
                <h2 className="section-heading fw-bold text-dark">
                  8. Tạo creative ads
                </h2>
                <div className="alert alert-info my-3" role="alert">
                  <ul>
                    <li>
                      Creative ads là nội dung trên trang chào được hiển thị tự
                      động khi người dùng truy cập vào Wifi chạy Wifi Marketing
                    </li>
                  </ul>
                </div>

                <h6 className="fw-bold text-dark">
                  - Có 2 cách tạo creative ads:
                </h6>
                <h6 className="pt-3 fw-bold text-dark">
                  <i className="fas fa-question-circle mr-1"></i>&nbsp;Lựa chọn
                  1:
                  <i> &nbsp;Paste Code</i>
                </h6>

                <ul>
                  <li>
                    <p>
                      <strong className="mr-1 text-dark fw-bold">
                        Bước 1:
                      </strong>{" "}
                      Chuyển đổi trang Creative ads từ file photoshop sang html
                      code.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong className="mr-1 text-dark fw-bold">
                        Bước 2:
                      </strong>{" "}
                      Upload toàn bộ static file (image, css, js,...) vào phần
                      File Manager.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong className="mr-1 text-dark fw-bold">
                        Bước 3:
                      </strong>{" "}
                      Paste code trong file html vào vùng “Input your HTML code”
                    </p>
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="images/features/pastecode_1.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="images/features/pastecode_1.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mr-2"></i>
                      &nbsp; Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    <p>
                      <strong className="mr-1 text-dark fw-bold">
                        Bước 4:
                      </strong>{" "}
                      Chỉnh lại đường dẫn URL của các file static (image, css,
                      js,...) trong file html trỏ đến portal bằng cách lấy link
                      trong File manger.
                    </p>
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="images/features/pastecode_2.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="images/features/pastecode_2.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mr-2"></i>
                      &nbsp; Click vào hình để phóng to
                    </figcaption>
                  </figure>
                </ul>

                <h6 className="pt-3 fw-bold text-dark">
                  <i className="fas fa-question-circle mr-1 text-dark"></i>{" "}
                  &nbsp; Lựa chọn 2:
                  <i>Dùng các mẫu có sẵn:</i>
                </h6>

                <ul>
                  <li>
                    <p>
                      <strong className="mr-1 text-dark fw-bold">
                        Bước 1:
                      </strong>
                      Click Static Banner:
                    </p>

                    <br />
                    <figure className="figure docs-figure py-3">
                      <a
                        href="images/features/staticbanner_1.png"
                        data-toggle="lightbox"
                      >
                        <img
                          className="figure-img img-fluid shadow rounded"
                          src="images/features/staticbanner_1.png"
                          alt=""
                          style={{ width: "600px" }}
                        />
                      </a>
                      <figcaption className="figure-caption mt-3">
                        <i className="fas fa-info-circle mr-2"></i>
                        &nbsp; Click vào hình để phóng to
                      </figcaption>
                    </figure>
                  </li>

                  <li>
                    <p>
                      <strong className="mr-1 text-dark fw-bold">
                        Bước 2:
                      </strong>
                      Click nút Templates để xem các mẫu có sẵn
                    </p>

                    <br />
                    <figure className="figure docs-figure py-3">
                      <a
                        href="images/features/staticbanner_2.png"
                        data-toggle="lightbox"
                      >
                        <img
                          className="figure-img img-fluid shadow rounded"
                          src="images/features/staticbanner_2.png"
                          alt=""
                          style={{ width: "500px" }}
                        />
                      </a>
                      <figcaption className="figure-caption mt-3">
                        <i className="fas fa-info-circle mr-2"></i>
                        &nbsp; Click vào hình để phóng to
                      </figcaption>
                    </figure>
                  </li>

                  <li>
                    <p>
                      <strong className="mr-1 text-dark fw-bold ">
                        Bước 3:
                      </strong>
                      Chọn mẫu để dùng bằng cách click Use template trên mẫu đó
                    </p>

                    <br />
                    <figure className="figure docs-figure py-3">
                      <a
                        href="images/features/staticbanner_3.png"
                        data-toggle="lightbox"
                      >
                        <img
                          className="figure-img img-fluid shadow rounded"
                          src="images/features/staticbanner_3.png"
                          alt=""
                          style={{ width: "600px" }}
                        />
                      </a>
                      <figcaption className="figure-caption mt-3">
                        <i className="fas fa-info-circle mr-2"></i>
                        &nbsp; Click vào hình để phóng to
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <p>
                      <strong className="mr-1 text-dark fw-bold">
                        Bước 4:
                      </strong>
                      Click Settings để tuỳ chỉnh lại các thông tin như: đổi
                      hình ảnh, chỉnh lại nút, font chữ, màu nền,...:
                    </p>

                    <br />
                    <figure className="figure docs-figure py-3">
                      <a
                        href="images/features/staticbanner_4.png"
                        data-toggle="lightbox"
                      >
                        <img
                          className="figure-img img-fluid shadow rounded"
                          src="images/features/staticbanner_4.png"
                          alt=""
                          style={{ width: "600px" }}
                        />
                      </a>
                      <figcaption className="figure-caption mt-3">
                        <i className="fas fa-info-circle mr-2"></i>
                        &nbsp; Click vào hình để phóng to
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <p>
                      Để khởi tạo mẫu sau khi đã chỉnh, click biểu tượng Save
                      trên góc phải.
                    </p>

                    <br />
                    <figure className="figure docs-figure py-3">
                      <a
                        href="images/features/staticbanner_5.png"
                        data-toggle="lightbox"
                      >
                        <img
                          className="figure-img img-fluid shadow rounded"
                          src="images/features/staticbanner_5.png"
                          alt=""
                          style={{ width: "600px" }}
                        />
                      </a>
                      <figcaption className="figure-caption mt-3">
                        <i className="fas fa-info-circle mr-2"></i>
                        &nbsp; Click vào hình để phóng to
                      </figcaption>
                    </figure>
                    <p>- Sau đó bấm Create để hoàn thành tạo splashpage.</p>
                  </li>
                </ul>
              </section>

              <section className="docs-section" id="item-1-9">
                <h2 className="section-heading fw-bold text-dark">
                  9. Quản lý Campaign
                </h2>

                <ul>
                  <li className="text-dark fw-bold">
                    Bước 1: Nhập tên Campaign
                  </li>
                  <li className="text-dark fw-bold">
                    Bước 2: Chọn 1 splashpage mặc định
                  </li>
                  <li className="text-dark fw-bold">
                    Bước 3: Nhập đường dẫn landing page URL
                  </li>
                  <li className="text-dark fw-bold">
                    Bước 4: Chọn tài khoản Brand để xem report.
                  </li>

                  <figure className="figure docs-figure py-3">
                    <a
                      href="images/features/campaign_1.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="images/features/campaign_1.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mr-2"></i>
                      &nbsp; Click vào hình để phóng to
                    </figcaption>
                  </figure>

                  <li className="text-dark fw-bold">
                    Bước 5: Bấm qua mục 2 và chọn các location để chạy campaign.
                  </li>
                  <li className="text-dark fw-bold">
                    Bước 6: Thiết lập điều kiện để target người dùng, nếu trùng
                    với điều kiện, splashpage ở mục 2 này sẽ hiển thị.
                  </li>
                  <li className="text-dark fw-bold">
                    Bước 7: Thiết lập thời gian chạy chiến dịch trong mục
                    <strong className="mr-1">Schedule</strong>
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="images/features/campaign_2.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="images/features/campaign_2.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mr-2"></i>
                      &nbsp; Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li className="text-dark fw-bold">
                    Bước 8: Thiết lập giới hạn KPI (lượt click)
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="images/features/campaign_3.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="images/features/campaign_3.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mr-2"></i>
                      &nbsp; Click vào hình để phóng to
                    </figcaption>
                  </figure>
                </ul>
              </section>

              <section className="docs-section" id="item-1-10">
                <h2 className="section-heading fw-bold text-dark">
                  10. Campaign chạy Facebook Login/Share
                </h2>

                <ul>
                  <li className="text-dark fw-bold">
                    Bước 1. Đăng ký Facebook App
                  </li>
                  <ul>
                    <li>
                      Tham khảo hướng dẫn bên dưới và thực hiện đăng ký một
                      Facebook App
                      <a href="https://developers.facebook.com/docs/apps/register">
                        Truy cập tại đây
                      </a>
                    </li>
                    <li>
                      Khai báo tên miền ràng buộc với Facebook App, chẳng hạn
                      tên miền: acb.com.vn, wifi.acb.com.vn, ...
                    </li>
                    <li>
                      Kích hoạt FB App với chế độ công khai, là chế độ mà mọi
                      người đều được sử dụng App
                    </li>
                  </ul>
                  <li>
                    Đăng ký xin quyền Post to user wall – Đây là quyền mà App sẽ
                    sử dụng để thực hiện kịch bản FB checkin, App sẽ post lên
                    tường của người dùng
                  </li>

                  <figure className="figure docs-figure py-3">
                    <a
                      href="images/features/campaign_fb_1.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="images/features/campaign_fb_1.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mr-2"></i>
                      &nbsp; Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="images/features/campaign_fb_2.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="images/features/campaign_fb_2.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mr-2"></i>
                      &nbsp; Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="images/features/campaign_fb_3.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="images/features/campaign_fb_3.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mr-2"></i>
                      &nbsp; Click vào hình để phóng to
                    </figcaption>
                  </figure>

                  <li className="text-dark fw-bold">
                    Bước 2. Tạo host record với tên
                    *.domain_registered_with_facebook_app, trỏ tới WiFi
                    Marketing Server
                  </li>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="images/features/campaign_fb_4.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="images/features/campaign_fb_4.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mr-2"></i>
                      &nbsp; Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li className="text-dark fw-bold">
                    Bước 3. Khai báo Facebook ID, secret trong giao diện setup
                    Campaign
                  </li>
                  <ul>
                    <li>Vào Admin Campaign Click vào ba chấm dọc</li>
                    <li>
                      Trên dòng Campaign chạy Facebook, click “Advanced” :
                    </li>
                  </ul>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="images/features/campaign_fb_5.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="images/features/campaign_fb_5.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mr-2"></i>
                      &nbsp; Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <figure className="figure docs-figure py-3">
                    <a
                      href="images/features/campaign_fb_6.png"
                      data-toggle="lightbox"
                    >
                      <img
                        className="figure-img img-fluid shadow rounded"
                        src="images/features/campaign_fb_6.png"
                        alt=""
                        style={{ width: "600px" }}
                      />
                    </a>
                    <figcaption className="figure-caption mt-3">
                      <i className="fas fa-info-circle mr-2"></i>
                      &nbsp; Click vào hình để phóng to
                    </figcaption>
                  </figure>
                  <li>
                    Nhập các thông tin cần thiết cho Facebook App, bao gồm:
                  </li>
                  <ul>
                    <li>
                      App ID: đây là thông tin lấy trên trang quản trị App của
                      Facebook
                    </li>
                    <li>
                      App Secret: đây là thông tin lấy trên trang quản trị App
                      của Facebook
                    </li>
                    <li>
                      App Domain: host đã tạo ở bước B.2, ví dụ
                      wm.prufinance.com.vn
                    </li>
                    <li className="text-justify">
                      Action after login: chọn hình thức tương tác với người
                      dùng (Login hoặc Share hoặc Checkin)
                    </li>
                    <li>
                      Link: Là địa chỉ trang web sẽ được Share lên tường người
                      dùng
                    </li>
                    <p className="text-justify">
                      - Lưu ý: Khi dùng đăng nhập facebook thì cần thêm các tên
                      miền sau vào mục Walled Garden trên Controller của profile
                      tương ứng: “*.facebook.com, *.facebook.net,
                      *.akamaihd.net, *.fbcdn.net, *.atdmt.com, *.fbsbx.com, *.
                      doubleclick.net”
                    </p>

                    <li className="text-justify">
                      Tương tự đăng nhập bằng google thì cần các tên miền sau:
                      “apis.google.com, accounts.google.com,
                      accounts.google.com.vn, accounts.google.com,
                      ssl.gstatic.com, fonts.gstatic.com,
                      lh3.googleusercontent.com”
                    </li>
                  </ul>
                </ul>
              </section>
            </article>

            <footer className="footer ">
              <div className="container text-center py-5">
                <small className="copyright fw-bold">
                  Copyright &copy;
                  <a
                    href="https://genexwifi.com"
                    className="text-decoration-none "
                  >
                    &nbsp;GENEX WiFi&nbsp;
                  </a>
                  2019. All rights reserved.
                </small>
              </div>
            </footer>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
