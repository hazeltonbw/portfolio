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
  }

  p {
    max-width: 35ch;
  }

  .projects {
    border: none;
    text-decoration: none;
    color: #272727;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 100%;
    background: #518dff;
    font-weight: 300;
    transition: all 0.3s ease-in-out;
    display: flex;
    column-gap: 5px;
    align-items: center;

    svg {
      color: black;
      fill: black;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 1rem;
    justify-content: flex-start;
    list-style: none;
    padding: 0.5rem;
    align-items: center;
  }

  ul li svg {
    color: white;
    stroke: white;
    fill: #518dff;
    display: flex;
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
