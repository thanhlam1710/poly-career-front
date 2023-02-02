import styled from "styled-components"
import { StylesProps } from "interfaces/Styled"

export const Container = styled.div<StylesProps>`
  width: ${({ width }) => width && width};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  height: ${({ height }) => height && height};
  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
  color: ${({ color }) => color && color};
  border: ${({ border }) => border && border};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};
  text-align: ${({ textAlign }) => textAlign && textAlign};
`
