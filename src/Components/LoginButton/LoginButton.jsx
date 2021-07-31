import React, { useState } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
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
      {loading ? <CircularProgress /> : "Login with Google"}
    </Button>
  );
}
