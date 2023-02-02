import React, { useState } from "react"
import { Button, Divider, Form, Input, Select } from "antd"
import { useRouter } from "next/router"
import { ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { companyActivitiesService } from "app/services/companyActivitiesService"
import { getCategoryAction } from "app/slices/categorySlice"
import { getProvinceAction } from "app/slices/provinceSlice"
import { DATA_PERSONNEL_SIZE } from "constants/company"
import { VALIDATION } from "constants/validate"
import { useAppEffect } from "hook/useAppEffect"
import { CompanyActivities, CompanyFormProps, PersonnelSize } from "interfaces/Company"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"
import { GridContainer } from "styles/app/styled/GridContainer/styled"
import { btnPrimary, btnSecondary } from "styles/app/variable/Button"
import { convertSelectInput } from "utils/helper"
import { CompanyFormWrapper } from "../RecruitmentForm/styled"

const { Option } = Select
const { TextArea } = Input

const CompanyForm: React.FC<CompanyFormProps> = ({ onSubmitForm, initialValue, isEdit }) => {
  const [listCategory, setListCategory] = useState<CompanyActivities[]>()
  const [form] = Form.useForm()
  const { province } = useAppSelector((state) => state)
  const { isLoading } = useAppSelector((state) => state.company)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onReset = () => {
    form.resetFields()
  }

  const getListCategory = async () => {
    const { data } = await companyActivitiesService.getCompanyActivities()
    setListCategory(data)
  }

  useAppEffect(() => {
    dispatch(getCategoryAction())
    dispatch(getProvinceAction())
    getListCategory()
  })

  return (
    <CompanyFormWrapper>
      <Form
        name="basic"
        layout="vertical"
        className="form__employer"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        onFinish={onSubmitForm}
        initialValues={
          initialValue
            ? { ...initialValue, province_id: initialValue.province?.name }
            : { none: "" }
        }
      >
        <GridContainer rowGap="2rem">
          <Form.Item
            label="Tên công ty"
            name="name"
            className="underline"
            rules={[VALIDATION.required, VALIDATION.whiteSpace]}
          >
            <Input placeholder="Tên công ty theo giấy phép đăng ký kinh doanh" />
          </Form.Item>
          <GridContainer gridTemplateColumns="1fr 1fr 1fr" columnGap="2rem">
            <Form.Item
              label="Mã số thuế"
              name="tax_code"
              className="underline"
              rules={[VALIDATION.required, VALIDATION.whiteSpace]}
            >
              <Input placeholder="Vui lòng nhập" />
            </Form.Item>
            <Form.Item
              label="Quy mô nhân sự"
              labelCol={{ span: 12 }}
              name="size"
              className="underline"
            >
              <Select placeholder="Chọn">
                {DATA_PERSONNEL_SIZE.map((item: PersonnelSize) => (
                  <Option key={item.id} value={item.id}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Địa điểm"
              name="province_id"
              className="underline"
              rules={[VALIDATION.required]}
            >
              <Select
                showSearch
                placeholder="Chọn"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                }
                options={convertSelectInput(province.listProvince)}
              />
            </Form.Item>
          </GridContainer>
          <Form.Item
            label="Địa chỉ"
            name="address"
            className="underline"
            rules={[VALIDATION.required, VALIDATION.minLength(10)]}
          >
            <Input placeholder="Địa chỉ làm việc" />
          </Form.Item>
          <GridContainer
            className="select-width"
            gridTemplateColumns="1fr 1fr 1fr"
            columnGap="2rem"
          >
            <Form.Item
              label="Điện thoại cố định"
              labelCol={{ span: 12 }}
              name="phone"
              className="underline"
              rules={[VALIDATION.phone]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Trang web công ty"
              labelCol={{ span: 12 }}
              name="website"
              className="underline"
              rules={[VALIDATION.whiteSpace]}
            >
              <Input addonBefore="https://" />
            </Form.Item>
            <Form.Item
              label="Lĩnh vực hoạt động"
              labelCol={{ span: 12 }}
              name="company_activity_id"
              className="underline"
              rules={VALIDATION.onlyRequired}
            >
              <Select placeholder="Chọn">
                {listCategory?.map((item: CompanyActivities) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </GridContainer>
          <Divider style={{ margin: "1rem 0" }} />
          <Form.Item
            label="Giới thiệu công ty"
            labelCol={{ span: 12 }}
            name="information"
            className="underline"
            rules={[VALIDATION.required, VALIDATION.minLength(100)]}
          >
            <div className="company_description">
              <p className="sub-title">
                Thông tin giới thiệu công ty giúp ứng viên biết rõ hơn về công ty của bạn
              </p>
              <TextArea defaultValue={initialValue?.information} showCount maxLength={1500} />
            </div>
          </Form.Item>
          <FlexContainer margin="3rem 0 0" justifyContent="flex-end" gap="2rem">
            {isEdit ? (
              <Button
                type="default"
                onClick={() => router.push(ROUTES.companyEmployer.detail)}
                style={btnSecondary}
              >
                Trở về
              </Button>
            ) : (
              <Button type="default" onClick={onReset} style={btnSecondary}>
                Reset
              </Button>
            )}
            <Button type="primary" htmlType="submit" loading={isLoading} style={btnPrimary}>
              {isEdit ? "Cập nhật" : "Tạo công ty"}
            </Button>
          </FlexContainer>
        </GridContainer>
      </Form>
    </CompanyFormWrapper>
  )
}

export default CompanyForm
