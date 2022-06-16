import { StyledFooter } from "./Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Logo } from "../../shared/StyledComponents";
const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a
            href="https://github.com/hazeltonbw"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub title="Github link" size="2em" />
          </a>
        </li>
        <li>
          <Logo href="#">H</Logo>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/hazeltonbw/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin title="Linkedin link" size="2em" />
          </a>
        </li>
      </ul>
      &copy; {new Date().getFullYear()} Brandon Hazelton
    </StyledFooter>
  );
};
export default Footer;
