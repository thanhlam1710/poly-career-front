import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"
// import { Variable } from "styles/app/variable/Variable"

export const TitleProfileContainer = styled.div`
  background-color: ${Variable.color.whiteColor};
  padding: 3rem 4rem;
  .profile__title {
    font-size: ${Variable.fontsize["1.8"]};
    font-weight: ${Variable.fw.bold};
    color: ${Variable.color.primaryText};
  }
  .profile__border {
    border-bottom: 0.1rem solid ${Variable.color.greyColor};
  }
`
