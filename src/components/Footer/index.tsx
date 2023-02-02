import React from "react"
import { SendOutlined } from "@ant-design/icons"
import { Row, Col, Button } from "antd"
import Link from "next/link"
import {
  FooterContainer,
  FooterItemInput,
  FooterItemLi,
  FooterItemUl,
  FooterTextBold,
  FooterTitle,
} from "./styled"

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Row className="row__footer-container" gutter={8}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <FooterTitle>Về chúng tôi</FooterTitle>
          <Row align="middle" className="row__footer-item">
            <div className="footer_logo">
              <Link href="/">
                <a>
                  <img src="/logo/PC_Logo_White.png" alt="Logo_Footer" />
                </a>
              </Link>
            </div>
            <div>
              <FooterTextBold>PolyCareer.com</FooterTextBold>
              <FooterTextBold>Hỗ trợ tìm việc cho sinh viên</FooterTextBold>
              <span className="content">Tìm việc đi chờ chi</span>
            </div>
          </Row>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <FooterTitle>Thông tin</FooterTitle>
          <FooterItemUl>
            <FooterItemLi>
              <a className="content">Báo giá dịch vụ</a>
            </FooterItemLi>
            <FooterItemLi>
              <a className="content">Điều khoản sử dụng</a>
            </FooterItemLi>
            <FooterItemLi>
              <a className="content">Công cụ tính lương</a>
            </FooterItemLi>
          </FooterItemUl>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <FooterTitle>Liên hệ</FooterTitle>
          <FooterItemUl>
            <FooterItemLi>
              <span className="content">Điện thoại: Điện thoại: 0937231xxx | 0916441xxx</span>
            </FooterItemLi>
            <FooterItemLi>
              <span className="content">Email hỗ trợ người tìm việc: ntv@polycareer.com</span>
            </FooterItemLi>
            <FooterItemLi>
              <span className="content">Email hỗ trợ nhà tuyển dụng: ntd@polycareer.com</span>
            </FooterItemLi>
          </FooterItemUl>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <FooterTitle>Đăng ký nhận thông tin tuyển dụng</FooterTitle>
          <Row align="middle" className="row__footer-item">
            <FooterItemInput placeholder="Nhập email của bạn" />
            <Button
              type="primary"
              icon={<SendOutlined style={{ transform: "rotate(-45deg) translateX(5px)" }} />}
              size="large"
              className="item-icon"
            />
          </Row>
        </Col>
        <FooterTextBold margin="0 auto">Copyright © SOS Team</FooterTextBold>
      </Row>
    </FooterContainer>
  )
}

export default Footer
