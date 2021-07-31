import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { Comment, Favorite } from "@material-ui/icons";
import styled from "styled-components";

export default function FeedReactions({ theme, showComment, setShowComment }) {
  const [liked, setLiked] = useState(false);

  function handleCommentClick() {
    setShowComment((prev) => !prev);
  }

  function handleLikeClick() {
    setLiked((prev) => !prev);
  }

  return (
    <Container>
      <IconButton
        color="inherit"
        style={{ color: liked ? theme.palette.error.main : "white" }}
        onClick={handleLikeClick}
      >
        <Favorite />
      </IconButton>
      <IconButton
        color={showComment ? "primary" : "inherit"}
        onClick={handleCommentClick}
      >
        <Comment />
      </IconButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;

  button {
    padding: 6px;
  }
`;
