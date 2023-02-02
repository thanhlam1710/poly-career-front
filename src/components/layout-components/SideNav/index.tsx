import React from "react"
import { Layout } from "antd"
import MenuContent from "../MenuContent"

const { Sider } = Layout

interface SidebarProps {
  collapse?: boolean
}

export const SideNav: React.FC<SidebarProps> = ({ collapse: isCollapse }) => {
  return (
    <Sider className="app__sidebar" theme="light" collapsed={isCollapse} width="25rem">
      <MenuContent />
    </Sider>
  )
}

export default SideNav
