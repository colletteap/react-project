import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";

export default function Questioncard({ type, cardId, question }) {
  const [comment, setComment] = React.useState("");
  const [commentsList, setCommentsList] = React.useState(() => {
    const storedComments = localStorage.getItem(`comments_${cardId}`);
    return storedComments ? JSON.parse(storedComments) : [];
  });

  React.useEffect(() => {
    localStorage.setItem(`comments_${cardId}`, JSON.stringify(commentsList));
  }, [commentsList, cardId]);

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
        backgroundColor: "#42536b",
        width: "300px",
        border: "2px solid #fcf9da",
        borderRadius: "15px",
        "--Card-radius": (theme) => theme.vars.radius.xs,
        height: "20vh",
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <CardContent
        sx={{
          backgroundColor: "#ffff",
          border: "2px solid #fcf9da",
          borderRadius: "10px",
          padding: "8px",
        }}
      >
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
            {type}
          </Link>{" "}
          {question}
        </Typography>
      </CardContent>
      {commentsList.map((commentItem) => (
        <CardContent
          key={commentItem.id}
          sx={{
            backgroundColor: "#ffff",
            border: "2px solid #fcf9da",
            borderRadius: "10px",
            padding: "8px",
            fontSize: "sm",
          }}
        >
          {commentItem.text}
        </CardContent>
      ))}
      <CardContent
        orientation="horizontal"
        sx={{ gap: 1 }}
      >
        <Input
          variant="plain"
          size="sm"
          placeholder="Add a comment…"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{
            flex: 1,
            px: 0,
            "--Input-focusedThickness": "0px",
            border: "2px solid #fcf9da",
            borderRadius: "5px",
            padding: "5px",
          }}
        />
        <Link
        sx={{
          backgroundColor: "#8c7b6f",
          color: "#ffff",
        }}
          onClick={handlePostClick}
          underline="none"
          role="button"
          border="1px solid #233349"
          borderRadius="10px"
          padding="5px"
        >
          Post
        </Link>
      </CardContent>
    </Card>
  );
}
