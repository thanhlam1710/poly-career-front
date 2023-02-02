import React from "react"
import { GlobalOutlined, TeamOutlined } from "@ant-design/icons"
import { Col, Image, Row } from "antd"
import { DATA_PERSONNEL_SIZE } from "@constants"
import MapIcons from "components/Common/Icons/MapIcons"
import { CompanyPayload } from "interfaces/Company"
import { AvatarCompanyContainer } from "./styled"

interface AvatarCompanyProps {
  data: CompanyPayload
}

const AvatarCompany: React.FC<AvatarCompanyProps> = ({ data }) => {
  return (
    <AvatarCompanyContainer>
      <div
        className={
          data?.banner
            ? "company__profile--coverImg img-cover"
            : "company__profile--coverImg img-contain"
        }
      >
        <Image src={data?.banner} fallback="/logo/PC_Logo_White.png" preview alt="image-logo" />
      </div>
      <Row justify="space-between" className="company__profile--row">
        <Col className="company__profile--col">
          <Col className="company__profile--avatar">
            <Image src={data?.avatar} fallback="/logo/PC_Logo.png" preview alt="image-logo" />
          </Col>
          <Col className="company__profile--infor">
            <span className="infor-name">{data?.name}</span>
            <div className="infor-address">
              <span className="address-map">
                <MapIcons />
                {data?.province?.name}
              </span>
              <span className="address-url">
                <GlobalOutlined />
                <a
                  href={
                    `${data?.website.includes("https://") ? "" : "https://"}${data?.website}` || ""
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {data?.website || "Không có website"}
                </a>
              </span>
              <span className="address-size">
                <TeamOutlined />
                {DATA_PERSONNEL_SIZE.find((item) => item.id === data.size)?.label}
              </span>
            </div>
          </Col>
        </Col>
        {/* <Container margin="1rem 0 0" textAlign="center">
          <Button type="primary">Theo dõi</Button>
        </Container> */}
      </Row>
    </AvatarCompanyContainer>
  )
}

export default AvatarCompany
