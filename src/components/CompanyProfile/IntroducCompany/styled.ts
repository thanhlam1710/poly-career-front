import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const IntroducCompanyContainer = styled.div`
  background-color: ${Variable.color.whiteColor};
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  @media ${Variable.device.mobile} {
    border-radius: 0;
  }
  .introduct__decription {
    margin-top: 2rem;
    p {
      text-align: justify;
      font-size: ${Variable.fontsize["1.4"]};
      color: ${Variable.color.primaryText};
      white-space: pre-wrap;
    }
  }
`
