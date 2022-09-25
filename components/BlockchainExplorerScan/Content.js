import React, { Fragment } from "react";
import { Container } from "reactstrap";
import { motion } from "framer-motion";
const Content = () => {
  const animateImgeRight = {
    off: { x: 100, opacity: 0 },
    on: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
      },
    },
  };
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
  return (
    <Fragment>
      <Container>
        <div className="my-1 my-md-1 overflow-hidden">
          <div className="text-center mb-1 ">
            <motion.h2
              className="font-18 fw-bold text-justify my-3"
              initial={"off"}
              animate={"on"}
              variants={animateImgeTop}
            >
              Blockchain Explorer thường được sử dụng cho một số mục đích như
              kiểm tra số dư ví, kiểm tra lịch sử giao dịch ví, check Txn
              Hash... Đây đều là những tính năng rất cơ bản dành cho người chơi
              Crypto. Tuy nhiên, Blockchain Explorer còn nhiều tính năng thú vị
              và hữu ích hơn nữa.
            </motion.h2>
          </div>

          <div className="row">
            <div className="col-12 col-lg-12">
              <h2 className="fw-bold text-center">
                Blockchain Explorer là gì?
              </h2>
              <p className="mt-3 font-size-mobile">
                Blockchain Explorer cung cấp nền tảng phân tích cho các mạng
                blockchain và cùng nhiều tính năng cần thiết khác.
              </p>
              <p className="font-size-mobile">
                Mục tiêu của BscScan là tạo nên tính minh bạch cho BSC bằng cách
                cho phép người dùng kiểm tra mọi thông tin một cách rõ ràng và
                minh bạch. Bạn cũng có thể sử dụng BscScan để:
              </p>

              <ul>
                <li>Tra cứu các giao dịch và kiểm tra tiến trình của chúng.</li>
                <li>Xem các block mới nhất đã thêm vào blockchain.</li>
                <li>
                  Kiểm tra số dư của ví và bất kỳ giao dịch nào của ví đã thực
                  hiện.
                </li>
                <li>
                  Tìm kiếm, đọc và tương tác với các hợp đồng thông minh được
                  triển khai trên BSC.
                </li>
                <li>Nghiên cứu nguồn cung cấp token và các token khác.</li>
              </ul>
              <p className="mt-2">
                Tham khảo trình explorer GENEX đã gia công cho khách hàng:
                <strong>
                  <a href="https://openchain.info/">openchain.info</a>
                </strong>
              </p>
              <div className="row overflow-hidden mt-3">
                <div className="col-12 col-md-12 mb-2 wow bounceInDown">
                  <motion.img
                    initial={"off"}
                    whileInView={"on"}
                    variants={animateImgeRight}
                    alt=""
                    src={"/images/explorer/openchain.png"}
                    className="w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 mb-3">
              <h2 className="fw-bold my-3 text-center">
                Các tính năng của Explorer
              </h2>
              <h3 className="fw-bold my-3">Giao diện cơ bản</h3>
              <div className="row overflow-hidden mt-3">
                <div className="col-12 col-md-12 mb-3 wow bounceInDown">
                  <motion.img
                    initial={"off"}
                    whileInView={"on"}
                    variants={animateImgeRight}
                    alt="img"
                    src={"/images/explorer/function-openchain.png"}
                    className="w-100"
                  />
                </div>
              </div>
              <p className="font-size-mobile">
                Các tính năng và thông tin cơ bản trên giao diện Etherscan.io
              </p>
              <p className="font-size-mobile">Trong đó:</p>
              <p className="font-size-mobile">
                <strong>
                  [1] Các thông tin cơ bản về đồng Openchain (OPC):
                </strong>
                Có thế thấy giá cả, biến động giá trong tháng và tổng Market cap
                của OPC.
              </p>
              <p className="font-size-mobile">
                <strong>[2] Ô tìm kiếm:</strong> Tại đây, có thể paste Address,
                Txn Hash, Block, và Token để trực tiếp tìm kiếm thông tin.
              </p>
              <p className="font-size-mobile">
                <strong>[3] Tab Blocks:</strong> Thông tin của các pool đào tạo
                khối. theo thời gian thực.
              </p>
              <p className="font-size-mobile">
                <strong>[4] Tab Transactions:</strong> Thông tin của các giao
                dịch đã hoàn thành theo thời gian thực.
              </p>
              <p className="font-size-mobile">
                <strong>[5] Tab Accounts:</strong> Danh sách tài khoản hàng đầu
                theo số dư OPC.
              </p>
              <p className="font-size-mobile">
                <strong>[6] Tab Tokens:</strong> Thông tin của các tokens hàng
                đầu theo số lượng holder.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Content;
