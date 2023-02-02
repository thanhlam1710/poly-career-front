import React from "react"
import { Form, Input } from "antd"
import { VALIDATION } from "@constants"

const GeneralCvForm: React.FC = () => {
  return (
    <>
      <Form.Item label="Họ và tên" name="full_name" rules={[VALIDATION.required]}>
        <Input placeholder="Họ tên" />
      </Form.Item>
      <Form.Item label="Vị trí ứng tuyển" name="position" rules={[VALIDATION.required]}>
        <Input placeholder="Vị trí ứng tuyển" />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[VALIDATION.required]}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Số điện thoại" name="phone" rules={[VALIDATION.required]}>
        <Input placeholder="Số điện thoại" />
      </Form.Item>
      <Form.Item label="Địa chỉ" name="address" rules={[VALIDATION.required]}>
        <Input placeholder="Địa chỉ" />
      </Form.Item>
      <Form.Item label="Mục tiêu nghề nghiệp" name="goals" rules={[VALIDATION.required]}>
        <Input.TextArea placeholder="Mục tiêu nghề nghiệp" rows={5} />
      </Form.Item>
    </>
  )
}

export default GeneralCvForm
