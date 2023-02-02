import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"
// import { Variable } from "styles/app/variable/Variable"

export const InforContactProfileContainer = styled.div`
  .form__contact-row {
    .ant-form-item {
      margin-top: 1rem;
    }
    .ant-form-item-row {
      align-items: center;
      margin-top: 1rem;
    }
    .ant-form-item-label {
      text-align: unset;
      width: 14.4rem;
    }
    .ant-form-item-control-input {
      width: 33rem;
    }
    .ant-form-item-label > label {
      font-size: ${Variable.fontsize["1.6"]};
      color: ${Variable.color.primaryText};
      font-weight: ${Variable.fw.bold};
    }
    .ant-input {
      font-size: ${Variable.fontsize["1.6"]};
      color: ${Variable.color.primaryText};
    }
    .ant-btn {
      margin-top: 3rem;
    }
  }
`
