import React from "react"
import { DownOutlined, MinusCircleOutlined, PlusOutlined, UpOutlined } from "@ant-design/icons"
import { Button, Card, Col, DatePicker, Form, Input, Row, Space } from "antd"
import { VALIDATION } from "@constants"

const ExperienceCvForm: React.FC = () => {
  return (
    <>
      <Form.List name="experience">
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
                          <Input placeholder="Tên công ty/Tên dự án/Tên đề tài" />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          {...restField}
                          name={[name, "position"]}
                          rules={[VALIDATION.required]}
                        >
                          <Input placeholder="Vị trí" />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          {...restField}
                          name={[name, "time"]}
                          rules={[VALIDATION.required]}
                        >
                          <DatePicker.RangePicker picker="month" />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          {...restField}
                          name={[name, "description"]}
                          rules={[VALIDATION.required]}
                        >
                          <Input.TextArea rows={4} placeholder="Mô tả" />
                        </Form.Item>
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
                Thêm kinh nghiệm
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  )
}

export default ExperienceCvForm
