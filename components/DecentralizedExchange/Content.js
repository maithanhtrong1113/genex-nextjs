import React, { Fragment } from "react";

import { Row, Container, Col } from "reactstrap";
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
          <Col className="col-12">
            <motion.h1
              className="fw-bold text-center my-3 "
              initial={"off"}
              animate={"on"}
              variants={animateImgeTop}
            >
              Sàn DEX là gì? PoolSwap là gì? Hướng dẫn sử dụng PoolSwap
            </motion.h1>
          </Col>
          <Col className="col-12 my-3">
            <h2 className="fw-bold  text-center">Sàn DEX là gì?</h2>
            <p className="my-3 text-justify font font-size-mobile fables-forth-text-color">
              DEX (Decentralized Exchange) nghĩa là sàn giao dịch phi tập trung.
              Tại đây, các giao dịch tiền điện tử được diễn ra ngang hàng (P2P)
              giữa những người dùng với nhau trên nền tảng Blockchain, mà không
              cần thông qua bất cứ tổ chức trung gian nào. Không ai giữ tiền của
              bạn và bạn cũng không cần phải tin tưởng sàn giao dịch như khi sử
              dụng sàn giao dịch tiền điện tử tập trung (CEX).
            </p>
            <img
              src={"/images/poolswap/san-dex-la-gi.jpeg"}
              alt=""
              className="w-100"
            />
          </Col>
          <Col>
            <h2 className="fw-bold text-center my-3">PoolSwap là gì?</h2>
            <p className="font-size-mobile text-justify fables-forth-text-color">
              PoolSwap là sàn giao dịch crypto phi tập trung, do GENEX phát
              triển cho khách hàng. PoolSwap là một trong những sàn phi tập
              trung theo cơ chế tạo lập thị trường tự động (AMM DEX) đầu tiên
              của OpenChain, cho phép người dùng trao đổi các token chuẩn
              OPC-202 (Tương thích chuẩn ERC-20 của mạng Ethereum).
            </p>
            <p className="font-size-mobile text-justify fables-forth-text-color">
              Tương tự như các AMM DEX khác, khi giao dịch trên PoolSwap, những
              người dùng cung cấp thanh khoản sẽ góp tài sản của mình vào Pool,
              còn những người giao dịch sẽ Swap tài sản qua lại trong Pool theo
              công thức định sẵn của Smart Contract, thay vì cơ chế Order-book
              (sổ lệnh) như các sàn giao dịch thông thường.
            </p>
            <h2 className="fw-bold my-3 text-center">
              Sử dụng PoolSwap để kiếm tiền như thế nào?
            </h2>

            <h3 className="fw-bold my-3">Trade</h3>
            <p className="font-size-mobile text-justify fables-forth-text-color">
              PoolSwap nền tảng xây dựng theo mô hình AMM (Automated Market
              Maker) đảm bảo tính bảo mật và riêng tư tuyệt đối cho người dùng.
              AMM hay Automated Market Maker là thuật ngữ dùng để chỉ công cụ vụ
              giúp đem lại tính thanh khoản tự động ảnh trên các sàn giao dịch.
              Mô hình giống như một sàn giao dịch hoạt động theo hướng phi tập
              trung khắc phục nhược điểm còn tồn tại ở các sản tập trung hiện
              nay
            </p>

            <img src={"/images/poolswap/home.png"} alt="" className="w-100" />
            <h3 className="fw-bold my-3">Bridge Cross-chain</h3>

            <p className="font-size-mobile text-justify fables-forth-text-color">
              Blockchain bridge (cầu nối blockchain) là một hệ thống cho phép
              người dùng chuyển tài sản và dữ liệu giữa các mạng lưới blockchain
              khác nhau, ví dụ: Ethereum và Openchain hoặc Binance và Openchain.
            </p>

            <img src={"/images/poolswap/bridge.png"} alt="" className="w-100" />
            <h3 className="fw-bold my-3">Cung cấp thanh khoản</h3>

            <p className="font-size-mobile text-justify fables-forth-text-color">
              Các Pool trên sàn PoolSwap cho phép cung cấp thanh khoản bằng cách
              staking token đang có vào các pool thanh khoản (LP).
            </p>

            <p className="font-size-mobile text-justify fables-forth-text-color">
              Dành cho các bạn chưa hiểu về cơ chế staking là gì, thì staking là
              hành động giữ một lượng coin nhất định trong ví của một dự án
              Blockchain trong một khoảng thời gian để nhận được phần thưởng.
            </p>
            <img src={"/images/poolswap/pool.png"} alt="" className="w-100" />

            <h3 className="fw-bold my-3">Farming</h3>

            <p className="font-size-mobile text-justify fables-forth-text-color">
              Sau khi nắm giữ LP token, có thể dùng nó để kiếm LP token. Có rất
              nhiều Pool để Farm coin trên sàn PoolSwap.
            </p>
            <p className="font-size-mobile text-justify fables-forth-text-color">
              Giống như với token OPC-202, bạn sẽ cần phải chấp thuận việc di
              chuyển token OPC-202 - đây là điều cho phép hợp đồng thay mặt bạn
              rút chúng . Khi bạn nhấp vào Approve Contract (Phê duyệt hợp
              đồng), một cửa sổ sẽ bật lên để yêu cầu bạn xác nhận giao dịch và
              hiển thị một khoản phí.
            </p>
            <img src={"/images/poolswap/farm.png"} alt="" className="w-100" />
            <p className="font-size-mobile text-justify my-3 fables-forth-text-color">
              Khi giao dịch được thông qua, bước tiếp theo là bạn chọn số lượng
              tiền bạn muốn bơm vào bể và bấm xác nhận. Bạn có thể thoát khỏi
              trang giao dịch và quay lại bất kỳ lúc nào để kiểm tra xem bạn đã
              kiếm được bao nhiêu OPC. Trong trường hợp bạn muốn nhận phần
              thưởng của mình ngay lúc đó, hãy nhấp vào Harvest (Thu hoạch) và
              xác nhận giao dịch.
            </p>

            <h3 className="fw-bold my-3">Tham gia IDO</h3>

            <p className="font-size-mobile text-justify fables-forth-text-color">
              IDO (Initial DEX Offering) là một hình thức để có thể mua được các
              token mới được ra mắt thông qua yield farming, bằng cách stake LP
              token từ các pool hỗ trợ để được cấp quyền tham gia mua các token
              mới.
            </p>

            <img src={"/images/poolswap/ido.png"} alt="" className="w-100" />
          </Col>
          <h2 className="fw-bold my-3">Tổng kết</h2>
          <p className="font-size-mobile text-justify fables-forth-text-color">
            PoolSwap là dự án AMM lớn nhất trên OpenChain (OPC) với rất nhiều
            tính năng sáng tạo. Bạn có thể theo dõi thêm rất nhiều chỉ số của nó
            trên trang:
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://poolswap.ai/"
              className="css-3r945m etyh6ra0"
            >
              https://poolswap.ai/
            </a>
          </p>
          <p className="font-size-mobile text-justify fables-forth-text-color">
            Ethereum đã kích hoạt xu hướng tài chính phi tập trung, nhưng các
            sáng kiến như PoolSwap đã cho thấy rằng làn sóng đổi mới này sẽ còn
            lan truyền sang các chuỗi khác.
          </p>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Content;
