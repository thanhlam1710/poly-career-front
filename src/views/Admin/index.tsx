import React from "react"
import { Card, Col, Row, Statistic } from "antd"
import { DashboardWrapper } from "./styled"

const DashboardContainer: React.FC = () => {
  return (
    <DashboardWrapper>
      <Row gutter={10}>
        <Col span={6}>
          <Card>
            <Statistic title="Tổng số lượng sinh viên" value={112893} suffix="thành viên" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Tổng số lượng Tin tuyển dụng" value={112893} suffix="thành viên" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Tổng số lượng doanh nghiệp" value={112893} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Tổng doanh thu" value={1121202893} suffix="VND" />
          </Card>
        </Col>
      </Row>
    </DashboardWrapper>
  )
}

export default DashboardContainer
