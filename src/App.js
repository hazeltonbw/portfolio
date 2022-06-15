import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import Projects from "./components/Projects";
import { MainContainer } from "./styled/StyledComponents";

function App() {
  return (
    <MainContainer>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
    </MainContainer>
  );
}

export default App;
