import { Nav, HomeLink } from "./Nav";
import { Menu, burgerStyles, MenuWrapper } from "./BurgerMenu";

export const Navigation = () => {
  return (
    <Nav>
      <HomeLink href="#">H</HomeLink>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <MenuWrapper>
        <Menu id={"burger-menu"} right styles={burgerStyles}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </Menu>
      </MenuWrapper>
    </Nav>
  );
};
