import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { skillInfo } from "../Data";

export default function BlankSkillCard({ skillname }) {
  const filteredSkills = skillInfo.filter((item) => item.skill === skillname.skillname);

  const cardStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "30px",
    padding: "10px",
    marginLeft: "50px",
  };
  
  const headingStyle = {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Verdana, sans serif",
    color: "#233349",
    backgroundColor: "#fcf9da",
    paddingBottom: "40px",
  };

  return (
    <>
      <h1 style={headingStyle}>Learn new skills below</h1>
      <div style={cardStyle}>
        {filteredSkills.map((item, index) => (
          <Card
            key={index}
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
              sx={{ alignItems: "flex-start", gap: 10, position: "relative" }}
            >
              <CardContent>
                <Typography
                  sx={{ textAlign: "start", fontWeight: "bold", position: "absolute", top: 3 }}
                  fontSize="16px"
                >
                  {item.skill}
                </Typography>

                <Typography
                  sx={{ textAlign: "start", border: "1px solid #233349", borderRadius: "5px", padding: "6px", marginTop: "30px" }}
                >
                  {item.details}
                </Typography>
              </CardContent>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
