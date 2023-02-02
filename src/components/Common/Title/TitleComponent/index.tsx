import React from "react"
import { TitleContainer } from "./styled"

interface TitleProps {
  title: string
  bgColor?: string
}

const TitleComponent: React.FC<TitleProps> = ({ title, bgColor }) => {
  return (
    <TitleContainer bgColor={bgColor}>
      <div className="title-border" />
      <div className="title">{title}</div>
    </TitleContainer>
  )
}

export default TitleComponent
