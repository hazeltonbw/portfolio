import styled from "styled-components";

export const TextWrapper = styled.div`
<<<<<<< HEAD
  @media (max-width: 500px) {
  transform: translateX(0%) skewX(7deg) skewY(-3deg) translateY(-30%);
    
  }
  transform: translateX(-40%) skewX(7deg) skewY(-3deg) translateY(-30%);
=======
  transform: translateX(-35%) skewX(7deg) skewY(-3deg) translateY(-30%);
>>>>>>> 75fe4e933b178a65001ccf5663c7255c7a9ec801
  text-align: center;
  @media (max-width: 480px) {
    transform: translateX(-15%) skewX(7deg) skewY(-3deg) translateY(-30%);
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

    svg {
      display: inline-block;
      animation: pulse 1.5s infinite ease-in-out;
    }

    ul {
      list-style-type: none;
      display: inline-flex;
      column-gap: 0.5rem;
      margin-top: .5rem;
    }

    a {
      color: #518dff;
      text-decoration: none;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  height: calc(100vh - 11rem);
  justify-content: center;
  h1 {
    position: relative;
    font-size: ${({ theme }) => theme.fsl};
  }

  h2,
  a {
    position: relative;
    font-size: ${({ theme }) => theme.fsm};
  }

  a {
    color: #518dff;
  }

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0.5;
    display: inline-block;
    position: absolute;
    background: url(${({ background }) => background});
    background-position: center;
    background-size: cover;
  }
`;
