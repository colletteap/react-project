import React from "react";
import BlankSkillCard from "./Blankskillcard";

const ConflictManagementCard = () => {
  const skillinfo = [
    {
      skill: "Conflict Management",
      details: " Actively listening to the concerns and perspectives of all parties involved in a conflict helps teachers understand the root cause of the conflict and find a resolution that satisfies everyone.",
    },
    {
      skill: "Conflict Management",
      details:
        "Showing empathy towards the emotions and experiences of those involved in a conflict helps create a supportive and understanding environment, which can lead to more effective conflict resolution.",
    },
    {
      skill: "Conflict Management",
      details:
        "Teaching students problem-solving skills, such as brainstorming solutions, evaluating options, and making compromises, helps them resolve conflicts in a constructive and positive manner.",
    },
  ];

  return (
    <>
      <h1>Shared Conflict Management Skills</h1>
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

export default ConflictManagementCard;
