import React from "react";
import { Container, Link as MuiLink } from "@material-ui/core";
import styled from "styled-components";
import { ForgotPassForm } from "../../Components";
import { Link } from "react-router-dom";

export default function ForgotPassPage() {
  return (
    <PageContainer>
      <Container maxWidth="sm">
        <ForgotPassForm />
        <div className="wrapper">
          Need an account?
          <Link to="/sign-up" style={{ marginLeft: "5px" }}>
            <MuiLink component="span">Sing Up</MuiLink>
          </Link>
        </div>
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
