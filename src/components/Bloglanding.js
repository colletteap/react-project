import React from "react";
import Blogcard from "./Blogcard.js";
import "../styles/Bloglanding.css";

const AdviceLanding = () => {
  return (
    <>
      <h1 className="whiteHeading">Resources from real teachers</h1>
      <div className="BlogContainer">
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>
    </>
  );
};

export default AdviceLanding;
