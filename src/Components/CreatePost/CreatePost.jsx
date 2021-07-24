import React from "react";
import { Container, Typography } from "@material-ui/core";
import SignInBtn from "../SignInBtn/SignInBtn";

export default function CreatePost() {
  return (
    <Container maxWidth="md" align="center" style={{ marginTop: "65px", paddingTop: "20px" }}>
      <SignInBtn />
      <span style={{ margin: "0 5px" }} />
      <Typography variant="body1" component="span">
        to post & comment
      </Typography>
    </Container>
  );
}
