import { Nav, Logo, HamburgerMenu, HamburgerLine } from "./NavBar";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <Nav>
      <h1>
        <Logo to="/">Hazelton</Logo>
      </h1>
      <ul className="menu">
        <li>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <input class="checkbox" type="checkbox" />
      <HamburgerMenu>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerMenu>
    </Nav>
  );
};

export default SideBar;
