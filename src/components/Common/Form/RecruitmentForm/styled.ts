import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const FormSelectWrapper = styled.div`
  position: relative;
  .form {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
    .ant-row {
      flex-direction: column;
      .ant-form-item-label {
        text-align: left;
      }
    }
    .form-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: -5px;
      @media ${Variable.device.laptop} {
        width: 32%;
      }
      &.input-edit {
        width: 100%;
      }
    }

    label {
      font-weight: ${Variable.fw.bold};
      font-size: ${Variable.fontsize[1.6]};
    }

    .sub-title {
      margin-bottom: 2rem;
      color: ${Variable.color.textBlur};
    }

    .btn-group {
      width: 100%;
      margin-top: 3rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 2rem;
    }
  }

  label {
    font-weight: ${Variable.fw.bold};
    font-size: ${Variable.fontsize[1.6]};
  }
  .form-textarea {
    .sub-title {
      margin-bottom: 2rem;
      color: ${Variable.color.textBlur};
    }
    textarea {
      min-height: 19rem;
      border-radius: 0.5rem;
    }
  }
`

export const Warning = styled.p`
  position: absolute;
  right: 0rem;
  color: ${Variable.color.textBlur};
`

export const CompanyFormWrapper = styled.div`
  .select-width {
    .ant-form-item-control {
      width: 33rem;
    }
  }
`
