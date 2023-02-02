import React from "react"
import {
  AntDesignOutlined,
  ContainerOutlined,
  DownOutlined,
  LoginOutlined,
  SaveFilled,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Row, Button, Dropdown, Menu, Avatar, notification } from "antd"
import type { MenuProps } from "antd"
import Link from "next/link"
import { useRouter } from "next/router"
import { HEADER_NAVIGATION, ROLE, ROUTES } from "@constants"
import { useAppDispatch } from "app/appHook"
import { authActions } from "app/slices/authSlice"
import { useProfile } from "hook/useProfile"
import { HeaderProps } from "interfaces/Header"
import { Container } from "styles/app/styled/Container/styled"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"
import { Variable } from "styles/app/variable/Variable"
import { HeaderContainer } from "../styled"

const HeaderDesktop: React.FC<HeaderProps> = ({ role = 0, avatar, full_name }) => {
  const dispatch = useAppDispatch()
  const { isLoggedIn } = useProfile()
  const router = useRouter()
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "5") {
      router.push(ROUTES.home)
      dispatch(authActions.logoutAction())
    }
  }

  const menu = (
    <div className="nav-main">
      <Menu
        className="control-infor"
        onClick={handleMenuClick}
        items={[
          {
            key: "1",
            label: (
              <Link
                href={role.toString() === ROLE.student ? ROUTES.profile : ROUTES.employerProfile}
              >
                Tài khoản
              </Link>
            ),
            icon: <UserOutlined />,
          },
          // {
          //   key: "2",
          //   label: <Link href="">Cài đặt</Link>,
          //   icon: <SettingOutlined />,
          // },
          ...(role.toString() !== ROLE.student
            ? [
                {
                  key: "3",
                  label:
                    role.toString() === ROLE.employer ? (
                      <Link href={ROUTES.employer}>Tuyển dụng</Link>
                    ) : (
                      <Link href={ROUTES.admin.dashboard}>Quản trị</Link>
                    ),
                  icon: <UsergroupAddOutlined />,
                },
                {
                  key: "4",
                  label: <Link href={ROUTES.job.saved}>Đã lưu</Link>,
                  icon: <SaveFilled />,
                },
              ]
            : [
                {
                  key: "4",
                  label: <Link href={ROUTES.job.saved}>Đã lưu</Link>,
                  icon: <SaveFilled />,
                },
                {
                  key: "6",
                  label: <Link href={ROUTES.studentCv.managerCv}>Quản lý CV của tôi</Link>,
                  icon: <ContainerOutlined />,
                },
              ]),
          {
            key: "5",
            label: <span>Đăng xuất</span>,
            icon: <LoginOutlined />,
          },
        ]}
      />
    </div>
  )
  return (
    <Container
      backgroundColor={Variable.color.primaryColor}
      boxShadow={Variable.boxShadow.shadowHeader}
    >
      <HeaderContainer>
        <Row align="middle" className="header__link">
          <Link href="/">
            <a className="header__logo--img">
              <img src="/logo/PC_Logo_Full_White.png" alt="Logo_Footer" />
            </a>
          </Link>
          <ul>
            {HEADER_NAVIGATION.map((_item) => (
              <div
                key={_item.id}
                onClick={() => {
                  if (!isLoggedIn)
                    return notification.error({
                      message: "Bạn cần đăng nhập để sử dụng chức năng này!",
                    })
                  router.push(_item.path)
                }}
              >
                <li>{_item.display}</li>
              </div>
            ))}
          </ul>
        </Row>
        {role ? (
          <Dropdown overlay={menu} className="dropdown" trigger={["click"]}>
            <Row align="middle" className="header__user">
              <FlexContainer alignItems="center" gap="0.5rem">
                <div className="header__user--avatar">
                  <Avatar icon={<AntDesignOutlined />} src={avatar && avatar} />
                </div>
                <span className="header__user--name">{full_name}</span>
              </FlexContainer>
              <DownOutlined className="header__user--dropdown" />
            </Row>
          </Dropdown>
        ) : (
          <Row align="middle" className="header__user">
            <Link href={ROUTES.login}>
              <Button className="header__user--btn">Đăng nhập</Button>
            </Link>
            <Link href={ROUTES.register}>
              <Button className="header__user--btn">Đăng ký</Button>
            </Link>
            <Link href={ROUTES.loginEmployer}>
              <Button className="header__user--btn">Đăng nhập tuyển dụng</Button>
            </Link>
          </Row>
        )}
      </HeaderContainer>
    </Container>
  )
}

export default HeaderDesktop
