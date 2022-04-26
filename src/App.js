import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Header/>
      <MainContainer>
        <Section></Section>
      </MainContainer>
    </>
  );
}

export default App;
