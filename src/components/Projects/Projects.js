import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 2rem 2rem;

  h1 {
    font-size: ${({ theme }) => theme.fsxl};
    text-decoration: underline;
  }
`

export const ProjectContainer = styled.div`
  display: grid;
  gap: 4rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  a:hover,
  a:focus {
    transform: scale(1);
  }
`

export const Description = styled.p`
  position: relative;
  padding: 1rem;
  max-width: 40ch;

  &::before {
    content: '';
    position: absolute;
    height: calc(100% - 2rem);
    left: 0px;
    display: inline-block;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
  }
`

export const Footnote = styled.p`
  display: ${({ footnotesOpen }) => (footnotesOpen ? 'block' : 'none')};
  background: #518dff;
  margin-bottom: 1rem;
  padding: 1rem;

  & > a {
    display: inline-block;
    color: #001979;
  }
`

export const Project = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.02);
  }

  ul {
    display: flex;
    gap: 5px;
    list-style-type: none;
    line-height: 1;
    align-items: center;
  }

  .tooltip {
    background: #518dff;
    opacity: 1 !important;
    max-width: 35ch;
    font-size: 1rem;
    border-radius: 0.5rem;
  }
`
