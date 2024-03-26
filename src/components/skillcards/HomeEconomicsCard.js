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

export default HomeEconomicsCard;
