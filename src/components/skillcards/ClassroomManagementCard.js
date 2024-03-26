import React from "react";
import BlankSkillCard from "./Blankskillcard";

const ClassroomManagementCard = () => {
  const skillinfo = [
    {
      skill: "Classroom Management",
      details: "Being able to clearly convey instructions and expectations but also being able to listen actively to students' concerns and feedback.",
    },
    {
      skill: "Classroom Management",
      details:
        " Consistency in enforcing rules and consequences helps create a predictable and stable environment for students, which is crucial for effective classroom management.",
    },
    {
      skill: "Classroom Management",
      details:
        "Being organized helps teachers plan and execute lessons more efficiently, which can reduce disruptions and keep students engaged.",
    },
  ];

  return (
    <>
      <h1>Shared Classroom Management Skills</h1>
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

export default ClassroomManagementCard;
