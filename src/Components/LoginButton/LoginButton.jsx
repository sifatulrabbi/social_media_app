import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { theme } from "../../Contexts";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../Contexts/AuthContext";

export default function LoginButton() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await login();
      history.push("/");
    } catch (err) {
      console.log(err.message ? err.message : "Failed to create a user!");
    }

    setLoading(false);
  }

  return (
    <Button size="large" variant="contained" color="secondary" onClick={handleLogin}>
      Login with Google
    </Button>
  );
}
