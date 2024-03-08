import React from "react";
import "../styles/Skilllanding.css";
import SkillButton from "./Skillbutton";

const SkillLanding = () => {
  return (
    <>
      <h1 className="whiteHeading">Skills from real teachers</h1>
      <div className="SkillContainer">
        <SkillButton skill="Technology" linkTo="/SkillShare" />
        <SkillButton skill="Classroom Management" linkTo="/SkillShare" />
        <SkillButton skill="Life Work Balance" linkTo="/SkillShare" />
        <SkillButton skill="Art" linkTo="/SkillShare" />
        <SkillButton skill="Home Economics" linkTo="/SkillShare" />
        <SkillButton skill="Boundary Setting" linkTo="/SkillShare" />
        <SkillButton skill="Time Management" linkTo="/SkillShare" />
        <SkillButton skill="Organization" linkTo="/SkillShare" />
        <SkillButton skill="Physical Education" linkTo="/SkillShare" />
        <SkillButton skill="Conflict Management" linkTo="/SkillShare" />
        <SkillButton skill="Soft Skills" linkTo="/SkillShare" />
        <SkillButton skill="Behaviour Management" linkTo="/SkillShare" />
        <SkillButton skill="Powerschool" linkTo="/SkillShare" />
        <SkillButton skill="Resourcefulness" linkTo="/SkillShare" />
        <SkillButton skill="Critical Thinking" linkTo="/SkillShare" />
        <SkillButton skill="Leadership" linkTo="/SkillShare" />
        <SkillButton skill="Creativity" linkTo="/SkillShare" />
        <SkillButton skill="More+" linkTo="/SkillShare" />
      </div>
    </>
  );
};

export default SkillLanding;
