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

  const cardStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "30px",
    padding: "10px",
  };

  const headingStyle = {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Verdana, sans serif",
    color: "#ffff",
  };

  return (
    <>
      <h1 style={headingStyle}>Shared Classroom Management Skills</h1>
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

export default ClassroomManagementCard;
