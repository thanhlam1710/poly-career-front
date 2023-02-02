import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const WrapperCV = styled.div`
  max-width: 80rem;
  margin: 2rem auto;
  box-shadow: ${Variable.boxShadow.shadowBoxCompany};
`

export const HeaederCV = styled.div`
  padding: 2rem;
  display: grid;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  background-color: ${Variable.color.primaryColor};
  .header__cv--avatar {
    width: 15rem;
    height: 15rem;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .header__cv--name {
    font-size: ${Variable.fontsize["2.4"]};
    font-weight: ${Variable.fw.bold};
    color: ${Variable.color.whiteColor};
    text-transform: uppercase;
  }
  .header__cv--job {
    color: ${Variable.color.greyLight};
    font-size: ${Variable.fontsize["2"]};
  }
`

export const MainCV = styled.div`
  padding: 4rem;
  .cv__title {
    margin-bottom: 2rem;
  }
  .cv__col {
    display: grid;
    gap: 4rem;
  }
  .cv__line {
    border-left: 2px solid ${Variable.color.greyLight};
    height: auto;
    @media ${Variable.device.mobile} {
      display: none;
    }
    @media only screen and (max-width: 1199px) {
      display: none;
    }
  }
`
export const ContactContainer = styled.div`
  .cv__contact {
    display: grid;
    gap: 1rem;
    &--infor {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      gap: 1rem 1rem;
      .infor__icons {
        span {
          font-size: ${Variable.fontsize["1.6"]};
        }
      }
      span {
        font-size: ${Variable.fontsize["1.4"]};
      }
    }
  }
`

export const SkillContainer = styled.div`
  .cv__skill {
    display: grid;
    gap: 1rem;
    &--detail {
      display: flex;
      gap: 1rem;
    }
  }
`

export const EducationContainer = styled.div`
  .cv__education {
    display: grid;
    gap: 1rem;
    .education__infor {
      display: flex;
      gap: 1rem;
    }
  }
`

export const AchievementContainer = styled.div`
  .cv__achievement {
    display: grid;
    gap: 1rem;
    .achivement__infor {
      display: flex;
      gap: 1rem;
    }
  }
`
export const TargetContaner = styled.div`
  @media ${Variable.device.mobile} {
    margin-top: 4rem;
  }
  @media only screen and (max-width: 1199px) {
    margin-top: 4rem;
  }
`

export const WorkExperienceContainer = styled.div`
  margin-top: 4rem;
  .expience__item {
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
    &--name {
      color: ${Variable.color.primaryText};
      font-weight: ${Variable.fw.bold};
    }
    &--time {
      p {
        color: ${Variable.color.primaryText};
        font-weight: ${Variable.fw.bold};
        font-size: ${Variable.fontsize["1.4"]};
      }
    }
    &--detail {
      p {
        color: ${Variable.color.primaryText};
        font-weight: ${Variable.fw.bold};
        font-size: ${Variable.fontsize["1.4"]};
      }
      span {
        text-align: justify;
        font-size: ${Variable.fontsize["1.4"]};
        color: ${Variable.color.primaryText};
        white-space: pre-wrap;
      }
    }
  }
`
