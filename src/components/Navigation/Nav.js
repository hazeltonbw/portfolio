import styled from "styled-components";

export const HomeLink = styled.a`
  font-family: "Marck Script", cursive;
  user-select: none;
`;

export const Nav = styled.nav`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 10px;
  }

  a {
    text-decoration: none;
    color: white;
    transition: all 0.3s ease-out;
    position: relative;
    font-size: 1.4rem;
  }

  a.active {
    color: #518dff;
  }

  a:hover,
  a:focus {
    outline: none;
    color: #518dff;
  }

  a:after {
    content: "";
    display: block;
    border-bottom: 1px solid #518dff;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 250ms ease-in-out;
  }

  a:hover:after,
  a:focus:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }

  ${HomeLink} {
    color: #518dff;
    font-size: 3rem;
  }

  @media (max-width: 640px) {
    ul {
      display: none;
    }
  }
`;
