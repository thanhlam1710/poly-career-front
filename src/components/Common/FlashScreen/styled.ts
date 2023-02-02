import styled from "styled-components"

export const FlashScreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
  opacity: 1;
  z-index: 1000;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &.hidden {
    opacity: 0;
    z-index: -1;
    visibility: hidden;
  }
  img {
    width: 30rem;
  }
`
