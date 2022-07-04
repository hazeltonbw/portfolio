import initialBackground from "../../assets/img/initialsShowingSkills.webp";
import { Flex, InitialBackground } from "./About";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
const About = () => {
  return (
    <Flex id="about">
      <InitialBackground pic={initialBackground}></InitialBackground>
      <div className="about-text">
        <h1>About</h1>
        <p>
          Technology junkie. Strive to be the best in the field, from server
          administrator to telecommunications technician to
          <strong> full stack web developer</strong>. Passionate about building
          scalable responsive web applications for a seamless user experience.
        </p>

        <ul>
          <li>
            <a
              href="https://github.com/hazeltonbw"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub title="Github link" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hazeltonbw/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin title="Linkedin link" />
            </a>
          </li>
          <li>
            <a href="mailto:brandon@hazelton.dev" title="Email">
              <GoMail />
            </a>
          </li>
          <li>
            <a href="#projects" className="projects">
              View Projects
              <BsArrowRight />
            </a>
          </li>
        </ul>
      </div>
    </Flex>
  );
};

export default About;
