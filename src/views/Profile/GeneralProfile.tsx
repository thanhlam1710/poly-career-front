import React from "react"
import { Button, Form, Input, InputNumber, Select } from "antd"
import { EXPERIENCE, JOB_TYPE, LEVEL, RESPONSE_CODES, VALIDATION } from "@constants"
import { useAppDispatch } from "app/appHook"
import { updateStudentProfileGeneralAction } from "app/slices/studentSlice"
import { useProfile } from "hook/useProfile"
import { APIResponse } from "interfaces/APIResponse"
import { Category } from "interfaces/Category"
import { Province } from "interfaces/Province"
import { Profile } from "interfaces/Student"
import { GridContainer } from "styles/app/styled/GridContainer/styled"
import { convertSelectInput, formatSalary } from "utils/helper"

const { Option } = Select

interface GeneralProfileProps {
  listCategories: Category[]
  listProvince: Province[]
}

const GeneralProfile: React.FC<GeneralProfileProps> = ({ listCategories, listProvince }) => {
  const dispatch = useAppDispatch()
  const { updateUser, studentProfile } = useProfile()

  const onSubmitFormGeneral = async (payload: Profile) => {
    const data = {
      ...payload,
      province_id: Number(payload.province_id),
      salary_wish: Number(payload.salary_wish),
    }
    const response = await dispatch(updateStudentProfileGeneralAction(data))
    const rp = response.payload as APIResponse<unknown>
    if (rp.code === RESPONSE_CODES.success) {
      updateUser()
    }
  }
  return (
    <Form
      onFinish={onSubmitFormGeneral}
      initialValues={{
        ...studentProfile?.profile,
        province_id: studentProfile?.profile?.province?.name,
      }}
    >
      <GridContainer padding="2rem 0">
        <div className="row row__third">
          <div className="header">
            <p>Thông tin chung</p>
          </div>
          <div className="body">
            <GridContainer rowGap="2rem" className="grid__layout">
              <Form.Item
                className="form-group"
                label="Vị trí mong muốn"
                name="position_wish"
                rules={[VALIDATION.whiteSpace]}
              >
                <Input placeholder="E.g. Nhân viên kinh doanh" />
              </Form.Item>
            </GridContainer>
            <GridContainer rowGap="2rem" className="grid__layout">
              <Form.Item className="form-group" label="Cấp bậc hiện tại" name="level_current">
                <Select placeholder="Chọn">
                  {LEVEL.map((item) => (
                    <Option key={item.id} value={item.id}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </GridContainer>
            <GridContainer rowGap="2rem" className="grid__layout">
              <Form.Item className="form-group" label="Cấp bậc mong muốn" name="level_wish">
                <Select placeholder="Chọn">
                  {LEVEL.map((item) => (
                    <Option key={item.id} value={item.id}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </GridContainer>
            <GridContainer rowGap="2rem" className="grid__layout">
              <Form.Item
                className="form-group"
                label="Mức lương mong muốn"
                name="salary_wish"
                rules={[VALIDATION.number.min]}
              >
                <InputNumber
                  placeholder="0.0"
                  addonAfter="VND"
                  formatter={(value) => formatSalary(value)}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </GridContainer>
            <GridContainer rowGap="2rem" className="grid__layout">
              <Form.Item className="form-group" label="Ngành nghề" name="category_wish">
                <Select placeholder="Chọn">
                  {listCategories?.map((item: Category) => (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </GridContainer>
            <GridContainer rowGap="2rem" className="grid__layout">
              <Form.Item className="form-group" label="Số năm kinh nghiệm" name="experience">
                <Select placeholder="Chọn">
                  {EXPERIENCE.map((item) => (
                    <Option key={item.id} value={item.id}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </GridContainer>
            <GridContainer rowGap="2rem" className="grid__layout">
              <Form.Item className="form-group" label="Hình thức làm việc" name="job_type_wish">
                <Select placeholder="Chọn">
                  {JOB_TYPE?.map((item) => (
                    <Option key={item.id} value={item.id}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </GridContainer>
            <GridContainer rowGap="2rem" className="grid__layout">
              <Form.Item className="form-group" label="Địa điểm làm việc" name="province_id">
                <Select
                  showSearch
                  placeholder="Chọn tỉnh thành"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                  }
                  options={convertSelectInput(listProvince)}
                />
              </Form.Item>
            </GridContainer>
          </div>
          <div className="footer">
            <Button htmlType="submit" style={{ height: "5rem", borderRadius: "0.5rem" }}>
              Lưu Thông Tin
            </Button>
          </div>
        </div>
      </GridContainer>
    </Form>
  )
}

export default GeneralProfile
