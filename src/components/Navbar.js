import React, { useState} from "react";
import Logo from "../assets/logo-white.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
const [openLinks, setOpenLinks] = useState(false);

const toggleNavBar = () => {
setOpenLinks(!openLinks);
}

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks? "open" : "close"}>
      <Link to="./">
        <img className="logoNav" src={Logo} />
        </Link>
        <div className="hiddenLinks">
          <Link to="./"> Home </Link>
          <Link to="./SkillShell"> Skill Shell </Link>
          <Link to="./Advice"> Advice </Link>
          <Link to="./Blog"> Blog </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="./"> Home </Link>
        <Link to="./SkillShell"> Skill Shell </Link>
        <Link to="./Advice"> Advice </Link>
        <Link to="./Blog"> Blog </Link>
        <button onClick={toggleNavBar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
