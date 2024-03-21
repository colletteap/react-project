import React from "react";
import BlankSkillCard from "./Blankskillcard";

const TechCard = () => {
    return (
      <>
        <h1>Shared Technology Skills</h1>
        <div>
          <BlankSkillCard skill="Technology" details="Use YouTube tutorials, search with keywords" />
          <BlankSkillCard skill="Technology" details="Use a software that automates your emails (beginning of every week/end of every week)" />
          <BlankSkillCard skill="Technology" details="Make email lists of all parents emails, so you don't need to type them all out individually" />
         
        </div>
      </>
    );
  };
  
  export default TechCard;