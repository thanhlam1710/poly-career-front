import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"
// import { Variable } from "styles/app/variable/Variable"

export const InforLoginProfileContainer = styled.div`
  .form__login {
    .label__fake {
      width: 14.4rem;
    }
    .form__item--label {
      margin-top: 1rem;
    }
    .ant-form-item-row {
      align-items: center;
      p {
        cursor: pointer;
        color: ${Variable.color.primaryColor};
        font-weight: ${Variable.fw.bold};
      }
    }
    .ant-form-item-label {
      width: 14.4rem;
      text-align: unset;
      label {
        font-size: ${Variable.fontsize["1.6"]};
        font-weight: ${Variable.fw.bold};
        color: ${Variable.color.primaryText};
      }
    }
    .ant-form-item-control-input {
      width: 33rem;
    }
    .ant-input {
      font-size: ${Variable.fontsize["1.6"]};
      color: ${Variable.color.textBlur};
    }
  }
`

export const ModalContent = styled.div`
  padding: 0rem 1.6rem;
  .modal__content--title {
    font-weight: ${Variable.fw.bold};
    color: ${Variable.color.primaryText};
    font-size: ${Variable.fontsize["1.8"]};
    padding-top: 1.6rem;
  }
  .form__item--input {
    padding: 0rem 1rem;
  }
  .ant-form-item-row {
    display: unset;
  }
  .ant-form-item-label {
    font-size: ${Variable.fontsize["1.6"]};
    font-weight: ${Variable.fw.bold};
    color: ${Variable.color.primaryText};
    margin-top: 1.5rem;
  }
  .modal__divider {
    margin: 3rem 0rem 1rem 0rem;
  }
  .form__item--btn {
    padding: 4rem 0rem 2rem 0rem;
    .btn__modal {
      padding: 1.6rem 0rem;
      height: unset;
      border-radius: 0.5rem;
      font-size: ${Variable.fontsize["1.6"]};
      font-family: ${Variable.fw.bold};
      color: ${Variable.color.whiteColor};
    }
  }
`
