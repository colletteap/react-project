import React from "react";
import "../styles/Advice.css";
import SkillButton from "../components/Skillbutton";
import QuestionCard from "../components/Questioncard";
import SearchBar from "../components/Searchbar";

function Advice() {
  return (
    <div>
      <SearchBar />
      <div>
      <SkillButton skill="Ask Question" />
      <SkillButton skill="Add Advice" />
      </div>

      <div className="AdvicePostsContainer">
        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  );
}

export default Advice;
