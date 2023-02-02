import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const HomeBtnWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 999;
  .btn_home {
    width: 4rem;
    height: 4rem;
    padding: 0;
    border-radius: 0.8rem;
    outline: none;
    border: none;
    background-color: ${Variable.color.whiteColor};
    box-shadow: ${Variable.boxShadow.shadowColor};
    cursor: pointer;
    &:hover {
      color: ${Variable.color.primaryColor};
      background-color: ${Variable.color.primarySuperLight};
    }
  }
`
