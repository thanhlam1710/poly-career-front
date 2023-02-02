import styled from "styled-components"

export const StudentCvFormWrapper = styled.div``

interface ColorSelectWrapperProps {
  bgColor: string
}

export const ColorSelectWrapper = styled.div<ColorSelectWrapperProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
`
