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

  return (
    <>
      <h1>Shared Technology Skills</h1>
      <div>
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
