import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function SkillButton() {
  return (
    <Box sx={{ "& button": { m: 1, bgcolor: "#ffff", color: "#233349" } }}>
      <div>
        <Button variant="contained" size="medium">
          <Typography
            sx={{
              fontFamily: "Arial",
              textTransform: "initial",
              whiteSpace: "nowrap",
            }}
          >
            Technology Skills
          </Typography>
        </Button>
      </div>
    </Box>
  );
}
