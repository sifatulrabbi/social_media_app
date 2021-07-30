import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import { SignUpForm } from "../../Components";

export default function TestPage() {
  return (
    <PageContainer>
      <Container maxWidth="sm">
        <SignUpForm />
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

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: max-content;
    margin-top: 20px;
  }
`;
