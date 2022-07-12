import { Flex, TextWrapper } from './Contact'
import background from '../../assets/img/contact-background.webp'
import { BsArrowRight } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
const Contact = () => {
  return (
    <div id='contact'>
      <Flex background={background}>
        <TextWrapper>
          <h1>Contact me.</h1>
          <h2>Let's build something great.</h2>
          <ul>
            <li>
              <a href='mailto:brandon@hazelton.dev' title='Email'>
                <FiMail size='2em' style={{ fill: '#272727' }} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/hazeltonbw/'
                target='_blank'
                rel='noreferrer'
                title='Linkedin'
              >
                <FaLinkedin title='Linkedin' size='2em' />
              </a>
            </li>
          </ul>
        </TextWrapper>
      </Flex>
    </div>
  )
}
export default Contact
