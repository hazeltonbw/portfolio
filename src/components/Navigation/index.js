import { Nav } from "./Nav";
import { Logo } from "../../shared/StyledComponents";
import { Menu, burgerStyles, MenuWrapper } from "./BurgerMenu";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [navBarScroll, setNavBarScroll] = useState(false);
  const isActive = (url) => {
    if (location.hash === url) return "active";
    return null;
  };

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setNavBarScroll(true);
      } else {
        setNavBarScroll(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  }, [navBarScroll]);

  return (
    <Nav navBarScroll={navBarScroll}>
      <Logo href="#">H</Logo>
      <ul>
        <li>
          <a href="#" className={isActive("")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={isActive("#about")}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={isActive("#projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={isActive("#contact")}>
            Contact
          </a>
        </li>
      </ul>
      <MenuWrapper>
        <Menu id={"burger-menu"} right styles={burgerStyles}>
          <a href="#" className={isActive("")}>
            Home
          </a>
          <a href="#about" className={isActive("#about")}>
            About
          </a>
          <a href="#projects" className={isActive("#projects")}>
            Projects
          </a>
          <a href="#contact" className={isActive("#contact")}>
            Contact
          </a>
        </Menu>
      </MenuWrapper>
    </Nav>
  );
};
export default Navigation;
