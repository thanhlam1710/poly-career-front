import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const RecruimentWrapper = styled.div`
  .note {
    font-weight: ${Variable.fw.bold};
    width: fit-content;
    flex-shrink: 0;
  }
  .select {
    width: 30rem;
  }
  .condition {
    padding: 0.5rem;
    border-radius: 2rem;
    font-weight: ${Variable.fw.bold};
    color: ${Variable.color.primaryColor};
    background-color: ${Variable.color.primarySuperLight};
    text-align: center;
  }
  .other {
    text-align: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
      background-color: ${Variable.color.primarySuperLight};
      line-height: 1.7rem;
    }
  }
  .recruiment_name {
    font-weight: ${Variable.fw.bold};
    font-size: ${Variable.fontsize["1.4"]};
  }
  .sub_title {
    margin-top: 0.8rem;
    font-size: ${Variable.fontsize["1.2"]};
    .label {
      color: ${Variable.color.textBlur};
    }
  }
  .ant-table-thead > tr > th {
    font-weight: ${Variable.fw.bold};
  }
`

export const RecruitmentStatistical = styled.div`
  width: 30rem;
  height: 7.2rem;
  background-color: ${Variable.color.primarySuperLight};
  border-radius: 0.5rem;
  font-size: ${Variable.fontsize["1.6"]};
  font-weight: ${Variable.fw.bold};
  color: ${Variable.color.primaryText};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const WrapperButton = styled.div`
  div {
    gap: 2rem;
    margin: 2rem 0;
    button {
      width: 15rem;
    }
  }
  .checkbox {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    span {
      color: ${Variable.color.textBlur};
      font-size: ${Variable.fontsize["1.4"]};
    }
  }
`

export const WrapperBorder = styled.div`
  width: 100%;
  max-width: 73.2rem;
  margin: 0 auto;
  .border {
    border: 1px solid ${Variable.color.greyColor};
    padding: 1.6rem;
    gap: 4rem;
    border-radius: 5px;
  }
`
