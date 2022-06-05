import styled from "styled-components";
import { Link } from "react-router-dom";

export const HamburgerMenu = styled.div`
  position: absolute;
  top: 4px;
  right: 0;
  height: 20px;
  width: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HamburgerLine = styled.span`
  transition: all 0.3s ease-out;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
`;

export const Nav = styled.nav`
  background: #272727;
  position: relative;
  justify-content: space-between;

  ul {
    display: none;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    text-align: center;
    transition: all 1s ease-out;
  }

  li {
    width: 100%;
    max-width: 100px;
  }

  a {
    text-decoration: none;
    display: inline-block;
    color: inherit;
  }

  .active svg {
    color: red;
  }

  .checkbox {
    height: 34px;
    width: 34px;
    opacity: 0;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    top: -3px;
    right: -3px;
    transition: all 0.3s ease-out;
  }

  .checkbox:checked ~ ${HamburgerMenu} ${HamburgerLine}:nth-child(1) {
    position: absolute;
    transform: rotate(135deg);
    top: 10px;
  }
  .checkbox:checked ~ ${HamburgerMenu} ${HamburgerLine}:nth-child(2) {
    position: absolute;
    top: 10px;
    transform: rotate(45deg);
  }
  .checkbox:checked ~ ${HamburgerMenu} ${HamburgerLine}:nth-child(3) {
    transform: scaleY(0);
  }

  .checkbox:checked ~ .menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 5;
    background: white;
    height: 100vh;
    width: 100%;
    color: black;
    justify-content: flex-start;
  }

  .checkbox:checked ~ ul {
    justify-content: center;
  }

  .checkbox:checked ~ ul li {
    height: 5rem;
    max-width: unset;
  }

  .checkbox:checked ~ ul li a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid black;
  }

  @media (min-width: 640px) {
    .checkbox,
    ${HamburgerMenu} {
      display: none;
    }

    ul {
      gap: 20px;
    }

    & {
      display: flex;
    }

    .checkbox {
      display: none;
    }

    .menu {
      display: flex;
    }
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  font-weight: 700;
`;
