import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const CvItemCardWrap = styled.div`
  .box-cv {
    border-radius: 0.5rem;
    margin-bottom: 1.6rem;
    height: 40rem;
    overflow: hidden;
    position: relative;
    img {
      left: 0;
      object-fit: cover;
      position: absolute;
      top: 0;
      transition: 0.3s;
      width: 100%;
      z-index: 1;
    }
  }
  .box-cv:hover {
    img {
      transform: scale(1.05);
    }
  }
  .box-bg {
    background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #212f3f);
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 2;
    .cv-main {
      position: absolute;
      right: 1.6rem;
      top: 1.6rem;
      background-color: ${Variable.color.whiteColor};
      border-radius: 1.2rem;
      cursor: pointer;
      font-weight: ${Variable.fw.bold};
      padding: 0.4rem 0.8rem;
      font-size: ${Variable.fontsize["1.4"]};
      &--danger {
        background: ${Variable.color.primarySuperLight};
      }
    }

    .box-info {
      bottom: 1.6rem;
      color: #fff;
      left: 1.6rem;
      position: absolute;
      right: 1.6rem;
      z-index: 3;
      .title {
        color: ${Variable.color.whiteColor};
        margin-bottom: 0.5rem;
        cursor: pointer;
      }

      .update_at {
        font-size: ${Variable.fontsize["1.5"]};
        line-height: 2rem;
        margin-bottom: 1.6rem;
      }

      .action {
        align-items: center;
        display: flex;
        list-style: none;
        margin-bottom: 0;

        .action__item {
          cursor: pointer;
          background: hsla(0, 0%, 100%, 0.2);
          border-radius: 3rem;
          font-size: ${Variable.fontsize["1.4"]};
          line-height: 1.6rem;
          margin-right: 1rem;
          padding: 0.7rem 1.4rem;
          &--large {
            padding: 1.5rem 1.4rem;
          }
        }

        .action__item:hover {
          background: hsla(0, 0%, 100%, 0.3);
        }
      }
    }
  }
`
