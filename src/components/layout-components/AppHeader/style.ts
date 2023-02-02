import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"
import { HeaderProps } from "."

export const HeaderNavWrapper = styled.div<HeaderProps>`
  display: flex;
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  .logo {
    width: ${({ collapse }) => (collapse ? "8rem" : "25rem")};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
  }
  .wrapper {
    width: calc(${({ collapse }) => (collapse ? "100% - 8rem" : "100% - 25rem")});
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header {
    &__left {
      display: flex;
      align-items: center;
      column-gap: 2rem;
    }
    &__right {
      padding-right: 2rem;
    }
    &__company {
      color: ${Variable.color.primaryText};
      line-height: 1.2;
    }
    &__input {
      width: 30rem;
      .ant-select-selector,
      .ant-input,
      .ant-select-selection-search {
        height: 100%;
        min-height: 3rem;
        border: none;
      }
      .ant-select-selection-search-input {
        height: 4rem;
      }
    }
  }
  .btn {
    &__collapse {
      font-size: 2rem;
    }
    &__action {
      height: 5rem;
    }
  }
`
