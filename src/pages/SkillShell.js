import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/SkillShell.css";
import Skill from "../assets/skill.png";
import Superhero from "../assets/superhero.png";
import Discover from "../assets/discover.png";
import Community from "../assets/community.png";
import Home from "../assets/Home.png";
import SkillButton from "../components/Skillbutton";
import BlankSkillCard from "../components/Blankskillcard";
import { skillShellData } from "../components/Data";

function SkillShellPage() {
  const [selectedButton, setSelectedButton] = useState("");
  const newComponentRef = useRef(null);

  useEffect(() => {
    if (selectedButton && newComponentRef.current) {
      newComponentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedButton]);

  const handleButtonClick = (skill) => {
    setSelectedButton(skill);
  };
  console.log("img", Discover);
  return (
    <div className="blueBody">
      <div className="whiteLandingContainer">
        <h2 style={{ textAlign: "center" }}>Skill Shell</h2>
        <div className="imgContainer">
          <img className="img" src={Discover} alt="Discover" />
          <img className="img" src={Skill} alt="Skill" />
          <img className="img" src={Community} alt="Community" />
          <img className="img" src={Superhero} alt="Superhero" />
        </div>
      </div>
      <div className="SkillContainer">
        {skillShellData.map((skill, index) => (
          <SkillButton
            key={index}
            skill={skill.skill}
            onClick={() => handleButtonClick(skill.skill)}
          />
        ))}
      </div>
      <div ref={newComponentRef}>
        {selectedButton && (
          <BlankSkillCard skillname={{ skillname: selectedButton }} />
        )}
      </div>
      <div className="footerA">
        <Link to="/">
          <img src={Home} alt="Home" style={{ padding: "5px" }} />
        </Link>
      </div>
    </div>
  );
}

export default SkillShellPage;
