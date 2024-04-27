import React from "react";
import Grid from "@mui/joy/Grid";
import { Link } from "react-router-dom";
import LargeLogo from "../assets/GrowthBlueHQ.png";
import LogoText from "../assets/TopGridText.png";
import Emailimg from "../assets/Emailimg.png";
import "../styles/Gridlanding.css";
import SkillLanding from "./Skilllanding";
import AdviceLanding from "./Advicelanding";
import BlogLanding from "./Bloglanding";
import CustomButton from "../soundReact/customButton";

const GridLanding = () => {
  return (
    <>
      <Grid className="GridContainer">
        <Grid>
          <CustomButton/>
        </Grid>
        <Grid className="ImageContainer">
          <img src={LargeLogo} alt="Growth Logo" />
        </Grid>
        <Grid className="ImageContainerText">
          <img src={LogoText} alt="LogoText" />
        </Grid>
      </Grid>
      <Grid sx={{ padding: '0 20px 20px 20px' }} className="blueLandingContainer">
        <SkillLanding/>
      </Grid>
      <Grid className="adviceLandingContainer">
        <Link to="/Advice" className="textDeco">
        <AdviceLanding/>
        </Link>
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
