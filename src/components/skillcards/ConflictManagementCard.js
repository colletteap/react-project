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
    color: "#233349",
    backgroundColor: "#fcf9da",
    paddingBottom: "40px",
  };

  return (
    <>
      <h1 style={headingStyle}>Shared Conflict Management Skills</h1>
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

export default ConflictManagementCard;
