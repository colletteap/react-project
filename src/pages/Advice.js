import React from "react";
import SkillButton from "../components/Skillbutton";
import QuestionCard from "../components/Questioncard";

function Advice() {
  return (
    <div>
      <SkillButton skill="Ask Question" />
      <SkillButton skill="Add Advice" />
      <QuestionCard />
    </div>
  );
}

export default Advice;
