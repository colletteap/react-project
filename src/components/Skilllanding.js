import React, { useState } from "react";
import { Grid } from "@mui/material";
import SkillLandingDropDown from "./SkillLandingDropDown";
import ReorderIcon from "@mui/icons-material/Reorder";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../styles/Skilllanding.css";
import SkillButton from "./Skillbutton";
import { skillData } from "./Data";

const SkillLanding = () => {
  const [openSkillLanding, setOpenSkillLanding] = useState(false);

  const matches = useMediaQuery("(min-width:768px)");
  console.log("matches", matches, openSkillLanding);

  const toggleSkillLanding = () => {
    setOpenSkillLanding(!openSkillLanding);
  };

  return (
    <>
      <h1 className="whiteHeading">Skills from real teachers</h1>
      <Grid item xs={6} className="skillButton">
        <button onClick={toggleSkillLanding}>
          <SkillLandingDropDown />
        </button>
      </Grid>
      {(openSkillLanding || matches) && (
        <Grid>
          {skillData.map((skill, index) => (
            <SkillButton
              key={index}
              skill={skill.skill}
              linkTo={skill.linkTo}
            />
          ))}
          <Grid item xs={6} className="skillButton">
            <button onClick={toggleSkillLanding}>
              <ReorderIcon />
            </button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SkillLanding;
