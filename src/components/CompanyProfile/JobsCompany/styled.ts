import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const JobsCompanyContainer = styled.div`
  width: 100%;
  background-color: ${Variable.color.whiteColor};
  padding: 2rem;
  border-radius: 0.5rem;
  .jobs {
    gap: 2rem;
    &__border {
      border-left: 1rem solid ${Variable.color.primaryColor};
    }
    &__title {
      color: ${Variable.color.primaryText};
      font-weight: ${Variable.fw.bold};
      font-size: ${Variable.fontsize["2.4"]};
    }
  }
`
export const JobsListContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
