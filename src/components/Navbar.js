import React from "react";
import Logo from '../assets/logo-black.png';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">Navbar
    <div className="leftSide">
        <img src={Logo} />
        <div className="hiddenLinks">
        <Link to="./"> Home </Link>
      <Link to="./Profile"> Profile </Link>
      <Link to="./SkillShell"> Skill Shell </Link>
      <Link to="./Advice"> Advice </Link>
      <Link to="./Blog"> Blog </Link>
        </div>
    </div>
    <div className="rightSide">
      <Link to="./"> Blah </Link>
      <Link to="./Profile"> Profile </Link>
      <Link to="./SkillShell"> Skill Shell </Link>
      <Link to="./Advice"> Advice </Link>
      <Link to="./Blog"> Blog </Link>
      <button>
        <ReorderIcon />
      </button>
    </div>
    </div>
  )
}

export default Navbar