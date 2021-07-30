import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import { Dashboard } from "../../Components";

export default function TestPage() {
  return (
    <PageContainer>
      <Container maxWidth="sm">
        <Dashboard />
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
`;
