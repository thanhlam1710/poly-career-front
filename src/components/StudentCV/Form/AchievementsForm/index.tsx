import React from "react"
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input } from "antd"
import { VALIDATION } from "@constants"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"

const AchievementCvForm: React.FC = () => {
  return (
    <>
      <Form.List name="achievements">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <FlexContainer key={key} gap="2rem" alignItems="baseline" className="mb-2">
                <Form.Item
                  {...restField}
                  name={[name, "name"]}
                  style={{ width: "90%" }}
                  rules={[VALIDATION.required]}
                >
                  <Input placeholder="Thành tựu" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </FlexContainer>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Thêm thành tích
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  )
}

export default AchievementCvForm
