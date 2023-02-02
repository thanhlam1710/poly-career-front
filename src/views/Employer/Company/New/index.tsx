import React from "react"
import { useRouter } from "next/router"
import { ROUTES } from "@constants"
import { useAppDispatch } from "app/appHook"
import { createCompanysAction } from "app/slices/companySlice"
import EmployerTitle from "components/Common/EmployerTitle"
import CompanyForm from "components/Common/Form/CompanyForm"
import { useProfile } from "hook/useProfile"
import { CompanyPayload } from "interfaces/Company"
import { Container } from "styles/app/styled/Container/styled"
import { Variable } from "styles/app/variable/Variable"
import { CompanyEmployerWrapper } from "../styled"

const CompanyNew: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { employerProfile } = useProfile()

  if (employerProfile?.company !== null) {
    router.push(ROUTES.employerCompany)
  }

  const onSubmitForm = (values: CompanyPayload) => {
    const data = {
      ...values,
      province_id: Number(values.province_id),
    }
    dispatch(createCompanysAction(data))
  }

  return (
    <CompanyEmployerWrapper>
      <EmployerTitle title="Tạo doanh nghiệp" />
      <Container padding="4rem">
        <Container backgroundColor={Variable.color.whiteColor} padding="3rem 4rem">
          <CompanyForm onSubmitForm={onSubmitForm} />
        </Container>
      </Container>
    </CompanyEmployerWrapper>
  )
}

export default CompanyNew
