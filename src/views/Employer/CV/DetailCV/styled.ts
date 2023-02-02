import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const DetailCVWrapper = styled.div`
  .detail-cv__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .space-bd {
    padding-bottom: 3rem;
    border-bottom: 1px solid ${Variable.color.greyColor};
  }

  .mail-recruitment {
    padding-top: 3rem;
    .mail__title {
      font-size: ${Variable.fontsize["1.8"]};
      font-weight: ${Variable.fw.bold};
      margin-bottom: 1rem;
    }

    .mail__content {
      font-size: ${Variable.fontsize["1.6"]};
    }
  }
`
export const HeaderDetailCVLeft = styled.div`
  display: flex;
  .avatar {
    width: 10.5rem;
    height: 10.5rem;
    border-radius: 50%;
  }

  .info {
    margin-left: 2.5rem;
    flex-direction: column;
    font-weight: ${Variable.fw.bold};
    &__name {
      font-size: ${Variable.fontsize["2"]};
    }
    &__specialized {
      font-size: ${Variable.fontsize["1.8"]};
      color: ${Variable.color.textBlur};
    }
    &__save {
      &-profile {
        width: 15rem;
        height: 4rem;
        border-radius: 0.5rem;
        border: none;
        box-shadow: none;
        font-weight: ${Variable.fw.bold};
        color: ${Variable.color.primaryColor};
        background-color: ${Variable.color.primarySuperLight};
        &:hover {
          border: 1px solid ${Variable.color.primaryLight};
        }
      }
    }
    .ant-btn > .anticon + span {
      margin-left: 0.3rem;
    }
    .red {
      color: red;
      transition: all 0.5s;
    }
  }
`

export const HeaderDetailCVRight = styled.div`
  .file-cv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: ${Variable.fw.bold};
    font-size: ${Variable.fontsize["1.6"]};
    margin-bottom: 1rem;
    .btn-file {
      display: flex;
      gap: 0.3rem;
      align-items: center;
      cursor: pointer;
      color: ${Variable.color.textBlur};
    }
  }

  .name-file {
    font-size: ${Variable.fontsize["1.4"]};
    width: 38rem;
    padding: 0.5rem;
    background-color: ${Variable.color.primarySuperLight};

    svg {
      color: ${Variable.color.redColor};
    }
  }
`

export const InfoDetailCV = styled.div`
  padding: 3rem 0;
  border-bottom: 1px solid ${Variable.color.greyColor};
  .header-title {
    font-size: ${Variable.fontsize["1.8"]};
    font-weight: ${Variable.fw.bold};
    margin-bottom: 1rem;
  }

  .item {
    padding-right: 1rem;
    margin-bottom: 1rem;
    font-size: ${Variable.fontsize["1.6"]};

    &__title {
      font-size: ${Variable.fontsize["1.6"]};
    }
    .hide {
      color: ${Variable.color.textBlur};
      img {
        margin-right: 0.5rem;
      }
    }
  }
`
