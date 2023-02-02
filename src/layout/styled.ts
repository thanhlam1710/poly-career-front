import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const UserLayoutContainer = styled.div`
  min-width: 1100px;

  .app {
    &__header {
      background-color: ${Variable.color.whiteColor};
      padding: 0;
      z-index: 99;
    }
    &__sidebar {
      min-height: calc(100vh - 64px);
      box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.25);
    }
    &__container {
      min-height: 100vh;
    }
  }
`
