import React from "react";
import BlankSkillCard from "./Blankskillcard";

const BehaviourManagementCard = () => {
  const skillinfo = [
    {
      skill: "Behaviour Management",
      details: "Using positive reinforcement, such as praise, rewards, and encouragement, to reinforce desired behaviors helps motivate students to continue behaving appropriately.",
    },
    {
      skill: "Behaviour Management",
      details:
        "Being consistent in enforcing rules and consequences helps establish a predictable and fair environment for students, which is key to effective behavior management.",
    },
    {
      skill: "Behaviour Management",
      details:
        "Setting clear expectations for behavior and communicating them effectively to students helps prevent misunderstandings and reduces the likelihood of disruptive behavior.",
    },
  ];

  return (
    <>
      <h1>Shared Behaviour Management Skills</h1>
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

export default BehaviourManagementCard;
