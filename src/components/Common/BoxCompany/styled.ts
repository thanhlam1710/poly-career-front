import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const BoxCompanyWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: ${Variable.boxShadow.shadowBoxCompany};
  transition: transform linear 0.2s;
  will-change: transform;
  background-color: ${Variable.color.whiteColor};
  &:hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    transform: translateY(-0.2rem);
  }
  cursor: pointer;
  .company__link-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin-top: auto;
    font-size: 1.4rem;
    font-weight: ${Variable.fw.bold};
    text-align: center;
    line-height: 4rem;
    color: ${Variable.color.primaryText};
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    .company__link-title {
      font-size: ${Variable.fontsize["1.6"]};
    }
  }
`
export const BoxCompanyItemImage = styled.div`
  display: block;
  overflow: hidden;
  text-align: center;
  padding: 40%;
  height: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  position: relative;
  width: 100%;
  @media (min-width: 740px) and (max-width: 1023px) {
    padding-top: 5%;
  }
  @media (max-width: 739px) {
    padding-top: 5%;
  }
`
