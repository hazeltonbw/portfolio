import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  height: calc(100vh - 3rem);
  padding: 1rem 2rem;

  .about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  h1 {
    font-size: 3rem;
    text-decoration: underline;
  }

  p {
    max-width: 35ch;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;

    .about-text {
      flex: 2;
      justify-content: flex-start;
    }
  }
`;

export const InitialBackground = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  background: url(${({ pic }) => pic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (max-width: 640px) {
    flex: 1;
    height: 150px;
  }
`;
