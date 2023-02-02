import React from "react"
import TitleComponent from "components/Common/Title/TitleComponent"
import { CompanyPayload } from "interfaces/Company"
import { IntroducCompanyContainer } from "./styled"

interface IntroducCompanyProps {
  introductCompany: CompanyPayload
}

const IntroducCompany: React.FC<IntroducCompanyProps> = ({ introductCompany }) => {
  return (
    <IntroducCompanyContainer>
      <TitleComponent title="Giới thiệu công ty" />
      <div className="introduct__decription">
        <p>{introductCompany.information}</p>
      </div>
    </IntroducCompanyContainer>
  )
}

export default IntroducCompany
