import React from "react";
import { IconButton, Container, Input } from "@material-ui/core";
import { Add } from "@material-ui/icons";

export default function AddCommentCard() {
  const [comment, setComment] = React.useState("");

  function handleComment(e) {
    setComment(e.target.value);
  }

  return (
    <Container
      maxWidth="sm"
      style={{
        padding: "5px 0",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Input
        type="text"
        placeholder="add a comment"
        multiline
        style={{ flexGrow: 1 }}
        value={comment}
        onChange={handleComment}
      />
      <IconButton color="primary" style={{ padding: "5px" }} disabled={comment === ""}>
        <Add />
      </IconButton>
    </Container>
  );
}
