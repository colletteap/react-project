import React from "react";
import BlankSkillCard from "./Blankskillcard";

const CreativityCard = () => {
  const skillinfo = [
    {
      skill: "Creativity",
      details: "Creativity often involves finding innovative solutions to challenges or problems. Teachers who encourage students to think creatively help them develop problem-solving skills that can be applied in various contexts.",
    },
    {
      skill: "Creativity",
      details:
        "Imagination is the ability to envision new ideas, concepts, or possibilities. Teachers who encourage students to use their imagination help them explore new ways of thinking and expressing themselves.",
    },
    {
      skill: "Creativity",
      details:
        "Creativity often requires the ability to adapt and change course when needed. Teachers who foster a flexible mindset in students help them approach problems and tasks with an open mind, leading to more creative outcomes.",
    },
  ];

  return (
    <>
      <h1>Shared Creativity Skills</h1>
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

export default CreativityCard;
