import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const EmployerWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export const CICricleBoxWrapper = styled.div`
  .ant-card-body {
    padding: 1.6rem;
    .turnover {
      font-weight: 600;
      color: ${Variable.color.primaryLight};
      font-size: 14px;
    }
    .ant-typography {
      font-weight: ${Variable.fw.bold};
      font-size: ${Variable.fontsize["3"]};
      margin-bottom: 0;
    }
    .bnb2 {
      font-weight: 600;
      color: ${Variable.color.upColor};
      font-size: ${Variable.fontsize["1.4"]};
    }

    .icon-box {
      display: flex;
      width: 48px;
      height: 48px;
      text-align: center;
      background-color: ${Variable.color.primaryColor};
      color: ${Variable.color.whiteColor};
      border-radius: 0.5rem;
      margin-left: auto;
      line-height: 55px;
      align-items: center;
      justify-content: center;
      span {
        font-size: ${Variable.fontsize["2.4"]};
      }
    }
  }
`
