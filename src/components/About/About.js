import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  height: calc(100vh - 4rem);
  padding: 0 2rem;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: calc(100vh - 4rem);
    background: url(${({ pic }) => pic});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0.2;
  }
`;
