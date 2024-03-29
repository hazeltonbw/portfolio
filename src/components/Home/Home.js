import styled from 'styled-components'

export const Hero = styled.div`
  @media (max-width: 640px) {
    display: flex;
    gap: 10px;
    flex-direction: column-reverse;
    align-items: center;
    img {
      max-width: 20em;
    }
  }

  svg {
    display: inline-block;
    color: black;
    fill: #272727;
  }

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  width: 100%;
  padding: 0 2rem;

  img {
    max-height: 350px;
    width: 100%;
    grid-row: 1 / span 2;
    grid-column: 4 / span 1;
    box-shadow: 0px 0px 5px 5px white, 0px 0px 1px 10px #518dff;
  }
`
export const Flex = styled.div`
  display: flex;
  height: calc(100vh - 5rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / span 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  strong {
    color: #518dff;
  }

  h1 {
    font-size: ${({ theme }) => theme.fsxl};
    line-height: 1;
    max-width: 15ch;
  }

  a {
    margin-top: 15px;
    border: none;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fsm};
    color: #272727;
    border-radius: 1.5rem;
    padding: ${({ theme }) => theme.aPadding};
    background: #518dff;
    font-weight: 300;
    transition: all 0.3s ease-in-out;
  }

  a:hover,
  a:focus {
    transform: scale(1.15);
  }
`
