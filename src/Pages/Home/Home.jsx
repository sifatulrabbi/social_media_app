import React from "react";
import { Container } from "@material-ui/core";
import { Navbar, CreatePost, FeedCard } from "../../Components";
import { UserContext } from "../../Contexts/UserContext";
import { v4 as uuidv4 } from "uuid";
import Login from "../../Components/Login/Login";

export default function Home() {
  const userInfo = React.useContext(UserContext).userInfo;
  const posts = React.useContext(UserContext).posts;
  const loginStatus = React.useContext(UserContext).loginStatus;

  if (loginStatus) {
    return (
      <>
        <Navbar />
        <Container maxWidth="sm" style={{ marginTop: "90px" }}>
          <CreatePost userInfo={userInfo} />
          {posts.map((post) => (
            <FeedCard
              key={uuidv4()}
              avatar={post.avatar}
              userName={post.userName}
              displayName={post.displayName}
              caption={post.caption}
              imgURL={post.photoURL}
              comments={post.comments}
            />
          ))}
          <div style={{ marginTop: "3rem", width: "100%" }} />
        </Container>
      </>
    );
  } else {
    return <Login />;
  }
}
