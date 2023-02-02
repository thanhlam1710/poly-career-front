import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const WrapperMyCV = styled.div`
  max-width: 1100px;
  margin: auto;
  .box-block {
    background-color: ${Variable.color.whiteColor};
    border-radius: 0.5rem;
    box-shadow: -1px 1px 6px rgb(0 0 0 / 5%);
    margin-bottom: 16px;
    margin-top: 16px;
    padding: 24px 24px 8px;
    .box-header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      .title {
        font-size: ${Variable.fontsize["1.8"]};
        font-weight: ${Variable.fw.bold};
        line-height: 2.4rem;
        margin: 0;
      }
      .box-control__add {
        display: flex;
        .upload__my-cv {
          margin-right: 1rem;
          text-align: center;
          .btn__show-modal-upload {
            border-radius: 3.2rem;
            height: 4.2rem;
          }
        }
        .btn-add-cv {
          border-radius: 3.2rem;
          width: 11rem;
          height: 4rem;
        }
      }
    }
  }
`
