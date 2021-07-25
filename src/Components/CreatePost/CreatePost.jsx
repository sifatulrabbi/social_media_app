import React from "react";
import { Container, Typography } from "@material-ui/core";
import SignInBtn from "../SignInBtn/SignInBtn";
import MakePost from "../MakePost/MakePost";

export default function CreatePost({ userInfo }) {
  function SignIn() {
    return (
      <div>
        <SignInBtn />
        <span style={{ margin: "0 5px" }} />
        <Typography variant="body1" component="span">
          to post and comment
        </Typography>
      </div>
    );
  }

  return (
    <Container maxWidth={false} align="center" style={{ padding: 0 }}>
      {true ? <MakePost /> : <SignIn />}
    </Container>
  );
}
