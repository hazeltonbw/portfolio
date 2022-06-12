import { Nav, HomeLink } from "./Nav";
import { NavLink } from "react-router-dom";
import { Menu, burgerStyles, MenuWrapper } from "./BurgerMenu";
export const Navigation = () => {
  return (
    <Nav>
      <HomeLink href="/">H</HomeLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <MenuWrapper>
        <Menu id={"burger-menu"} right styles={burgerStyles}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Home</NavLink>
        </Menu>
      </MenuWrapper>
    </Nav>
  );
};
