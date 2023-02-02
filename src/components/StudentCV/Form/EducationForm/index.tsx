import React from "react"
import { DownOutlined, MinusCircleOutlined, PlusOutlined, UpOutlined } from "@ant-design/icons"
import { Button, Card, Col, Form, Input, Row, Space } from "antd"
import { VALIDATION } from "@constants"

const EducationCvFrom: React.FC = () => {
  return (
    <>
      <Form.List name="education">
        {(fields, { add, remove, move }) => (
          <>
            {fields.map(({ key, name, ...restField }, index) => (
              <Space key={key}>
                <Card key={key} className="mb-1">
                  <div>
                    <Row gutter={[10, 10]}>
                      <Col span={24}>
                        <Form.Item
                          {...restField}
                          name={[name, "name"]}
                          rules={[VALIDATION.required]}
                        >
                          <Input placeholder="Tên trường" />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          {...restField}
                          name={[name, "major"]}
                          rules={[VALIDATION.required]}
                        >
                          <Input placeholder="Chuyên ngành" />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Space>
                          <Form.Item
                            {...restField}
                            name={[name, "type"]}
                            rules={[VALIDATION.required]}
                          >
                            <Input placeholder="Loại bằng cấp" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "grade"]}
                            rules={[VALIDATION.required]}
                          >
                            <Input placeholder="Xếp Loại" />
                          </Form.Item>
                        </Space>
                      </Col>
                    </Row>
                  </div>
                </Card>
                <Space direction="vertical">
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
                Thêm quá trình học tập
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  )
}

export default EducationCvFrom
