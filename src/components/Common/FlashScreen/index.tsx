import React, { useEffect, useState } from "react"
import { Spin } from "antd"
import { FlashScreenWrapper } from "./styled"

interface Props {
  handleHidden: () => void
}

const FlashScreen: React.FC<Props> = ({ handleHidden }) => {
  const [first, setFirst] = useState<boolean>(!sessionStorage.getItem("first_login"))

  useEffect(() => {
    if (!first) {
      handleHidden()
      return
    }

    sessionStorage.setItem("first_login", "true")
    const timeOut = setTimeout(() => {
      setFirst(false)
      handleHidden()
    }, 1500)

    return () => {
      if (timeOut) clearTimeout(timeOut)
    }
  }, [])

  return (
    <FlashScreenWrapper className={!first ? "hidden" : ""}>
      <div>
        <img src="/logo/PC_Logo_Full.png" alt="Logo" />
      </div>
      <div>
        <Spin />
      </div>
    </FlashScreenWrapper>
  )
}

export default FlashScreen
