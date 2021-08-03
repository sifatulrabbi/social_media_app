import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import { Dashboard, Navbar } from "../../Components";

export default function TestPage() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="sm"
        style={{ padding: "0 8px", minHeight: "100vh", marginTop: "60px" }}
      >
        <Dashboard />
      </Container>
    </>
  );
}
