import React from "react"
import { Col, Divider, Row } from "antd"
import AvatarProfile from "components/Common/AvatarProfile"
import EmployerTitle from "components/Common/EmployerTitle"
import TitleEmployerForm from "components/Common/Title/TitleEmployerForm"
import InforContactProfile from "components/EmployerProfile/InforContactProfile"
import InforLoginProfile from "components/EmployerProfile/InforLoginProfile"
import { useProfile } from "hook/useProfile"
import { Container } from "styles/app/styled/Container/styled"
import { Variable } from "styles/app/variable/Variable"
import { EmployerProfileWrapper } from "./styled"

const EmployerProfileDetail: React.FC = () => {
  const { employerProfile } = useProfile()
  return (
    <EmployerProfileWrapper>
      <EmployerTitle title="Tài khoản nhà tuyển dụng" />
      <Container padding="4rem">
        <TitleEmployerForm title="Thông tin tài khoản" />
        <Divider />
        {employerProfile && (
          <Container backgroundColor={Variable.color.whiteColor} padding="3rem 4rem 0rem 4rem">
            <Row className="employer__profile--avt">
              <Col xs={24} sm={24} md={24} lg={12}>
                <AvatarProfile url={employerProfile?.avatar} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12}>
                <InforLoginProfile inforLogin={employerProfile} />
              </Col>
            </Row>
            <Divider />
            <Row className="employer__profile--row">
              <Col xs={24} sm={24} md={24} lg={24}>
                <InforContactProfile inforContact={employerProfile} />
              </Col>
            </Row>
          </Container>
        )}
      </Container>
    </EmployerProfileWrapper>
  )
}

export default EmployerProfileDetail
