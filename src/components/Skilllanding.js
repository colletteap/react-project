import React from "react";
import "../styles/Skilllanding.css";
import SkillButton from "./Skillbutton";
import { skillData } from "./Data";

const SkillLanding = () => {

  return (
    <>
      <h1 className="whiteHeading">Skills from real teachers</h1>
      <div className="SkillContainer">
        {skillData.map((skill, index) => (<SkillButton key={index} skill={skill.skill} linkTo={skill.linkTo} />
        ))}
      </div>
    </>
  );
};

export default SkillLanding;
