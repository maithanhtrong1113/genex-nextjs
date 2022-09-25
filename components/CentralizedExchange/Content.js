import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
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
  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="col-12 my-3">
            <motion.h1
              className="fw-bold text-center my-3"
              initial={"off"}
              animate={"on"}
              variants={animateImgeTop}
            >
              Sàn Openchain là gì? Hướng dẫn sử dụng sàn Openchain
            </motion.h1>
          </Col>
          <Col className="col-12">
            <h2 className="fw-bold text-center">Sàn Openchain là gì?</h2>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Sàn Openchain là sàn giao dịch crypto (tiền điện tử/ tiền mã hóa)
              được thành lập vào năm 2019.
            </p>

            <img
              src={"/images/openchain/cex-opc.png"}
              alt=""
              className="w-100"
            />
            <p className="font-size-mobile fables-forth-text-color text-justify my-3">
              Sàn Openchain cho phép hoạt động giao dịch của rất nhiều loại tiền
              mã hóa khác nhau. Một trong những điểm nổi bật nhất khi nhắc đến
              Openchain đó là các giao dịch có thể được thực hiện một cách đáng
              tin cậy, nhanh chóng và an toàn.
            </p>
          </Col>
          <h2 className="fw-bold text-center my-3">
            Các sản phẩm và dịch vụ được cung cấp trên sàn tiền ảo Openchain
          </h2>

          <h3 className="fw-bold">Giao dịch Spot (giao ngay)</h3>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Có hơn 100 cặp tiền mã hoá và tiền pháp định được niêm yết bao gồm
            Bitcoin, Ethereum, OPC trên Openchain Spot, …với hệ thống khớp lệnh
            có khả năng xử lý tới 10000 đặt lệnh mỗi giây.
          </p>

          <img src={"/images/openchain/trading.png"} alt="" className="w-100" />
          <h3 className="fw-bold my-3">Giao dịch P2P</h3>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Đây là một tính năng nền tảng của giao dịch Openchain cho phép thực
            hiện giao dịch trực tiếp giữa người dùng với người dùng hoặc với
            thương nhân mà sàn Openchain chỉ làm trung gian.
          </p>

          <img src={"/images/openchain/fiat.png"} alt="" className="w-100" />
          <h3 className="fw-bold my-3">Giao dịch ký quỹ vay margin</h3>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Đây là phương thức giao dịch tài sản bằng cách sử dụng khoản vay
            (đòn bẩy) do bên thứ ba cung cấp. Điều này cho phép các nhà đầu tư
            sử dụng mức vốn lớn với cơ hội kiếm lời lớn.
          </p>
          <img src={"/images/openchain/lending.png"} alt="" className="w-100" />

          <h3 className="fw-bold my-3">Farm</h3>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Đây là một nền tảng dịch vụ toàn diện và nhiều tính năng được xây
            dựng dành riêng cho các thợ đào để gia tăng thu nhập. Nền tảng này
            sẽ thanh toán thường xuyên cho các thợ đào, đồng thời cung cấp mức
            phí thấp và nhiều sản phẩm khác để giúp tối đa hóa lợi nhuận khi đào
            tiền mã hoá.
          </p>
          <img src={"/images/openchain/farming.png"} alt="" className="w-100" />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Content;
