import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: calc(100vh - 4rem);
  padding: 0 2rem;
  h1 {
    font-size: ${({ theme }) => theme.fsxl};
  }
  p {
    max-width: 56ch;
    font-size: ${({ theme }) => theme.fsm};
  }
`;

export const InitialBackground = styled.div`
  width: 100%;
  height: clamp(40vh, 75vh - 5rem, 75vh);
  background: url(${({ pic }) => pic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  /* opacity: 0.4; */
`;
