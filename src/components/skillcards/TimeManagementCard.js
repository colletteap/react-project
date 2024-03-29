import React from "react";
import BlankSkillCard from "./Blankskillcard";

const TimeManagementCard = () => {
  const skillinfo = [
    {
      skill: "Time Management",
      details: "Being able to prioritize tasks based on their importance and deadline helps teachers focus on what needs to be done first and avoid feeling overwhelmed by a long to-do list.",
    },
    {
      skill: "Time Management",
      details:
        "Staying organized with lesson plans, grading, and other classroom tasks helps teachers manage their time more efficiently and reduces the risk of forgetting important deadlines or responsibilities.",
    },
    {
      skill: "Time Management",
      details:
        "Allocating specific blocks of time for different tasks, such as lesson planning, grading, and administrative work, helps teachers stay focused and productive throughout the day.",
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
  };

  return (
    <>
      <h1 style={headingStyle}>Shared Time Management Skills</h1>
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

export default TimeManagementCard;
