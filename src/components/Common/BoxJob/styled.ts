import styled from "styled-components"
import { StylesProps } from "interfaces/Styled"
import { Variable } from "styles/app/variable/Variable"

export const BoxJobWrapper = styled.div<StylesProps>`
  min-width: 32.8rem;
  width: 100%;
  border-radius: 0.5rem;
  background: ${Variable.color.whiteColor};
  padding: 1rem;
  overflow: hidden;
  border: ${({ border }) => border && border};
  .title--mobile,
  .info__title,
  .info__company {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info__title {
    font-weight: ${Variable.fw.bold};
  }
  .info__title,
  .title--mobile {
    &:hover {
      color: ${Variable.color.primaryText};
      text-decoration: underline;
    }
  }
  .info__company {
    font-size: ${Variable.fontsize["1.6"]};
    &:hover {
      color: ${Variable.color.textBlur};
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .title--mobile {
    max-width: calc(100% - 3rem);
    font-weight: ${Variable.fw["bold"]};
    font-size: ${Variable.fontsize["1.6"]};
  }
`

export const BoxJobContainer = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  align-items: center;
  gap: 0.5rem;
  height: 10rem;
  position: relative;
  @media ${Variable.device.mobile} {
    grid-template-columns: 6.2rem 1fr;
    height: fit-content;
  }
  .ant-image {
    width: 10rem;
    height: 10rem;
    @media ${Variable.device.mobile} {
      width: 6rem;
      height: 6rem;
    }
    .ant-image-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &.container--small {
    grid-template-columns: 5.6rem 1fr;
    height: fit-content;
    .ant-image {
      width: 5.6rem;
      height: 5.6rem;
    }
  }
  .icon--loved {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent !important;
    font-size: ${Variable.fontsize["1.8"]};
    position: absolute;
    right: 1rem;
    top: 1rem;
    @media ${Variable.device.mobile} {
      top: 0;
    }
    &.icon--small {
      top: -3rem;
      right: 0;
    }
    span {
      color: ${Variable.color.primaryColor};
      svg {
        width: 2.44rem;
        height: 2.4rem;
      }
    }
    .loved {
      span {
        color: ${Variable.color.redColor};
      }
    }
  }
`
export const ImageStyled = styled.div`
  height: 10rem;
  width: 10rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media ${Variable.device.mobile} {
    height: 6.2rem;
    width: 6.2rem;
  }
  &.image--small {
    height: 6.2rem;
    width: 6.2rem;
  }
`
export const InfoStyled = styled.div`
  width: 100%;
  min-width: 20rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .info {
    height: 100%;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: ${Variable.fontsize["1.8"]};
    &__title {
      max-width: 95%;
      width: fit-content;
      @media ${Variable.device.mobile} {
        width: 85%;
        font-size: ${Variable.fontsize["1.4"]};
      }
    }
    &__company {
      max-width: 95%;
      width: fit-content;
      color: ${Variable.color.textBlur};
      @media ${Variable.device.mobile} {
        font-size: ${Variable.fontsize["1.2"]};
      }
    }
    &__wage {
      width: 100%;
      max-width: 25rem;
      margin-bottom: 0rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      &--item {
        display: flex;
        align-items: center;
        gap: 0.1rem;
        font-size: ${Variable.fontsize["1.2"]};
        font-weight: ${Variable.fw["bold"]};
        @media ${Variable.device.mobile} {
          font-size: ${Variable.fontsize["1"]};
        }
      }
    }
  }
`
