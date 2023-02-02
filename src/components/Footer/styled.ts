import styled from "styled-components"
import { StylesProps } from "interfaces/Styled"
import { Variable } from "styles/app/variable/Variable"

export const FooterContainer = styled.div`
  margin: 0;
  padding: 2rem;
  background-color: ${Variable.color.primaryColor};
  color: ${Variable.color.whiteColor};
  .row__footer-container {
    width: 100%;
    margin: 0 auto;
  }
  .row__footer-item {
    margin: 2rem 0rem 6rem 0rem;
    width: 100%;
    gap: 1rem;
    .footer_logo {
      width: 5.5rem;
      height: 5.5rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
  }
  .row__footer-item .item-icon {
    background-color: transparent;
    outline: none;
    border: 0.1rem solid ${Variable.color.whiteColor};
    border-radius: 0.5rem;
  }
  .content {
    color: ${Variable.color.whiteColor};
    font-size: ${Variable.fontsize["1.2"]};
    font-weight: ${Variable.fw.normal};
  }
`

export const FooterTextBold = styled.div<StylesProps>`
  font-weight: ${Variable.fw.bold};
  margin: ${({ margin }) => margin || "unset"};
  font-size: ${Variable.fontsize["1.4"]};
`

export const FooterTitle = styled.div`
  font-weight: ${Variable.fw.bold};
  font-size: ${Variable.fontsize["1.6"]};
`

export const FooterItemLogo = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  overflow: hidden;
  background-color: ${Variable.color.primaryLight};
`

export const FooterItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const FooterItemUl = styled.ul`
  margin-top: 2rem;
  margin-bottom: 6rem;
`

export const FooterItemLi = styled.li`
  list-style: none;
`

export const FooterItemInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 80%;
  font-size: ${Variable.fontsize["1.2"]};
  border: 0.1rem solid ${Variable.color.whiteColor};
  ::placeholder {
    color: ${Variable.color.whiteColor};
    font-weight: ${Variable.fw.normal};
    font-size: ${Variable.fontsize["1.2"]};
  }
  @media ${Variable.device.mobile} {
    width: 83%;
  }
  @media ${Variable.device.tablet} {
    width: 81%;
  }
  @media ${Variable.device.laptop} {
    width: 83%;
  }
`
