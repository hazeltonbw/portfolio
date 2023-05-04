import { Flex, Hero, Card } from './Home'
import avatar from '../../assets/img/avatar-transparent.svg'
import { BsArrowRight } from 'react-icons/bs'

const Home = () => {
  return (
    <Flex id='home'>
      <Hero>
        <Card>
          <h1>Hello! My name is</h1>
          <h1>
            <strong>Brandon Hazelton</strong>
          </h1>
          <h1>I am a Full-Stack web developer.</h1>
          <a href='#about'>
            Learn more &nbsp;
            <BsArrowRight style={{ verticalAlign: 'bottom' }} />
          </a>
        </Card>
        <img fetchPriority="high" src={avatar} alt='avatar' />
      </Hero>
    </Flex>
  )
}
export default Home
