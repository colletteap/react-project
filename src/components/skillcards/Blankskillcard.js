import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";


export default function BlankSkillCard({ skill, details }) {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 300,
        width: "25%",
        "--Card-radius": (theme) => theme.vars.radius.xs,
      }}
    >
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", gap: 1 }}
      ></CardContent>
      <CardContent>
        <Typography align="center" sx={{ fontWeight: 'bold' }} fontSize="sm">
            {skill}
          </Typography>
          <Typography>
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
}
