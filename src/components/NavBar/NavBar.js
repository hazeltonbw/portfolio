import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #272727;
  width: 140px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
`;
export const Logo = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledNavLink = styled(NavLink)`
  height: 50px;
  width: 100%;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 22px;
  text-decoration: none;

  &.active {
    svg {
      color: red;
    }
  }
  &:hover {
    svg {
      opacity: 0;
      height: 0;
      width: 0;
    }

    &:after {
      opacity: 1;
      width: auto;
      height: auto;
      transition: all 0.3s ease-out;
    }
  }

  &:after {
    content: "";
    font-size: 15px;
    letter-spacing: 2px;
  }
`;
export const Home = styled(StyledNavLink)`
  &:after {
    content: "HOME";
    opacity: 0;
    height: 0;
    width: 0;
  }
`;
export const About = styled(StyledNavLink)`
  &:after {
    content: "ABOUT";
    opacity: 0;
    height: 0;
    width: 0;
  }
`;
export const Contact = styled(StyledNavLink)`
  &:after {
    content: "CONTACT";
    opacity: 0;
    height: 0;
    width: 0;
  }
`;

export const Projects = styled(StyledNavLink)`
  &:after {
    content: "PROJECTS";
    opacity: 0;
    height: 0;
    width: 0;
  }
`;
