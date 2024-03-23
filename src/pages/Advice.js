import React, { useState } from "react";
import "../styles/Advice.css";
import ActionButton from "../components/Actionbutton";
import QuestionCard from "../components/Questioncard";
import PostCard from "../components/Postcard";
import SearchBar from "../components/Searchbar";

function Advice() {
  const [showPostcard, setShowPostcard] = useState(false);

const handleBtnQClick = () => {
setShowPostcard(true);
}

const handleBtnAClick = () => {
  if (!showPostcard) {
    setShowPostcard(true);
  } else {
    // If showPostcard is already true, do nothing
  }
};

  return (
   <div>
     
      <div className="AdviceButtonContainer">
        <ActionButton skill="Ask Question" onClick={handleBtnQClick} />
        <ActionButton skill="Add Advice" onClick={handleBtnAClick} />
        {showPostcard && <PostCard />}
      </div>
      <div className="AdviceInputContainer">
     
      </div>
      <div className="SearchBarContainer">
      <SearchBar />
      </div>
      
      <div className="AdvicePostsContainer">
        <QuestionCard cardID="1" />
        <QuestionCard cardID="2" />
      </div>
    </div>
  );
}

export default Advice;
