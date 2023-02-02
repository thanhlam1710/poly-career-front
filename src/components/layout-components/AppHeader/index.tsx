import React from "react"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button, Space } from "antd"
import { useProfile } from "hook/useProfile"
import Logo from "../Logo"
import NavProfile from "../NavProfile"
import { HeaderNavWrapper } from "./style"

export interface HeaderProps {
  collapse?: boolean
  onCollapse?: () => void
}

export const HeaderNav: React.FC<HeaderProps> = ({ collapse, onCollapse }) => {
  const { employerProfile } = useProfile()
  return (
    <HeaderNavWrapper collapse={collapse}>
      <div className="logo">
        <Logo smallLogo={collapse} />
      </div>
      <div className="wrapper">
        <div className="header__left">
          <Button
            type="link"
            className="btn__collapse"
            onClick={() => {
              if (onCollapse) onCollapse()
            }}
            icon={!collapse ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          />
          <h3 className="header__company">{employerProfile?.company?.name}</h3>
          {/* <SearchInput /> */}
        </div>

        <div className="header__right">
          <Space size={20}>
            {/* <NavNotification /> */}
            <NavProfile />
          </Space>
        </div>
      </div>
    </HeaderNavWrapper>
  )
}

export default HeaderNav
