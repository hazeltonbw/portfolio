import initialBackground from "../../assets/img/test.png";
import { Flex, InitialBackground } from "./About";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
          <li>
            <a href="#projects" className="projects">
              View Projects
            </a>
          </li>
        </ul>
      </div>
    </Flex>
  );
};

export default About;
