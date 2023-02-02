import React from "react"
import { Button, Divider, Form, Input, InputNumber, Select } from "antd"
import { useRouter } from "next/router"
import { ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getCategoryAction } from "app/slices/categorySlice"
import { getProvinceAction } from "app/slices/provinceSlice"
import { EXPERIENCE, GENDER, JOB_TYPE, LEVEL, SALARY } from "constants/job"
import { VALIDATION } from "constants/validate"
import { useAppEffect } from "hook/useAppEffect"
import { Category } from "interfaces/Category"
import { Experience, Gender, JobType, Level, RecruitmentNewProps, Salary } from "interfaces/Job"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"
import { GridContainer } from "styles/app/styled/GridContainer/styled"
import { btnPrimary, btnSecondary } from "styles/app/variable/Button"
import { convertSelectInput } from "utils/helper"
import { FormSelectWrapper, Warning } from "./styled"

const { Option } = Select
const { TextArea } = Input

const RecruitmentForm: React.FC<RecruitmentNewProps> = ({ onSubmitForm, initialValue, isEdit }) => {
  const [form] = Form.useForm()
  const { province, categories } = useAppSelector((state) => state)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const onReset = () => {
    form.resetFields()
  }
  useAppEffect(() => {
    dispatch(getProvinceAction())
    dispatch(getCategoryAction())
  })
  const data = {
    ...initialValue,
    province_id: initialValue?.province_id.toString(),
  }

  return (
    <FormSelectWrapper>
      <Form
        name="basic"
        layout="vertical"
        className="form__employer"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        onFinish={onSubmitForm}
        initialValues={data}
      >
        <Warning>Thông tin này sẽ không thể chỉnh sửa sau 72 giờ kiểm duyệt</Warning>
        <GridContainer rowGap="2rem">
          <Form.Item
            label="Chức danh"
            name="title"
            className="underline"
            rules={[VALIDATION.required, VALIDATION.minLength(10)]}
          >
            <Input placeholder="Vị trí hiển thị đăng tuyển" />
          </Form.Item>
          <GridContainer gridTemplateColumns="1fr 1fr 1fr" columnGap="2rem">
            <Form.Item
              label="Hình thức làm việc"
              labelCol={{ span: 24 }}
              name="job_type"
              className="underline"
              rules={VALIDATION.onlyRequired}
            >
              <Select placeholder="Chọn">
                {JOB_TYPE.map((item: JobType) => (
                  <Option key={item.id} value={item.id}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Kinh nghiệm"
              labelCol={{ span: 12 }}
              name="experience"
              className="underline"
              rules={VALIDATION.onlyRequired}
            >
              <Select placeholder="Chọn">
                {EXPERIENCE.map((item: Experience) => (
                  <Option key={item.id} value={item.id}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Cấp bậc"
              name="level"
              className="underline"
              rules={VALIDATION.onlyRequired}
            >
              <Select placeholder="Chọn">
                {LEVEL.map((item: Level) => (
                  <Option key={item.id} value={item.id}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr 1fr 1fr" columnGap="2rem">
            <Form.Item
              label="Ngành nghề chính"
              labelCol={{ span: 12 }}
              name="category_id"
              className="underline"
              rules={VALIDATION.onlyRequired}
            >
              <Select placeholder="Chọn">
                {categories?.listCategories?.map((item: Category) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Giới tính"
              labelCol={{ span: 12 }}
              name="gender"
              className="underline"
              rules={VALIDATION.onlyRequired}
            >
              <Select placeholder="Chọn">
                {GENDER.map((item: Gender) => (
                  <Option key={item.id} value={item.id}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Số lượng tuyển"
              labelCol={{ span: 12 }}
              name="count"
              className="underline"
              rules={[VALIDATION.required, VALIDATION.number.min]}
            >
              <InputNumber placeholder="Vui lòng nhập" style={{ width: "100%" }} />
            </Form.Item>
          </GridContainer>
          <GridContainer gridTemplateColumns="1fr 1fr 1fr" columnGap="2rem">
            <Form.Item
              label="Mức lương"
              labelCol={{ span: 12 }}
              name="salary"
              className="underline"
              rules={VALIDATION.onlyRequired}
            >
              <Select placeholder="Chọn">
                {SALARY.map((item: Salary) => (
                  <Option key={item.id} value={item.id}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Tỉnh thành"
              labelCol={{ span: 12 }}
              name="province_id"
              className="underline"
              rules={VALIDATION.onlyRequired}
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
          <Divider style={{ margin: "1rem 0" }} />
          <Form.Item
            label="Mô tả công việc"
            labelCol={{ span: 12 }}
            name="description"
            className="underline"
            rules={[VALIDATION.required, VALIDATION.minLength(100)]}
          >
            <div className="form-textarea">
              <p className="sub-title">
                Thông tin cho vị trí công việc yêu cầu, trách nhiệm mà ứng viên có thể đảm nhận khi
                làm việc ở công ty
              </p>
              <TextArea defaultValue={initialValue?.description} showCount maxLength={1000} />
            </div>
          </Form.Item>
          <Form.Item
            label="Yêu cầu công việc"
            labelCol={{ span: 12 }}
            name="require"
            className="underline"
            rules={[VALIDATION.required, VALIDATION.minLength(100)]}
          >
            <div className="form-textarea">
              <p className="sub-title">
                Kỹ năng chuyên môn hoặc kỹ năng mềm cần thiết với công việc mà ứng viên cần quan tâm
              </p>
              <TextArea defaultValue={initialValue?.require} showCount maxLength={1000} />
            </div>
          </Form.Item>
          <Form.Item
            label="Quyền lợi"
            labelCol={{ span: 12 }}
            name="benefit"
            className="underline"
            rules={[VALIDATION.required, VALIDATION.minLength(100)]}
          >
            <div className="form-textarea">
              <p className="sub-title">
                Những quyền lợi, lợi ích với công việc cho ứng viên với vị trí đăng tuyển
              </p>
              <TextArea defaultValue={initialValue?.benefit} showCount maxLength={1000} />
            </div>
          </Form.Item>
          <FlexContainer margin="3rem 0 0" justifyContent="flex-end" gap="2rem">
            {isEdit ? (
              <Button
                type="default"
                onClick={() => router.push(ROUTES.recruitment.list)}
                style={btnSecondary}
              >
                Trở về
              </Button>
            ) : (
              <Button type="default" onClick={onReset} style={btnSecondary}>
                Reset
              </Button>
            )}
            <Button type="primary" htmlType="submit" style={btnPrimary}>
              {isEdit ? "Cập nhật" : "Tạo tin"}
            </Button>
          </FlexContainer>
        </GridContainer>
      </Form>
    </FormSelectWrapper>
  )
}

export default RecruitmentForm
