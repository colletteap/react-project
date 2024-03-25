import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";


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
        <Button
          variant="contained"
          size="medium"
          sx={{ bgcolor: "#ffff", color: "#233349", borderRadius: "10px" }}
          onClick={onClick}
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
    </div>
  );
}
