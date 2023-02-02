import React from "react"
import EmployerTitle from "components/Common/EmployerTitle"
import { Container } from "styles/app/styled/Container/styled"
import { Variable } from "styles/app/variable/Variable"
import { RecruimentWrapper } from "../styled"

const DetailRecruitment: React.FC = () => {
  return (
    <RecruimentWrapper>
      <EmployerTitle title="Chi tiết tin tuyển dụng" />
      <Container padding="4rem">
        <Container backgroundColor={Variable.color.whiteColor} />
      </Container>
    </RecruimentWrapper>
  )
}

export default DetailRecruitment
