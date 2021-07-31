import React, { useState } from "react";
import { Container, Divider, Paper, Typography } from "@material-ui/core";
import styled from "styled-components";
import { theme } from "../../Contexts";
import FeedUserInfo from "./FeedUserInfo";
import FeedImage from "./FeedImage";
import { image1 } from "../../Images";
import FeedBottom from "./FeedBottom";

const comments = [
  {
    username: "@sifatulIslam",
    text: "Create a user authentication system with the help of firebase. Let's go!!",
  },
  {
    username: "@sifatulIslam",
    text: "Create a user authentication system with the help of firebase. Let's go!!",
  },
  {
    username: "@sifatulIslam",
    text: "Create a user authentication system with the help of firebase. Let's go!!",
  },
  {
    username: "@sifatulIslam",
    text: "Create a user authentication system with the help of firebase. Let's go!!",
  },
  {
    username: "@sifatulIslam",
    text: "Create a user authentication system with the help of firebase. Let's go!!",
  },
  {
    username: "@sifatulIslam",
    text: "Create a user authentication system with the help of firebase. Let's go!!",
  },
];

export default function FeedCard({ post }) {
  const [showComment, setShowComment] = useState(false);

  return (
    <CardWrapper>
      <Container maxWidth="sm">
        <Paper>
          <FeedUserInfo
            avatarURL={post.avatarURL}
            name={post.displayName}
            time={"Tue, 20 July, 2021"}
          />
          <Divider />
          <FeedImage imgURL={post.photoURL} />
          <div className="container">
            <Typography variant="body1">{post.caption}</Typography>
          </div>
          <FeedBottom
            showComment={showComment}
            theme={theme}
            setShowComment={setShowComment}
            comments={comments}
          />
        </Paper>
      </Container>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  height: max-content;
  width: auto;
  margin-top: 10px;

  .container {
    width: 100%;
    height: max-content;
    padding: 8px;
  }

  .summary {
    div {
      margin: 0;
    }
  }
`;
