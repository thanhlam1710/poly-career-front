import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

interface Props {
  bgColor?: string
}

export const TitleContainer = styled.div<Props>`
  display: flex;
  gap: 2rem;
  .title-border {
    width: 1rem;
    height: 2.8rem;
    background-color: ${({ bgColor }) => bgColor || Variable.color.primaryColor};
  }
  .title {
    color: ${Variable.color.primaryText};
    font-weight: ${Variable.fw.bold};
    font-size: ${Variable.fontsize["2.4"]};
    line-height: 2.8rem;
  }
`
