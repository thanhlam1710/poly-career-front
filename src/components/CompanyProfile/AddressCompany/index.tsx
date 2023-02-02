import React from "react"
import { Row } from "antd"
import TitleComponent from "components/Common/Title/TitleComponent"
import { CompanyPayload } from "interfaces/Company"
import { AddressCompanyContainer } from "./styled"

interface AddressCompanyProps {
  addressCompany: CompanyPayload
}

const AddressCompany: React.FC<AddressCompanyProps> = ({ addressCompany }) => {
  return (
    <AddressCompanyContainer>
      <TitleComponent title="Địa chỉ công ty" />
      <Row align="middle" className="address">
        <div className="address__icon">
          <span>
            {addressCompany?.address}, {addressCompany?.province?.name}
          </span>
        </div>
      </Row>
      <div className="sub_title">Bản đồ trụ sở chính</div>
      <iframe
        width="100%"
        height={270}
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d621.2919523985886!2d105.804677371872!3d21.05090555169603!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1665731490662!5m2!1svi!2s"
        frameBorder="0"
        allowFullScreen
        title="map"
      />
    </AddressCompanyContainer>
  )
}

export default AddressCompany
