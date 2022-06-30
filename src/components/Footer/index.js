import { StyledFooter } from "./Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Logo, Flex } from "../../shared/StyledComponents";
const Footer = () => {
  return (
    <StyledFooter>
      <ul>
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
      <Flex>
        <Logo href="#">H</Logo>
        <span>&copy; {new Date().getFullYear()} Brandon Hazelton</span>
      </Flex>
    </StyledFooter>
  );
};
export default Footer;
