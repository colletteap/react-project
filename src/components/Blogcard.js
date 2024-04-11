import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Blogcard({
  content,
  title,
  linkTo,
  image,
  para1,
  para2,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        height: 500,
        maxWidth: 385,
        minWidth: 350,
        display: "flex",
        justifyContent: "center",
        justifySelf: "stretch",
        alignItems: "center",
        flexDirection: "column",
        border: "5px solid #233349",
        borderRadius: "10px",
      }}
    >
      <CardHeader
        title={title}
        titleTypographyProps={{
          sx: {
            fontFamily: "Verdana, sans-serif",
            color: "#233349",
            fontWeight: "bold",
          },
        }}
      />
      <CardMedia component="img" height="50%" image={image} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={linkTo}>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              bgcolor: "#233349",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            Check out the source!
          </Button>
        </Link>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{para1}</Typography>
          <Typography paragraph>{para2}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
