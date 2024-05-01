import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import CustomButton from "../soundReact/customButton";


export default function ActionButton({ skill, onClick }) {

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gridGap: "10px",
        padding: "10px",
        justifyItems: "center",
      }}
    >
        <CustomButton
          variant="contained"
          size="medium"
          sx={{ bgcolor: "#233349", color: "#ffff", fontWeight: "bolder", borderRadius: "10px", "&:hover": {backgroundColor: "#5378AB",}  }}
          onClick={onClick}
        >
          <Typography
            sx={{
              fontFamily: "Verdana",
              textTransform: "initial",
              whiteSpace: "nowrap",
            }}
          >
            {skill}
          </Typography>
        </CustomButton>
    </div>
  );
}
