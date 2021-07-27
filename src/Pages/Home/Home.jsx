import React, { useContext } from "react";
import { Container } from "@material-ui/core";
import { Navbar, CreatePost, FeedCard, Login } from "../../Components";
import { DataContext } from "../../Contexts/DataContext";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const { posts, signInStatus } = useContext(DataContext);

  if (signInStatus) {
    return (
      <>
        <Navbar />
        <Container maxWidth="sm" style={{ marginTop: "90px" }}>
          <CreatePost />
          {posts.map((post) => {
            return (
              <FeedCard
                key={uuidv4()}
                avatar={post.avatarURL}
                userName={post.username}
                displayName={post.displayName}
                caption={post.caption}
                imgURL={post.photoURL}
                comments={post.comments}
              />
            );
          })}
          <div style={{ marginTop: "3rem", width: "100%" }} />
        </Container>
      </>
    );
  } else {
    return <Login />;
  }
}
