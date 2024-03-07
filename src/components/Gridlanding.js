import React from "react";
import LargeLogo from "../assets/GrowthBlue.png";
import LogoText from "../assets/TopGridText.png";
import "../styles/Gridlanding.css";
import SkillLanding from "./Skilllanding";
import AdviceLanding from "./Advicelanding";

const GridLanding = () => {
  return (
    <>
      <div className="GridContainer">
        <div className="ImageContainer">
          <img src={LargeLogo} alt="Growth Logo" />
        </div>
        <div className="ImageContainerText">
          <img src={LogoText} alt="LogoText" />
        </div>
      </div>
      <div className="skillLandingContainer">
        <SkillLanding />
      </div>
      <div>
        <AdviceLanding />
      </div>
    </>
  );
};

export default GridLanding;
