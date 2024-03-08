import React from "react";
import Landingblogcard from "./Landingblogcard.js";
import "../styles/Bloglanding.css";

const AdviceLanding = () => {
  return (
    <>
      <h1 className="whiteHeading">Resources from real teachers</h1>
      <div className="BlogContainer">
        <Landingblogcard linkTo="/Blog.js" />
        <Landingblogcard />
        <Landingblogcard />
      </div>
    </>
  );
};

export default AdviceLanding;
