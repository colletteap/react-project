import React from "react";
import LargeLogo from "../assets/GrowthBlue.png";
import LogoText from "../assets/TopGridText.png";
import Emailimg from "../assets/Emailimg.png";
import "../styles/Gridlanding.css";
import SkillLanding from "./Skilllanding";
import AdviceLanding from "./Advicelanding";
import BlogLanding from "./Bloglanding";

const GridLanding = () => {
  return (
    <>
      <div className="GridContainer">
        <div className="ImageContainer">
          <img src={LargeLogo} alt="Growth Logo"  />
        </div>
        <div className="ImageContainerText">
          <img src={LogoText} alt="LogoText"  />
        </div>
      </div>
      <div className="blueLandingContainer">
        <SkillLanding />
      </div>
      <div className="adviceLandingContainer">
        <AdviceLanding />
      </div>
      <div className="blueLandingContainer">
        <BlogLanding />
      </div>
      <div className="whiteLandingContainer centerContainer">
      <a href="mailto:garlandcollette@gmail.com" className="centerContainer">
<img src={Emailimg} alt="Email" style={{ padding: "5px", width: '10%' }} />
</a>
      </div>
    </>
  );
};

export default GridLanding;
