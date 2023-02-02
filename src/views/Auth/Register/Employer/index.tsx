import React from "react"
import { Button, Col, Row, Form, Input, Divider } from "antd"
import Link from "next/link"
import { MESSAGE, RESPONSE_CODES, ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { registerEmployerAction } from "app/slices/authSlice"
import BtnBackHome from "components/Common/Button/BackHome"
import { VALIDATION } from "constants/validate"
import { APIResponse } from "interfaces/APIResponse"
import { RegisterEmployerPayload } from "interfaces/Register"
import { AuthWrapperEmployer, FormAuth } from "views/Auth/styled"

const RegisterEmployer: React.FC = () => {
  const { isLoading } = useAppSelector((state) => state.auth)
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()
  const onFinish = async (values: RegisterEmployerPayload) => {
    const rs = await dispatch(registerEmployerAction(values))
    const payload = rs.payload as APIResponse<unknown>

    if (payload?.code === RESPONSE_CODES.success) {
      form.resetFields()
    }
  }

  return (
    <AuthWrapperEmployer>
      <BtnBackHome />
      <Row className="container__login--employer">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <FormAuth>
            <div className="title">Đăng ký tài khoản nhà tuyển dụng</div>
            <div className="option__auth--employer">
              Bạn đã có tài khoản nhà tuyển dụng?{" "}
              <Link className="rg_now" href={ROUTES.loginEmployer}>
                Đăng nhập
              </Link>
            </div>
            <Divider />
            <Form
              name="basic"
              form={form}
              layout="vertical"
              className="form__employer"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Địa chỉ email"
                name="email"
                className="underline"
                rules={[VALIDATION.required]}
              >
                <Input type="email" placeholder="Email" />
              </Form.Item>
              <Form.Item
                label="Mật khẩu"
                name="password"
                className="underline"
                rules={[VALIDATION.required, VALIDATION.password.min]}
              >
                <Input.Password placeholder="Mật khẩu" />
              </Form.Item>
              <Form.Item
                label="Nhập lại mật khẩu"
                labelCol={{ span: 16 }}
                name="check_password"
                className="underline"
                rules={[
                  VALIDATION.requiredWOLabel("Nhập lại mật khẩu"),
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(new Error(MESSAGE.password.notMatch))
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Nhập lại mật khẩu" />
              </Form.Item>
              <div className="title--sub">Thông tin liên hệ</div>
              <Form.Item
                label="Họ và tên"
                name="full_name"
                className="underline"
                rules={[VALIDATION.required, VALIDATION.minLength(4)]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="phone"
                className="underline"
                rules={[VALIDATION.required, VALIDATION.phone]}
              >
                <Input />
              </Form.Item>
              <Form.Item className="control__submit">
                <Button
                  className="control__submit--btn"
                  type="primary"
                  htmlType="submit"
                  loading={isLoading}
                >
                  Đăng ký
                </Button>
              </Form.Item>
              <div className="note">
                Bằng việc nhấn nút đăng ký, bạn đã đồng ý với{" "}
                <Link href="/">Điều khoản sử dụng</Link> của PolyCareer
              </div>
            </Form>
          </FormAuth>
        </Col>
      </Row>
    </AuthWrapperEmployer>
  )
}

export default RegisterEmployer
