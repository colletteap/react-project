import React from "react";
import BlankSkillCard from "./Blankskillcard";
import { skillInfo } from "../Data";

const cardStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "30px",
  padding: "10px",
  marginLeft: "50px",
};

const headingStyle = {
  display: "flex",
  justifyContent: "center",
  fontFamily: "Verdana, sans serif",
  color: "#233349",
  backgroundColor: "#fcf9da",
  paddingBottom: "40px",
};

const BehaviourManagementCard = ( skillname ) => {

  const behaviourSkill = skillInfo.filter ((item) => {return item.skill == skillname});

  console.log("full skill", skillInfo);
  console.log("skill data", skillname, behaviourSkill)

  return (
    <>
      <h1 style={headingStyle}>Shared Behaviour Management Skills</h1>
      <div style={cardStyle}>
        {behaviourSkill.map((item, index) => (
          <BlankSkillCard
            skill = {item.skill}
          />
        ))}
      </div>
    </>
  );
};

export default BehaviourManagementCard;
