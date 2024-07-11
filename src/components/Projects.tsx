const ProjectNames = [
  "DeepGlobe Road Extraction Challenge",
  "Robotics Simulations",
  "VidNote",
  "AirVision",
  "Quantum Teleportation Simulator",
];

const ProjectsList = {
  "DeepGlobe Road Extraction Challenge": [
    "The DeepGlobe Road Extraction Dataset was originally posted on Kaggle in 2018 as part of a challenge that involves segmenting instances of roads from complex satellite images. My attempt at this challenges uses an adaptation of SegNet, a convolutional image segmentation model based on a decoder-encoder architecture (somehwat similar to the more famous U-Net). I was able to implement this architecture from scratch in PyTorch, and trained the model with CUDA GPU acceleration to achieve a successful result, with the model being able to accurately segment the road instances.",
  ],
  "Robotics Simulations": [
    "Developed simulations of robotic processes in Python and Jupyter Notebooks using NumPy, Matplotlib, and the Modern Robotics code library. The mathematics used in the simulations are based off of the Northwestern Robotics textbook 'Modern Robotics: Mechanics, Planning, and Control'. Currently I've completed a simulation that calculates the forward kinematics of a robot arm configuration based on the types of joints it has. In progress is a velocity kinematics/statics simulator used to express robot arm twists.",
  ],
  VidNote: [
    "This project was created with my team competing in HackJPS 2023, our local high school hackathon. It uses machine learning and the PyTorch and Transformers libraries to load a Natural Language Processing model that is able to simultaneously translate and summarize videos, essentially creating a set of notes for the provided video (whether from Youtube or the local device). The frontend for this project was developed with Next.js and Javascript.",
  ],
  AirVision: [
    "This project was originally developed during my time as a student in the All Star Code 2022 Summer Intensive. I applied my web development skills to create an application capable of advising users of the air quality in various locations, including specific statistics on the particulate matter and gas levels, to help users make more informed travel decisions. This project was eventually presented at the Medidata corporate office to company executives as part of the Tech Entrepreneurship Incubator program.",
  ],
  "Quantum Teleportation Simulator": [
    "Developing this simulation in Python using NumPy and Qiskit was part of my exploration in quantum computing algorithms, and I was able to implement the quantum teleportation algorithm, which uses the property of quantum entanglement to allow a certain number of bits of classical information to be communicated in fewer quantum bits. COmpleting this project allowed me to get a strong grasp on ideas such as quantum statevectors and the Bell state.",
  ],
};

const Projects = () => {
  return (
    <div className="projects_container">
      {ProjectNames.map((project) => {
        return (
          <div className="project">
            <h4 className="project_text">{project}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
