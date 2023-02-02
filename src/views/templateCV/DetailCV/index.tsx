import React from "react"
import { HomeOutlined, MailOutlined, MinusOutlined, PhoneOutlined } from "@ant-design/icons"
import { Col, Row } from "antd"
import TitleComponent from "components/Common/Title/TitleComponent"
import {
  AchievementContainer,
  ContactContainer,
  EducationContainer,
  HeaederCV,
  MainCV,
  SkillContainer,
  TargetContaner,
  WorkExperienceContainer,
  WrapperCV,
} from "./styled"

const DetailCV: React.FC = () => {
  return (
    <WrapperCV>
      <HeaederCV>
        <div className="header__cv--avatar">
          <img
            src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/09/Naruto-Sage-Mode.jpg"
            alt="avatar-cv"
          />
        </div>
        <div className="header__cv--name">
          <span>Trần Thanh Lâm</span>
        </div>
        <div className="header__cv--job">
          <span>Front-end Developer</span>
        </div>
      </HeaederCV>
      <MainCV>
        <Row className="cv__row" justify="space-between">
          <Col xl={8} className="cv__col">
            <ContactContainer>
              <div className="cv__contact">
                <div className="cv__title">
                  <TitleComponent title="LIÊN HỆ" />
                </div>
                <div className="cv__contact--infor">
                  <div className="infor__icons">
                    <PhoneOutlined />
                  </div>
                  <span>(+84) 356 144 365</span>
                </div>
                <div className="cv__contact--infor">
                  <div className="infor__icons">
                    <MailOutlined />
                  </div>
                  <span>tratlam17102001@gmail.com</span>
                </div>
                <div className="cv__contact--infor">
                  <div className="infor__icons">
                    <HomeOutlined />
                  </div>
                  <span>206/29 Phạm Văn Bạch</span>
                </div>
              </div>
            </ContactContainer>
            <SkillContainer>
              <div className="cv__skill">
                <div className="cv__title">
                  <TitleComponent title="KỸ NĂNG" />
                </div>
                <div className="cv__skill--detail">
                  <div className="icons">
                    <MinusOutlined />
                  </div>
                  <span>Sử dụng thành thạo HTML CSS</span>
                </div>
                <div className="cv__skill--detail">
                  <div className="icons">
                    <MinusOutlined />
                  </div>
                  <span>Sử dụng thành thạo React JS</span>
                </div>
                <div className="cv__skill--detail">
                  <div className="icons">
                    <MinusOutlined />
                  </div>
                  <span>Sử dụng thành thạo Node JS</span>
                </div>
                <div className="cv__skill--detail">
                  <div className="icons">
                    <MinusOutlined />
                  </div>
                  <span>Sử dụng thành thạo MongoDB</span>
                </div>
              </div>
            </SkillContainer>
            <EducationContainer>
              <div className="cv__education">
                <div className="cv__title">
                  <TitleComponent title="HỌC VẤN" />
                </div>
                <div className="education__infor">
                  <div className="icons">
                    <MinusOutlined />
                  </div>
                  <span>
                    <b>Ngành học: </b>Thiết kế website
                  </span>
                </div>
                <div className="education__infor">
                  <div className="icons">
                    <MinusOutlined />
                  </div>
                  <span>
                    <b>Trường: </b>Cao đẳng FPT Polytechnich
                  </span>
                </div>
                <div className="education__infor">
                  <div className="icons">
                    <MinusOutlined />
                  </div>
                  <span>
                    <b>Điểm trung bình: </b> 8.0
                  </span>
                </div>
              </div>
            </EducationContainer>
            <AchievementContainer>
              <div className="cv__achievement">
                <div className="cv__title">
                  <TitleComponent title="THÀNH TÍCH" />
                </div>
                <div className="achivement__infor">
                  <div className="icons">
                    <MinusOutlined />
                  </div>
                  <span>Danh hiệu sinh viên giỏi học kỳ Fall 2020</span>
                </div>
              </div>
            </AchievementContainer>
          </Col>
          <div className="cv__line" />
          <Col xl={15}>
            <TargetContaner>
              <div className="cv__title">
                <TitleComponent title="MỤC TIÊU NGHỀ NGHIỆP" />
              </div>
              <div className="target__infor">
                <p>
                  Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị trường để trở
                  thành một nhân viên bán hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng.
                  Từ đó giúp Công ty tăng số lượng khách hàng và mở rộng tập khách hàng
                </p>
              </div>
            </TargetContaner>
            <WorkExperienceContainer>
              <div className="cv__title">
                <TitleComponent title="KINH NGHIỆM LÀM VIỆC" />
              </div>
              <div className="expience__item">
                <h2 className="expience__item--name">DỰ ÁN NHÓM - POLY FOOD</h2>
                <div className="expience__item--time">
                  <p>Thời gian:</p>
                  <span>17/10/2022</span> - <span>12/10/2022</span>
                </div>
                <div className="expience__item--detail">
                  <p>Mô tả: </p>
                  <span>
                    Mô tả dự án: Tạo website thương mại mua bán đồ ăn Người dùng có thể đăng ký và
                    đăng nhập tài khoản Cung cấp đầy đủ các công cụ cơ bản của một website thương
                    mại Công nghệ: Front-end: HTML, CSS, Javascript, PHP, JQuery, AJax. Back-end:
                    PHP, MySQL Công việc: Thiết kế UI cửa hàng, admin Xử lý dữ liệu cửa hàng, admin
                    Thiết kế database cửa hàng. Thành viên: 5 .Link Github:
                    https://github.com/thanhlam1710/PolyFood
                  </span>
                </div>
              </div>
              <div className="expience__item">
                <h2 className="expience__item--name">DỰ ÁN NHÓM - POLY FOOD</h2>
                <div className="expience__item--time">
                  <p>Thời gian:</p>
                  <span>17/10/2022</span> - <span>12/10/2022</span>
                </div>
                <div className="expience__item--detail">
                  <p>Mô tả: </p>
                  <span>
                    Mô tả dự án: Tạo website thương mại mua bán đồ ăn Người dùng có thể đăng ký và
                    đăng nhập tài khoản Cung cấp đầy đủ các công cụ cơ bản của một website thương
                    mại Công nghệ: Front-end: HTML, CSS, Javascript, PHP, JQuery, AJax. Back-end:
                    PHP, MySQL Công việc: Thiết kế UI cửa hàng, admin Xử lý dữ liệu cửa hàng, admin
                    Thiết kế database cửa hàng. Thành viên: 5 .Link Github:
                    https://github.com/thanhlam1710/PolyFood
                  </span>
                </div>
              </div>
            </WorkExperienceContainer>
          </Col>
        </Row>
      </MainCV>
    </WrapperCV>
  )
}

export default DetailCV
