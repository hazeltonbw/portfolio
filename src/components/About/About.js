import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  height: calc(100vh - 5rem);
  padding: 1rem 2rem;

  .about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  h1 {
    font-size: ${({ theme }) => theme.fsxl};
  }

  p {
    max-width: 35ch;
    font-size: ${({ theme }) => theme.fsm};
  }

  .projects {
    border: none;
    text-decoration: none;
    color: #272727;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background: #518dff;
    font-size: 1.2rem;
    font-weight: 300;
    transition: all 0.3s ease-in-out;
    display: flex;
    column-gap: 5px;
    align-items: center;

    &:hover,
    &:focus * {
      transform: scale(1.1);
    }
    svg {
      fill: #272727;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    font-size: ${({ theme }) => theme.fsIcon};
    row-gap: 1rem;
    justify-content: flex-start;
    list-style: none;
    padding: 0.5rem 0;
    align-items: center;
  }

  svg {
    fill: #518dff;
    transition: all 0.3s ease-out;
    &:hover,
    &:focus {
      transform: scale(1.15);
    }
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
