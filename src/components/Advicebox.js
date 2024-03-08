import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";

let cardIdCounter = 1;

export default function AdviceBox({ type, question, linkTo, comment }) {
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
        <Link
          to={linkTo}
          component="button"
          underline="none"
          fontSize="sm"
          fontWeight="lg"
          textColor="text.primary"
        ></Link>
        <Typography fontSize="sm">
          <Link
            to={linkTo}
            component="button"
            color="neutral"
            fontWeight="lg"
            textColor="#233349"
          >
            {type}
          </Link>{" "}
          {question}
        </Typography>
        <Link
          to={linkTo}
          component="button"
          underline="none"
          fontSize="sm"
          startDecorator="…"
          sx={{ color: "text.tertiary" }}
        >
          more
        </Link>
        <Link
          to={linkTo}
          component="button"
          underline="none"
          fontSize="10px"
          sx={{ color: "text.tertiary", my: 0.5 }}
        ></Link>
      </CardContent>

      <CardContent orientation="horizontal" sx={{ gap: 1 }}>
        <Input
          variant="plain"
          size="sm"
          value={comment}
          sx={{
            flex: 1,
            px: 0,
            "--Input-focusedThickness": "0px",
            backgroundColor: "#D4E1F4",
            padding: "5px",
          }}
        />
        <Link underline="none" role="button">
          Post
        </Link>
      </CardContent>
    </Card>
  );
}
