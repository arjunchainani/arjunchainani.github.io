const ProjectNames = [
  "DeepGlobe Road Extraction Challenge",
  "Robotics Simulations",
  "VidNote",
  "AirVision",
  "Quantum Teleportation Simulator",
];

const ProjectsList = {
  "DeepGlobe Road Extraction Challenge": ["The DeepGlobe Road Extraction Dataset was originally posted on Kaggle in 2018 as part of a challenge that involves segmenting instances of roads from complex satellite images. My attempt at this challenges uses an adaptation of Segnet, a convolutional image segmentation model based on a decoder-encoder architecture (somehwat similar to the more famous U-Net). I was able to implement this architecture from scratch in PyTorch, "],
  "Robotics Simulations": ["Description here"],
  VidNote: ["Description here"],
  AirVision: ["Description here"],
  "Quantum Teleportation Simulator": ["Description here"],
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
