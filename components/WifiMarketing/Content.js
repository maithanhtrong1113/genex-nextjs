import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
const Content = () => {
  const animateImgeTop = {
    off: { y: -100, opacity: 0 },
    on: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
      },
    },
  };
  const animateImgeRight = {
    off: { x: 70, opacity: 0 },
    on: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
      },
    },
  };
  return (
    <Fragment>
      <Container>
        <Row className="my-md-2">
          <div className="text-center mb-1 ">
            <motion.h2
              className="m-2 font-18 fw-bold text-justify my-3"
              initial={"off"}
              whileInView={"on"}
              variants={animateImgeTop}
            >
              WiFi Marketing Platform của GENEX là giải pháp hoàn chỉnh tất cả
              trong một, được phát triển bởi chính đội ngũ kỹ sư chuyên môn cao
              của GENEX. Giải pháp được phát triển dựa trên công nghệ hiện đại,
              hướng tới tất cả các phân khúc của thị trường, đáp ứng các tiêu
              chuẩn vận hành của các doanh nghiệp với mọi quy mô.
            </motion.h2>
          </div>

          <Row>
            <Col className="col-12 col-lg-12">
              <h2 className="m-2 title-1-map mr-5 fw-bold text-center">
                Sơ đồ giải pháp
              </h2>
              <div className="text-center">
                <motion.img
                  alt=""
                  className=" img-fluid shadow rounded w-100 "
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  src={"/images/wifi-marketing/solution.png"}
                />
              </div>
              <h2 className="my-3 fw-bold text-center">
                Tích hợp hầu hết các hãng WiFi trên thị trường
              </h2>
              <div className="text-center">
                <motion.img
                  alt=""
                  className=" img-fluid shadow rounded w-100"
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  src={"/images/wifi-marketing/compatible.png"}
                />
              </div>
              <h2 className="my-3 fw-bold text-center">Đối tượng Khách hàng</h2>
              <div className="text-center">
                <motion.img
                  alt=""
                  className=" img-fluid shadow rounded w-100"
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  src={"/images/wifi-marketing/client.png"}
                />
              </div>
              <h2 className="m-2 fw-bold text-center">
                Một số tính năng quan trọng
              </h2>

              <h4 className="m-2 mt-3 font-size-mobile">
                Hỗ trợ đa phương thức đăng nhập sử dụng WiFi:
              </h4>

              <ul>
                <li className="m-2">Đăng nhập bằng Facebook</li>
                <li className="m-2">Đăng nhập bằng tài khoản Google</li>
                <li className="m-2">Facebook Share để dùng Wifi</li>
                <li className="m-2">Xem video clip</li>
                <li className="m-2">
                  Hiển thị mẫu thu thập thông tin người dùng
                </li>
                <li className="m-2">Chơi game mini</li>
                <li className="m-2">Click và tải ứng dụng….</li>
              </ul>
              <h4 className="m-2 mt-3 font-size-mobile">
                Thu thập và phân tích thông tin khách hàng thông qua truy cập
                WiFi. Hỗ trợ doanh nghiệp định hướng và xây dựng các chiến lược
                marketing phù hợp:
              </h4>

              <ul>
                <li className="m-2">Email / Số điện thoại</li>
                <li className="m-2">Giới tính</li>
                <li className="m-2">Tên</li>
                <li className="m-2">Tuổi</li>
                <li className="m-2">Mức thu nhập</li>
                <li className="m-2">Thiết bị di động</li>
                <li className="m-2">Trình duyệt</li>
                <li className="m-2">Thời gian truy cập</li>
                <li className="m-2">Vị trí truy cập</li>
                <li className="m-2">
                  Nội dung truy cập (chủ đề web, trang web nào thường hay đọc)
                </li>
                <li className="m-2">Các thuộc tính khảo sát tùy biến khác</li>
              </ul>

              <h4 className="m-2 mt-3 font-size-mobile">
                Tùy biến giao diện hiển thị Splash page đối với khách hàng:
              </h4>

              <ul>
                <li className="m-2">
                  Doanh nghiệp có thể xây dựng giao diện mang thương hiệu riêng,
                  đồng thời tạo nhiều kiểu giao diện khác nhau. Mỗi kiểu giao
                  diện sẽ được hiển thị tùy theo cấu hình thời gian, địa điểm,
                  nhóm khách hàng…
                </li>
                <li className="m-2">
                  Giao diện được thiết kế responsive, thích ứng với nhiều loại
                  thiết bị và nhiều loại màn hình (Laptop, Mobile, Tablet)
                </li>
              </ul>
              <div className="text-center">
                <motion.img
                  alt=""
                  className=" img-fluid shadow rounded w-100"
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  src={"/images/wifi-marketing/create-ad.png"}
                />
              </div>
              <div className="text-center">
                <motion.img
                  className=" img-fluid shadow rounded w-100"
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  src={"/images/wifi-marketing/ad-script.png"}
                />
              </div>
              <h4 className="m-2 mt-3 font-size-mobile">
                Triển khai đồng thời nhiều chiến dịch khác nhau tiếp cận tập
                người dùng khác nhau
              </h4>
              <div className="text-center">
                <motion.img
                  alt=""
                  className=" img-fluid shadow rounded w-100"
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  src={"/images/wifi-marketing/campaign.png"}
                />
              </div>
              <div className="text-center">
                <motion.img
                  alt=""
                  className=" img-fluid shadow rounded w-100"
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  src={"/images/wifi-marketing/campaign-2.png"}
                />
              </div>
              <div className="text-center">
                <motion.img
                  alt=""
                  className=" img-fluid shadow rounded w-100"
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  src={"/images/wifi-marketing/campaign-3.png"}
                />
              </div>
              <h4 className="m-2 mt-3 font-size-mobile">
                Hổ trợ đối soát với bên thứ 3 (Double Click, Ambient, …)
              </h4>
              <h4 className="m-2 mt-3 font-size-mobile">
                Báo cáo thống kê chi tiết về chiến dịch, trích xuất dữ liệu
                khách hàng:
              </h4>
              <ul>
                <li className="m-2">
                  Tỉ lệ lượt hiển thị, lượt click trên theo chiến dịch, địa điểm
                </li>
              </ul>
              <div className="text-center">
                <motion.img
                  alt=""
                  className=" img-fluid shadow rounded w-100"
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  src={"/images/wifi-marketing/ad-action.png"}
                />
              </div>
              <ul>
                <li className="m-2">
                  Tỉ lệ người dùng mới / người dùng quay lại
                </li>
              </ul>
              <div className="text-center">
                <motion.img
                  alt=""
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  className=" img-fluid shadow rounded w-100"
                  src={"/images/wifi-marketing/behaviour.png"}
                />
              </div>
              <ul>
                <li className="m-2">Tỉ lệ nam, nữ</li>
              </ul>
              <div className="text-center">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  alt=""
                  className=" img-fluid shadow rounded w-100"
                  src={"/images/wifi-marketing/gender.png"}
                />
              </div>
              <ul>
                <li className="m-2">Tỉ lệ độ tuổi</li>
              </ul>
              <div className="text-center">
                <motion.img
                  alt=""
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  className=" img-fluid shadow rounded w-100"
                  src={"/images/wifi-marketing/age.png"}
                />
              </div>
              <ul>
                <li className="m-2">Thống kê mức thu nhập</li>
              </ul>
              <div className="text-center">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  alt=""
                  className=" img-fluid shadow rounded w-100"
                  src={"/images/wifi-marketing/income.png"}
                />
              </div>
              <ul>
                <li className="m-2">Thống kê hệ điều hành, loại thiết bị</li>
              </ul>
              <div className="text-center">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  alt=""
                  className=" img-fluid shadow rounded w-100"
                  src={"/images/wifi-marketing/device-type.png"}
                />
              </div>
              <div className="text-center">
                <motion.img
                  alt=""
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  className=" img-fluid shadow rounded w-100"
                  src={"/images/wifi-marketing/os.png"}
                />
              </div>
              <ul>
                <li className="m-2">Kết xuất thông tin khách hàng ra CSV</li>
              </ul>
              <div className="text-center">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  alt=""
                  className=" img-fluid shadow rounded w-100"
                  src={"/images/wifi-marketing/data-user.png"}
                />
              </div>
              <p className="m-2 mt-2">
                Tham khảo chi tiết các module tính năng:
                <strong>
                  <a href="https://docs.google.com/spreadsheets/d/1NgsUNaUhQ49BjrNxnQcfitfQK_X_PntO/edit?usp=sharing&ouid=106863428007795928058&rtpof=true&sd=true">
                    Tại đây
                  </a>
                </strong>
              </p>
              <h2 className="m-3 fw-bold text-center">
                Tích hợp với Ứng dụng khác
              </h2>
              <div className="text-center">
                <motion.img
                  initial={"off"}
                  whileInView={"on"}
                  variants={animateImgeRight}
                  alt=""
                  className=" img-fluid shadow rounded w-100"
                  src={"/images/wifi-marketing/other.png"}
                />
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Content;
