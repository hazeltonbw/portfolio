import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Home, Logo, About, Contact, Projects } from "./NavBar";
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
      <Projects exact="true" to="/projects">
        <FontAwesomeIcon icon={faCode} color="#000000" />
      </Projects>
      <Contact exact="true" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#000000" />
      </Contact>
    </Nav>
  );
};

export default SideBar;
