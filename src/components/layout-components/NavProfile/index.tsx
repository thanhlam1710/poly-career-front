import React from "react"
import {
  LogoutOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
  CreditCardOutlined,
  SolutionOutlined,
  TeamOutlined,
} from "@ant-design/icons"
import { Menu, Dropdown, Avatar, Button, Modal } from "antd"
import Link from "next/link"
import { useRouter } from "next/router"
import { ROUTES } from "@constants"
import { useAppDispatch } from "app/appHook"
import { authActions } from "app/slices/authSlice"
import { useProfile } from "hook/useProfile"

const menuItem = [
  {
    key: "Tài khoản",
    title: "Tài khoản",
    icon: UserOutlined,
    path: ROUTES.employerProfile,
  },

  {
    key: "Danh sách tin đăng",
    title: "Danh sách tin đăng",
    icon: SolutionOutlined,
    path: ROUTES.recruitment.list,
  },
  {
    key: "Hồ sơ ứng tuyển",
    title: "Hồ sơ ứng tuyển",
    icon: TeamOutlined,
    path: ROUTES.CV.list,
  },
  {
    key: "Dịch vụ",
    title: "Dịch vụ",
    icon: CreditCardOutlined,
    path: "/",
  },
]

const NavProfile: React.FC = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { employerProfile } = useProfile()

  const handleLogout = () => {
    Modal.confirm({
      title: "Bạn có muốn đăng xuất không?",
      icon: <ExclamationCircleOutlined />,
      okText: "Có",
      cancelText: "Không",
      onOk: () => {
        dispatch(authActions.logoutAction())
        router.push(ROUTES.home)
      },
    })
  }
  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile__header">
        <div className="d-flex">
          <div className="pl-3">
            <h4 className="mb-0">{employerProfile?.full_name}</h4>
            <span className="text-muted">{employerProfile?.email}</span>
          </div>
        </div>
      </div>
      <div className="nav-profile__body">
        <Menu>
          {menuItem.map((el) => {
            return (
              <Menu.Item key={el.key}>
                <Link href={el.path} passHref>
                  <a>
                    <el.icon className="mr-3" />
                    <span className="font-weight-normal">{el.title}</span>
                  </a>
                </Link>
              </Menu.Item>
            )
          })}

          <Menu.Item key={menuItem.length + 1} onClick={() => handleLogout()}>
            <span>
              <LogoutOutlined className="mr-3" />
              <span className="font-weight-normal">Đăng xuất</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Button className="btn__action" type="text">
        {employerProfile?.avatar ? (
          <Avatar size={45} src={employerProfile.avatar} />
        ) : (
          <Avatar size={45}>
            {employerProfile?.full_name.toString().charAt(0).toLocaleUpperCase()}
          </Avatar>
        )}
      </Button>
    </Dropdown>
  )
}

export default NavProfile
