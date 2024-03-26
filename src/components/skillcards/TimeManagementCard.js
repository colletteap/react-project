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

  return (
    <>
      <h1>Shared Time Management Skills</h1>
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

export default TimeManagementCard;
