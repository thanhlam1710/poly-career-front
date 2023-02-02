import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const AvatarCompanyContainer = styled.div`
  background-color: ${Variable.color.whiteColor};
  border-radius: 0.5rem;
  box-shadow: ${Variable.boxShadow.shadowHeader};
  @media ${Variable.device.mobile} {
    border-radius: 0;
    box-shadow: none;
  }
  .company__profile--row {
    display: flex;
    width: 100%;
    height: 11rem;
    @media ${Variable.device.mobile} {
      height: fit-content;
      flex-direction: column;
      margin-top: -8rem;
    }
  }
  .company__profile--col {
    display: flex;
    gap: 2rem;
    @media ${Variable.device.mobile} {
      flex-direction: column;
      text-align: center;
    }
  }
  .img-cover {
    img {
      object-fit: cover;
    }
  }
  .img-contain {
    img {
      object-fit: contain;
    }
  }
  .company__profile--coverImg {
    width: 100%;
    height: 23.6rem;
    overflow: hidden;
    border-radius: 0.5rem 0.5rem 0 0;
    @media ${Variable.device.mobile} {
      border-radius: 0;
    }
    .ant-image {
      width: 100%;
      height: 100%;
      background-color: ${Variable.color.primaryColor};
    }
    img {
      width: 100%;
      height: 100%;
      /* object-fit: cover; */
    }
  }
  .company__profile--avatar {
    transform: translate(0, -6rem);
    width: 14rem;
    height: 14rem;
    padding: 0.5rem;
    background-color: ${Variable.color.whiteColor};
    border-radius: 0.5rem;
    border: 1px solid ${Variable.color.primarySuperLight};
    @media ${Variable.device.mobile} {
      margin: 0 auto;
      transform: none;
    }
    .ant-image {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 0.5rem;
    }
  }
  .company__profile--row {
    padding: 1rem 2rem 2rem;
  }

  .company__profile--infor {
    .infor-name {
      color: ${Variable.color.primaryText};
      font-weight: ${Variable.fw.bold};
      font-size: ${Variable.fontsize["2.4"]};
    }
    .infor-address {
      margin-top: 1rem;
      display: flex;
      gap: 2rem;
      @media ${Variable.device.laptop} {
        gap: 6rem;
      }
      @media ${Variable.device.mobile} {
        margin: 1rem auto;
        gap: 1rem;
        justify-content: center;
        flex-direction: column;
        width: fit-content;
      }
      .address-map,
      .address-url,
      .address-size {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: ${Variable.fontsize["1.4"]};
        color: ${Variable.color.primaryText};
        @media ${Variable.device.mobile} {
          word-break: break-all;
        }
      }
    }
  }

  .company__profile--follow {
    display: flex;
    justify-content: flex-end;
    @media ${Variable.device.mobile} {
      justify-content: center;
      margin: unset;
    }
  }
`
