import React from "react"
import { Button, Divider, Form, Input, Row } from "antd"
import { useRouter } from "next/router"
import { ROUTES } from "@constants"
import { useAppDispatch } from "app/appHook"
import { updateImgCompanyAction } from "app/slices/companySlice"
import { getProvinceAction } from "app/slices/provinceSlice"
import EmployerTitle from "components/Common/EmployerTitle"
import EmptyCompany from "components/Common/EmptyCompany"
import TitleEmployerForm from "components/Common/Title/TitleEmployerForm"
import TitleEmployerProfile from "components/Common/Title/TitleEmployerProfile"
import UploadImg from "components/Common/Upload/UploadImg"
import { DATA_PERSONNEL_SIZE } from "constants/company"
import { VALIDATION } from "constants/validate"
import { useAppEffect } from "hook/useAppEffect"
import { useProfile } from "hook/useProfile"
import { CompanyPayload, PersonnelSize } from "interfaces/Company"
import { Container } from "styles/app/styled/Container/styled"
import { btnPrimary } from "styles/app/variable/Button"
import { Variable } from "styles/app/variable/Variable"
import {
  AvatarProfileContainer,
  CompanyEmployerWrapper,
  CoverImageProfileContainer,
} from "./styled"

interface HasDataProps {
  data: CompanyPayload
}

const HasData: React.FC<HasDataProps> = ({ data }) => {
  const { avatar, banner } = data
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleUploadAvatar = (url: string) => {
    dispatch(updateImgCompanyAction({ avatar: url }))
  }

  const handleUploadBanner = (url: string) => {
    dispatch(updateImgCompanyAction({ banner: url }))
  }
  useAppEffect(() => {
    dispatch(getProvinceAction())
  })

  const newSize = DATA_PERSONNEL_SIZE.filter((item: PersonnelSize) => item.id === data.size)
  return (
    <>
      <CoverImageProfileContainer>
        <TitleEmployerProfile title="Ảnh bìa" />
        <p>
          Dạng file .jpg, .jpeg, .png, dung lượng nhỏ hơn hoặc bằng 2MB và kích thước tối thiểu
          1100x236 pixel.
        </p>
        <UploadImg url={banner} handleUpload={handleUploadBanner} isBanner />
      </CoverImageProfileContainer>
      <AvatarProfileContainer>
        <TitleEmployerProfile title="Ảnh đại diện" />
        <Row className="avatar__profile--row" align="middle">
          <div className="avatar__handle">
            <UploadImg url={avatar} handleUpload={handleUploadAvatar} isCrop />
            <p>
              Dạng file .jpg, .jpeg, .png, dung lượng nhỏ hơn hoặc bằng 300KB và kích thước tối
              thiểu 300x300 pixel.
            </p>
          </div>
        </Row>
      </AvatarProfileContainer>
      <Form
        wrapperCol={{ span: 10 }}
        name="nest-messages"
        className="form__contact-row"
        initialValues={{
          ...data,
          province_id: data.province?.name,
          company_activity_id: data.company_activity?.name,
          size: newSize[0].label,
        }}
      >
        <Form.Item name="tax_code" label="Mã số thuế" rules={VALIDATION.onlyRequired}>
          <Input readOnly />
        </Form.Item>
        <Form.Item name="name" label="Tên công ty" rules={VALIDATION.onlyRequired}>
          <Input readOnly />
        </Form.Item>
        <Form.Item name="size" label="Quy mô nhân sự">
          <Input readOnly />
        </Form.Item>
        <Form.Item name="province_id" label="Địa điểm" rules={VALIDATION.onlyRequired}>
          <Input readOnly />
        </Form.Item>
        <Form.Item name="address" label="Địa chỉ" rules={VALIDATION.onlyRequired}>
          <Input readOnly />
        </Form.Item>
        <Form.Item name="phone" label="Điện thoại cố định">
          <Input readOnly />
        </Form.Item>
        <Form.Item name="website" label="Trang web công ty">
          <Input readOnly />
        </Form.Item>
        <Form.Item name="company_activity_id" label="Lĩnh vực hoạt động">
          <Input readOnly />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={() => router.push(ROUTES.companyEmployer.edit)}
            style={btnPrimary}
          >
            Chỉnh sửa
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

const EmployerCompany: React.FC = () => {
  const { employerProfile, updateUser } = useProfile()

  useAppEffect(() => {
    updateUser()
  })

  return (
    <CompanyEmployerWrapper>
      <EmployerTitle title="Công ty tuyển dụng" />
      <Container padding="4rem">
        <TitleEmployerForm title="Thông tin công ty" />
        <Divider />
        <Container backgroundColor={Variable.color.whiteColor} padding="3rem 4rem">
          {employerProfile?.company !== null && employerProfile?.company ? (
            <HasData data={employerProfile?.company} />
          ) : (
            <EmptyCompany />
          )}
        </Container>
      </Container>
    </CompanyEmployerWrapper>
  )
}

export default EmployerCompany
