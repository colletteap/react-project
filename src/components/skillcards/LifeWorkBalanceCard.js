import React from "react";
import BlankSkillCard from "./Blankskillcard";

const LifeWorkBalanceCard = () => {
  const skillinfo = [
    {
      skill: "Life Work Balance",
      details: "Effectively managing time is crucial for teachers to balance their workload with personal time. This includes setting priorities, creating schedules, and learning to delegate tasks when possible.",
    },
    {
      skill: "Life Work Balance",
      details:
        "Establishing clear boundaries between work and personal life helps teachers avoid burnout. This can include setting limits on work hours, not checking work emails during personal time, and prioritizing self-care activities.",
    },
    {
      skill: "Life Work Balance",
      details:
        "Teaching can be a stressful profession, so having effective stress management strategies is essential. This can include exercise, mindfulness practices, hobbies, or seeking support from colleagues or mental health professionals.",
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

export default LifeWorkBalanceCard;
