import { useState } from "react";
import "../App.css";

interface Props {
  skills_list: string[];
}

const Skills = ({ skills_list }: Props) => {
  let skillImgName;
  const [highlightedSkill, updateHighlightedSkill] = useState(
    "Hover over a skill to learn more!"
  );

  return (
    <div className="skills_title">
      <h2>Skilled in: </h2>
      <div className="skills_container">
        {skills_list.map((skill) => {
          skillImgName = "src/assets/skills/" + skill + ".png";
          return (
            <img
              src={skillImgName}
              className="skill_img"
              onMouseOver={() => updateHighlightedSkill(skill)}
              onMouseOut={() =>
                updateHighlightedSkill("Hover over a skill to learn more!")
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