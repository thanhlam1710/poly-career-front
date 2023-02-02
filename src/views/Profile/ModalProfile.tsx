import React, { useEffect, useState } from "react"
import { Button, Form, Input, Modal } from "antd"
import { VALIDATION } from "@constants"
import { REGEX } from "constants/regex"
import { EmailPayload, Name, Student } from "interfaces/Student"
import { GridContainer } from "styles/app/styled/GridContainer/styled"

interface PopupProps {
  isModalOpen: boolean
  handleCancel: () => void
  onSubmitModal: (value: string) => void
  onSubmitNameModal: (value: Name) => void
  onSubmitEmailModal: (value: EmailPayload) => void
  fill: Student
  typeModal?: string
}

const ModalProfile: React.FC<PopupProps> = ({
  isModalOpen,
  handleCancel,
  typeModal,
  onSubmitModal,
  onSubmitNameModal,
  onSubmitEmailModal,
  fill,
}) => {
  const [modal, setModal] = useState<JSX.Element | undefined>()

  const checkModal = (type: string | undefined) => {
    if (type === "email") {
      return (
        <Modal title="Thay đổi email" open={isModalOpen} footer={null} onCancel={handleCancel}>
          <Form
            className="form__profile"
            onFinish={onSubmitEmailModal}
            layout="vertical"
            style={{ padding: "0 2rem" }}
            initialValues={fill}
          >
            <div className="modal">
              <GridContainer rowGap="2rem">
                <Form.Item className="form-group" label="Email hiện tại" name="email">
                  <Input readOnly type="email" />
                </Form.Item>
                <Form.Item
                  className="form-group"
                  label="Email mới"
                  name="new_email"
                  rules={VALIDATION.onlyRequired}
                >
                  <Input type="email" />
                </Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ margin: "1rem 0", height: "5rem", borderRadius: "0.5rem" }}
                >
                  Xác nhận
                </Button>
              </GridContainer>
            </div>
          </Form>
        </Modal>
      )
    }
    if (type === "name") {
      return (
        <Modal title="Thay đổi họ và tên" open={isModalOpen} footer={null} onCancel={handleCancel}>
          <Form
            className="form__profile"
            onFinish={onSubmitNameModal}
            layout="vertical"
            style={{ padding: "0 2rem" }}
            initialValues={fill}
          >
            <div className="modal">
              <GridContainer rowGap="2.5rem">
                <Form.Item className="form-group" label="Họ và tên hiện tại" name="full_name">
                  <Input readOnly pattern={REGEX.phone} />
                </Form.Item>
                <Form.Item
                  className="form-group"
                  label="Họ và tên mới"
                  name="new_name"
                  rules={[VALIDATION.required, VALIDATION.minLength(4)]}
                >
                  <Input />
                </Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ margin: "1rem 0", height: "5rem", borderRadius: "0.5rem" }}
                >
                  Xác nhận
                </Button>
              </GridContainer>
            </div>
          </Form>
        </Modal>
      )
    }
    if (type === "password") {
      return (
        <Modal title="Thay đổi mật khẩu" open={isModalOpen} footer={null} onCancel={handleCancel}>
          <Form
            className="form__profile"
            onFinish={onSubmitModal}
            layout="vertical"
            style={{ padding: "0 2rem" }}
          >
            <div className="modal">
              <GridContainer rowGap="2rem">
                <Form.Item
                  className="form-group"
                  label="Mật khẩu hiện tại"
                  name="password"
                  rules={VALIDATION.onlyRequired}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  className="form-group"
                  label="Mật khẩu mới"
                  name="new_password"
                  rules={[VALIDATION.required, VALIDATION.password.min]}
                >
                  <Input.Password placeholder="Mật khẩu ít nhất 6 ký tự" />
                </Form.Item>
                <Form.Item
                  className="form-group"
                  label="Nhập lại mật khẩu mới"
                  name="new_password2"
                  rules={VALIDATION.onlyRequired}
                >
                  <Input.Password />
                </Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ margin: "1rem 0", height: "5rem", borderRadius: "0.5rem" }}
                >
                  Xác nhận
                </Button>
              </GridContainer>
            </div>
          </Form>
        </Modal>
      )
    }
  }
  useEffect(() => {
    const result = checkModal(typeModal)
    setModal(result)
  }, [typeModal])

  return <>{modal || ""}</>
}

export default ModalProfile
