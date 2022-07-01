import { Nav } from "./Nav";
import { Logo } from "../../shared/StyledComponents";
import { Menu, burgerStyles, MenuWrapper } from "./BurgerMenu";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

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
    <Nav id="nav" navBarScroll={navBarScroll}>
      <Logo href="https://www.hazelton.dev">H</Logo>
      <ul>
        <li>
          {/* TODO: Change to default website URL when website is up */}
          <a href="#home" className={isActive("")}>
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
          <ul id="burger-links">
            <li>
              <a href="#home" alt="Homepage" className={isActive("")}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                alt="About section"
                className={isActive("#about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                alt="Projects section"
                className={isActive("#projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                alt="Contact section"
                className={isActive("#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <ul id="burger-footer-links">
            <li>
              <a
                href="https://github.com/hazeltonbw"
                target="_blank"
                rel="noreferrer"
                title="Github"
              >
                <FaGithub title="Github" size="2em" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hazeltonbw/"
                target="_blank"
                rel="noreferrer"
                title="Linkedin"
              >
                <FaLinkedin title="Linkedin" size="2em" />
              </a>
            </li>
            <li>
              <a href="mailto:brandon@hazelton.dev" title="Email">
                <FiMail size="2em" style={{ fill: "#272727" }} />
              </a>
            </li>
          </ul>
        </Menu>
      </MenuWrapper>
    </Nav>
  );
};
export default Navigation;
