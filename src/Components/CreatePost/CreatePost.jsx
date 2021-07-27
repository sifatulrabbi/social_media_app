import React from "react";
import { Container } from "@material-ui/core";
import MakePostCard from "../MakePostCard/MakePostCard";

export default function CreatePost() {
  return (
    <Container maxWidth={false} align="center" style={{ padding: 0 }}>
      <MakePostCard />
    </Container>
  );
}
