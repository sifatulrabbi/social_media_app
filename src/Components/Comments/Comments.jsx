import React from "react";
import { Container, Divider, Typography } from "@material-ui/core";
import AddCommentCard from "../AddCommentCard/AddCommentCard";
import CommentCard from "../CommentCard/CommentCard";
import { v4 as uuidv4 } from "uuid";

export default function Comments({ id, comments, show }) {
  return (
    <Container
      maxWidth="sm"
      align="left"
      style={{ display: !show && "none", paddingBottom: "5px" }}
    >
      <Typography
        variant="subtitle1"
        component="h6"
        gutterBottom
        style={{ fontWeight: 500 }}
      >
        Comments
      </Typography>
      {comments.map((comment) => (
        <div key={uuidv4()}>
          <Divider />
          <CommentCard userName={comment.username} comment={comment.comment} />
        </div>
      ))}
      <AddCommentCard id={id} />
    </Container>
  );
}
