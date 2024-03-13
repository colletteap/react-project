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
      <SkillButton skill="Ask Question" className='Question' />
      <SkillButton skill="Add Advice" className='Advice' />
      </div>
      <div className="AdviceInputContainer">

      </div>
      <div className="AdvicePostsContainer">
        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  );
}

export default Advice;
