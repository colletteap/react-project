import React from "react";
import BlankSkillCard from "./Blankskillcard";

const PhysicalEducationCard = () => {
  const skillinfo = [
    {
      skill: "Physical Education",
      details: "Teaching students fundamental movement skills, such as running, jumping, throwing, and catching, helps build the foundation for more complex physical activities and sports.",
    },
    {
      skill: "Physical Education",
      details:
        " Engaging students in activities that require teamwork and cooperation helps develop their social skills and teaches them how to work effectively with others.",
    },
    {
      skill: "Physical Education",
      details:
        "Educating students about the importance of physical activity, nutrition, and overall health and fitness helps them make informed decisions about their health and well-being.",
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
      <h1 style={headingStyle}>Shared Physical Education Skills</h1>
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

export default PhysicalEducationCard;
