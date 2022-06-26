import initialBackground from "../../assets/img/test.png";
import { Flex, InitialBackground } from "./About";
const About = () => {
  return (
    <Flex id="about">
      <InitialBackground pic={initialBackground}></InitialBackground>
      <h1>About</h1>
      <p>
        Technology junkie. Strive to be the best in the field, from server
        administrator to telecommunications technician to
        <strong> full stack web developer</strong>. Passionate about building
        scalable responsive web applications.
      </p>
    </Flex>
  );
};

export default About;
