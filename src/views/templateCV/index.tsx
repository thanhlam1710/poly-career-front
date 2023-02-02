import React, { useState } from "react"
import { EyeFilled } from "@ant-design/icons"
import { Button, Col, Modal, Radio, Row, Select } from "antd"
import Link from "next/link"
import { CV_SETTING_COLOR, ROUTES } from "@constants"
import DetailCV from "./DetailCV"
import { WrapperModalTemplate, WrapperTemplate } from "./styled"

const { Option } = Select

const TemplateCV: React.FC = () => {
  const [onModal, setOnModal] = useState(false)
  const [data, setData] = useState({
    optionsSort: "new",
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const language = [
    {
      id: 1,
      name: "Tiếng Việt",
    },
    {
      id: 2,
      name: "Tiếng Anh",
    },
    {
      id: 3,
      name: "Tiếng Nhật",
    },
  ]

  const occupation = [
    {
      id: 1,
      name: "Tất cả ngành nghề",
    },
    {
      id: 2,
      name: "Kinh doanh / Bán hàng",
    },
    {
      id: 3,
      name: "Biên / Phiên dịch",
    },
    {
      id: 4,
      name: "Báo chí / Truyền hình",
    },
    {
      id: 5,
      name: "Bưu chính / Viễn thông",
    },
    {
      id: 6,
      name: "Bảo hiểm",
    },
    {
      id: 7,
      name: "Chứng khoán",
    },
    {
      id: 8,
      name: "Công nghệ cao",
    },
    {
      id: 9,
      name: "Công nghệ thông tin",
    },
    {
      id: 10,
      name: "Thiết kế đồ họa",
    },
    {
      id: 11,
      name: "Thời trang",
    },
  ]

  const design = [
    {
      id: 1,
      name: "Tất cả thiết kế",
    },
    {
      id: 2,
      name: "Đơn giản",
    },
    {
      id: 3,
      name: "Thanh lịch",
    },
    {
      id: 4,
      name: "Kinh nghiệm",
    },
    {
      id: 5,
      name: "Màu sắc",
    },
    {
      id: 6,
      name: "Sáng tạo",
    },
    {
      id: 7,
      name: "Chuyên nghiệp",
    },
    {
      id: 8,
      name: "Trang trọng",
    },
    {
      id: 9,
      name: "Truyền thống",
    },
    {
      id: 10,
      name: "Thương hiệu",
    },
    {
      id: 11,
      name: "Công nghệ",
    },
  ]

  const fontFamily = [
    {
      value: "roboto-condensed",
      label: "Roboto Condensed",
    },
    {
      value: "roboto",
      label: "Roboto",
    },
    {
      value: "open-sans",
      label: "Open Sans",
    },
    {
      value: "mitr",
      label: "Mitr",
    },
  ]

  const optionsSort = [
    {
      value: "new",
      label: "Mới cập nhật",
    },
    {
      value: "more",
      label: "Được dùng nhiều nhất",
    },
  ]
  return (
    <WrapperTemplate>
      <Row className="profile pt-2 pb-2">
        <Col lg={6} xs={24} className="side-bar">
          <div className="fixed">
            <div className="cv-filter-box">
              <div className="box-filter">
                <h2 className="title-filter">Tìm mẫu CV phù hợp</h2>
                <Select
                  placeholder="Ngôn ngữ"
                  className="title-filter__item"
                  optionFilterProp="children"
                  size="large"
                >
                  {language.map((e) => {
                    return (
                      <Option value={e.id} key={e.id} checked={e.id === 1 ? "check" : ""}>
                        {e.name}
                      </Option>
                    )
                  })}
                </Select>
                <Select
                  placeholder="Ngành nghề"
                  className="title-filter__item"
                  optionFilterProp="children"
                  size="large"
                >
                  {occupation.map((e) => {
                    return (
                      <Option value={e.id} key={e.id}>
                        {e.name}
                      </Option>
                    )
                  })}
                </Select>
                <Select
                  placeholder="Kiểu mẫu"
                  className="title-filter__item"
                  optionFilterProp="children"
                  size="large"
                >
                  {design.map((e) => {
                    return (
                      <Option value={e.id} key={e.id}>
                        {e.name}
                      </Option>
                    )
                  })}
                </Select>
              </div>
              <div className="order-box">
                <h2 className="title-filter">Sắp xếp</h2>
                <Radio.Group
                  options={optionsSort}
                  name="optionsSort"
                  onChange={handleInputChange}
                  value={data.optionsSort}
                  buttonStyle="solid"
                />
              </div>
            </div>
            <img
              className="cv-image"
              src="https://i.pinimg.com/736x/7b/59/17/7b59171a759cbf6be4568d43c076ec0b.jpg"
              alt=""
            />
          </div>
        </Col>
        <Col lg={18} xs={24} className="list-template-cv">
          <div className="list-template-cv__body">
            <div className="heading">
              <h1 className="suggest-title">
                Danh sách mẫu CV xin việc tiếng Anh / Việt / Nhật chuẩn 2022
              </h1>
              <p>
                Các mẫu CV đuợc thiết kế theo chuẩn, theo các ngành nghề. Phù hợp với sinh viên và
                người đi làm.
              </p>
            </div>
            <div className="container">
              <Row gutter={[16, 16]}>
                <Col xs={24} lg={8}>
                  <div className="template-cv-item box-shadow">
                    <div>
                      <div className="cv-img">
                        <div>
                          <img
                            src="https://res.cloudinary.com/anummio/image/upload/v1671349677/Screenshot_2022-12-18_144726_fg7qn1.png"
                            alt=""
                          />
                          <div className="new-template">Mới</div>
                        </div>

                        <div className="cv-overlay">
                          <div className="control">
                            <span onClick={() => setOnModal(true)} className="preview-button">
                              <EyeFilled /> Xem trước
                            </span>
                            <Link href={ROUTES.studentCv.createCv}>
                              <span className="create-cv-button">Dùng mẫu này</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="template-cv-item__info">
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <span className="template-cv-item-tag">Chuyên nghiệp</span>
                        <span className="template-cv-item-tag">Sáng tạo</span>
                      </div>
                      <div className="template-cv-title">
                        <span>Mẫu CV Basic 5</span>
                      </div>
                      <div style={{ display: "flex" }}>
                        {CV_SETTING_COLOR.map((e) => (
                          <div
                            key={e.color}
                            className="template-cv-colors"
                            style={{ backgroundColor: e.value }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <Modal width={1100} open={onModal} onCancel={() => setOnModal(false)} footer={null}>
        <WrapperModalTemplate>
          <Row gutter={15}>
            <Col span={17}>
              <DetailCV />
            </Col>
            <Col span={7} className="p-2">
              <div className="modal-title">Mẫu CV Basic 4</div>
              <div className="nav-control">
                <div className="nav-control__item">
                  <p>Ngôn ngữ</p>
                  <Select
                    className="item__select"
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    size="small"
                    defaultValue={1}
                  >
                    {language.map((e) => {
                      return (
                        <Option value={e.id} key={e.id} checked={e.id === 1 ? "check" : ""}>
                          {e.name}
                        </Option>
                      )
                    })}
                  </Select>
                </div>
                <div className="nav-control__item">
                  <p>Font chữ</p>
                  <Select
                    className="item__select"
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    size="small"
                    defaultValue="roboto-condensed"
                  >
                    {fontFamily.map((e) => {
                      return (
                        <Option value={e.value} key={e.value}>
                          {e.label}
                        </Option>
                      )
                    })}
                  </Select>
                </div>
                <div className="nav-control__item">
                  <p>Màu sắc</p>
                  <div style={{ display: "flex" }}>
                    {CV_SETTING_COLOR.map((e) => (
                      <div
                        key={e.color}
                        className="template-cv-colors"
                        style={{ backgroundColor: e.value }}
                      />
                    ))}
                  </div>
                </div>

                <div className="nav-control__item">
                  <Link href={ROUTES.studentCv.createCv}>
                    <Button className="btn--control" type="primary">
                      Dùng mẫu này
                    </Button>
                  </Link>
                </div>

                <div className="nav-control__item">
                  <Button onClick={() => setOnModal(false)} className="btn--control">
                    Đóng lại
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </WrapperModalTemplate>
      </Modal>
    </WrapperTemplate>
  )
}

export default TemplateCV
