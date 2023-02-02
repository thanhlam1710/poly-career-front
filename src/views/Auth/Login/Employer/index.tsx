import React, { useEffect } from "react"
import { UserOutlined } from "@ant-design/icons"
import { PayloadAction } from "@reduxjs/toolkit"
import { Button, Col, Form, Input, notification, Row } from "antd"
import Link from "next/link"
import { useRouter } from "next/router"
import { MESSAGE, RESPONSE_CODES, ROLE, ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { loginEmployerAction } from "app/slices/authSlice"
import BtnBackHome from "components/Common/Button/BackHome"
import { VALIDATION } from "constants/validate"
import { useProfile } from "hook/useProfile"
import { APIResponse } from "interfaces/APIResponse"
import { LoginPayload } from "interfaces/Auth"
import { AuthWrapper, FormAuth } from "views/Auth/styled"

const LoginEmployer: React.FC = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((state) => state.auth)
  const router = useRouter()
  const { employerProfile, updateUser } = useProfile()

  const onFinish = async (values: LoginPayload) => {
    const response = (await dispatch(loginEmployerAction(values))) as PayloadAction<
      APIResponse<unknown>
    >
    if (response.payload.code === RESPONSE_CODES.success) {
      updateUser()
    }
  }

  useEffect(() => {
    if (!employerProfile) return
    if (employerProfile.role === ROLE.employer) router.push(ROUTES.employer)
    if (employerProfile.role === ROLE.super_admin) router.push(ROUTES.admin.dashboard)
  }, [employerProfile])

  useEffect(() => {
    if (router.query.status === "Success") {
      notification.success({
        message: MESSAGE.verifyAccount.success,
      })
    }
    if (router.query.status === "Fail") {
      notification.success({
        message: MESSAGE.verifyAccount.fail,
      })
    }
  }, [router.query.status])
  return (
    <AuthWrapper>
      <BtnBackHome />
      <Row className="container__login">
        <Col className="container__login__slider" xs={12} sm={12} md={12} lg={12} xl={12}>
          <img
            src="https://res.cloudinary.com/anummio/image/upload/v1663941084/cb3b843d98ac205f8cefe08ea9c8837a_g7znui.png"
            alt="banner-login"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormAuth>
            <div className="logo">
              <div className="logo__login">
                <UserOutlined />
              </div>
              <div className="auth__form--title">Đăng nhập nhà tuyển dụng</div>
            </div>
            <Form
              className="form"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                className="underline"
                rules={[VALIDATION.requiredWOLabel("Email")]}
              >
                <Input type="email" placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                className="underline"
                rules={[VALIDATION.requiredWOLabel("Mật khẩu")]}
              >
                <Input.Password placeholder="Mật khẩu" />
              </Form.Item>
              <Form.Item className="form__forgot--pass">
                <Link href={ROUTES.forgot}>Quên mật khẩu?</Link>
              </Form.Item>
              <Form.Item className="control__submit">
                <Button
                  className="control__submit--btn"
                  type="primary"
                  htmlType="submit"
                  loading={isLoading}
                >
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
            <div className="option__auth">
              Bạn chưa có tài khoản? <Link href={ROUTES.registerEmployer}>Đăng ký ngay</Link>
            </div>
          </FormAuth>
        </Col>
      </Row>
    </AuthWrapper>
  )
}

export default LoginEmployer
