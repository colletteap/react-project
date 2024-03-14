import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PostCard from "./Postcard"; 

export default function SkillButton({ skill, linkTo }) {
  const [isPostCardOpen, setIsPostCardOpen] = React.useState(false);

  const handleClick = () => {
    setIsPostCardOpen(true);
  };

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
      <Link to={linkTo}>
        <Button
          variant="contained"
          size="medium"
          sx={{ bgcolor: "#ffff", color: "#233349", borderRadius: "10px" }}
          onClick={handleClick}
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
      {isPostCardOpen && <PostCard />} 
    </div>
  );
}
