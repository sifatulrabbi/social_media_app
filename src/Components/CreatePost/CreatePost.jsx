import React from "react";
import { Container } from "@material-ui/core";
import MakePostCard from "../MakePost/MakePostCard";
import useCreatePost from "../../Hooks/useCreatePost";

export default function CreatePost({ userInfo }) {
  const props = useCreatePost(userInfo);

  return (
    <Container maxWidth={false} align="center" style={{ padding: 0 }}>
      <MakePostCard props={props} />
    </Container>
  );
}
