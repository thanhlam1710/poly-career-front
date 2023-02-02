import React from "react"
import {
  AntDesignOutlined,
  LoginOutlined,
  MenuOutlined,
  SaveFilled,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Avatar, Row } from "antd"
import Link from "next/link"
import { useRouter } from "next/router"
import { HEADER_NAVIGATION, ROLE, ROUTES } from "@constants"
import { useAppDispatch } from "app/appHook"
import { authActions } from "app/slices/authSlice"
import { HeaderProps } from "interfaces/Header"
import { HeaderMobileContainer } from "../styled"

const HeaderMobile: React.FC<HeaderProps> = ({ role = 0, avatar }) => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  const [toggleUser, setToggleUser] = React.useState(false)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleMenuClick = () => {
    dispatch(authActions.logoutAction())
    router.push(ROUTES.home)
  }
  const toggleSidebarMenu = () => {
    setToggleMenu((prevState) => !prevState)
  }
  const toggleSidebarUser = () => {
    setToggleUser((prevState) => !prevState)
  }

  return (
    <HeaderMobileContainer>
      <Row justify="space-between" align="middle" className="header__moblie--row">
        <div className="header__menu">
          <MenuOutlined className="header__menu--icons" onClick={toggleSidebarMenu} />
        </div>
        <div className="header__logo">
          <Link href="/">
            <a>
              <img src="/logo/PC_Logo_Full.png" alt="Logo_Footer" />
            </a>
          </Link>
        </div>
        <div className="header__user">
          {role ? (
            <div className="header__user--logo" onClick={toggleSidebarUser}>
              <Avatar
                // size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                icon={<AntDesignOutlined />}
                src={avatar && avatar}
              />
            </div>
          ) : (
            <UserOutlined className="header__user--icons" onClick={toggleSidebarUser} />
          )}
        </div>
      </Row>
      <Row
        className={toggleMenu ? "backdrop backdrop--open" : "backdrop"}
        onClick={toggleSidebarMenu}
      >
        <Row
          className={toggleMenu ? "sibebar__menu sibebar__menu--open" : "sibebar__menu"}
          onClick={(e) => e.stopPropagation()}
        >
          <ul>
            {HEADER_NAVIGATION.map((_item) => (
              <li key={_item.id}>
                <Link href={_item.path}>
                  <a>{_item.display}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Row>
      </Row>
      <Row
        className={toggleUser ? "backdrop backdrop--open" : "backdrop"}
        onClick={toggleSidebarUser}
      >
        {role ? (
          <Row
            className={toggleUser ? "sibebar__user sibebar__user--open" : "sibebar__user"}
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li>
                <UserOutlined />
                <Link
                  href={role.toString() === ROLE.student ? ROUTES.profile : ROUTES.employerProfile}
                >
                  <a>Tài khoản</a>
                </Link>
              </li>
              {/* <li>
                <SettingOutlined />
                <Link href={ROUTES.profile}>
                  <a>Cài đặt</a>
                </Link>
              </li> */}
              {role.toString() === ROLE.employer ? (
                <li>
                  <UsergroupAddOutlined />
                  <Link href={ROUTES.employer}>
                    <a>Tuyển dụng</a>
                  </Link>
                </li>
              ) : (
                <li>
                  <UsergroupAddOutlined />
                  <Link href={ROUTES.admin.dashboard}>
                    <a>Quản trị</a>
                  </Link>
                </li>
              )}
              <li>
                <SaveFilled />
                <Link href={ROUTES.job.saved}>
                  <a>Đã lưu</a>
                </Link>
              </li>
              <li>
                <LoginOutlined />
                <span onClick={handleMenuClick}>Đăng xuất</span>
              </li>
            </ul>
          </Row>
        ) : (
          <Row
            className={toggleUser ? "sibebar__user sibebar__user--open" : "sibebar__user"}
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li>
                <Link href={ROUTES.login}>
                  <a>Đăng nhập</a>
                </Link>
              </li>
              <li>
                <Link href={ROUTES.register}>
                  <a>Đăng ký</a>
                </Link>
              </li>
              <li>
                <Link href={ROUTES.loginEmployer}>
                  <a>Đăng nhập tuyển dụng</a>
                </Link>
              </li>
            </ul>
          </Row>
        )}
      </Row>
    </HeaderMobileContainer>
  )
}

export default HeaderMobile
