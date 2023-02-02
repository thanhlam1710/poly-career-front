import React from "react"
import { Button, Col, Form, Input, Row, Select } from "antd"
import { EXPERIENCE, JOB_TYPE, SALARY, STATUS_JOB } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getCategoryAction } from "app/slices/categorySlice"
import { useAppEffect } from "hook/useAppEffect"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"
import { compareStringNotVi } from "utils/helper"

const SearchJobsForm: React.FC = () => {
  const { listCategories } = useAppSelector((state) => state.categories)
  const { listProvince } = useAppSelector((state) => state.province)
  const dispatch = useAppDispatch()
  const [formSearch] = Form.useForm()

  useAppEffect(() => {
    if (!listCategories) dispatch(getCategoryAction())
  })

  return (
    <div>
      <Form
        form={formSearch}
        title="Tìm kiếm tin tuyển dụng"
        layout="horizontal"
        onFinish={(value) => {
          console.log(value)
        }}
      >
        <Row gutter={[20, 20]} justify="center">
          <Col span={12}>
            <Form.Item name="search">
              <Input placeholder="Tìm kiếm" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="category">
              <Select
                options={listCategories?.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                placeholder="Ngành nghề chính"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="province">
              <Select
                placeholder="Khu vực"
                options={listProvince.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                filterOption={(input, option) => compareStringNotVi(option?.label || "", input)}
                showSearch
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="salary">
              <Select
                placeholder="mức lương"
                options={SALARY.map((item) => ({
                  value: item.id,
                  label: item.label,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="level">
              <Select
                placeholder="Trạng thái tin"
                options={STATUS_JOB.map((item) => ({
                  value: item.id,
                  label: item.label,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="level">
              <Select
                placeholder="Kinh nghiệm"
                options={EXPERIENCE.map((item) => ({
                  value: item.id,
                  label: item.label,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="job_type">
              <Select
                placeholder="Loại công việc"
                options={JOB_TYPE.map((item) => ({
                  value: item.id,
                  label: item.label,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <FlexContainer justifyContent="center" gap="2rem">
              <Button htmlType="submit" type="primary">
                Tìm kiếm
              </Button>
              <Button htmlType="submit" type="ghost">
                Đặt lại
              </Button>
            </FlexContainer>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default SearchJobsForm
