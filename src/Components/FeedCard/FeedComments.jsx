import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

export default function FeedComments() {
  return (
    <Container>
      <Typography variant="subtitle2">Comments</Typography>
      <div style={{ marginTop: "1rem" }} />
      {/* {comments.map((comment) => (
        <div style={{ marginBottom: "8px" }} key={Math.random() * 100}>
          <Typography
            variant="subtitle2"
            component="span"
            style={{ marginRight: "10px" }}
          >
            {comment.username}:
          </Typography>
          <Typography variant="body2" component="span">
            {comment.text}
          </Typography>
        </div>
      ))} */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 8px;
`;
