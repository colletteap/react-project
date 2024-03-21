import React, { useState } from "react";
import "../styles/Advice.css";
import AdviceButton from "../components/Advicebutton";
import QuestionCard from "../components/Questioncard";
import PostCard from "../components/Postcard";
import SearchBar from "../components/Searchbar";

function Advice() {
  const [isPostCardOpen, setIsPostCardOpen] = useState(false);

  const handleOpenPostCard = () => {
    setIsPostCardOpen(true);
  };

  const handleClosePostCard = () => {
    setIsPostCardOpen(false);
  };

  return (
    <div>
      <SearchBar />
      <div className="AdviceButtonContainer">
        <AdviceButton skill="Ask Question" onClick={handleOpenPostCard} />
        <AdviceButton skill="Add Advice" onClick={handleOpenPostCard} />
      </div>
      <div className="AdviceInputContainer">
        {isPostCardOpen && (
          <PostCard onClose={handleClosePostCard} />
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
