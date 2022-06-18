import initialBackground from "../../assets/img/initial-background.svg";
import { Flex, InitialBackground } from "./About";
const About = () => {
  return (
    <Flex id="about">
      <InitialBackground pic={initialBackground}></InitialBackground>
      <h1>About</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adipis, lorem ipsum dolor sit
        amet, consectetur adip
      </p>
    </Flex>
  );
};

export default About;
