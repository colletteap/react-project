import React from "react";
import Grid from "@mui/joy/Grid";
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
      <Grid className="GridContainer">
        <Grid className="ImageContainer">
          <img src={LargeLogo} alt="Growth Logo" />
        </Grid>
        <Grid className="ImageContainerText">
          <img src={LogoText} alt="LogoText" />
        </Grid>
      </Grid>
      <Grid className="blueLandingContainer">
        <SkillLanding className="skillButtonContainer"/>
      </Grid>
      <Grid className="adviceLandingContainer">
        <AdviceLanding />
      </Grid>
      <Grid className="blueLandingContainer">
        <BlogLanding />
      </Grid>
      <Grid className="whiteLandingContainer centerContainer">
        <a href="mailto:garlandcollette@gmail.com" className="centerContainer">
          <img
            src={Emailimg}
            alt="Email"
            style={{ padding: "5px", width: "10%" }}
          />
        </a>
      </Grid>
    </>
  );
};

export default GridLanding;
