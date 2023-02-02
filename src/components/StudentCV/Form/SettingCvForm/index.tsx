import React from "react"
import { Divider, Form, Input, Radio, Space } from "antd"
import { VALIDATION, CV_SETTING_COLOR } from "@constants"
import { ColorSelectWrapper } from "../styled"

const SettingCvForm: React.FC = () => {
  return (
    <>
      <Form.Item label="Tiêu đề CV" name="title" rules={[VALIDATION.required]}>
        <Input placeholder="Tên CV" />
      </Form.Item>
      <Form.Item label="Màu chủ đạo" name="main_color">
        <Radio.Group defaultValue={CV_SETTING_COLOR[0].value || ""}>
          <Space>
            {CV_SETTING_COLOR.map((c) => (
              <Radio.Button
                key={c.value}
                style={{
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "3.5rem",
                  height: "3.5rem",
                }}
                value={c.value}
              >
                <ColorSelectWrapper bgColor={c.color} />
              </Radio.Button>
            ))}
          </Space>
        </Radio.Group>
      </Form.Item>
      <Divider>Hoặc màu khác</Divider>
      <Form.Item name="main_color">
        <Input placeholder="Chọn màu khác" type="color" />
      </Form.Item>
    </>
  )
}

export default SettingCvForm
