import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: ${({ theme }) => theme.fsxl};
  }
`;

export const InitialBackground = styled.div`
  width: 100%;
  height: clamp(40vh, 75vh - 5rem, 75vh);
  background: url(${({ pic }) => pic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.4;
`;
