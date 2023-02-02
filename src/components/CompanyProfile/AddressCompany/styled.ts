import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const AddressCompanyContainer = styled.div`
  background-color: ${Variable.color.whiteColor};
  border-radius: 0.5rem;
  padding: 2rem;
  .address {
    gap: 2rem;
    &__border {
      border-left: 1rem solid ${Variable.color.primaryColor};
    }
    &__title {
      color: ${Variable.color.primaryText};
      font-weight: ${Variable.fw.bold};
      font-size: ${Variable.fontsize["2.4"]};
    }
    .address__icon {
      margin-top: 2rem;
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    span {
      color: ${Variable.color.primaryText};
      font-size: ${Variable.fontsize["1.4"]};
    }
  }
  .sub_title {
    margin: 2rem 0;
    font-size: ${Variable.fontsize["1.6"]};
    font-weight: ${Variable.fw.bold};
    color: ${Variable.color.textBlur};
  }
`
