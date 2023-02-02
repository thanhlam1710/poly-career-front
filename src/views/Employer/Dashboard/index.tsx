import React from "react"
import { ColumnConfig } from "@ant-design/charts"
import { DollarCircleFilled, SnippetsFilled, TeamOutlined } from "@ant-design/icons"
import { Card, Col, Row, Button } from "antd"
import dynamic from "next/dynamic"
import EmployerTitle from "components/Common/EmployerTitle"
import { Container } from "styles/app/styled/Container/styled"
import { Variable } from "styles/app/variable/Variable"
import { EmployerWrapper } from "../styled"
import { CICricleBoxWrapper } from "./styled"

const Column = dynamic(
  () =>
    import("@ant-design/plots").then(
      (chart) => chart.Column,
      () => null as never
    ),
  {
    ssr: false,
  }
)

const EmployerDashboard: React.FC = () => {
  const data = [
    {
      type: "Nhân Viên Kỹ Sư Hệ Thống",
      sales: 38,
    },
    {
      type: "Lập Trình Viên PHP",
      sales: 52,
    },
    {
      type: "Thực Tập Sinh Marketing",
      sales: 61,
    },
    {
      type: "Nhân Viên Xử Lý Dữ Liệu Ảnh",
      sales: 145,
    },
    {
      type: "Nhân Viên Kế Toán Kho",
      sales: 48,
    },
    {
      type: "Java Developer (All Levels)",
      sales: 32,
    },
    {
      type: "Frontend Developer",
      sales: 70,
    },
    {
      type: "[BB1] Java Developesr (Spring) - 1Y471",
      sales: 38,
    },
    {
      type: "Full-Stack Developer ( JavaScript , Reactjs, Aws)",
      sales: 33,
    },
    {
      type: "Chuyên Viên Công Nghệ Thông Tin - IT",
      sales: 31,
    },
  ]
  const config: ColumnConfig = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Tên bài viết",
      },
      sales: {
        alias: "Số lượng cv ap ply",
      },
    },
  }
  return (
    <EmployerWrapper>
      <EmployerTitle title="Bộ điều khiển" />
      <Container padding="4rem">
        <Row className="mb-2" gutter={16}>
          <Col span={8}>
            <CICricleBoxWrapper>
              <Card>
                <Row align="middle">
                  <Col span={18}>
                    <span className="turnover">Doanh thu tháng này</span>
                    <h3 className="ant-typography">
                      $53,000 <small className="bnb2">+50%</small>
                    </h3>
                  </Col>
                  <Col span={6}>
                    <div className="icon-box">
                      <DollarCircleFilled />
                    </div>
                  </Col>
                </Row>
              </Card>
            </CICricleBoxWrapper>
          </Col>
          <Col span={8}>
            <CICricleBoxWrapper>
              <Card>
                <Row align="middle">
                  <Col span={18}>
                    <span className="turnover">Số lượng bài viết</span>
                    <h3 className="ant-typography">
                      120 <small className="bnb2">+40%</small>
                    </h3>
                  </Col>
                  <Col span={6}>
                    <div className="icon-box">
                      <SnippetsFilled />
                    </div>
                  </Col>
                </Row>
              </Card>
            </CICricleBoxWrapper>
          </Col>
          <Col span={8}>
            <CICricleBoxWrapper>
              <Card>
                <Row align="middle">
                  <Col span={18}>
                    <span className="turnover">Số lượng thành viên mới</span>
                    <h3 className="ant-typography">
                      20 <small className="bnb2">+10%</small>
                    </h3>
                  </Col>
                  <Col span={6}>
                    <div className="icon-box">
                      <TeamOutlined />
                    </div>
                  </Col>
                </Row>
              </Card>
            </CICricleBoxWrapper>
          </Col>
        </Row>
        <Container backgroundColor={Variable.color.whiteColor} padding="3rem 4rem">
          <Row align="middle" className="header">
            <Col span={17} className="title">
              <h2 className="mb-1">Top 10 bài viết được apply nhiều nhất</h2>
              <div className="date">January - July 2022</div>
            </Col>

            <Col span={7}>
              <Button>Day</Button>
              <Button type="primary">Month</Button>
              <Button>Year</Button>
            </Col>
          </Row>
          <Column className="mt-5" {...config} />
        </Container>
      </Container>
    </EmployerWrapper>
  )
}

export default EmployerDashboard
