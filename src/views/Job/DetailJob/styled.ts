import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const WrapperDetailJob = styled.div`
  min-height: 50rem;
  padding: 2rem 0 6rem;
  background-color: ${Variable.color.greyLight};
  .detail-job {
    max-width: 110rem;
    margin: auto;
  }
`

export const WrapperCurrent = styled.div`
  width: 100%;
  .current {
    gap: 1rem;
    &__col {
      text-align: right;
      width: 100%;
      max-width: 18rem;
      .saved {
        color: ${Variable.color.redColor};
        border-color: ${Variable.color.redColor};
      }

      .btn {
        max-width: 18rem;
        width: 100%;
        height: 5rem;
      }
    }

    @media ${Variable.device.mobile} {
      width: 100%;
      &__col {
        .btn {
          width: 95%;
          min-width: 14rem;
          height: 5rem;
          margin-bottom: 0;
        }
      }
    }
  }
`

export const WrapperDetailJobHeader = styled.div`
  .header {
    border-radius: 0.5rem;
    background-color: ${Variable.color.whiteColor};
    padding: 2.5rem 2rem;
    margin-bottom: 2rem;
    min-height: 16rem;
    &__col {
      display: flex;
    }
    &__logo {
      width: 11rem;
      height: 11rem;
      .ant-image {
        width: 11rem;
        height: 11rem;
      }
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
      }
    }
    &__info {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &--title {
        line-height: 1.2;
        font-size: ${Variable.fontsize["2.4"]};
        font-weight: ${Variable.fw.bold};
        color: ${Variable.color.primaryColor};
        margin-bottom: 1.6rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    &__company {
      &--title {
        width: fit-content;
        font-size: ${Variable.fontsize["1.6"]};
        font-weight: ${Variable.fw.bold};
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      &--deadline {
        font-size: ${Variable.fontsize["1.4"]};
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    &__apply {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }

    @media ${Variable.device.mobile} {
      border-radius: 0;
      padding: 2rem;
      &__logo {
        /* width: 8.7rem; */
        height: 100%;
        .ant-image {
          width: 11rem;
          height: 11rem;
        }
      }
      &__info {
        margin: 0 0 0 1rem;
        &--title {
          font-size: ${Variable.fontsize["1.6"]};
          line-height: 1.2;
          margin-bottom: 1rem;
        }
      }
      &__company {
        &--title {
          font-size: ${Variable.fontsize["1.4"]};
        }
        &--deadline {
          font-size: ${Variable.fontsize["1.2"]};
        }
      }
      &__apply {
        margin-top: 1rem;
        width: 100%;
      }
    }
  }
`

export const WrapperInfoJob = styled.div`
  margin: 0;
  .info-job {
    padding: 0 2rem;
    &__title {
      padding: 2rem 0;
    }
    &__col {
      padding: 2rem;
      border-radius: 0.5rem;
      background-color: ${Variable.color.whiteColor};
      @media ${Variable.device.mobile} {
        border-radius: 0;
        padding: 2rem 1rem;
      }
    }
    &__apply {
      h3 {
        font-size: ${Variable.fontsize["1.8"]};
        font-weight: ${Variable.fw.bold};
      }
      p {
        font-size: ${Variable.fontsize["1.4"]};
      }
    }
    &__col-n {
      .eeQSRq {
        min-width: 0rem;
      }
      @media ${Variable.device.mobile} {
        padding: 0 1rem;
      }
      .recommend-job {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
      }
    }
  }
  @media (max-width: 992px) {
    .ant-col-sm-24 {
      .info-job__col-n {
        padding-left: 1rem;
      }
    }
  }
  @media (min-width: 992px) {
    .ant-row {
      flex-direction: row;
      /* margin-right: 0 !important; */
    }
    .ant-col-lg-8 {
      /* padding: 0 !important; */
    }
  }
`
