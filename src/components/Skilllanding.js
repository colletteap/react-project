import React, { useState } from "react";
import "../styles/Skilllanding.css";
import SkillButton from "./Skillbutton";


const SkillLanding = () => {

  return (
    <>
      <h1 className="whiteHeading">Skills from real teachers</h1>
      <div className="SkillContainer">
        <SkillButton
          skill="Technology"
          linkTo="/SkillShell/Technology"
        />
        <SkillButton
          skill="Classroom Management"
          linkTo="/SkillShell/Classroom-Management"
        />
        <SkillButton
          skill="Life Work Balance"
          linkTo="/SkillShell/Life-Work-Balance"
        />
        <SkillButton skill="Art" linkTo="/SkillShell/Art" />
        <SkillButton
          skill="Home Economics"
          linkTo="/SkillShell/Home-Economics"
        />
        <SkillButton
          skill="Boundary Setting"
          linkTo="/SkillShell/Boundary-Setting"
        />
        <SkillButton
          skill="Time Management"
          linkTo="/SkillShell/Time-Management"
        />
        <SkillButton skill="Organization" linkTo="/SkillShell/Organization" />
        <SkillButton
          skill="Physical Education"
          linkTo="/SkillShell/Physical-Education"
        />
        <SkillButton
          skill="Conflict Management"
          linkTo="/SkillShell/Conflict-Management"
        />
        <SkillButton skill="Soft Skills" linkTo="/SkillShell/Soft-Skills" />
        <SkillButton
          skill="Behaviour Management"
          linkTo="/SkillShell/Behaviour-Management"
        />
        <SkillButton skill="Powerschool" linkTo="/SkillShell/Powerschool" />
        <SkillButton
          skill="Resourcefulness"
          linkTo="/SkillShell/Resourcefulness"
        />
        <SkillButton
          skill="Critical Thinking"
          linkTo="/SkillShell/Critical-Thinking"
        />
        <SkillButton skill="Leadership" linkTo="/SkillShell/Leadership" />
        <SkillButton skill="Creativity" linkTo="/SkillShell/Creativity" />
        <SkillButton skill="More+" linkTo="/SkillShell" />
      </div>
    </>
  );
};

export default SkillLanding;
