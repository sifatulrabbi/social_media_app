import React from "react";
import { Container, Typography } from "@material-ui/core";
import styled from "styled-components";
import { LoginButton } from "../../Components";
import { theme } from "../../Contexts";

export default function LoginPage() {
  return (
    <PageContainer>
      <Container maxWidth="sm" align="center">
        <Typography align="center" variant="h5" component="h3" color="textPrimary">
          Welcome to
        </Typography>
        <Typography
          align="center"
          variant="h3"
          component="h1"
          color="textPrimary"
          gutterBottom
          style={{ textTransform: "uppercase", fontWeight: 500 }}
        >
          Socialize
        </Typography>
        <LoginButton />
      </Container>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.palette.primary.main};
`;
