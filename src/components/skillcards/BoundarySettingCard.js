import React from "react";
import BlankSkillCard from "./Blankskillcard";

const BoundarySettingCard = () => {
  const skillinfo = [
    {
      skill: "Boundary Setting",
      details: "Setting clear and consistent boundaries helps establish expectations and consequences for students' behavior. This clarity reduces confusion and allows students to understand what is expected of them.",
    },
    {
      skill: "Boundary Setting",
      details:
        "While consistency is important, teachers also need to be flexible in their approach to boundary setting. Being able to adapt boundaries to fit the situation and individual needs of students is key to effective classroom management.",
    },
    {
      skill: "Boundary Setting",
      details:
        "Setting boundaries with empathy and understanding helps build positive relationships with students. Teachers who are empathetic and understanding of students' backgrounds and circumstances can set boundaries that are fair and supportive.",
    },
  ];

  return (
    <>
      <h1>Shared Boundary Setting Skills</h1>
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

export default BoundarySettingCard;
