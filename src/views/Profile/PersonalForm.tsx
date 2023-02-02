import React from "react"
import { Button, DatePicker, Form, Input, Select } from "antd"
import moment from "moment"
import { RESPONSE_CODES, VALIDATION } from "@constants"
import { useAppDispatch } from "app/appHook"
import { updateStudentProfileAction } from "app/slices/studentSlice"
import AvatarProfile from "components/Common/AvatarProfile"
import { useProfile } from "hook/useProfile"
import { APIResponse } from "interfaces/APIResponse"
import { Province } from "interfaces/Province"
import { Student } from "interfaces/Student"
import { GridContainer } from "styles/app/styled/GridContainer/styled"
import { convertSelectInput } from "utils/helper"

interface PersonalFormProps {
  listProvince: Province[]
}

const PersonalForm: React.FC<PersonalFormProps> = ({ listProvince }) => {
  const dispatch = useAppDispatch()
  const { updateUser, studentProfile } = useProfile()

  const onSubmitForm = async (payload: Student) => {
    const { birthday } = payload
    const date = new Date(birthday || "").toISOString()
    const location = Number(payload.location_id)
    const data = { ...payload, birthday: date, location_id: location }

    const response = await dispatch(updateStudentProfileAction(data))
    const rp = response.payload as APIResponse<unknown>
    if (rp.code === RESPONSE_CODES.success) {
      updateUser()
    }
  }
  return (
    <Form
      onFinish={onSubmitForm}
      initialValues={{
        ...studentProfile,
        birthday: studentProfile?.birthday
          ? moment(new Date(studentProfile?.birthday), "DD/MM/YYYY")
          : "",
        location_id: studentProfile?.location_id?.toString(),
      }}
    >
      <GridContainer padding="2rem 0">
        <div className="row row__second">
          <div className="header">
            <p>Thông tin cá nhân</p>
          </div>
          <div className="body">
            <div className="body__header">
              <GridContainer rowGap="2rem" className="grid__layout">
                <AvatarProfile url={studentProfile?.avatar} useRole="student" />
              </GridContainer>
            </div>
            <div className="body__body">
              <GridContainer rowGap="2rem" className="grid__layout">
                <Form.Item
                  className="form-group"
                  label="Số điện thoại"
                  name="phone"
                  rules={[VALIDATION.phone]}
                >
                  <Input placeholder="Số điện thoại của bạn" />
                </Form.Item>
              </GridContainer>
              <GridContainer rowGap="2rem" className="grid__layout">
                <Form.Item className="form-group" label="Ngày sinh" name="birthday">
                  <DatePicker
                    format="DD/MM/YYYY"
                    className="datePicker"
                    placeholder="Chọn ngày sinh"
                  />
                </Form.Item>
              </GridContainer>
              <GridContainer rowGap="2rem" className="grid__layout">
                <Form.Item className="form-group" label="Tỉnh / Thành phố" name="location_id">
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
              <GridContainer rowGap="2rem" className="grid__layout">
                <Form.Item
                  className="form-group"
                  label="Địa chỉ"
                  name="address"
                  rules={[VALIDATION.whiteSpace]}
                >
                  <Input placeholder="Ví dụ: Số nhà 98A, phố Ngụy Như Kon Tum, phường ..." />
                </Form.Item>
              </GridContainer>
            </div>
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

export default PersonalForm
