import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const buttonData = [
  "Technology",
  "Classroom Management",
  "Life Work Balance",
  "Art",
  "Home Economics",
  "Boundary Setting",
  "Time Management",
  "Organization",
  "Physical Education",
  "Conflict Management",
  "Soft Skills",
  "Behaviour Management",
  "Powerschool",
  "Resourcefulness",
  "Critical Thinking",
  "Leadership",
  "Creativity",
  "More +",
];

export default function SkillButton() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gridGap: "10px",
        padding: "20px",
        justifyItems: "center",
      }}
    >
      {buttonData.map((skill, index) => (
        <div key={index}>
          <Link to="/SkillShell">
            <Button
              variant="contained"
              size="medium"
              sx={{ bgcolor: "#ffff", color: "#233349" }}
            >
              <Typography
                sx={{
                  fontFamily: "Arial",
                  textTransform: "initial",
                  whiteSpace: "nowrap",
                }}
              >
                {skill}
              </Typography>
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
