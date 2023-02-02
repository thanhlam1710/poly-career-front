import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const CompanyProfileWrapper = styled.div`
  background-color: ${Variable.color.greyLight};
  padding: 2rem 0 6rem 0;
  .container {
    width: 82.5%;
    margin: 0 auto;
    background-color: inherit;
    .company__row {
      gap: 2rem;
      margin-top: 2rem;
    }
  }
  @media ${Variable.device.mobile} {
    .container {
      width: 100%;
    }
  }
`
