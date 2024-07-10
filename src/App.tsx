import "./App.css";
import Card from "./components/Card";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const aboutMeInfo = [
    "I'm originally from NJ and am currently an incoming freshman at the University of Illinois Urbana-Champaign, majoring in Computer Engineering.",
    "I am fascinated by emerging technology, and am experienced in robotics, machine learning, web development, and quantum computing.",
    "I love creating new things, and aspire to be part of the tech industry as a career.",
    "Find out more by visiting some of my online profiles below, or continue scrolling to see my skills, projects, and experience. For more info, feel free to contact me through email at arjun.k.chainani@gmail.com!",
  ];

  const skills = [
    "C++",
    "Java",
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Python",
    "Numpy",
    "PyTorch",
    "Tensorflow",
    "Qiskit",
  ];

  return (
    <>
      <div className="main_bg">
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
        <Card
          height="auto"
          width="1450px"
          type="info"
          styling="findme_card"
          child_styling="findme_text"
        >
          Find me on:
          <a href="https://www.linkedin.com/in/arjun-chainani/" target="_blank">
            <img
              src="src/assets/logos/linkedin.png"
              height="150px"
              width="150px"
              className="findme_img img1"
            ></img>
          </a>
          <a href="https://github.com/arjunchainani" target="_blank">
            <img
              src="src/assets/logos/github.png"
              height="150px"
              width="150px"
              className="findme_img img1"
            ></img>
          </a>
          <a
            href="https://devpost.com/cyberzombiequest?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            target="_blank"
          >
            <img
              src="src/assets/logos/devpost.png"
              height="125px"
              width="150px"
              className="findme_img"
            ></img>
          </a>
          <a href="https://www.kaggle.com/arjunc10/code" target="_blank">
            <img
              src="src/assets/logos/kaggle.png"
              height="125px"
              width="140px"
              className="findme_img img1"
            ></img>
          </a>
        </Card>
      </div>
      <div>
        <Skills skills_list={skills}></Skills>
      </div>
      <div> 
        <h2 className="projects_title">Projects</h2>
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;
