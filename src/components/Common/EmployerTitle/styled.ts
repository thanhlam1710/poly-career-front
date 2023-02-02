import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const EmployerTitleWrapper = styled.div`
  background-color: ${Variable.color.whiteColor};
  height: 6rem;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Variable.color.greyColor};
  .title {
    font-size: ${Variable.fontsize["2.4"]};
  }
`
