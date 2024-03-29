import React from "react";
import BlankSkillCard from "./Blankskillcard";

const ResourcefulnessCard = () => {
  const skillinfo = [
    {
      skill: "Resourcefulness",
      details: "Using positive reinforcement, such as praise, rewards, and encouragement, to reinforce desired behaviors helps motivate students to continue behaving appropriately.",
    },
    {
      skill: "Resourcefulness",
      details:
        "Being consistent in enforcing rules and consequences helps establish a predictable and fair environment for students, which is key to effective behavior management.",
    },
    {
      skill: "Resourcefulness",
      details:
        "Setting clear expectations for behavior and communicating them effectively to students helps prevent misunderstandings and reduces the likelihood of disruptive behavior.",
    },
  ];

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
    color: "#ffff",
  }

  return (
    <>
      <h1 style={headingStyle}>Shared Resourcefulness Skills</h1>
      <div style={cardStyle}>
        {skillinfo.map((key, index) => (
          <BlankSkillCard
            skill = {key.skill}
            details= {key.details}
          />
        ))}
      </div>
    </>
  );
};

export default ResourcefulnessCard;
