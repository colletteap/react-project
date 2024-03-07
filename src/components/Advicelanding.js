import React from "react";
import AdviceBox from "./Advicebox";
import "../styles/Advicelanding.css";

const AdviceLanding = () => {
  return (
    <>
      <h1 className="blueHeading">Advice from real teachers</h1>
      <div className="AdviceContainer">
        <AdviceBox />
      </div>
    </>
  );
};

export default AdviceLanding;
