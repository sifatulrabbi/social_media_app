import React, { useState } from "react";
import { Button, Divider, TextField } from "@material-ui/core";
import styled from "styled-components";
import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import { useAuth, useComments } from "../../Contexts";

export default function AddComment({ postId }) {
  const { getComments } = useComments();
  const { currentUser } = useAuth();
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const comment = {
      commentId: uuidv4(),
      id: postId,
      displayName: currentUser.displayName,
      text: text,
    };

    await db
      .collection("comments")
      .doc(comment.commentId)
      .set(comment)
      .then(() => {
        setText("");
        console.log("comment posted!");
      })
      .catch((error) => {
        console.log(error.message);
      });

    await getComments();
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Divider />
      <Container action="submit" onSubmit={handleSubmit}>
        <TextField
          placeholder="post a comment"
          color="secondary"
          multiline
          fullWidth
          onChange={handleChange}
          value={text}
        />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          color="secondary"
          size="small"
          style={{ marginLeft: "6px" }}
        >
          Post
        </Button>
      </Container>
    </>
  );
}

const Container = styled.form`
  width: 100%;
  height: max-content;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
