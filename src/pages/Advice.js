import React, { useState } from "react";
import "../styles/Advice.css";
import { Link } from "react-router-dom";
import ActionButton from "../components/Actionbutton";
import ContentCard from "../components/Contentcard";
import PostCard from "../components/Postcard";
import SearchBar from "../components/Searchbar";
import Home from "../assets/Home.png";
import GiveAdvice from "../assets/GiveAdvice.png";
import AskAdvice from "../assets/AskAdvice.png";
import AdviceText from "../assets/AdviceText.png";
import { askAdviceCardData } from "../components/Data";

function Advice() {
  const [showPostcard, setShowPostcard] = useState(false);
  const [showAskQuestion, setShowAskQuestion] = useState(true);
  const [commentsArray, setCommentsArray] = useState(() => {
    const storedComments = localStorage.getItem("commentsArray");
    return storedComments ? JSON.parse(storedComments) : [];
  });
const [searchInput, setSearchInput] = useState("");

const handleSearchChange = (event) => {
  setSearchInput(event.target.value);
};

const filteredComments = commentsArray.filter((comment) =>
comment.text.toLowerCase().includes(searchInput.toLowerCase())
);
console.log("filter:", filteredComments);


  const handleBtnAClick = () => {
    console.log("show postcard", showPostcard);
    if (!showPostcard) {
      setShowPostcard(true);
      setShowAskQuestion(false);
    }
  };

  return (
    <div>
      <div className="SearchBarContainer">
        <SearchBar onChange={handleSearchChange}/>
      </div>

      <div className="centeredContainer">
      <img className="smImg" src={GiveAdvice} alt="Give Advice" />
        <img className="medImg" src={AdviceText} alt="Advice Text" />
        <img className="smImg" src={AskAdvice} alt="Ask Advice" />
      </div>

      <>
        <div className="questionButtonContainer">
          
          <div>
            {showAskQuestion && (
              <ActionButton skill="Ask Question" onClick={handleBtnAClick} />
            )}
            {showPostcard && (
              <PostCard
                type="Question"
                setCommentsArray={setCommentsArray}
                setShowPostcard={setShowPostcard}
                setShowAskQuestion={setShowAskQuestion}
              />
            )}
          </div>
         
        </div>
        <h2 className="centeredContainer center">Magic in progress..</h2>

        <div className="receiveAdviceDiv">
          {filteredComments.map((comment) => (
            <div key={comment.id}><ContentCard
            type={"Question:"}
            question={comment.text}/>
            </div>
          ))}
          {askAdviceCardData.filter((type) => type.question.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((type, index) => (
            <ContentCard
              key={index}
              type={type.type}
              cardId={type.cardId}
              question={type.question}
            />
          ))}
        </div>
      </>

      <div className="footerA">
        <Link to="/">
          <img src={Home} alt="Home" style={{ padding: "5px" }} />
        </Link>
      </div>
    </div>
  );
}

export default Advice;
