import React, { useState } from "react";
import "../styles/Advice.css";
import ActionButton from "../components/Actionbutton";
import QuestionCard from "../components/Questioncard";
import PostCard from "../components/Postcard";
import SearchBar from "../components/Searchbar";

function Advice() {
  const [isPostCardOpen, setIsPostCardOpen] = useState(false);
  const [actionType, setActionType] = useState(null);

  const handleOpenPostCard = (skill) => {
    setIsPostCardOpen(true);
    setActionType(skill);
  };

  const handleClosePostCard = () => {
    setIsPostCardOpen(false);
    setActionType(null);
  };

  return (
    <div className="SearchBarContainer">
      <SearchBar />
      <div className="AdviceButtonContainer">
        <ActionButton skill="Ask Question" onClick={() => handleOpenPostCard("Ask Question")} />
        <ActionButton skill="Add Advice" onClick={() => handleOpenPostCard("Add Advice")} />
      </div>
      <div className="AdviceInputContainer">
        {isPostCardOpen && (
          <PostCard onClose={handleClosePostCard} actionType={actionType} />
        )}
      </div>
      <div className="AdvicePostsContainer">
        <QuestionCard cardID="1" />
        <QuestionCard cardID="2" />
      </div>
    </div>
  );
}

export default Advice;
