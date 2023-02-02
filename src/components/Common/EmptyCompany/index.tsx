import React from "react"
import { Button } from "antd"
import { useRouter } from "next/router"
import { ROUTES } from "@constants"
import { Container } from "styles/app/styled/Container/styled"
import { EmptyDataWrapper } from "./styled"

const EmptyCompany: React.FC = () => {
  const router = useRouter()

  const handleClick = () => router.push(ROUTES.companyEmployer.new)
  return (
    <EmptyDataWrapper>
      <h1>Bạn chưa có công ty</h1>
      <Container className="box_image" width="40rem" height="40rem" margin="0 auto">
        <img src="/images/No-data.png" alt="no-data" />
      </Container>
      <Container textAlign="center" margin="3rem 0 0 0">
        <Button
          type="primary"
          onClick={handleClick}
          style={{ height: "5rem", borderRadius: "0.5rem", width: "fit-content" }}
        >
          Tạo công ty ngay
        </Button>
      </Container>
    </EmptyDataWrapper>
  )
}

export default EmptyCompany
