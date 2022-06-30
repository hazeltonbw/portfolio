import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 1rem;
  padding: 1rem 2rem;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  img {
    width: 100%;
  }

  h2,
  h3 {
    width: 100%;
    font-weight: 200;
  }

  ul {
    display: flex;
    gap: 5px;
    list-style-type: none;
    padding: 0.5rem 0;
  }

  p {
    font-weight: 300;
  }
`;
