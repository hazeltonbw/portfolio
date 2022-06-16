import { StyledFooter } from "./Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
          >
            <FaGithub title="Github link" size="2em" />
          </a>
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
      <Flex>
        <Logo href="#">H</Logo>
        <span>&copy; {new Date().getFullYear()} Brandon Hazelton</span>
      </Flex>
    </StyledFooter>
  );
};
export default Footer;
