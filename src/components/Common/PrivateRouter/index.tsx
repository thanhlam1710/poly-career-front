import React, { useEffect } from "react"
import { Button } from "antd"
import { useRouter } from "next/router"
import { ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { authActions } from "app/slices/authSlice"
import { PrivateRouterProps } from "interfaces/Layout"
import { hasAccess } from "utils/auth-helper"
import { PrivateRouterWrapper } from "./styled"

const PrivateRouter: React.FC<PrivateRouterProps> = ({ authenticate, children }) => {
  const router = useRouter()
  const { token } = useAppSelector((state) => state.auth)
  const { studentProfile } = useAppSelector((state) => state.student)
  const { employerProfile } = useAppSelector((state) => state.employer)
  const dispatch = useAppDispatch()

  const handleBackHome = () => {
    router.push(ROUTES.home)
  }

  const hasPermission =
    authenticate?.permissions.length &&
    hasAccess(
      authenticate?.permissions,
      studentProfile ? studentProfile?.role : employerProfile?.role
    )

  useEffect(() => {
    if (!token) {
      dispatch(authActions.logoutAction())
    }
    if (token && !hasPermission) {
      // redirect to 404 page
      console.log("you don't have asset")
    }
    // call get profile
  }, [token, hasPermission])

  if (token && hasPermission) {
    return <>{children}</>
  }

  //   loading page here
  return (
    <PrivateRouterWrapper>
      <div>
        <h1>Bạn không có quyền truy cập vào đường dẫn này</h1>
        <div className="box-image">
          <img src="/images/Top_secret.png" alt="secret" />
        </div>
        <Button
          className="mt-2"
          type="primary"
          onClick={handleBackHome}
          style={{ width: "fit-content", height: "5rem", borderRadius: "0.5rem" }}
        >
          Trở về trang chủ
        </Button>
      </div>
    </PrivateRouterWrapper>
  )
}

export default PrivateRouter
