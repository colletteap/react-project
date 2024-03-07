import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";

export default function AdviceBox() {
  const [comment, setComment] = React.useState("");
  const [commentsList, setCommentsList] = React.useState(() => {
    const storedComments = localStorage.getItem("comments");
    return storedComments ? JSON.parse(storedComments) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(commentsList));
  }, [commentsList]);

  const handlePostClick = () => {
    if (comment.trim() === "") {
      return; // Do not add empty comments
    }

    const newComment = {
      id: commentsList.length + 1,
      text: comment,
    };

    setCommentsList([...commentsList, newComment]);
    setComment("");
  };

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 300,
        "--Card-radius": (theme) => theme.vars.radius.xs,
      }}
    >
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", gap: 1 }}
      >
        <Box
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: "-2px",
              borderRadius: "50%",
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            },
          }}
        ></Box>
        <Typography fontWeight="lg">Question</Typography>
      </CardContent>

      <CardContent>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          fontWeight="lg"
          textColor="text.primary"
        ></Link>
        <Typography fontSize="sm">
          <Link
            component="button"
            color="neutral"
            fontWeight="lg"
            textColor="text.primary"
          >
            Question:
          </Link>{" "}
          How do I manage my workload?
        </Typography>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          startDecorator="…"
          sx={{ color: "text.tertiary" }}
        >
          more
        </Link>
        <Link
          component="button"
          underline="none"
          fontSize="10px"
          sx={{ color: "text.tertiary", my: 0.5 }}
        ></Link>
      </CardContent>
      {commentsList.map((commentItem) => (
        <CardContent key={commentItem.id} sx={{ mt: 1 }}>
          {commentItem.text}
        </CardContent>
      ))}
      <CardContent orientation="horizontal" sx={{ gap: 1 }}>
        <Input
          variant="plain"
          size="sm"
          placeholder="Add a comment…"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{ flex: 1, px: 0, "--Input-focusedThickness": "0px" }}
        />
        <Link onClick={handlePostClick} underline="none" role="button">
          Post
        </Link>
      </CardContent>
    </Card>
  );
}
