import React from "react"
import { Grid } from "antd"
import Footer from "components/Footer"
import HeaderDesktop from "components/Header/HeaderDesktop"
import HeaderMobile from "components/Header/HeaderMobile"
import { useProfile } from "hook/useProfile"
import { LayoutProps } from "interfaces/Layout"

const { useBreakpoint } = Grid

// handle student layout
const ClientLayout: React.FC<LayoutProps> = ({ children }) => {
  const { employerProfile, studentProfile } = useProfile()

  const { lg } = useBreakpoint()

  return (
    <div>
      {lg ? (
        <HeaderDesktop
          role={studentProfile?.role || employerProfile?.role}
          avatar={studentProfile?.avatar || employerProfile?.avatar}
          full_name={studentProfile?.full_name || employerProfile?.full_name}
        />
      ) : (
        <HeaderMobile
          role={studentProfile?.role || employerProfile?.role}
          avatar={studentProfile?.avatar || employerProfile?.avatar}
        />
      )}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default ClientLayout
