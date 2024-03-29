import React from "react";
import BlankSkillCard from "./Blankskillcard";

const HomeEconomicsCard = () => {
  const skillinfo = [
    {
      skill: "Home Economics",
      details: "Teaching students basic cooking skills, such as meal planning, food preparation, and cooking techniques, is essential for promoting healthy eating habits and independence in the kitchen.",
    },
    {
      skill: "Home Economics",
      details:
        "Educating students about budgeting, saving, and making informed financial decisions helps them develop important life skills for managing their finances effectively.",
    },
    {
      skill: "Home Economics",
      details:
        "Teaching students basic sewing skills, such as hemming, sewing on buttons, and repairing clothing, as well as clothing care techniques, helps promote sustainability and self-sufficiency in managing their wardrobe.",
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
      <h1 style={headingStyle}>Shared Home Economics Skills</h1>
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

export default HomeEconomicsCard;
