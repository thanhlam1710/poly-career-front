import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"
// import { Variable } from "styles/app/variable/Variable"

export const AvatarProfileContainer = styled.div`
  .avatar__profile--row {
    margin-top: 1rem;
    gap: 1rem;
    .avatar__img {
      width: 10rem;
      height: 10rem;
      background-color: ${Variable.color.primaryColor};
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
  }
  .avatar__handle {
    width: 100%;
    p {
      margin-top: 1rem;
      font-size: ${Variable.fontsize[1.2]};
      color: ${Variable.color.textBlur};
    }
  }
`
