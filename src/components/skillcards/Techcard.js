import React from "react";
import BlankSkillCard from "./Blankskillcard";

const TechCard = () => {
  const skillinfo = [
    {
      skill: "Technology",
      details: "Use YouTube tutorials, search with keywords",
    },
    {
      skill: "Technology",
      details:
        "Use a software that automates your emails (beginning of every week/end of every week)",
    },
    {
      skill: "Technology",
      details:
        "Make email lists of all parents emails, so you don't need to type them all out individually",
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
    color: "#233349",
    backgroundColor: "#fcf9da",
    paddingBottom: "40px",
  }

  return (
    <>
      <h1 style={headingStyle}>Shared Technology Skills</h1>
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

export default TechCard;
