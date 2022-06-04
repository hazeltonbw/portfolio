import styled from "styled-components";
import { Link } from "react-router-dom";

export const HamburgerMenu = styled.div`
  position: absolute;
  top: 0px;
  right: 1.25rem;
  height: 26px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HamburgerLine = styled.span`
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
`;

export const Nav = styled.nav`
  background: #272727;
  position: relative;
  padding: 0 1.25rem;
  justify-content: space-between;

  ul {
    display: none;
    gap: 10px;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    text-align: center;
  }

  li {
    width: 100%;
    max-width: 100px;
  }

  a {
    text-decoration: none;
    display: inline-block;
    width: 100%;
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
    top: 0px;
    right: 1.25rem;
  }

  @media (min-width: 640px) {
    .checkbox,
    ${HamburgerMenu} {
      display: none;
    }

    & {
      display: flex;
    }
    ul {
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
