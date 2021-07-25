import React from "react";
import { Container } from "@material-ui/core";
import { CreatePost, FeedCard } from "../../Components";
import { UserContext } from "../../Contexts/UserContext";

export default function Home() {
  const userInfo = React.useContext(UserContext).userInfo;

  return (
    <Container maxWidth="sm" style={{ marginTop: "90px" }}>
      <CreatePost userInfo={userInfo} />
      <FeedCard />
    </Container>
  );
}
