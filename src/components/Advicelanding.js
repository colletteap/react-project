import React from "react";
import AdviceBox from "./Advicebox";
import "../styles/Advicelanding.css";
import { adviceData } from "./Data";

const AdviceLanding = () => {
  return (
    <>
      <h1 className="blueHeading">Advice from real teachers</h1>
      
        <div className="AdviceContainer">
        {adviceData.map((item, index) => (
        <AdviceBox
          key={index}
          type={item.type}
          question={item.question}
          linkTo={item.linkTo}
          comment={item.comment}
        />
        ))} 
      </div>
      
    </>
  );
};

export default AdviceLanding;
