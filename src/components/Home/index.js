import { Flex, Hero, Card } from "./Home";
import avatar from "../../assets/img/avatar-transparent.svg";

export const Home = () => {
  return (
    <Flex>
      <Hero>
        <Card>
          <h1>Hello! My name is</h1>
          <h1>
            <strong>Brandon Hazelton</strong>.
          </h1>
          <h1>I am a full-stack web developer.</h1>
          <a href="#projects">View work</a>
        </Card>
        <img src={avatar} alt="avatar" />
      </Hero>
    </Flex>
  );
};
