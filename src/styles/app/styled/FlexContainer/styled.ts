import styled from "styled-components"
import { StylesProps } from "interfaces/Styled"

export const FlexContainer = styled.div<StylesProps>`
  position: ${({ position }) => position && position};
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  gap: ${({ gap }) => gap && gap};
  display: flex;
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
  background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};
  flex-wrap: ${({ flexWrap }) => flexWrap && flexWrap};
`
