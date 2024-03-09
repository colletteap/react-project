import React from "react";
import AdviceBox from "./Advicebox";
import "../styles/Advicelanding.css";

const AdviceLanding = () => {
  return (
    <>
      <h1 className="blueHeading">Advice from real teachers</h1>
      <div className="AdviceContainer">
        <AdviceBox
          type="Question:"
          question="How do I manage my workload?"
          comment="Setting boundaries really helped me."
        />
        <AdviceBox
          type="Advice:"
          question="Pro-tip: Turn your work notifications off after work"
          comment="True! I keep an alarm on my phone to remind me."
        />
        <AdviceBox
          type="Question:"
          question="Google Classroom confuses me. Help!"
          comment="NewEd Tech on YouTube has been my game changer!"
        />
      </div>
    </>
  );
};

export default AdviceLanding;
