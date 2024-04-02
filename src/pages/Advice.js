import React, { useState } from "react";
import "../styles/Advice.css";
import { Link } from "react-router-dom";
import ActionButton from "../components/Actionbutton";
import QuestionCard from "../components/Questioncard";
import PostCard from "../components/Postcard";
import SearchBar from "../components/Searchbar";
import AdviceInitialButton from "../components/AdviceInitialButton";
import GiveAdvice from "../assets/GiveAdvice.png";
import AskAdvice from "../assets/AskAdvice.png";
import Home from "../assets/Home.png";
import Back from "../assets/Back.png";
import { askAdviceCardData } from "../components/Data";

function Advice() {
  const [showPostcard, setShowPostcard] = useState(false);
  const [showAskAdvice, setShowAskAdvice] = useState(false);
  const [showGiveAdvice, setShowGiveAdvice] = useState(false);
  const [showAdviceTopContainer, setShowAdviceTopContainer] = useState(true);
  const [showBackButton, setShowBackButton] = useState(false);

  const handleAskAdviceClick = () => {
    setShowAskAdvice(true);
    setShowAdviceTopContainer(false);
    setShowBackButton(true);
  };

  const handleGiveAdviceClick = () => {
    setShowGiveAdvice(true);
    setShowAdviceTopContainer(false);
    setShowBackButton(true);
  };

  const handleBtnAClick = () => {
    console.log("show postcard", showPostcard);
    if (!showPostcard) {
      setShowPostcard(true);
    } else {
      console.log("Postcard is already open");
    }
  };

  const handleBackButton = () => {
    setShowAskAdvice(false);
    setShowGiveAdvice(false);
    setShowAdviceTopContainer(true);
    setShowBackButton(false);
    setShowPostcard(false);
  }

  return (
    <div>
       <div className="SearchBarContainer">
            <SearchBar style={{ transform: 'scale(7) !important' }} />
          </div>
          {showBackButton && ( 
            <div className="SearchBarContainer">
            <img className="backButton" src={Back} alt="Go Back" onClick={handleBackButton}/>
            </div>
            )}
      {showAdviceTopContainer && (<div className="adviceTopContainer">
        <AdviceInitialButton
          type="Give Advice"
          onClick={handleGiveAdviceClick}
        />
        <AdviceInitialButton
          type="Ask For Advice"
          onClick={handleAskAdviceClick}
        />
      <img className="imgA" src={GiveAdvice} alt="Receive Advice" />
     <img className="imgA" src={AskAdvice} alt="Ask For Advice" />
</div>
      )}
      {showAskAdvice && (
        <>
         
          
          <div className="Titles">
          <h2>Ask for Advice</h2>
            <ActionButton skill="Ask Question" onClick={handleBtnAClick} />
          </div>
          <div className="AdviceInputContainer">
            {showPostcard && <PostCard />}
          </div>
          <div className="receiveAdviceDiv">
            {askAdviceCardData.map((type, index) => (
            <QuestionCard key={index} type={type.type} cardId={type.cardId} question={type.question} />
            ))}
         
          </div>
        </>
      )}
      {showGiveAdvice && (
        <>
          
          
          <div className="Titles">
          <h2>Give Advice</h2>
            <ActionButton skill="Add Advice" onClick={handleBtnAClick} />
          </div>
          <div className="AdviceInputContainer">
            {showPostcard && <PostCard />}
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
      <div className="footerA">
      <Link to="/">
<img src={Home} alt="Home" style={{ padding: "5px", }} />
</Link>
      </div>
    </div>
  );
}

export default Advice;
