import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const LogoWrapper = styled.div`
  width: 15.6rem;
  height: 4.8rem;
  color: ${Variable.color.whiteColor};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &.logo {
    &__small {
      width: 7rem;
    }
  }
`
