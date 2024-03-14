import React from "react";
import "../styles/Advice.css";
import AdviceButton from "../components/Advicebutton";
import QuestionCard from "../components/Questioncard";
import PostCard from "../components/Postcard";
import SearchBar from "../components/Searchbar";

function Advice() {
  return (
    <div>
      <SearchBar />
      <div className="AdviceButtonContainer">
      <AdviceButton skill="Ask Question" />
      <AdviceButton skill="Add Advice" />
      </div>
      <div className="AdviceInputContainer">
    
      </div>
      <div className="AdvicePostsContainer">
        <QuestionCard cardID='1' />
        <QuestionCard cardID='2' />
      </div>
    </div>
  );
}

export default Advice;
