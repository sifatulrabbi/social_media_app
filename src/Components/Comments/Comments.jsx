import React from "react";
import { Container, Divider, Typography } from "@material-ui/core";
import AddCommentCard from "../AddCommentCard/AddCommentCard";
import CommentCard from "../CommentCard/CommentCard";

export default function Comments({ comments, show }) {
  return (
    <Container maxWidth="sm" align="left" style={{ display: !show && "none" }}>
      <Typography
        variant="subtitle1"
        component="h6"
        gutterBottom
        style={{ fontWeight: 500 }}
      >
        Comments
      </Typography>
      {comments.map((comment) => (
        <>
          <Divider />
          <CommentCard userName={comment.userName} comment={comment.comment} />
        </>
      ))}
      <AddCommentCard />
    </Container>
  );
}
