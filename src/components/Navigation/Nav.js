import styled from "styled-components";
import { Logo } from "../../shared/StyledComponents";

export const Nav = styled.nav`
  position: sticky;
  padding: 1rem 2rem;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 4rem;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) =>
    props.navBarScroll === true ? "#323232" : "#272727"};

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
    color: ${({ theme }) => theme.linkColors};
  }

  a:hover,
  a:focus {
    outline: none;
    color: ${({ theme }) => theme.linkColors};
  }

  a:after {
    content: "";
    display: block;
    border-bottom: 1px solid ${({ theme }) => theme.linkColors};
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 250ms ease-in-out;
  }

  a:hover:after,
  a:focus:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }

  ${Logo} {
    color: ${({ theme }) => theme.linkColors};
    font-size: 3rem;
  }

  @media (max-width: 640px) {
    ul {
      display: none;
    }
  }
`;
