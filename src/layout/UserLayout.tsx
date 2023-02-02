import React, { useState } from "react"
import { Layout } from "antd"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getEmployerProfileAction } from "app/slices/employerSlice"
import FlashScreen from "components/Common/FlashScreen"
import HeaderNav from "components/layout-components/AppHeader"
import SideNav from "components/layout-components/SideNav"
import { useAppEffect } from "hook/useAppEffect"
import { LayoutProps } from "interfaces/Layout"
import { UserLayoutContainer } from "./styled"

// handle layout admin-employer, admin, employer here
const UserLayout: React.FC<LayoutProps> = ({ children }) => {
  const [collapse, setCollapse] = useState<boolean>(false)
  const { token, type } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const [showFlashScreen, setShowFlashScreen] = useState<boolean>(true)

  useAppEffect(() => {
    if (!token) return
    if (token && type === "employer") dispatch(getEmployerProfileAction())
  })
  return (
    <UserLayoutContainer>
      {showFlashScreen && (
        <FlashScreen
          handleHidden={() => {
            setShowFlashScreen(true)
          }}
        />
      )}
      <Layout className="app__container">
        <Layout.Header className="app__header">
          <HeaderNav collapse={collapse} onCollapse={() => setCollapse(!collapse)} />
        </Layout.Header>
        <Layout className="app__content">
          <SideNav collapse={collapse} />
          <Layout.Content> {children} </Layout.Content>
        </Layout>
      </Layout>
    </UserLayoutContainer>
  )
}

export default UserLayout
