import React from "react"
import { TitleProfileContainer } from "./styled"

interface TitleProps {
  title: string
}

const TitleEmployerForm: React.FC<TitleProps> = ({ title }) => {
  return (
    <TitleProfileContainer>
      <div className="profile__title">{title}</div>
    </TitleProfileContainer>
  )
}

export default TitleEmployerForm
