import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const WrapperBoxDetail = styled.div`
  .title {
    color: ${Variable.color.primaryText};
    font-size: ${Variable.fontsize["2.4"]};
    font-weight: ${Variable.fw.bold};
    margin: 0 0 2rem;
  }
  .info {
    background: ${Variable.color.primarySuperLight};
    margin-bottom: 2rem;
    padding: 1.6rem 1.6rem 0;
    p {
      font-weight: ${Variable.fw.bold};
      margin-bottom: 1.6rem;
      text-decoration-line: underline;
    }

    &__list {
      &--item {
        display: flex;
        margin-bottom: 2rem;
        align-items: center;
        img {
          margin-right: 1rem;
          width: 40px;
          height: 40px;
        }

        .item__content {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  .address {
    background: ${Variable.color.primarySuperLight};
    margin-bottom: 2rem;
    padding: 1rem 1rem 2rem;
    p {
      font-weight: ${Variable.fw.bold};
      margin-bottom: 1.6rem;
      text-decoration-line: underline;
    }
  }

  .data {
    h3 {
      font-size: ${Variable.fontsize["1.8"]};
      font-weight: ${Variable.fw.bold};
    }
    p {
      width: 100%;
      font-size: ${Variable.fontsize["1.4"]};
      font-family: "Roboto", sans-serif;
      white-space: pre-wrap;
    }

    ul {
      margin-left: 2.2rem;
      margin-bottom: 2rem;
      padding: 0;
    }
  }
`
