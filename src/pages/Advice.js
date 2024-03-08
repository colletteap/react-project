import React from "react";
import style from "../styles/Advice.css";
import SkillButton from "../components/Skillbutton";
import QuestionCard from "../components/Questioncard";

function Advice() {
  return (
    <div>
      <SkillButton skill="Ask Question" />
      <SkillButton skill="Add Advice" />
      <div className="AdvicePostsContainer">
        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  );
}

export default Advice;
