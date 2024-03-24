import React, {useState} from "react";
import "../styles/SkillShell.css";
import Skill from "../assets/skill.png";
import Superhero from "../assets/superhero.png";
import Discover from "../assets/discover.png";
import Community from "../assets/community.png";
import SkillButton from "../components/Skillbutton";
import TechCard from "../components/Techcard";

function SkillShellPage() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
    <div className="whiteLandingContainer">
      <h2 style={{ textAlign: 'center' }}>Skill Shell</h2>
      <div className="imgContainer">
          <img className="img" src={Discover} alt="Discover" />
          <img className="img" src={Skill} alt="Skill" />
          <img className="img" src={Community} alt="Community" />
          <img className="img" src={Superhero} alt="Superhero" />
        </div>
    </div>
    <div className="skillContainer">
    <SkillButton
          skill="Technology"
          onClick={() => handleButtonClick('Technology')}
        />
        <SkillButton
          skill="Classroom Management"
          linkTo="/SkillShell/Classroom-Management"
        />
        <SkillButton
          skill="Life Work Balance"
          linkTo="/SkillShell/Life-Work-Balance"
        />
        <SkillButton skill="Art" linkTo="/SkillShell/Art" />
        <SkillButton
          skill="Home Economics"
          linkTo="/SkillShell/Home-Economics"
        />
        <SkillButton
          skill="Boundary Setting"
          linkTo="/SkillShell/Boundary-Setting"
        />
        <SkillButton
          skill="Time Management"
          linkTo="/SkillShell/Time-Management"
        />
        <SkillButton skill="Organization" linkTo="/SkillShell/Organization" />
        <SkillButton
          skill="Physical Education"
          linkTo="/SkillShell/Physical-Education"
        />
        <SkillButton
          skill="Conflict Management"
          linkTo="/SkillShell/Conflict-Management"
        />
        <SkillButton skill="Soft Skills" linkTo="/SkillShell/Soft-Skills" />
        <SkillButton
          skill="Behaviour Management"
          linkTo="/SkillShell/Behaviour-Management"
        />
        <SkillButton skill="Powerschool" linkTo="/SkillShell/Powerschool" />
        <SkillButton
          skill="Resourcefulness"
          linkTo="/SkillShell/Resourcefulness"
        />
        <SkillButton
          skill="Critical Thinking"
          linkTo="/SkillShell/Critical-Thinking"
        />
        <SkillButton skill="Leadership" linkTo="/SkillShell/Leadership" />
        <SkillButton skill="Creativity" linkTo="/SkillShell/Creativity" />
        <SkillButton skill="More+" linkTo="/SkillShell" />
    </div>
    {selectedButton === 'Technology' && <TechCard />}
    </div>
  );
}

export default SkillShellPage;
