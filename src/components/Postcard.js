import React, { useState } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";


export default function Postcard({ type, cardId, setCommentsArray }) {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [showContentCard, setShowContentCard] = useState(false);
  

  const handlePostClick = () => {
    if (comment.trim() === "") {
      return;
    }

    const newComment = {
      id: commentsList.length + 1,
      type: type,
      text: comment,
    };

    setCommentsList([...commentsList, newComment]);
    setComment("");
    setCommentsArray((prevComments) => [newComment, ...prevComments]);
    setShowContentCard(true);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 300,
        width: "25%",
        border: "2px solid black",
        borderRadius: "15px",
        "--Card-radius": (theme) => theme.vars.radius.xs,
      }}
    >
      <CardContent>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          fontWeight="lg"
          textColor="text.primary"
        >
          {type}
        </Link>
      </CardContent>
      {commentsList.map((commentItem) => (
        <CardContent
          key={commentItem.id}
          sx={{
            border: "2px solid #A8512F",
            borderRadius: "10px",
            padding: "8px",
            fontSize: "sm",
          }}
        >
          {commentItem.text}
        </CardContent>
      ))}
      <CardContent orientation="horizontal" sx={{ gap: 1 }}>
        <Input
          variant="plain"
          size="sm"
          placeholder="Ask a question!"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{
            flex: 1,
            px: 0,
            "--Input-focusedThickness": "0px",
            border: "2px solid #233349",
            borderRadius: "5px",
            padding: "5px",
          }}
        />
        <Link onClick={handlePostClick} underline="none" role="button">
          Post
        </Link>
      </CardContent>
    </Card>
  );
}
