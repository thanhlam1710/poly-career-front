import React from "react"
import { useRouter } from "next/router"
import { RESPONSE_CODES, ROUTES } from "@constants"
import { useAppDispatch } from "app/appHook"
import { updateCompanyAction } from "app/slices/companySlice"
import EmployerTitle from "components/Common/EmployerTitle"
import CompanyForm from "components/Common/Form/CompanyForm"
import { useProfile } from "hook/useProfile"
import { APIResponse } from "interfaces/APIResponse"
import { CompanyPayload } from "interfaces/Company"
import { Container } from "styles/app/styled/Container/styled"
import { Variable } from "styles/app/variable/Variable"
import { CompanyEmployerWrapper } from "../styled"

const CompanyEdit: React.FC = () => {
  // Call api here and pass initialValue to CompanyForm props
  const { employerProfile, updateUser } = useProfile()
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onSubmitForm = async (values: CompanyPayload) => {
    const data = {
      ...values,
      province_id: Number(values.province_id),
    }
    const response = await dispatch(updateCompanyAction(data))
    const payload = response.payload as APIResponse<unknown>
    if (payload.code === RESPONSE_CODES.success) {
      await updateUser()
      router.push(ROUTES.employerCompany)
    }
  }

  return (
    <CompanyEmployerWrapper>
      <EmployerTitle title="Chỉnh sửa doanh nghiệp" />
      <Container padding="4rem">
        <Container backgroundColor={Variable.color.whiteColor} padding="3rem 4rem">
          <CompanyForm onSubmitForm={onSubmitForm} initialValue={employerProfile?.company} isEdit />
        </Container>
      </Container>
    </CompanyEmployerWrapper>
  )
}

export default CompanyEdit
