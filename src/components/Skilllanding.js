import React from "react";
import "../styles/Skilllanding.css";
import SkillButton from "./Skillbutton";

const SkillLanding = () => {
  return (
    <>
      <h1>Skills from real teachers</h1>
      <div className="SkillContainer">
        <SkillButton />
      </div>
    </>
  );
};

export default SkillLanding;
