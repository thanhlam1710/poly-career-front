import React from "react"
import { Button, Form, Input } from "antd"
import { useRouter } from "next/router"
import { RESPONSE_CODES, ROUTES } from "@constants"
import { useAppDispatch } from "app/appHook"
import { updateEmployerAction } from "app/slices/employerSlice"
import TitleEmployerProfile from "components/Common/Title/TitleEmployerProfile"
import { VALIDATION } from "constants/validate"
import { useProfile } from "hook/useProfile"
import { APIResponse } from "interfaces/APIResponse"
import { Employer, EmployerPayload } from "interfaces/Employer"
import { btnPrimary } from "styles/app/variable/Button"
import { InforContactProfileContainer } from "./styled"

interface EmployerInforContactProp {
  inforContact?: Employer
}

const InforContactProfile: React.FC<EmployerInforContactProp> = ({ inforContact }) => {
  const { updateUser } = useProfile()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const layout = {
    wrapperCol: { span: 8 },
  }

  const onSubmitForm = async (values: EmployerPayload) => {
    const data = {
      ...values,
    }
    const response = await dispatch(updateEmployerAction(data))
    const payload = response.payload as APIResponse<unknown>
    if (payload.code === RESPONSE_CODES.success) {
      await updateUser()
      router.push(ROUTES.employerProfile)
    }
  }

  return (
    <InforContactProfileContainer>
      <TitleEmployerProfile title="Thông tin liên hệ" />
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onSubmitForm}
        className="form__contact-row"
        initialValues={inforContact ? { ...inforContact } : { none: "" }}
      >
        <Form.Item name="full_name" label="Họ và tên" rules={VALIDATION.onlyRequired}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Số điện thoại" rules={VALIDATION.onlyRequired}>
          <Input />
        </Form.Item>
        <Form.Item name="email_noti" label="Email liên hệ">
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Địa chỉ liên hệ">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={btnPrimary}>
          Cập nhật
        </Button>
      </Form>
    </InforContactProfileContainer>
  )
}

export default InforContactProfile
