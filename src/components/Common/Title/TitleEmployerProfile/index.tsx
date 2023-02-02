import React from "react"
import { TitleContainer } from "./styled"

interface TitleProps {
  title: string
}

const TitleEmployerProfile: React.FC<TitleProps> = ({ title }) => {
  return (
    <TitleContainer>
      <div className="employer__title">{title}</div>
    </TitleContainer>
  )
}

export default TitleEmployerProfile
