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
            label="T??n c??ng ty"
            name="name"
            className="underline"
            rules={[VALIDATION.required, VALIDATION.whiteSpace]}
          >
            <Input placeholder="T??n c??ng ty theo gi???y ph??p ????ng k?? kinh doanh" />
          </Form.Item>
          <GridContainer gridTemplateColumns="1fr 1fr 1fr" columnGap="2rem">
            <Form.Item
              label="M?? s??? thu???"
              name="tax_code"
              className="underline"
              rules={[VALIDATION.required, VALIDATION.whiteSpace]}
            >
              <Input placeholder="Vui l??ng nh???p" />
            </Form.Item>
            <Form.Item
              label="Quy m?? nh??n s???"
              labelCol={{ span: 12 }}
              name="size"
              className="underline"
            >
              <Select placeholder="Ch???n">
                {DATA_PERSONNEL_SIZE.map((item: PersonnelSize) => (
                  <Option key={item.id} value={item.id}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="?????a ??i???m"
              name="province_id"
              className="underline"
              rules={[VALIDATION.required]}
            >
              <Select
                showSearch
                placeholder="Ch???n"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                }
                options={convertSelectInput(province.listProvince)}
              />
            </Form.Item>
          </GridContainer>
          <Form.Item
            label="?????a ch???"
            name="address"
            className="underline"
            rules={[VALIDATION.required, VALIDATION.minLength(10)]}
          >
            <Input placeholder="?????a ch??? l??m vi???c" />
          </Form.Item>
          <GridContainer
            className="select-width"
            gridTemplateColumns="1fr 1fr 1fr"
            columnGap="2rem"
          >
            <Form.Item
              label="??i???n tho???i c??? ?????nh"
              labelCol={{ span: 12 }}
              name="phone"
              className="underline"
              rules={[VALIDATION.phone]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Trang web c??ng ty"
              labelCol={{ span: 12 }}
              name="website"
              className="underline"
              rules={[VALIDATION.whiteSpace]}
            >
              <Input addonBefore="https://" />
            </Form.Item>
            <Form.Item
              label="L??nh v???c ho???t ?????ng"
              labelCol={{ span: 12 }}
              name="company_activity_id"
              className="underline"
              rules={VALIDATION.onlyRequired}
            >
              <Select placeholder="Ch???n">
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
            label="Gi???i thi???u c??ng ty"
            labelCol={{ span: 12 }}
            name="information"
            className="underline"
            rules={[VALIDATION.required, VALIDATION.minLength(100)]}
          >
            <div className="company_description">
              <p className="sub-title">
                Th??ng tin gi???i thi???u c??ng ty gi??p ???ng vi??n bi???t r?? h??n v??? c??ng ty c???a b???n
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
                Tr??? v???
              </Button>
            ) : (
              <Button type="default" onClick={onReset} style={btnSecondary}>
                Reset
              </Button>
            )}
            <Button type="primary" htmlType="submit" loading={isLoading} style={btnPrimary}>
              {isEdit ? "C???p nh???t" : "T???o c??ng ty"}
            </Button>
          </FlexContainer>
        </GridContainer>
      </Form>
    </CompanyFormWrapper>
  )
}

export default CompanyForm
