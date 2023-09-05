import "./App.css";
import Background from "./components/Background";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Background styling="main_bg">
        <Card
          height="400px"
          width="400px"
          type="image"
          styling="img_card"
        ></Card>
        <Card height="250px" width="1000px" type="text" styling="main_desc">
          Hello, I am Arjun
        </Card>
      </Background>
    </>
  );
}

export default App;
