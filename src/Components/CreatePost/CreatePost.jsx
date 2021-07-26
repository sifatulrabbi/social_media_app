import React from "react";
import { Container, Typography } from "@material-ui/core";
import SignInBtn from "../SignInBtn/SignInBtn";
import MakePostCard from "../MakePost/MakePostCard";
import useCreatePost from "../../Hooks/useCreatePost";

export default function CreatePost({ userInfo }) {
  const props = useCreatePost(userInfo);

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
      {userInfo ? <MakePostCard props={props} /> : <SignIn />}
    </Container>
  );
}
