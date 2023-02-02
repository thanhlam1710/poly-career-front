import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const HeaderContainer = styled.div`
  padding: 0 2rem;
  height: 6.4rem;
  display: flex;
  align-items: center;
  max-width: 130.4rem;
  margin: 0 auto;
  justify-content: space-between;
  color: ${Variable.color.whiteColor};
  position: relative;
  .header__link {
    gap: 2rem;
    font-size: ${Variable.fontsize["1.4"]};
    ul {
      display: flex;
      align-items: center;
      margin-bottom: 0;
      li {
        list-style: none;
        padding: 0.7rem 1.4rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        border-radius: 0.5rem;
        font-weight: ${Variable.fw.bold};
        :hover {
          background-color: ${Variable.color.primaryLight};
        }
      }
    }
    .ant-dropdown ul {
      padding: 1rem;
    }
  }

  .header__logo--img {
    width: 13rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .header__user {
    height: fit-content;
    transition: 0.5s ease-in-out;
    max-height: 5rem;
    gap: 1.5rem;
    cursor: pointer;
    &--btn {
      padding: 0.7rem 1.4rem;
      height: fit-content;
      border-radius: 0.5rem;
      border: none;
      box-shadow: none;
      font-size: ${Variable.fontsize["1.4"]};
      font-weight: ${Variable.fw.bold};
      background-color: ${Variable.color.primaryColor};
      color: ${Variable.color.whiteColor};
      :hover {
        background-color: ${Variable.color.primaryLight};
      }
    }
    &--login,
    &--register {
      padding: 1.3rem 1.6rem;
      height: fit-content;
      font-size: ${Variable.fontsize["1.4"]};
      font-weight: ${Variable.fw.bold};
      border-radius: 0.5rem;
      border: 0.1rem solid ${Variable.color.primaryColor};
    }
    &--login {
      color: ${Variable.color.primaryColor};
      :hover {
        background-color: ${Variable.color.primarySuperLight};
      }
    }
    &--register {
      border: 1px solid transparent;
      background-color: ${Variable.color.primaryColor};
      color: ${Variable.color.whiteColor};
      :hover {
        background-color: ${Variable.color.primaryLight};
        border: 0.1rem solid ${Variable.color.primaryLight};
      }
    }
    &--employer {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 2rem;
      border-radius: 0.5rem;
      border: 1px solid transparent;
      background-color: ${Variable.color.primarySuperLight};
      font-size: ${Variable.fontsize["1.4"]};
      font-weight: ${Variable.fw.bold};
      color: ${Variable.color.primaryColor};
      :hover {
        background-color: ${Variable.color.primaryColor};
        color: ${Variable.color.whiteColor};
      }
    }
    &--icon {
      transition: all 0.3s ease-in-out;
      transform: rotate(3.142rad);
    }
    &--avatar {
      width: 3.2rem;
      height: 3.2rem;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--name {
      font-size: ${Variable.fontsize["1.6"]};
      font-weight: ${Variable.fw.bold};
    }
    &--dropdown {
      user-select: none;
      transition: all 0.3s ease-in-out;
    }
  }
`

export const HeaderMobileContainer = styled.div`
  padding: 1rem;
  background: ${Variable.color.whiteColor};
  box-shadow: ${Variable.boxShadow.shadowHeader};
  .header__moblie--row {
    .header__logo {
      width: 15.6rem;
      height: 4.8rem;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .header__user {
      &--logo {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        cursor: pointer;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .header__menu--icons,
  .header__user--icons {
    font-size: ${Variable.fontsize["2"]};
  }
  .backdrop {
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: ${Variable.color.backDropColor};
    visibility: hidden;
    &--open {
      visibility: visible;
    }
  }
  .sibebar__menu {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 30rem;
    height: 100%;
    background-color: ${Variable.color.whiteColor};
    padding: 1rem;
    transform: translateX(-100%);
    transition: all 0.4s;
    ul {
      margin-bottom: 0;
      width: 100%;
      li {
        padding: 1rem;
        transition: 0.3s all;
        cursor: pointer;
        list-style: none;
        :hover {
          background-color: ${Variable.color.primaryColor};
          a {
            color: ${Variable.color.whiteColor};
          }
        }
        a {
          font-size: ${Variable.fontsize["1.6"]};
          color: ${Variable.color.primaryText};
        }
      }
    }
    &--open {
      transform: unset;
    }
  }
  .sibebar__user {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    max-width: 30rem;
    height: 100vh;
    background-color: ${Variable.color.whiteColor};
    padding: 1rem;
    transform: translateX(150%);
    transition: all 0.4s;
    ul {
      margin-bottom: 0;
      width: 100%;
      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: ${Variable.fontsize["2"]};
        list-style: none;
        padding: 1rem;
        transition: 0.3s all;
        cursor: pointer;
        :hover {
          background-color: ${Variable.color.primaryColor};
          color: ${Variable.color.whiteColor};
          a,
          span {
            color: ${Variable.color.whiteColor};
          }
        }
        a,
        span {
          font-size: ${Variable.fontsize["1.6"]};
          color: ${Variable.color.primaryText};
        }
      }
    }
    &--open {
      transform: unset;
    }
  }
`
