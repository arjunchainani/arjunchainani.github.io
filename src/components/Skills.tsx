import { useState } from "react";
import "../App.css";

interface Props {
  skills_list: string[];
}

const Skills = ({ skills_list }: Props) => {
  let skillImgName;
  const [highlightedSkill, updateHighlightedSkill] = useState(
    "\n\n\n"
  );

  return (
    <div className="skills_title">
      <h2>Skilled in: </h2>
      <div className="skills_container">
        {skills_list.map((skill) => {
          skillImgName = "/assets/skills/" + skill + ".png";
          return (
            <img
              key={skill}
              src={skillImgName}
              className="skill_img"
              onMouseOver={() => updateHighlightedSkill(skill)}
              onMouseOut={() =>
                updateHighlightedSkill("\n")
              }
            ></img>
          );
        })}
      </div>
      <p>{highlightedSkill}</p>
    </div>
  );
};

export default Skills;
