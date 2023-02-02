import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const AuthWrapper = styled.div`
  background-color: ${Variable.color.whiteColor};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container__login {
    background-color: ${Variable.color.whiteColor};
    &__slider {
      display: none;
      background-color: rgba(102, 103, 171, 0.1);
      img {
        width: 100%;
      }
    }
  }
  @media ${Variable.device.tablet} {
    background-color: ${Variable.color.primaryColor};
    .container__login {
      width: 90%;
      max-width: 100rem;
      border-radius: 2rem;
      box-shadow: ${Variable.boxShadow.shadowColor};
      position: absolute;
      &__slider {
        max-width: 100rem;
        width: 70rem;
        display: flex;
        align-items: center;
      }
    }
  }

  @media ${Variable.device.laptop} {
    .container__login {
      .login-slider {
        width: 100rem;
      }
    }
  }

  @media ${Variable.device.mobile} {
    .container__login {
      width: 100%;
    }
  }
`

export const FormAuth = styled.div`
  padding: 4rem;
  .ant-form-item {
    margin: 0;
  }
  .form__forgot--pass {
    margin-top: 1rem;
    font-size: ${Variable.fontsize["1.4"]};
    text-align: right;
    a {
      color: ${Variable.color.primaryColor};
    }
  }
  .logo {
    margin: auto;
    &__login {
      width: 10rem;
      height: 10rem;
      margin: auto;
      background-color: ${Variable.color.primaryColor};
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${Variable.fontsize["6"]};
      color: ${Variable.color.whiteColor};
    }
    .auth__form--title {
      font-weight: ${Variable.fw.bold};
      text-align: center;
      font-size: ${Variable.fontsize["2.4"]};
      margin: 2rem 0;
    }
  }
  .underline {
    margin-bottom: 2.5rem;
    input {
      padding: 1rem;
    }
  }

  .control__submit {
    width: 100%;
    &--btn {
      border-radius: 0.5rem;
      width: 100%;
      height: 5.1rem;
    }
  }

  .option__auth {
    margin-top: 2rem;
    text-align: center;
    &--employer {
      margin-bottom: 2rem;
    }
  }
  a {
    cursor: pointer;
    color: ${Variable.color.primaryColor};
  }
  .form__employer {
    margin-top: 2rem;
    label {
      font-weight: ${Variable.fw.bold};
      font-size: ${Variable.fontsize[1.6]};
    }
  }
  .note {
    margin-top: 1rem;
    text-align: center;
    font-size: ${Variable.fontsize["1.4"]};
    color: ${Variable.color.textBlur};
    a {
      font-weight: ${Variable.fw.bold};
    }
  }
  @media ${Variable.device.mobile} {
    .form__employer {
      label {
        font-size: ${Variable.fontsize[1.4]};
      }
    }
    .option__auth {
      &--employer {
        font-size: ${Variable.fontsize[1.2]};
      }
    }
  }
`
export const AuthWrapperEmployer = styled.div`
  background-color: ${Variable.color.primaryColor};
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  .container__login--employer {
    background-color: ${Variable.color.whiteColor};
    width: 50rem;
    border-radius: 2rem;
    height: fit-content;
    .title {
      font-size: ${Variable.fontsize["2.4"]};
      font-weight: ${Variable.fw.bold};
      &--sub {
        font-size: ${Variable.fontsize["1.6"]};
        font-weight: ${Variable.fw.bold};
        margin-bottom: 2rem;
      }
    }
  }
  @media ${Variable.device.mobile} {
    background-color: ${Variable.color.whiteColor};
    .container__login--employer {
      .title {
        font-size: ${Variable.fontsize["1.8"]};
      }
    }
  }
`
