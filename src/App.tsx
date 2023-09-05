import "./App.css";
import Background from "./components/Background";
import Card from "./components/Card";

function App() {
  const aboutMeInfo = [
    "I am currently a rising senior at John P. Stevens High School in Edison, New Jersey.",
    "I am fascinated by emerging technology, ranging from robotics and artificial intelligence to quantum computing.",
    "I love creating new things, and aspire to be part of the tech industry as a career.",
    "Find out more by visiting some of my online profiles below, or feel free to contact me through email at arjun.k.chainani@gmail.com!",
  ];

  return (
    <>
      <Background styling="main_bg">
        <Card
          height="400px"
          width="400px"
          type="image"
          styling="img_card"
          child_styling=""
        ></Card>
        <Card
          height="400px"
          width="1000px"
          type="text"
          styling="main_desc"
          text={aboutMeInfo.join(" ")}
          child_styling="hi_title"
        >
          Hi, I'm Arjun Chainani.
        </Card>
      </Background>
    </>
  );
}

export default App;
