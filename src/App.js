import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import { MainContainer } from './shared/StyledComponents'

function App() {
  return (
    <>
      <Navigation />
      <MainContainer id='main'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </MainContainer>
    </>
  )
}

export default App
