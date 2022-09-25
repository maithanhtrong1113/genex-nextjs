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
              className="fw-bold text-center"
              initial={"off"}
              animate={"on"}
              variants={animateImgeTop}
            >
              Hướng dẫn hoàn chỉnh về tài chính phi tập trung (DeFi) dành cho
              người mới bắt đầu
            </motion.h1>
          </Col>
          <Col className="col-12 my-3">
            <h2 className="fw-bold text-center">
              Tài chính phi tập trung (DeFi) là gì?
            </h2>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Tài chính phi tập trung (gọi tắt là DeFi) đề cập đến một hệ sinh
              thái các ứng dụng tài chính được xây dựng trên các mạng
              blockchain.
            </p>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Cụ thể hơn, thuật ngữ Tài chính phi tập trung đề cập đến xu hướng
              tạo ra hệ sinh thái dịch vụ tài chính mã nguồn mở với các ứng dụng
              không cần sự cho phép và hoàn toàn minh bạch, cho phép tất cả mọi
              người tự do sử dụng mà không cần bất kỳ sự kiểm soát của cơ quan
              nào. Người dùng sẽ duy trì toàn quyền kiểm soát tài sản của họ và
              tương tác với hệ sinh thái này thông qua các ứng dụng ngang hàng
              (P2P) và ứng dụng phi tập trung (dapps) .
            </p>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Lợi ích cốt lõi của DeFi là sự tiếp cận dễ dàng các dịch vụ tài
              chính, đặc biệt là đối với những người bị tách biệt khỏi hệ thống
              tài chính hiện tại. Tiềm năng khác của DeFi còn là các khuôn khổ
              và module mà nó được xây dựng. Nói cách khác, các ứng dụng DeFi có
              thể tương tác trên các blockchain công khai có khả năng tạo ra các
              thị trường tài chính, sản phẩm và dịch vụ hoàn toàn mới.
            </p>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Bài viết này sẽ giới thiệu sâu hơn về DeFi, các ứng dụng tiềm năng
              hứa hẹn, những hạn chế và nhiều điều hơn nữa.
            </p>
          </Col>
          <Col className="col-12 my-3">
            <h2 className="fw-bold text-center">
              Những lợi thế lớn nhất của DeFi?
            </h2>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Tài chính truyền thống có các tổ chức như ngân hàng hay tòa án để
              làm trung gian để phân xử.
            </p>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              DeFi không cần bất kỳ trung gian hoặc trọng tài nào. Bởi code của
              hệ thống đã chỉ định sẵn cách giải quyết mọi tranh chấp có thể xảy
              ra, và người dùng luôn duy trì quyền kiểm soát tiền của họ. Điều
              này làm giảm các chi phí liên quan đến việc cung cấp và sử dụng
              các sản phẩm, và cho phép hệ thống tài chính hoạt động một cách ổn
              định hơn.
            </p>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Khi các dịch vụ tài chính mới này được triển khai trên các
              blockchain, các lỗi đơn lẻ cũng sẽ bị loại bỏ. Ngoài ra, dữ liệu
              được ghi lại trên blockchain và trải rộng trên hàng nghìn nodes
              khiến việc kiểm duyệt hoặc khả năng ngừng hoạt động của dịch vụ
              trở thành một công việc phức tạp.
            </p>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Vì cơ chế hoạt động cho các ứng dụng DeFi được xây dựng trước nên
              việc triển khai chúng cũng trở nên ít phức tạp và an toàn hơn.
            </p>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Một lợi thế đáng kể khác của hệ sinh thái mở là các cá nhân vốn
              không có quyền truy cập vào bất kỳ dịch vụ tài chính nào sẽ có sự
              tiếp cận dễ dàng hơn. Nói cách khác, vì hệ thống tài chính truyền
              thống dựa vào các trung gian tạo ra lợi nhuận, nên các dịch vụ của
              họ thường không có ở các địa điểm có cộng đồng thu nhập thấp. Tuy
              nhiên, với DeFi, chi phí được giảm đáng kể và các cá nhân có thu
              nhập thấp cũng có thể hưởng lợi từ nhiều loại dịch vụ tài chính.
            </p>
          </Col>
          <Col className="col-12 my-3">
            <h2 className="fw-bold text-center">
              Các ứng dụng tiềm năng trong DeFi?
            </h2>
            <h3 className="fw-bold">Vay &amp; Cho vay</h3>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Các giao thức cho vay cũng là một trong những ứng dụng phổ biến
              nhất và là một phần quan trọng của hệ sinh thái DeFi. Hệ thống vay
              và cho vay mở, phi tập trung có nhiều ưu điểm hơn so với hệ thống
              tín dụng truyền thống. Chúng giúp giải quyết các giao dịch ngay
              tức thì, cho phép thế chấp tài sản kỹ thuật số, không cần kiểm tra
              tín dụng và khả năng tiêu chuẩn hóa trong tương lai.
            </p>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Vì các dịch vụ cho vay này được xây dựng trên các blockchain công
              khai, chúng giảm thiểu yêu cầu tín dụng cần thiết, thay vào đó
              chúng được đảm bảo bởi các phương pháp xác minh mật mã. Thị trường
              cho vay trên blockchain làm giảm rủi ro đối tác, làm cho việc vay
              và cho vay rẻ hơn, nhanh hơn và luôn có sẵn cho nhiều người.
            </p>
            <h3 className="fw-bold">
              Các dịch vụ ngân hàng liên quan đến tiền tệ
            </h3>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Như định nghĩa và tên gọi, về cơ bản, DeFi là các ứng dụng tài
              chính, dịch vụ ngân hàng và tiền tệ. Điều này bao gồm cả việc phát
              hành stablecoin, thế chấp và bảo hiểm.
            </p>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Khi ngành công nghiệp blockchain đang ngày một phát triển, ngày
              càng có nhiều sự đầu tư vào việc tạo ra các stablecoin. Stablecoin
              là một loại tiền mã hóa, thường được gắn với một tài sản trong thế
              giới thực, nhưng có thể được chuyển giao kỹ thuật số một cách
              tương đối dễ dàng. Vì giá tiền mã hóa có thể biến động nhanh vào
              các thời điểm khác nhau, các stablecoin phi tập trung có thể được
              sử dụng hàng ngày như tiền mặt kỹ thuật số, dù không được cơ quan
              trung ương phát hành và giám sát.
            </p>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Thông thường, với số lượng trung gian cần phải tham gia, quá trình
              thế chấp trong tài chính truyền thống thường rất tốn kém và mất
              thời gian. Với việc sử dụng hợp đồng thông minh, phí bảo lãnh phát
              hành và chi phí pháp lý có thể giảm đáng kể.
            </p>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Bảo hiểm trên blockchain có thể loại bỏ sự cần thiết của các bên
              trung gian và cho phép phân bổ rủi ro giữa nhiều người tham gia.
              Điều này có thể dẫn đến phí bảo hiểm thấp hơn với cùng chất lượng
              dịch vụ tốt hơn.
            </p>
            <p className="font-size-mobile fables-forth-text-color text-justify">
              Nếu bạn muốn đọc thêm về chủ đề blockchain trong lĩnh vực ngân
              hàng, chúng tôi khuyên bạn nên đọc bài viết: Cách công nghệ
              Blockchain sẽ tác động đến ngành Ngân Hàng.
            </p>
          </Col>
          <h3 className="fw-bold">Các sàn phi tập trung</h3>
          <div className="row overflow-hidden mt-4">
            <div className="col-12 col-md-12 mb-4 wow bounceInDown">
              <img src={"/images/openchain/d2e.png"} className="w-100" />
            </div>
          </div>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Khó có thể đánh giá loại ứng dụng này, vì trong lĩnh vực tài chính,
            đây vốn là khía cạnh có nhiều sự đổi mới nhất của DeFi.
          </p>
          <div className="font-size-mobile fables-forth-text-color text-justify">
            Có thể cho rằng, một ứng dụng quan trọng nhất của DeFi là các sàn
            giao dịch dịch phi tập trung (DEX). Các nền tảng này cho phép người
            dùng giao dịch tài sản kỹ thuật số mà không cần một trung gian đáng
            tin cậy (sàn giao dịch) để giữ tiền thay cho họ. Các giao dịch được
            thực hiện trực tiếp giữa các ví của người dùng với sự trợ giúp của
            hợp đồng thông minh.
          </div>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Vì chúng ít yêu cầu bảo trì hơn, các sàn giao dịch phi tập trung
            thường có phí giao dịch thấp hơn các sàn giao dịch tập trung.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Công nghệ blockchain cũng có thể được sử dụng để phát hành và cho
            phép sở hữu một loạt các loại công cụ tài chính thông thường. Các
            ứng dụng này sẽ hoạt động theo cách phi tập trung, giảm tải những
            bên giám sát và loại bỏ các lỗi đơn lẻ.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Ví dụ: nền tảng phát hành token bảo mật có thể cung cấp các công cụ
            và tài nguyên cho các tổ chức phát hành để khởi chạy chứng khoán
            được token hóa trên blockchain với các thông số có thể tùy chỉnh.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Các dự án khác có thể cho phép tạo ra các công cụ phái sinh, tài sản
            tổng hợp, thị trường dự đoán phi tập trung, v.v.
          </p>
          <h2 className="fw-bold text-center">
            Vai trò của hợp đồng thông minh trong DeFi?
          </h2>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Hầu hết các ứng dụng hiện có và tiềm năng của Tài chính phi tập
            trung liên quan đến việc tạo và thực hiện các hợp đồng thông minh.
            Trong khi hợp đồng thông thường sử dụng thuật ngữ pháp lý để xác
            định các điều khoản của mối quan hệ giữa các chủ thể tham gia hợp
            đồng, thì hợp đồng thông minh sử dụng code máy tính.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Vì các điều khoản của chúng được viết bằng code, nên hợp đồng thông
            minh là thứ duy nhất có khả năng thực thi các điều khoản đó - cũng
            thông qua code. Điều này cho phép việc thực thi trở nên đáng tin cậy
            và tự động hóa, khác với một số lượng lớn các quy trình kinh doanh
            hiện yêu cầu rất nhiều các hoạt động giám sát thủ công.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Sử dụng hợp đồng thông minh nhanh hơn, dễ dàng hơn và giảm rủi ro
            cho cả hai bên. Nhưng mặt khác, hợp đồng thông minh cũng tạo ra các
            loại rủi ro mới. Vì là code nên chúng có khả năng lỗi code và có lỗ
            hổng bảo mật, giá trị và thông tin bí mật bị khóa trong các hợp đồng
            thông minh cũng sẽ gặp rủi ro.
          </p>
          <h2 className="fw-bold text-center">
            Sự khác biệt giữa DeFi và Ngân hàng Mở là gì?
          </h2>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Ngân hàng mở là hệ thống ngân hàng nơi các nhà cung cấp dịch vụ tài
            chính thuộc bên thứ ba được cấp quyền truy cập an toàn vào dữ liệu
            tài chính thông qua các API. Điều này cho phép kết nối các tài khoản
            và dữ liệu giữa các ngân hàng và các tổ chức tài chính phi ngân
            hàng. Về cơ bản, nó cũng tạo ra các loại sản phẩm và dịch vụ mới nằm
            trong hệ thống tài chính truyền thống.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Tuy nhiên, DeFi đề xuất một hệ thống tài chính hoàn toàn mới, độc
            lập với cơ sở hạ tầng hiện tại. Đôi khi, DeFi cũng được gọi là tài
            chính mở.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Ví dụ: ngân hàng mở có thể cho phép quản lý tất cả các công cụ tài
            chính truyền thống trong một ứng dụng bằng cách lấy dữ liệu từ một
            số ngân hàng và tổ chức một cách an toàn.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Trong khi đó, Tài chính phi tập trung cũng có thể cho phép quản lý
            các công cụ tài chính hoàn toàn và các cách thức tương tác hoàn toàn
            mới.
          </p>
          <h2 className="fw-bold text-center">Tổng kết</h2>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Tài chính phi tập trung tập trung vào việc xây dựng các dịch vụ tài
            chính tách biệt với hệ thống tài chính và nền chính trị truyền
            thống. Điều này sẽ cho phép một hệ thống tài chính cởi mở hơn và có
            khả năng ngăn chặn các tiền lệ về kiểm duyệt và phân biệt đối xử
            trên toàn thế giới.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Mặc dù là một ý tưởng hấp dẫn, nhưng tính chất phân quyền không phải
            tạo ra mọi thứ đều có lợi. Tìm ra các tính năng phù hợp nhất, dựa
            vào các đặc điểm của blockchain là việc rất quan trọng trong việc
            xây dựng các sản phẩm tài chính mở hữu ích.
          </p>
          <p className="font-size-mobile fables-forth-text-color text-justify">
            Nếu phát triển và mở rộng thành công, DeFi có thể lấy bớt quyền lực
            từ các tổ chức tập trung lớn và đặt nó vào tay cộng đồng mã nguồn mở
            và các cá nhân riêng lẻ. Liệu điều đó có giúp tạo ra một hệ thống
            tài chính hoạt động hiệu quả hơn hay không? Điều này sẽ được quyết
            định khi DeFi được công nhận và ứng dụng trong nền tài chính chính
            thống.
          </p>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Content;
