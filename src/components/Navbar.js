import React, { useState } from "react";
import { Grid } from "@mui/material";
import Logo from "../assets/navbarlogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";
import useMediaQuery from "@mui/material/useMediaQuery";

function Navbar() {
  const matches = useMediaQuery("(min-width:768px)");
  console.log("matches", matches);
  const mini = useMediaQuery("(max-width:768px)");

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavBar = () => {
    if (mini) {
    setOpenLinks(!openLinks)
    };
  };

  return (
    <Grid className="navbar">
      <Grid className="logoNav">
        <Link to="./">
          <img src={Logo} />
        </Link>
      </Grid>
      {matches ? null :(
      <Grid className="leftSide" id={openLinks ? "open" : "close"}>
        <Grid className="hiddenLinks">
          <Link to="./"> Home </Link>
          <Link to="./SkillShell"> Skill Shell </Link>
          <Link to="./Advice"> Advice </Link>
          <Link to="./Blog"> Blog </Link>
        </Grid>
      </Grid>
      )}
      <Grid className="rightSide">
        <Link to="./"> Home </Link>
        <Link to="./SkillShell"> Skill Shell </Link>
        <Link to="./Advice"> Advice </Link>
        <Link to="./Blog"> Blog </Link>
        <button onClick={toggleNavBar}>
          <ReorderIcon />
        </button>
      </Grid>
    </Grid>
  );
}

export default Navbar;
