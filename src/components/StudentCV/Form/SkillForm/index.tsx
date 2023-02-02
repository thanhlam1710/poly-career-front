import React from "react"
import { DownOutlined, MinusCircleOutlined, PlusOutlined, UpOutlined } from "@ant-design/icons"
import { Button, Form, Input, Space } from "antd"
import { VALIDATION } from "@constants"

const SkillCvForm: React.FC = () => {
  return (
    <>
      <Form.List name="skill">
        {(fields, { add, remove, move }) => (
          <>
            {fields.map(({ key, name, ...restField }, index) => (
              <Space key={key} align="baseline" className="mb-2">
                <Form.Item {...restField} name={[name, "name"]} rules={[VALIDATION.required]}>
                  <Input placeholder="Kỹ năng" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "description"]}
                  rules={[{ required: true, message: "Missing first name" }]}
                >
                  <Input placeholder="Thông tin chi tiết" />
                </Form.Item>
                <Space>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                  <UpOutlined
                    onClick={() => {
                      if (index > 0) {
                        move(index, index - 1)
                      }
                    }}
                  />
                  <DownOutlined
                    onClick={() => {
                      if (index < fields.length - 1) {
                        move(index, index + 1)
                      }
                    }}
                  />
                </Space>
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Thêm kỹ năng
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  )
}

export default SkillCvForm
