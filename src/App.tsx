import "./App.css";
import Card from "./components/Card";
import Skills from "./components/Skills";
// import ItemList from "./components/ItemList";
import Experience from "./components/Experience";

function App() {
  const aboutMeInfo = [
    "I'm an undergraduate studying Computer Engineering at the University of Illinois Urbana-Champaign.",
    "I'm experienced in and deeply passionate about machine learning, space/astronomy, and robotics, and I plan to continue diving into the applications of intelligent systems in exploring our cosmos.",
    "I'm currently working as a computational astrophysics research intern in multiple research groups at Illinois' National Center for Supercomputing Applications (NCSA).",
    "For more information on my skills, projects, and experience, check out my online profiles/resume attached below, or contact me through email at arjun.k.chainani@gmail.com!",
  ];

  const skills = [
    "C++",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Numpy",
    "PyTorch",
    "Tensorflow",
    "Qiskit",
  ];

  // const ProjectNames = [
  //   "DeepGlobe Road Extraction Challenge",
  //   "Robotics Simulations",
  //   "VidNote",
  //   "AirVision",
  //   "Quantum Teleportation Simulator",
  // ];

  // const ProjectsArray = [
  //   [
  //     "https://github.com/arjunchainani/kaggle-competitions",
  //     "The DeepGlobe Road Extraction Dataset was originally posted on Kaggle in 2018 as part of a challenge that involves segmenting instances of roads from complex satellite images. My attempt at this challenges uses an adaptation of SegNet, a convolutional image segmentation model based on a decoder-encoder architecture (somehwat similar to the more famous U-Net). I was able to implement this architecture from scratch in PyTorch, and trained the model with CUDA GPU acceleration to achieve a successful result, with the model being able to accurately segment the road instances.",
  //   ],
  //   [
  //     "https://github.com/arjunchainani/robotics_simulations",
  //     "Developed simulations of robotic processes in Python and Jupyter Notebooks using NumPy, Matplotlib, and the Modern Robotics code library. The mathematics used in the simulations are based off of the Northwestern Robotics textbook 'Modern Robotics: Mechanics, Planning, and Control'. Currently I've completed a simulation that calculates the forward kinematics of a robot arm configuration based on the types of joints it has. In progress is a velocity kinematics/statics simulator used to express robot arm twists.",
  //   ],
  //   [
  //     "https://github.com/arjunchainani/vidnote",
  //     "This project was created with my team competing in HackJPS 2023, our local high school hackathon. It uses machine learning and the PyTorch and Transformers libraries to load a Natural Language Processing model that is able to simultaneously translate and summarize videos, essentially creating a set of notes for the provided video (whether from Youtube or the local device). The frontend for this project was developed with Next.js and Javascript.",
  //   ],
  //   [
  //     "https://github.com/arjunchainani/demo-day",
  //     "This project was originally developed during my time as a student in the All Star Code 2022 Summer Intensive. I applied my web development skills to create an application capable of advising users of the air quality in various locations, including specific statistics on the particulate matter and gas levels, to help users make more informed travel decisions. This project was eventually presented at the Medidata corporate office to company executives as part of the Tech Entrepreneurship Incubator program.",
  //   ],
  //   [
  //     "https://github.com/arjunchainani/quantum_computing_simulations",
  //     "Developing this simulation in Python using NumPy and Qiskit was part of my exploration in quantum computing algorithms, and I was able to implement the quantum teleportation algorithm, which uses the property of quantum entanglement to allow a certain number of bits of classical information to be communicated in fewer quantum bits. Completing this project allowed me to get a strong grasp on ideas such as quantum statevectors and the Bell state.",
  //   ],
  // ];

  // // const ProjectImages = [
  // //   "./../assets/projects/deepglobe.png",
  // //   "./../assets/projects/robotics.png",
  // //   "./../assets/projects/vidnote.png",
  // //   "./../assets/projects/airvision.png",
  // //   "./../assets/projects/quantum.png",
  // // ];

  // const ExperienceNames = [
  //   "Teaching Assistant - All Star Code",
  //   "Electrical Captain - FRC Robotics Team 2554",
  //   "Code Instructor - Code Ninjas",
  //   "Summer Intensive + TEI Student - All Star Code",
  //   "Student - Inspirit AI",
  // ];

  // const ExperienceArray = [
  //   [
  //     "",
  //     "Lesson planned and delivered content for several modules throughout the Summer Intensive to two classes of 25+ students. Collaborated with cohort's Lead Instructor to manage virtual classroom setting and grade student project submissions. Ran student office hours and served as a mentor to the next graduating class of All Star Code scholars, helping to bridge the gap for young boys of color in the tech industry.",
  //   ],
  //   [
  //     "",
  //     "Led electrical subteam in designing, maintaining, and troubleshooting all electrical systems for our competition robot, which represented the school in FIRST Robotics Competitions across the Northeast. Collaborated with 40+ peers across 3 subteams to ensure timely completion of all build and test tasks; partnered with other subteam leads in the pit to repair the robot during competition. Additionally, I recruited, tested, interviewed, and trained more than 10 new members to the electrical team, and developed summer outreach programs for 2500+ students globally.",
  //   ],
  //   [
  //     "",
  //     "Interned at and later worked at local business to conduct weekly coding lessons in Scratch, Python, and Robotics for a class of 20 elementary school students in the Edison community.",
  //   ],
  //   [
  //     "",
  //     "Student at a selective Summer Intensive program with instruction on advanced web development, APIs, Databases, and more, as well as a focus on building key soft skills for a future in the tech field. I developed a capstone project, AirVision, using the skills I gained in this program, and was selected as one of the 12 out of 300 graduating All Star Code scholars to further develop the project and present at the Medidata Solutions corporate office, one of ASC's biggest sponsors, in New York City.",
  //   ],
  //   [
  //     "",
  //     "Student at a course taught by Ivy League graduates on the fundamentals of artificial intelligence and machine learning. Involved creating multiple AI projects and delving into the ethical and moral questions surrounding the usage of AI. For my capstone project, I developed a sentiment analyzer capable of accurately classifying the intent of Siri voice commands, helping me build my Natural Language Processing skills and understand the technology behind modern voice assistants.",
  //   ],
  // ];

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
          {/* Find me on: &nbsp; */}
          <a
            href="mailto:arjun15@illinois.edu"
            target="_blank"
            className="link"
            style={{ textDecoration: "none" , color: "white"}}
          >
            Email &nbsp;
          </a>
          &#x2022;
          <a href="https://www.linkedin.com/in/arjun-chainani/" className="link" target="_blank" style={{ textDecoration: "none", color: "white" }}>
            {/* <img
              src="/assets/logos/linkedin.png"
              height="150px"
              width="150px"
              className="findme_img img1"
            ></img> */}
            &nbsp; Linkedin &nbsp;
          </a>
          &#x2022;
          <a href="https://github.com/arjunchainani" className="link" target="_blank" style={{ textDecoration: "none", color: "white" }}>
            {/* <img
              src="/assets/logos/github.png"
              height="150px"
              width="150px"
              className="findme_img img1"
            ></img> */}
            &nbsp; GitHub
          </a>
          {/* <a href="https://www.kaggle.com/arjunc10/code" target="_blank" style={{ textDecoration: "none" }}>
            <img
              src="/assets/logos/kaggle.png"
              height="125px"
              width="140px"
              className="findme_img img1"
            ></img>
          </a> */}
        </Card>
      </div>
      <div>
        <Skills skills_list={skills}></Skills>
      </div>
      <div>
        <h2 className="projects_title">Experience</h2>
        {/* <ItemList
          ItemNames={ExperienceNames}
          ItemArray={ExperienceArray}
          type="experience"
        ></ItemList> */}
        <Experience></Experience>
      </div>
      {/* <div>
        <h2 className="projects_title">Projects</h2>
        <ItemList
          ItemNames={ProjectNames}
          ItemArray={ProjectsArray}
          type="projects"
        ></ItemList>
      </div> */}
      <div>
        <h4 className="author">
          Made by Arjun Chainani. Built with React.js, Vite, and TypeScript.
        </h4>
      </div>
    </>
  );
}

export default App;
