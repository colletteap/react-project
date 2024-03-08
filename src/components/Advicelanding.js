import React from "react";
import AdviceBox from "./Advicebox";
import "../styles/Advicelanding.css";

const AdviceLanding = () => {
  return (
    <>
      <h1 className="blueHeading">Advice from real teachers</h1>
      <div className="AdviceContainer">
        <AdviceBox type="Question:" question="How do I manage my workload?" />
        <AdviceBox
          type="Advice:"
          question="Pro-tip: Turn your work notifications off after work"
        />
        <AdviceBox
          type="Question:"
          question="How can I set personal time boundaries?"
        />
      </div>
    </>
  );
};

export default AdviceLanding;
