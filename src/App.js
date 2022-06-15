import "./App.scss";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { MainContainer } from "./styled/StyledComponents";

function App() {
  return (
    <MainContainer>
      <Navigation />
      <Home />
    </MainContainer>
  );
}

export default App;
