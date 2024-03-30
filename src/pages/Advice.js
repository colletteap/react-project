import React, { useState } from "react";
import "../styles/Advice.css";
import ActionButton from "../components/Actionbutton";
import QuestionCard from "../components/Questioncard";
import PostCard from "../components/Postcard";
import SearchBar from "../components/Searchbar";
import AdviceInitialButton from "../components/AdviceInitialButton";

function Advice() {
  const [showPostcard, setShowPostcard] = useState(false);
  const [showReceiveAdvice, setShowReceiveAdvice] = useState(false);
  const [showGiveAdvice, setShowGiveAdvice] = useState(false);

  const handleReceiveAdviceClick = () => {
    setShowReceiveAdvice(true);
  };

  const handleGiveAdviceClick = () => {
    setShowGiveAdvice(true);
  };

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
      <div className="SearchBarContainer">
        <SearchBar />
      </div>
      <div className="AdviceButtonContainer">
        <AdviceInitialButton type="Receive Advice" onClick={handleReceiveAdviceClick} />
        <AdviceInitialButton type="Ask For Advice" onClick={handleGiveAdviceClick} />
      </div>
     
      <div className="AdviceInputContainer">
        {showPostcard && <PostCard />}
        </div>
    
      
      {showReceiveAdvice && (
        <>
        <h2 className="Titles">Receive Advice</h2>
        <div className="AdviceButtonContainer">
        <ActionButton skill="Ask Question" onClick={handleBtnAClick} />
       
      </div>
        <div className="receiveAdviceDiv">
          <QuestionCard cardID="1" />
          <QuestionCard cardID="2" />
          <QuestionCard cardID="1" />
          <QuestionCard cardID="2" />
          <QuestionCard cardID="1" />
          <QuestionCard cardID="2" />
        </div>
        </>
      )}
      {showGiveAdvice && (
        <>
        <h2 className="Titles">Give Advice</h2>
        <div className="AdviceButtonContainer">
        
        <ActionButton skill="Add Advice"  onClick={handleBtnAClick} />
      </div>
        <div className="giveAdviceDiv">
          <QuestionCard cardID="1" />
          <QuestionCard cardID="2" />
          <QuestionCard cardID="1" />
          <QuestionCard cardID="2" />
          <QuestionCard cardID="1" />
          <QuestionCard cardID="2" />
        </div>
      
      </>
      )}
      </div>
  
  );
}

export default Advice;
