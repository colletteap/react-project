import React from "react";
import "../styles/Skilllanding.css";
import SkillButton from "./Skillbutton";

const SkillLanding = () => {
  return (
    <>
      <h1 className="whiteHeading">Skills from real teachers</h1>
      <div className="SkillContainer">
        <SkillButton skill="Technology" linkTo="/SkillShell" />
        <SkillButton skill="Classroom Management" linkTo="/SkillShell" />
        <SkillButton skill="Life Work Balance" linkTo="/SkillShell" />
        <SkillButton skill="Art" linkTo="/SkillShell" />
        <SkillButton skill="Home Economics" linkTo="/SkillShell" />
        <SkillButton skill="Boundary Setting" linkTo="/SkillShell" />
        <SkillButton skill="Time Management" linkTo="/SkillShell" />
        <SkillButton skill="Organization" linkTo="/SkillShell" />
        <SkillButton skill="Physical Education" linkTo="/SkillShell" />
        <SkillButton skill="Conflict Management" linkTo="/SkillShell" />
        <SkillButton skill="Soft Skills" linkTo="/SkillShell" />
        <SkillButton skill="Behaviour Management" linkTo="/SkillShell" />
        <SkillButton skill="Powerschool" linkTo="/SkillShell" />
        <SkillButton skill="Resourcefulness" linkTo="/SkillShell" />
        <SkillButton skill="Critical Thinking" linkTo="/SkillShell" />
        <SkillButton skill="Leadership" linkTo="/SkillShell" />
        <SkillButton skill="Creativity" linkTo="/SkillShell" />
        <SkillButton skill="More+" linkTo="/SkillShell" />
      </div>
    </>
  );
};

export default SkillLanding;
