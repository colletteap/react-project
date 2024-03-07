import React from "react";
import "../styles/Skilllanding.css";
import SkillButton from "./Skillbutton";

const SkillLanding = () => {
  return (
    <>
      <h1 className="whiteHeading">Skills from real teachers</h1>
      <div className="SkillContainer">
        <SkillButton />
      </div>
    </>
  );
};

export default SkillLanding;
