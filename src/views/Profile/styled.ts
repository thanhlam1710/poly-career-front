import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const StudentProfileWrapper = styled.div`
  .form__profile {
    width: 100%;
    gap: 4rem;
    padding: 2rem 17rem 6rem 17rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Variable.color.greyLight};
    @media ${Variable.device.mobile} {
      padding: 1px;
    }
  }
`
export const StudentProfileFormWrapper = styled.div`
  width: 100%;
  .row {
    background-color: ${Variable.color.whiteColor};
    .header {
      padding: 3rem 4rem;
      @media ${Variable.device.mobile} {
        padding: 1rem;
      }
      border-bottom: 1px solid ${Variable.color.greyColor};
      p {
        font-weight: ${Variable.fw.bold};
        font-size: ${Variable.fontsize["1.8"]};
      }
    }
    .body {
      padding: 3rem 4rem;
      display: flex;
      gap: 1rem;
      @media ${Variable.device.mobile} {
        padding: 1rem;
      }
      .form-group {
        width: 50%;
        @media ${Variable.device.mobile} {
          width: 100%;
        }
        .ant-form-item-control-input-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          button {
            border: none;
            box-shadow: none;
            color: ${Variable.color.primaryColor};
            font-weight: ${Variable.fw.bold};
          }
        }
        label {
          width: 18rem;
          font-weight: ${Variable.fw.bold};
          font-size: ${Variable.fontsize["1.6"]};
        }
      }
    }
    .footer {
      padding: 0 4rem 3rem;
      @media ${Variable.device.mobile} {
        padding: 1rem;
      }
      display: flex;
      justify-content: flex-end;

      button {
        box-shadow: none;
        width: 15rem;
        height: 4rem;
        border-radius: 0.5rem;
        background: ${Variable.color.primaryColor};
        color: ${Variable.color.whiteColor};
        &:hover {
          border: none;
        }
        @media ${Variable.device.mobile} {
          width: 100%;
        }
      }
    }
  }
  .row__first {
    height: fit-content;
    @media ${Variable.device.mobile} {
      height: 38rem;
    }
    .body {
      flex-direction: column;
      .form-group {
        .ant-form-item-row {
          align-items: baseline;
        }
        @media ${Variable.device.tablet} {
          min-width: 60rem;
        }
        @media ${Variable.device.laptop} {
          min-width: 70rem;
        }
      }
    }
  }
  .row__second {
    height: max-content;

    .body {
      display: block;
      .body__header {
        width: 100%;
        border-bottom: 1px solid ${Variable.color.greyColor};
        padding-bottom: 3rem;
        margin-bottom: 3rem;
        .label-avatar {
          display: flex;
          align-items: center;
          @media ${Variable.device.mobile} {
            flex-direction: column;
            align-items: center;
          }
          .avatar {
            height: 10rem;
            width: 10rem;
            min-width: 10rem;
            margin-right: 1rem;
            background-color: ${Variable.color.primaryColor};
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            @media ${Variable.device.mobile} {
              margin-right: 0;
            }
          }
          button {
            border: 1px solid ${Variable.color.primaryColor};
            border-radius: 0.5rem;
          }
          label {
            color: ${Variable.color.textBlur};
          }
          .dflex {
            margin: 1rem;
            display: flex;
            flex-direction: column;
            p {
              color: ${Variable.color.textBlur};
              @media ${Variable.device.mobile} {
                text-align: center;
              }
            }
          }
        }
        .form-group {
          width: 100%;
          .ant-row {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .ant-form-item-label {
              text-align: left;
            }
            .ant-form-item-control-input-content {
              @media ${Variable.device.mobile} {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                span {
                  text-align: center;
                }
              }
            }
          }
        }
      }
      .body__body {
        gap: 2rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .grid__layout {
          width: 49%;
          .datePicker {
            height: 5rem;
            width: 100%;
          }
          @media ${Variable.device.tablet} {
            width: 44%;
          }
          @media ${Variable.device.mobile} {
            width: 100%;
          }
          .form-group {
            width: 100%;
            .ant-row {
              display: flex;
              flex-direction: column;
              .ant-form-item-label {
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
  .row__third {
    height: max-content;
    .body {
      gap: 2rem;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;
      .grid__layout {
        width: 49%;
        @media ${Variable.device.tablet} {
          width: 44%;
        }
        @media ${Variable.device.mobile} {
          width: 100%;
        }
        .form-group {
          width: 100%;
          .ant-row {
            display: flex;
            flex-direction: column;
            .ant-form-item-label {
              text-align: left;
            }
          }
        }
      }
    }
  }
`
