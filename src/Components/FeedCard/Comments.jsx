import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import AddComment from "./AddComment";
import { useComments } from "../../Contexts";

export default function FeedComments({ postId }) {
  const { comments } = useComments();
  const [thisComments, setThisComments] = useState([]);

  useEffect(() => {
    filterWithId(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  function filterWithId(postId = null) {
    if (!comments && !postId) return;

    setThisComments(() => comments.filter((comment) => comment.id === postId));
  }

  return (
    <Container>
      <Typography variant="subtitle2">
        {thisComments.length > 1 ? "Comments" : "No comments yet!"}
      </Typography>
      <div style={{ marginTop: "1rem" }} />
      {thisComments.map((comment) => (
        <div style={{ marginBottom: "8px" }} key={Math.random() * 100}>
          <Typography
            variant="subtitle2"
            component="span"
            style={{ marginRight: "10px" }}
          >
            {comment.displayName}:
          </Typography>
          <Typography variant="body2" component="span">
            {comment.text}
          </Typography>
        </div>
      ))}
      <AddComment postId={postId} filterWithId={filterWithId} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 8px;
`;
