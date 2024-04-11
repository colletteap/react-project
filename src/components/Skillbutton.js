import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function SkillButton({ skill, linkTo, onClick }) {
 
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gridGap: "10px",
        padding: "10px",
        justifyItems: "center",
      }}
    >
      <Link to={linkTo}>
        <Button
          variant="contained"
          size="large"
          sx={{ minWidth: 140, bgcolor: "#ffff", color: "#233349", borderRadius: "10px" }}
          onClick={onClick}
         
        >
          <Typography
            sx={{
              fontFamily: "Arial",
              fontSize: "19px",
              textTransform: "initial",
              whiteSpace: "nowrap",
            }}
          >
            {skill}
          </Typography>
        </Button>
      </Link>
      
    </div>
  );
}
