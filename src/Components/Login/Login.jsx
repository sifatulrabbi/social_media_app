import React from "react";
import { Container, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import SignInBtn from "../SignInBtn/SignInBtn";

export default function Login() {
  return (
    <Container style={{ backgroundColor: blue[400], maxWidth: "100vw" }}>
      <Container
        maxWidth="sm"
        align="center"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
        }}
      >
        <Typography variant="h5" component="h1" color="inherit">
          Welcome to
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          color="inherit"
          style={{ fontWeight: "500", textTransform: "uppercase" }}
        >
          Socialize
        </Typography>
        <SignInBtn />
      </Container>
    </Container>
  );
}
