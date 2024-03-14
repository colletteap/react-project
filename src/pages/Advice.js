import React from "react";
import "../styles/Advice.css";
import SkillButton from "../components/Skillbutton";
import QuestionCard from "../components/Questioncard";
import SearchBar from "../components/Searchbar";

function Advice() {
  return (
    <div>
      <SearchBar />
      <div className="AdviceButtonContainer">
      <SkillButton skill="Ask Question" />
      <SkillButton skill="Add Advice" />
      </div>

      <div className="AdvicePostsContainer">
        <QuestionCard cardID='1' />
        <QuestionCard cardID='2' />
      </div>
    </div>
  );
}

export default Advice;
