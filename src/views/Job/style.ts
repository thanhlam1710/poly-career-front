import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const WrapperJobs = styled.div`
  padding-bottom: 6rem;
  @media ${Variable.device.laptop}, ${Variable.device.tablet} {
    padding-top: 2rem;
    background-color: ${Variable.color.greyLight};
  }
  .container {
    width: 100%;
    @media ${Variable.device.laptop}, ${Variable.device.tablet} {
      margin: 0 auto;
      max-width: 128rem;
    }
  }
  .container__box-search {
    width: 100%;
    @media ${Variable.device.laptop} {
      width: 128rem;
    }
  }
  .container__inner {
    margin-top: 0rem;
    @media ${Variable.device.laptop}, ${Variable.device.tablet} {
      margin-top: -1.5rem;
    }
  }
  .container__main {
    margin: 1rem;
    margin-top: 1rem;
    max-width: 128rem;
    padding: 0;
    @media ${Variable.device.laptop}, ${Variable.device.tablet} {
      margin: 0;
      margin-top: 4rem;
    }
    .container__total {
      font-size: ${Variable.fontsize["2.4"]};
      font-weight: ${Variable.fw.bold};
    }

    .no-result {
      font-weight: ${Variable.fw.bold};
      font-size: ${Variable.fontsize["2.2"]};
    }
  }
`

export const RowResult = styled.div`
  width: 100%;
  gap: 6rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 72% 1fr;
  @media ${Variable.device.laptop}, ${Variable.device.tablet} {
    margin-top: 2rem;
  }
  .container__box {
    width: 100%;
  }
  .container__list-job {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    @media ${Variable.device.mobile} {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
  .pagination {
    margin-top: 2rem;
  }
  .container__advertisement {
    .container__poster {
      margin-bottom: 2rem;
      img {
        width: 100%;
        max-width: 30rem;
      }
    }
  }
  @media (max-width: 1024px) {
    grid-template-columns: 100%;
    .container__advertisement {
      display: none;
    }
  }
`
export const JobsTitleContainer = styled.div`
  display: grid;
  border-radius: 5px 5px 0px 0px;
  background-color: ${Variable.color.primaryColor};
  padding: 3rem 4rem;
  gap: 2rem;
  @media ${Variable.device.mobile} {
    padding: 1rem 2rem;
    gap: 1rem;
    text-align: justify;
  }
  .jobs__title,
  .jobs__text {
    color: ${Variable.color.whiteColor};
  }
  .jobs__title {
    font-size: ${Variable.fontsize[2]};
    font-weight: ${Variable.fw.bold};
  }
  .jobs__text {
    font-size: ${Variable.fontsize["1.8"]};
  }
  @media ${Variable.device.mobile} {
    .jobs__title {
      font-size: ${Variable.fontsize["1.8"]};
    }
    .jobs__text {
      font-size: ${Variable.fontsize["1.5"]};
    }
  }
`

export const ListJobsSavedWrapper = styled.div`
  @media ${Variable.device.mobile} {
    padding: 2rem 1rem;
  }
  padding: 4rem 8rem 6rem 8rem;
  background-color: ${Variable.color.greyLight};
  .list__jobs--row {
    gap: 4rem;
    justify-content: space-between;
    @media ${Variable.device.mobile} {
      gap: 2rem;
    }
  }
  .jobs__ads {
    display: grid;
    gap: 2rem;
    @media ${Variable.device.mobile} {
      display: none;
    }
    @media ${Variable.device.tablet} {
      justify-content: center;
    }
    &--item {
      width: 100%;
      height: 60rem;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`
export const ListJobsEmptyWrapper = styled.div`
  background-color: ${Variable.color.whiteColor};
  border-radius: 0.5rem;
  .not__jobs {
    display: grid;
    background-color: ${Variable.color.whiteColor};
    padding: 4rem 0rem;
    text-align: center;
    border-radius: 0.5rem;
    gap: 2rem;
    &--text {
      color: ${Variable.color.primaryText};
      font-size: ${Variable.fontsize["1.8"]};
    }
    &--btn {
      background-color: ${Variable.color.primaryColor};
      padding: 1.6rem 3.1rem;
      border-radius: 0.5rem;
      height: unset;
      color: ${Variable.color.whiteColor};
      :hover {
        background-color: ${Variable.color.primaryLight};
        border: 0.1rem solid ${Variable.color.primaryLight};
      }
    }
  }
`
export const ListJobsHasDataWrapper = styled.div`
  display: grid;
  gap: 4rem;
  @media ${Variable.device.mobile} {
    gap: 2rem;
  }
  .yet__jobs {
    border-radius: 0.5rem;
    padding: 2rem 4rem;
    @media ${Variable.device.mobile} {
      padding: 1rem 2rem;
    }
    background-color: ${Variable.color.whiteColor};
    &--text {
      font-size: ${Variable.fontsize["1.6"]};
      span {
        font-weight: ${Variable.fw.bold};
      }
    }
  }
  .jobs__row {
    display: grid;
    gap: 2rem;
    @media ${Variable.device.mobile} {
      gap: 1rem;
    }
  }
`
