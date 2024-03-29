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
        borderRadius: "5px",
        "--Card-radius": (theme) => theme.vars.radius.xs,
      }}
    >
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "flex-start", gap: 1, position: "relative" }}
      ></CardContent>
      <CardContent>
        <Typography sx={{ textAlign: "start", fontWeight: 'bold', position: "absolute", top: 3 }} fontSize="16px">
            {skill}
          </Typography>
          <Typography sx= {{ textAlign: 'start', border: "1px solid #233349", borderRadius: "5px", padding: "6px" }}>
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
}
