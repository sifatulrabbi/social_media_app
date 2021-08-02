import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

export default function LoadingScreen() {
  return (
    <Container>
      <CircularProgress size={50} />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;
