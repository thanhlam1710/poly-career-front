import styled from "styled-components"
import { StylesProps } from "interfaces/Styled"

export const GridContainer = styled.div<StylesProps>`
  display: grid;
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  min-height: ${({ minHeight }) => minHeight && minHeight};
  margin: ${({ margin }) => margin && margin};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas && gridTemplateAreas};
  grid-template-columns: ${({ columns, gridTemplateColumns }) =>
    gridTemplateColumns ||
    (columns ? `repeat(${columns}, minmax(0, 1fr))` : "repeat(1, minmax(0, 1fr))")};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows && gridTemplateRows};
  grid-row-gap: ${({ rowGap }) => rowGap && rowGap};
  row-gap: ${({ rowGap }) => rowGap && rowGap};
  grid-column-gap: ${({ columnGap }) => columnGap && columnGap};
  column-gap: ${({ columnGap }) => columnGap && columnGap};
  overflow: ${({ overflow }) => overflow && overflow};
  padding: ${({ padding }) => padding && padding};
  background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};
  border-bottom: ${({ borderBottom }) => borderBottom && borderBottom};
`
GridContainer.defaultProps = {
  width: "100%",
  height: "auto",
  alignItems: "baseline",
  justifyContent: "center",
}
