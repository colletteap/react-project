import React, { useState } from "react";
import "../styles/Advice.css";
import ActionButton from "../components/Actionbutton";
import QuestionCard from "../components/Questioncard";
import PostCard from "../components/Postcard";
import SearchBar from "../components/Searchbar";

function Advice() {
  const [showPostcard, setShowPostcard] = useState(false);

  const handleBtnAClick = () => {
    console.log("show postcard", showPostcard)
    if (!showPostcard) {
      setShowPostcard(true);
    } else {
      console.log("Postcard is already open");
    }
  };

  return (
    <div>
      <div className="AdviceButtonContainer">
        <ActionButton skill="Ask Question" onClick={handleBtnAClick} />
        <ActionButton skill="Add Advice"  onClick={handleBtnAClick} />
      </div>
      <div className="AdviceInputContainer">
        {showPostcard && <PostCard />}
        </div>
      <div className="SearchBarContainer">
        <SearchBar />
      </div>
      <div className="Titles">
        <h2>Advice</h2>
        <h2>Questions</h2>
      </div>
      <div className="AdvicePostsContainer">
        <div className="InsideAdvicePostsContainer">
          <QuestionCard cardID="1" />
          <QuestionCard cardID="2" />
          <QuestionCard cardID="1" />
          <QuestionCard cardID="2" />
          <QuestionCard cardID="1" />
          <QuestionCard cardID="2" />
        </div>

        <div className="InsideAdvicePostsContainer">
          <QuestionCard cardID="1" />
          <QuestionCard cardID="2" />
          <QuestionCard cardID="1" />
          <QuestionCard cardID="2" />
          <QuestionCard cardID="1" />
          <QuestionCard cardID="2" />
        </div>
      </div>
    </div>
  );
}

export default Advice;
