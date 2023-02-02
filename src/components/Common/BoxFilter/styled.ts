import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const BoxFilterWrapper = styled.div`
  border-radius: 1rem;
  @media ${Variable.device.laptop}, ${Variable.device.tablet} {
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Variable.color.whiteColor};
    box-shadow: ${Variable.boxShadow.shadowHeader};
  }
  .form {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    button,
    .ant-btn,
    .ant-btn-default {
      color: ${Variable.color.primaryColor};
      font-weight: ${Variable.fw.bold};
      border-radius: 4rem !important;
      background-color: ${Variable.color.primarySuperLight};
      border: none;
      @media ${Variable.device.laptop}, ${Variable.device.tablet} {
        border-radius: 0.5rem !important;
      }
    }
    .form-group {
      &.select {
        width: 100%;
        max-width: 100%;
        min-width: 12rem;
        @media ${Variable.device.laptop}, ${Variable.device.tablet} {
          max-width: 26rem;
          width: 100%;
        }
      }
      p {
        color: ${Variable.color.textBlur};
        padding: 1rem;
      }
      .ant-select-selector,
      button {
        color: ${Variable.color.textBlur};
        height: 4.8rem;
        background: ${Variable.color.whiteColor};
        border-radius: 0.5rem;
      }
      .ant-select-selector {
        border-radius: 0.5rem;
      }
      button {
        background: ${Variable.color.primaryColor};
        color: ${Variable.color.whiteColor};
        box-shadow: none;
        padding: 0px 20px;
      }
    }
  }
`

export const FormContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media ${Variable.device.laptop}, ${Variable.device.tablet} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
  }
  .btn {
    .ant-form-item-control-input-content {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
    }
  }
  .ant-form-item {
    margin: 0.2rem 0;
    @media ${Variable.device.laptop}, ${Variable.device.tablet} {
      margin: 0;
    }
    .ant-select-selector {
      height: 2rem;
      border-radius: 0.5rem;
      border-color: ${Variable.color.primaryColor};
      padding: -1rem 1rem;
      &:hover {
        border-color: ${Variable.color.primaryColor};
      }
    }
    .ant-btn {
      margin-top: 0.5rem;
      @media ${Variable.device.laptop}, ${Variable.device.tablet} {
        margin: 0;
      }
      height: 3.8rem;
      min-width: 11.5rem;
      border-radius: 0.5rem;
      background: ${Variable.color.primaryColor};
      color: ${Variable.color.whiteColor};
      box-shadow: none;
      padding: 0px 2rem;
    }
    .ant-btn:last-child {
      background: ${Variable.color.whiteColor};
      border: 1px solid ${Variable.color.primaryColor};
      color: ${Variable.color.primaryColor};
    }
  }
`
