import React, { useState } from "react";
import "../styles/SkillShell.css";
import Skill from "../assets/skill.png";
import Superhero from "../assets/superhero.png";
import Discover from "../assets/discover.png";
import Community from "../assets/community.png";
import SkillButton from "../components/Skillbutton";
import TechCard from "../components/skillcards/Techcard";
import ClassroomManagementCard from "../components/skillcards/ClassroomManagementCard";
import LifeWorkBalanceCard from "../components/skillcards/LifeWorkBalanceCard";
import HomeEconomicsCard from "../components/skillcards/HomeEconomicsCard";
import BoundarySettingCard from "../components/skillcards/BoundarySettingCard";
import TimeManagementCard from "../components/skillcards/TimeManagementCard";
import PhysicalEducationCard from "../components/skillcards/PhysicalEducationCard";
import ConflictManagementCard from "../components/skillcards/ConflictManagementCard";
import BehaviourManagementCard from "../components/skillcards/BehaviourManagementCard";
import ResourcefulnessCard from "../components/skillcards/ResourcefulnessCard";
import CriticalThinkingCard from "../components/skillcards/CriticalThinkingCard";


const skills = [
  { skill: "Technology", onClick: () => handleButtonClick("Technology") },
  {
    skill: "Classroom Management",
    onClick: () => handleButtonClick("Classroom Management"),
  },
  {
    skill: "Life Work Balance",
    onClick: () => handleButtonClick("Life Work Balance"),
  },
  {
    skill: "Home Economics",
    onClick: () => handleButtonClick("Home Economics"),
  },
  {
    skill: "Boundary Setting",
    onClick: () => handleButtonClick("Boundary Setting"),
  },
  {
    skill: "Time Management",
    onClick: () => handleButtonClick("Time Management"),
  },
  {
    skill: "Physical Education",
    onClick: () => handleButtonClick("Physical Education"),
  },
  {
    skill: "Conflict Management",
    onClick: () => handleButtonClick("Conflict Management"),
  },
  {
    skill: "Behaviour Management",
    onClick: () => handleButtonClick("Behaviour Management"),
  },
  {
    skill: "Resourcefulness",
    onClick: () => handleButtonClick("Resourcefulness"),
  },
  {
    skill: "Critical Thinking",
    onClick: () => handleButtonClick("Critical Thinking"),
  },
  { skill: "Leadership", onClick: () => handleButtonClick("Leadership") },
  { skill: "Creativity", onClick: () => handleButtonClick("Creativity") },
];

function SkillShellPage() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

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
      <div className="skillContainer">
        {skills.map((skill, index) => (<SkillButton key={index} skill={skill.skill} onClick={skill.onClick} />
        ))}
      </div>
      {selectedButton === "Technology" && <TechCard />}
      {selectedButton === "Classroom Management" && <ClassroomManagementCard />}
      {selectedButton === "Life Work Balance" && <LifeWorkBalanceCard />}
      {selectedButton === "Home Economics" && <HomeEconomicsCard />}
      {selectedButton === "Boundary Setting" && <BoundarySettingCard />}
      {selectedButton === "Time Management" && <TimeManagementCard />}
      {selectedButton === "Physical Education" && <PhysicalEducationCard />}
      {selectedButton === "Conflict Management" && <ConflictManagementCard />}
      {selectedButton === "Behaviour Management" && <BehaviourManagementCard />}
      {selectedButton === "Resourcefulness" && <ResourcefulnessCard />}
      {selectedButton === "Critical Thinking" && <CriticalThinkingCard />}
      {selectedButton === "Leadership" && <LeadershipCard />}
      {selectedButton === "Creativity" && <CreativityCard />}
    </div>
  );
}

export default SkillShellPage;
