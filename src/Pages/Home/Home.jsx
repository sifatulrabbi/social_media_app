import React from "react";
import { Container } from "@material-ui/core";
import { CreatePost, FeedCard } from "../../Components";
import { UserContext } from "../../Contexts/UserContext";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const userInfo = React.useContext(UserContext).userInfo;
  const posts = React.useContext(UserContext).posts;

  return (
    <Container maxWidth="sm" style={{ marginTop: "90px" }}>
      <CreatePost userInfo={userInfo} />
      {posts.map((post) => (
        <FeedCard
          key={uuidv4()}
          avatar={post.avatar}
          userName={post.userName}
          displayName={post.displayName}
          caption={post.caption}
          imgURL={post.imgURL}
          comments={post.comments}
        />
      ))}
    </Container>
  );
}
