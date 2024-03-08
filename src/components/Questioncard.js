import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";

export default function Questioncard() {
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
      return;
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
            ***
          </Link>{" "}
          ***
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
