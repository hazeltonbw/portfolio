import { Logo, StyledNavLink } from "./SideBar";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Nav, Home, About, Contact } from "./SideBar";
const SideBar = () => {
  return (
    <Nav>
      <Logo to="/">
        <h1>Hazelton</h1>
      </Logo>
      <Home exact="true" to="/">
        <FontAwesomeIcon icon={faHome} color="#000000" />
      </Home>
      <About exact="true" to="/about">
        <FontAwesomeIcon icon={faUser} color="#000000" />
      </About>
      <Contact exact="true" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#000000" />
      </Contact>
    </Nav>
  );
};

export default SideBar;
