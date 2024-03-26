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

  return (
    <>
      <h1>Shared Leadership Skills</h1>
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

export default LeadershipCard;
