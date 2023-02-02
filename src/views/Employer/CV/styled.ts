import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const CVWrapper = styled.div`
  .select {
    width: 27%;
    &-form {
      width: 17.5rem;
    }
  }
  .table-cv {
    font-size: ${Variable.fontsize["1.4"]};
    .name {
      font-weight: ${Variable.fw.bold};
      .candidate_age {
        color: ${Variable.color.textBlur};
      }
    }
  }
  .other {
    text-align: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
      background-color: ${Variable.color.primarySuperLight};
      line-height: 1.7rem;
    }
  }
`

export const CVTitle = styled.div`
  .title {
    font-size: ${Variable.fontsize["1.8"]};
    font-weight: ${Variable.fw.bold};
  }
  .sub-title {
    font-size: ${Variable.fontsize["1.6"]};
    color: ${Variable.color.redColor};
  }
`
