import React, { useState } from "react"
import { Button, Divider, Form, Input, Modal, Row } from "antd"
import { MESSAGE, RESPONSE_CODES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { updateEmployerPWAction } from "app/slices/employerSlice"
import TitleEmployerProfile from "components/Common/Title/TitleEmployerProfile"
import { VALIDATION } from "constants/validate"
import { useProfile } from "hook/useProfile"
import { APIResponse } from "interfaces/APIResponse"
import { Employer, NewPasswordPayload } from "interfaces/Employer"
import { InforLoginProfileContainer, ModalContent } from "./styled"

interface EmployerInforloginProp {
  inforLogin: Employer
}

const InforLoginProfile: React.FC<EmployerInforloginProp> = ({ inforLogin }) => {
  const [form] = Form.useForm()
  const { isLoading } = useAppSelector((state) => state.employer)
  const { updateUser } = useProfile()
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const showModal = () => {
    setIsOpen(true)
  }

  const handleOk = () => {
    setIsOpen(false)
  }

  const onFinishModal = async (data: NewPasswordPayload) => {
    if (data.new_password === data.repeat_password) {
      const payload = {
        new_password: data.new_password,
        current_password: data.current_password,
      }
      const response = await dispatch(updateEmployerPWAction(payload))
      const rp = response.payload as APIResponse<unknown>
      if (rp.code === RESPONSE_CODES.success) {
        updateUser()
        setIsOpen(false)
        form.resetFields()
      }
    }
  }
  return (
    <InforLoginProfileContainer>
      <TitleEmployerProfile title="Thông tin đăng nhập" />
      <Form
        wrapperCol={{ span: 16 }}
        className="form__login"
        initialValues={{
          email: inforLogin?.email,
          password: "*********",
        }}
      >
        <Form.Item
          className="form__item--label"
          label="Địa chỉ email"
          name="email"
          rules={VALIDATION.onlyRequired}
        >
          <Input readOnly />
        </Form.Item>
        <Form.Item
          className="form__item--label"
          label="Mật khẩu"
          name="password"
          rules={VALIDATION.onlyRequired}
        >
          <Input type="password" disabled />
        </Form.Item>
        <Form.Item className="form__item--label">
          <Row>
            <div className="label__fake" />
            <p onClick={showModal}>Thay đổi mật khẩu</p>
          </Row>
        </Form.Item>
      </Form>
      <Modal open={isOpen} onCancel={handleOk} width={500} footer={null}>
        <ModalContent>
          <p className="modal__content--title">Thay đổi mật khẩu</p>
          <Form form={form} onFinish={onFinishModal}>
            <Form.Item
              className="form__item--label"
              label="Mật khẩu hiện tại"
              name="current_password"
              rules={VALIDATION.onlyRequired}
            >
              <Input.Password className="form__item--input" />
            </Form.Item>
            <Divider className="modal__divider" />
            <Form.Item
              className="form__item--label"
              label="Mật khẩu mới"
              name="new_password"
              rules={[VALIDATION.required, VALIDATION.password.min]}
            >
              <Input.Password
                placeholder="Mật khẩu ít nhất 6 ký tự"
                className="form__item--input"
              />
            </Form.Item>
            <Form.Item
              className="form__item--label"
              label="Nhập lại mật khẩu mới"
              name="repeat_password"
              rules={[
                VALIDATION.requiredWOLabel("lại mật khẩu"),
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("new_password") === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error(MESSAGE.password.notMatch))
                  },
                }),
              ]}
            >
              <Input.Password className="form__item--input" />
            </Form.Item>
            <div className="form__item--btn">
              <Button
                key="submit"
                type="primary"
                htmlType="submit"
                className="btn__modal"
                loading={isLoading}
                block
              >
                Xác nhận
              </Button>
            </div>
          </Form>
        </ModalContent>
      </Modal>
    </InforLoginProfileContainer>
  )
}

export default InforLoginProfile
