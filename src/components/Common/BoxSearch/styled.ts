import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const BoxSearchContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: ${Variable.color.primaryLight};
  @media ${Variable.device.tablet}, ${Variable.device.laptop} {
    padding: 3rem;
    border-radius: 1rem;
  }
  .form {
    width: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 5rem 5rem 5rem;
    border-radius: 1rem;
    gap: 1rem;
    @media ${Variable.device.laptop}, ${Variable.device.tablet} {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .column1 {
      grid-column: 1 / -1;
      width: 100%;
    }
    .column4 {
      grid-column: 1 / -1;
      width: 11.5rem;
      justify-self: center;
      button {
        border: none;
        padding: 0 3rem;
      }
    }
    .input {
      width: 100%;
      font-size: ${Variable.fontsize["1.6"]};
      @media ${Variable.device.laptop} {
        width: 100%;
      }
    }
    .form-group {
      input::placeholder {
        color: ${Variable.color.textBlur};
        font-weight: ${Variable.fw.bold};
      }
      input,
      .ant-select-selector,
      button {
        width: 100%;
        height: 4.8rem;
        border-radius: 0.5rem;
        color: ${Variable.color.textBlur};
        background: ${Variable.color.whiteColor};
      }
      .ant-select {
        display: flex;
        .ant-select-selector {
          @media ${Variable.device.laptop} {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 22rem;
            max-width: 22rem;
          }
        }
      }
      button {
        margin: 0;
        background: ${Variable.color.primaryColor};
        color: ${Variable.color.whiteColor};
      }
    }
  }
`
