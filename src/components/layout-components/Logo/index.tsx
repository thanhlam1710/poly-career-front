import React from "react"
import Link from "next/link"
import { ROUTES } from "@constants"
import { LogoWrapper } from "./styled"

interface LogoProps {
  smallLogo?: boolean
}

export const Logo: React.FC<LogoProps> = ({ smallLogo }) => {
  return (
    <Link href={ROUTES.home}>
      <LogoWrapper className={`${smallLogo ?? "logo__small"}`}>
        {smallLogo ? <img src="/logo/PC_Logo.png" /> : <img src="/logo/PC_Logo_Full.png" />}
      </LogoWrapper>
    </Link>
  )
}

export default Logo
