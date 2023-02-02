import React from "react"
import { UserOutlined } from "@ant-design/icons"
import { Button, Col, Row, Form, Input } from "antd"
import Link from "next/link"
import { RESPONSE_CODES, ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { registerStudentAction } from "app/slices/authSlice"
import AnotherLogin from "components/Auth/AnotherLoginBtn"
import BtnBackHome from "components/Common/Button/BackHome"
import { MESSAGE } from "constants/messages"
import { VALIDATION } from "constants/validate"
import { APIResponse } from "interfaces/APIResponse"
import { RegisterStudentPayload } from "interfaces/Register"
import { FormAuth, AuthWrapper } from "../styled"

const Register: React.FC = () => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((state) => state.auth)

  const onFinish = async (values: RegisterStudentPayload) => {
    const data = {
      full_name: values.full_name,
      email: values.email,
      password: values.password,
    }
    const rs = await dispatch(registerStudentAction(data))
    const payload = rs.payload as APIResponse<unknown>

    if (payload.code === RESPONSE_CODES.success) {
      form.resetFields()
    }
  }

  return (
    <AuthWrapper>
      <BtnBackHome />
      <Row className="container__login">
        <Col className="container__login__slider" md={12} lg={12} xl={12}>
          <img
            src="https://res.cloudinary.com/anummio/image/upload/v1664770903/8601ea8ae3faef5e92aa741f137a9d87_nhhhap.png"
            alt="banner-register"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormAuth>
            <div className="logo">
              <div className="logo__login">
                <UserOutlined />
              </div>
              <div className="auth__form--title">Đăng ký</div>
            </div>
            <Form
              form={form}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              onFinish={onFinish}
            >
              <Form.Item
                name="full_name"
                className="underline"
                rules={[VALIDATION.requiredWOLabel("Họ tên"), VALIDATION.minLength(4, "Họ tên")]}
              >
                <Input placeholder="Họ tên" />
              </Form.Item>
              <Form.Item
                name="email"
                className="underline"
                rules={[VALIDATION.requiredWOLabel("Email")]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                className="underline"
                rules={[VALIDATION.requiredWOLabel("mật khẩu"), VALIDATION.password.min]}
              >
                <Input.Password placeholder="Mật khẩu" />
              </Form.Item>
              <Form.Item
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
            </Form>
            <AnotherLogin />
            <div className="option__auth">
              Bạn đã có tài khoản?{" "}
              <Link className="rg_now" href={ROUTES.login}>
                Đăng nhập ngay
              </Link>
            </div>
          </FormAuth>
        </Col>
      </Row>
    </AuthWrapper>
  )
}

export default Register
