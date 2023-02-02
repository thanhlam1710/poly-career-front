import React from "react"
import { EmployerTitleWrapper } from "./styled"

interface EmployerTitleProps {
  title: string
}

const EmployerTitle: React.FC<EmployerTitleProps> = ({ title }) => {
  return (
    <EmployerTitleWrapper>
      <h1 className="title">{title}</h1>
    </EmployerTitleWrapper>
  )
}

export default EmployerTitle
