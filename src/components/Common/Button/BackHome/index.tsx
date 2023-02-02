import React from "react"
import { HomeOutlined } from "@ant-design/icons"
import { useRouter } from "next/router"
import { ROUTES } from "@constants"
import { HomeBtnWrapper } from "./styled"

const BtnBackHome: React.FC = () => {
  const router = useRouter()
  const handleBackHome = () => {
    router.push(ROUTES.home)
  }
  return (
    <HomeBtnWrapper onClick={handleBackHome}>
      <button type="button" className="btn_home">
        <HomeOutlined />
      </button>
    </HomeBtnWrapper>
  )
}

export default BtnBackHome
