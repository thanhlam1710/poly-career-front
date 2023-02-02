import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const EmptyDataWrapper = styled.div`
  text-align: center;
  h1 {
    font-size: ${Variable.fontsize["2.4"]};
  }
  .box_image {
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`
