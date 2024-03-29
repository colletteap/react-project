import React from "react";
import BlankSkillCard from "./Blankskillcard";

const LeadershipCard = () => {
  const skillinfo = [
    {
      skill: "Leadership",
      details: "Effective communication skills are crucial for leaders to convey their vision, expectations, and feedback to their team or students. This includes both speaking clearly and listening actively.",
    },
    {
      skill: "Leadership",
      details:
        "Strong leaders are able to make informed and timely decisions, weighing the pros and cons and considering the impact on others. They are also able to take responsibility for their decisions.",
    },
    {
      skill: "Leadership",
      details:
        "Being empathetic allows leaders to understand and relate to the feelings and perspectives of others, which helps build trust and rapport. It also enables leaders to make decisions that consider the well-being of those they lead.",
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
      <h1 style={headingStyle}>Shared Leadership Skills</h1>
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

export default LeadershipCard;
