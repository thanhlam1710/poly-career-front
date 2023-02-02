import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const WrapperTemplate = styled.div`
  .profile {
    max-width: 1100px;
    margin: auto;
    .side-bar {
      .cv-filter-box {
        border-radius: 0.5rem;
        background-color: ${Variable.color.whiteColor};
        padding: 1.6rem;
        width: 100%;
        margin-bottom: 2rem;
        .box-filter,
        .order-box {
          text-align: left;
          .title-filter {
            margin-bottom: 1rem;
            font-size: ${Variable.fontsize["1.6"]};
            font-weight: ${Variable.fw.bold};
            &__item {
              width: 100%;
              margin-bottom: 1rem;
            }
          }
        }
      }

      .cv-image {
        width: 100%;
      }
    }

    .list-template-cv {
      &__body {
        padding: 0 2rem;
        .heading {
          padding: 0 1rem;
          .suggest-title {
            line-height: 3rem;
            font-weight: ${Variable.fw.bold};
            color: ${Variable.color.primaryColor};
            margin-top: 2rem;
            margin-bottom: 1rem;
            padding: 0;
            font-size: ${Variable.fontsize["2.4"]};
          }
        }
        .box-shadow {
          box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.08);
        }
        .container {
          margin-top: 2rem;
          .template-cv-item {
            background-color: ${Variable.color.whiteColor};
            height: 38rem;
            border-radius: 0.5rem;
            margin-bottom: 2.5rem;
            text-align: left;
            width: 100%;
            overflow: hidden;
            margin: auto;
            .cv-img:hover .cv-overlay {
              opacity: 1;
            }
            .cv-img {
              position: relative;
              width: 100%;
              height: 100%;
              .new-template {
                border-radius: 16px;
                padding: 0.5rem 1rem;
                background-color: ${Variable.color.redColor};
                position: absolute;
                z-index: 1;
                top: 1rem;
                left: 1rem;
                font-size: ${Variable.fontsize["1"]};
                color: #fff;
              }

              img {
                width: 100%;
                height: 25rem;
                cursor: pointer;
                object-fit: cover;
              }

              .cv-overlay {
                position: absolute;
                background-color: rgba(0, 0, 0, 0.7);
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                opacity: 0;
                transition: all 0.2s ease;
                display: flex;
                justify-content: center;
                align-items: center;
                .control {
                  text-align: center;
                  .preview-button {
                    cursor: pointer;
                    display: inline-block;
                    padding: 1rem 2rem;
                    color: ${Variable.color.whiteColor};
                    border-radius: 3rem;
                    width: 80%;
                    margin-bottom: 1.6rem;
                    background-color: transparent;
                    border: 0.1rem solid ${Variable.color.whiteColor};
                    text-align: center;
                    font-size: ${Variable.fontsize["1.6"]};
                    font-weight: 600;
                  }
                  .create-cv-button {
                    cursor: pointer;
                    display: inline-block;
                    padding: 1rem 2rem;
                    color: ${Variable.color.whiteColor};
                    border-radius: 3rem;
                    width: 80%;
                    margin-bottom: 1.6rem;
                    background-color: ${Variable.color.primaryColor};
                    text-align: center;
                    font-size: ${Variable.fontsize["1.6"]};
                    font-weight: 600;
                    line-height: 2.6rem;
                  }
                }
              }
            }

            &__info {
              padding: 1.5rem;
              .template-cv-item-tag {
                background-color: ${Variable.color.primarySuperLight};
                color: ${Variable.color.primaryColor};
                font-weight: ${Variable.fw.bold};
                padding: 0.3px 0.8rem;
                border-radius: 0.3rem;
                text-transform: capitalize;
                font-size: 1.1rem;
                margin-right: 0.3rem;
              }
              .template-cv-title {
                font-weight: ${Variable.fw.bold};
                color: #333;
                margin-top: 1.2rem;
                color: #666;
                height: 5rem;
                font-size: ${Variable.fontsize["1.6"]};
                span:hover {
                  cursor: pointer;
                  color: ${Variable.color.primaryColor};
                  text-decoration: none;
                }
              }
              .template-cv-colors {
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 0.8rem;
                margin-right: 0.8rem;
              }
            }
          }
        }
      }
    }
  }
`

export const WrapperModalTemplate = styled.div`
  .modal-title {
    font-size: ${Variable.fontsize["1.8"]};
    color: ${Variable.color.primaryColor};
    font-weight: ${Variable.fw.bold};
  }

  .nav-control {
    margin: 1.6rem 0;
    p {
      font-size: ${Variable.fontsize["1.6"]};
      font-weight: ${Variable.fw.bold};
      margin-bottom: 0.3rem;
    }
    &__item {
      margin-top: 1.6rem;
      .item__select {
        width: 100%;
      }
      .template-cv-colors {
        cursor: pointer;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 1.2rem;
        margin-right: 0.8rem;
      }

      .btn--control {
        border-radius: 0.5rem;
        width: 100%;
        font-weight: ${Variable.fw.bold};
        height: 5rem;
      }
    }
  }
`
