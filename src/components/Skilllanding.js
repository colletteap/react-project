import React from "react";
import "../styles/Skilllanding.css";
import SkillButton from "./Skillbutton";

const skills = [
  { skill: "Technology", linkTo: "/SkillShell/Technology" },
  { skill: "Classroom Management", linkTo: "/SkillShell/Classroom-Management" },
  { skill: "Life Work Balance", linkTo: "/SkillShell/Life-Work-Balance" },
  { skill: "Art", linkTo: "/SkillShell/Art" },
  { skill: "Home Economics", linkTo: "/SkillShell/Home-Economics" },
  { skill: "Boundary Setting", linkTo: "/SkillShell/Boundary-Setting" },
  { skill: "Time Management", linkTo: "/SkillShell/Time-Management" },
  { skill: "Organization", linkTo: "/SkillShell/Organization" },
  { skill: "Physical Education", linkTo: "/SkillShell/Physical-Education" },
  { skill: "Conflict Management", linkTo: "/SkillShell/Conflict-Management" },
  { skill: "Soft Skills", linkTo: "/SkillShell/Soft-Skills" },
  { skill: "Behaviour Management", linkTo: "/SkillShell/Behaviour-Management" },
  { skill: "Powerschool", linkTo: "/SkillShell/Powerschool" },
  { skill: "Resourcefulness", linkTo: "/SkillShell/Resourcefulness" },
  { skill: "Critical Thinking", linkTo: "/SkillShell/Critical-Thinking" },
  { skill: "Leadership", linkTo: "/SkillShell/Leadership" },
  { skill: "Creativity", linkTo: "/SkillShell/Creativity" },
  { skill: "More+", linkTo: "/SkillShell" }
];

const SkillLanding = () => {

  return (
    <>
      <h1 className="whiteHeading">Skills from real teachers</h1>
      <div className="SkillContainer">
        {skills.map((skill, index) => (<SkillButton key={index} skill={skill.skill} linkTo={skill.linkTo} />
        ))}
      </div>
    </>
  );
};

export default SkillLanding;
