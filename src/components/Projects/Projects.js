import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem 2rem;
`;

export const ProjectContainer = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  h2,
  h3 {
    width: 100%;
    font-weight: 200;
  }

  h3 {
    position: relative;
    padding: 1rem;
    max-width: 40ch;
  }

  h3::before {
    content: "";
    position: absolute;
    height: calc(100% - 2rem);
    left: 0px;
    display: inline-block;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
  }

  ul {
    display: flex;
    gap: 5px;
    list-style-type: none;
    line-height: 1;
    align-items: center;
  }

  p {
    font-weight: 300;
  }

  @media (min-width: 640px) {
  }
`;
