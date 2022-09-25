import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
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
          <motion.h1
            className="fw-bold my-3 text-center"
            initial={"off"}
            animate={"on"}
            variants={animateImgeTop}
          >
            NFC là gì? Những tính năng thú vị mà NFC mang lại cho người dùng
          </motion.h1>

          <h2 className="fw-bold">NFC là gì?</h2>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Không ít người dùng smartphone hiện nay vẫn còn mơ hồ về khái niệm
            NFC là gì và không biết khai thác các công dụng mà NFC mang lại. Bài
            viết dưới đây sẽ giải đáp các thắc mắc này.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            NFC (Near-Field Communications) là công nghệ kết nối không dây tầm
            ngắn trong khoảng cách 4 cm. Công nghệ này sử dụng cảm ứng từ trường
            để thực hiện kết nối giữa các thiết bị (smartphone, tablet, loa, tai
            nghe,…) khi có sự tiếp xúc trực tiếp (chạm).
          </p>
          <img src={"/images/nfc/nfc-payment.png"} alt="" className="w-100" />
          <p className="font-size-mobile fables-forth-text-color text-justify">
            <br />
          </p>
          <h2 className="fw-bold">Công dụng của NFC là gì?</h2>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Khi hai thiết bị đều có kết nối NFC, bạn có thể chạm chúng vào nhau
            để kích hoạt tính năng này và nhanh chóng truyền tập tin gồm danh
            bạ, nhạc, hình ảnh, video, ứng dụng hoặc địa chỉ website... Ở các
            nước phát triển, NFC còn được xem là chiếc ví điện tử khi có thể
            thanh toán trực tuyến, tiện lợi và nhanh chóng.
          </p>
          <h2 className="fw-bold">NFC hoạt động như thế nào?</h2>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Cũng giống như Bluetooth, WiFi hay tất cả các loại tín hiệu không
            dây khác, NFC hoạt động theo nguyên tắc gửi thông tin qua sóng
            radio. NFC là một tiêu chuẩn chuyển đổi dữ liệu không dây.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Điều này có nghĩa là các thiết bị phải tuân thủ những thông số kỹ
            thuật nhất định để giao tiếp với nhau đúng cách. Công nghệ được sử
            dụng trong NFC dựa trên các ý tưởng RFID (Radio-frequency
            identification - nhận dạng tần số vô tuyến) cũ hơn, sử dụng cảm ứng
            điện từ để truyền thông tin.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Để xác định loại thông tin nào sẽ được trao đổi giữa các thiết bị,
            tiêu chuẩn NFC hiện có 3 chế độ hoạt động riêng biệt. Có lẽ được sử
            dụng phổ biến nhất trong điện thoại thông minh là chế độ ngang hàng
            (peer-to-peer). Điều này cho phép hai thiết bị hỗ trợ NFC trao đổi
            nhiều thông tin khác nhau. Trong chế độ này, cả hai thiết bị chuyển
            đổi qua lại giữa trạng thái chủ động khi gửi dữ liệu và thụ động khi
            nhận.
          </p>

          <img src={"/images/nfc/nfc-work.png"} alt="" className="w-100" />
          <p className="font-size-mobile fables-forth-text-color text-justify my-3">
            Bảo hiểm trên blockchain có thể loại bỏ sự cần thiết của các bên
            trung gian và cho phép phân bổ rủi ro giữa nhiều người tham gia.
            Điều này có thể dẫn đến phí bảo hiểm thấp hơn với cùng chất lượng
            dịch vụ tốt hơn.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Mặt khác, chế độ đọc/ghi là việc truyền dữ liệu một chiều. Thiết bị
            chủ động, có thể là điện thoại thông minh, liên kết với một thiết bị
            khác để đọc thông tin từ thiết bị đó. Tag quảng cáo NFC sử dụng chế
            độ này.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Chế độ hoạt động cuối cùng là mô phỏng card. Thiết bị NFC có thể
            hoạt động như một thẻ tín dụng thông minh hay không tiếp xúc và thực
            hiện thanh toán hoặc truy cập vào các hệ thống giao thông công cộng.
          </p>
          <h2 className="fw-bold">Cách tốt nhất để sử dụng NFC</h2>
          <h3 className="fw-bold my-3">1. Kết nối ngay với mạng WiFi</h3>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Mật khẩu WiFi rất dài và phức tạp. Điều này làm cho kết nối với mạng
            trở nên khó khăn hơn. Nếu muốn thay thế quy trình rườm rà đó bằng
            một thao tác chạm duy nhất, bạn có thể ghi mật khẩu WiFi của mình
            vào tag NFC. Android và iOS hỗ trợ tính năng này, do đó, một thao
            tác chạm vào tag sẽ điền các chi tiết kết nối WiFi và giúp bạn trực
            tuyến mà không gặp phải bất kỳ phiền phức nào.
          </p>
          <h3 className="fw-bold">2. Tự động vào Driving Mode</h3>

          <div className="font-size-mobile fables-forth-text-color text-justify">
            Người dùng iPhone biết rằng khi họ vào xe và kết nối với hệ thống
            giải trí trong xe, thì điện thoại sẽ tự động vào Driving Mode. Điều
            này làm tắt tiếng các thông báo và tối ưu hóa thiết lập cho hành
            trình. Mặc dù một số điện thoại thông minh Android có thể làm được
            điều này, nhưng phần lớn thì không.
          </div>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Một số ứng dụng ghi tag NFC, như Trigger on Android, cho phép bạn
            thiết lập công tắc chuyển đổi để đảo ngược các hành động. Vì vậy,
            lần chạm đầu tiên sẽ kích hoạt Driving Mode, sau đó, bạn có thể vô
            hiệu hóa nó bằng cách nhấn lại lần nữa và đưa điện thoại trở lại
            hoạt động bình thường.
          </p>

          <h3 className="fw-bold">3. Thanh toán</h3>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Như đã đề cập trước đó, NFC cho phép thanh toán không tiếp xúc khi
            sử dụng các dịch vụ như Google Pay hoặc Apple Pay. Ở nhiều nơi trên
            thế giới, việc thanh toán không tiếp xúc đã trở nên rất phổ biến.
          </p>

          <img src={"/images/nfc/nfc-1.jpeg"} alt="" className="w-100" />
          <p className="font-size-mobile fables-forth-text-color text-justify my-3">
            Cả Apple Pay và Google Pay đều cho phép bạn theo dõi chi tiêu, phân
            tích thói quen và lưu các phiếu giảm giá. Ngoài ra, chọn thanh toán
            NFC có nghĩa là bạn không còn cần phải thực hiện các phương thức
            thanh toán khác cùng với điện thoại của mình nữa.
          </p>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Content;
