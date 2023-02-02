import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const LoginAnother = styled.div`
  margin: 1rem auto 0;
  .title {
    font-size: ${Variable.fontsize["1.4"]};
    margin-top: 1.6rem;
    text-align: center;
  }
  .login_fb {
    background-color: ${Variable.color.facebookColor};
  }
  .login_gg {
    background-color: ${Variable.color.googleColor};
  }
  .options {
    display: flex;
    justify-content: center;
    &--btn {
      cursor: pointer;
      margin-top: 1rem;
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${Variable.color.whiteColor};
      font-size: ${Variable.fontsize["2.4"]};
      font-weight: ${Variable.fw.bold};
    }
  }
`
