import React from "react"
import { Tooltip } from "antd"
import Link from "next/link"
import { Company } from "interfaces/Home"
import { BoxCompanyWrapper, BoxCompanyItemImage } from "./styled"

interface BoxCompanyProps {
  data: Company
}

const BoxCompany: React.FC<BoxCompanyProps> = ({ data }) => {
  return (
    <BoxCompanyWrapper>
      <Link href="/" className="company__link">
        <BoxCompanyItemImage
          style={{
            backgroundImage: `url('${data.imagePath}')`,
          }}
        />
      </Link>
      <Link href="/" className="company__link">
        <Tooltip title={data.title}>
          <h3 className="company__link-title">{data.title}</h3>
        </Tooltip>
      </Link>
    </BoxCompanyWrapper>
  )
}

export default BoxCompany
