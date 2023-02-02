import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const HomeWrapper = styled.div`
  height: 100%;
  .wrapper__banner {
    overflow: hidden;
    margin-top: 2rem;
    position: relative;
    .home__banner {
      position: relative;
      overflow-x: hidden;
      background-color: ${Variable.color.primaryColor};
      &__slider {
        justify-content: flex-end;
        .slider__container {
          position: relative;
          z-index: 1;
          margin-left: auto;
          margin-right: auto;
          overflow: hidden;
          padding: 0;
        }
      }
    }
    .sub__banner {
      overflow: hidden;
      width: 42%;
      height: 26rem;
      position: absolute;
      background-color: ${Variable.color.whiteColor};
      top: 50%;
      margin-left: 5.5%;
      border-radius: 0.5rem;
      transform: translateY(-50%);
      z-index: 10;
      .btn-box {
        display: flex;
        justify-content: flex-end;
        .ant-btn {
          border: none;
          outline: none;
          background-color: ${Variable.color.primaryColor};
          color: ${Variable.color.whiteColor};
          &:hover {
            background-color: ${Variable.color.primaryLight};
          }
        }
      }
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
      .box__body {
        &__content {
          width: 100%;
          height: 100%;
        }
      }
    }
    @media (min-width: 740px) and (max-width: 1108px) {
      .sub__banner {
        display: none;
      }
      .slick-slide {
        /* width: 100% !important; */
      }
    }
    @media (min-width: 375px) and (max-width: 739px) {
      height: fit-content;
      .home__banner {
        height: auto;
      }
      .sub__banner {
        max-width: 50%;
        max-height: 80%;
        margin-left: 2rem;
        top: 50%;
        background-color: rgba(0, 0, 0, 0.2);
        transition: cubic-bezier(1, 0, 0, 1);
        &__box {
          height: 100%;
        }
      }
      .box__body {
        &__content {
          height: 100%;
        }
      }
      .box__body__content-item:nth-child(3) {
        align-items: center;
        height: 4rem;
        .ant-btn {
          background-color: ${Variable.color.primaryColor};
          color: ${Variable.color.whiteColor};
          border: none;
          outline: none;
          min-height: 4rem;
          font-size: ${Variable.fontsize["1.2"]};
          font-weight: 500;
          &:hover {
            background-color: ${Variable.color.primaryLight};
          }
        }
      }
    }
  }
  .wrapper__search {
    overflow: hidden;
  }
  .wrapper__company {
    .trending__title {
      color: ${Variable.color.primaryColor};
    }
    .company__item {
      height: 200px;
    }
  }
  .wrapper__hot {
    background-color: ${Variable.color.primarySuperLight};

    .hot__title {
      padding: 1.2rem 0 0;
      color: ${Variable.color.primaryText};
      font-weight: ${Variable.fw.bold};
    }
    .ant-tabs-tab {
      font-size: ${Variable.fontsize["1.6"]};
      padding: 2rem 0 0.2rem 0;
      @media ${Variable.device.mobile} {
        padding: 0 0 0.2rem 0;
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
  }
  @media (min-width: 740px) and (max-width: 1282px) {
    padding: 0 1.4rem;
    .wrapper__hot,
    .wrapper__company {
      padding: 0 1rem;
    }
  }
  @media (min-width: 375px) and (max-width: 739px) {
    .sub__banner {
      display: none;
    }
    .wrapper__hot,
    .wrapper__company {
      padding: 0 1rem;
      .ant-row {
        row-gap: 1rem !important;
      }
    }
  }
`
export const SliderItem = styled.div`
  .slider__item {
    position: relative;
    &-link {
      display: block;
    }
    &-image {
      position: relative;
      height: 30rem;
      @media (min-width: 375px) and (max-width: 739px) {
        height: 100%;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
  }
  @media (min-width: 740px) and (max-width: 1023px) {
  }
  @media (min-width: 375px) and (max-width: 739px) {
    .slider__item {
      &-image {
        padding-top: 50%;
        img {
          padding-top: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`
export const BoxBodyContentItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${Variable.color.primaryText};
  h2 {
    font-weight: ${Variable.fw.bold};
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
  }
  @media (min-width: 740px) and (max-width: 1023px) {
  }
  @media (min-width: 375px) and (max-width: 739px) {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: ${Variable.fontsize["1.4"]};
      text-align: center;
      margin-top: 2rem;
      color: ${Variable.color.whiteColor};
      padding-top: 2rem;
    }
    div {
      display: none;
    }
  }
`
export const BoxTopImage = styled.div`
  height: 19rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
  }
  @media (min-width: 740px) and (max-width: 1023px) {
  }
  @media (min-width: 375px) and (max-width: 739px) {
    display: none;
  }
`
export const BoxBodyItemImage = styled.div`
  overflow: hidden;
  position: absolute;
  left: 1rem;
  transform: translateY(-50%);
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${Variable.color.whiteColor};
  img {
    object-fit: contain;
    width: 12rem;
    height: 12rem;
    padding: 0.5rem;
    &:hover {
      transform: scale(1.01);
    }
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
  }
  @media (min-width: 740px) and (max-width: 1023px) {
  }
  @media (min-width: 375px) and (max-width: 739px) {
    position: absolute;
    left: 35%;
    right: 0;
    background-color: transparent;
    transform: translateY(0);
    padding-top: 1rem;
    img {
      width: 50%;
      height: 50%;
      padding: 0;
      &:hover {
        transform: scale(1.01);
      }
    }
  }
`

export const TrendingBox = styled.div`
  .trending {
    margin-top: 1rem;
    flex-wrap: wrap;
    .card {
      cursor: pointer;
      width: 23.5%;
      min-width: 22.9rem;
      @media (min-width: 375px) and (max-width: 600px) {
        width: 100%;
      }
      @media (min-width: 601px) and (max-width: 1023px) {
        width: 48%;
      }
    }
    &__title {
      color: ${Variable.color.primaryColor};
    }
    &__item {
      background-color: ${Variable.color.primarySuperLight};
      border-radius: 0.5rem;
      padding: 2.5rem 3rem;
      .content {
        width: 15rem;
        max-height: 11.5rem;
        color: ${Variable.color.primaryText};
        overflow: hidden;
        white-space: nowrap;
        @media (min-width: 375px) and (max-width: 1023px) {
          width: 100%;
        }
      }
      .circle {
        width: 5rem;
        height: 5rem;
        padding: 1rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${Variable.color.primaryColor};
        span {
          width: 3rem;
          height: 3rem;
          font-size: 2.6rem;
          color: ${Variable.color.whiteColor};
        }
      }
      h3,
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &:hover {
        background-color: ${Variable.color.primaryColor};
        .circle {
          background-color: ${Variable.color.whiteColor};
          span {
            color: ${Variable.color.primaryColor};
          }
        }
        h3,
        p {
          color: ${Variable.color.whiteColor};
        }
      }
    }
  }
  @media ${Variable.device.mobile} {
    padding: 0 1rem;
  }
`

export const HandBookWrapper = styled.div`
  .handbook {
    padding: 1rem;
    min-width: 28.8rem;
    max-width: 41rem;
    width: 70%;
    cursor: pointer;
    border-radius: 0.5rem;
    &:hover {
      box-shadow: ${Variable.boxShadow.shadowBoxCompany};
    }
    img {
      width: 100%;
      height: 195px;
      object-fit: cover;
    }
    h3 {
      margin: 1rem 0;
    }
    .content {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      height: 65px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
