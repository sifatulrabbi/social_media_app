import React, { useState } from "react";
import {
  Button,
  Paper,
  TextField,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { theme } from "../../globalStyles";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../Contexts/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      setError(err.message ? err.message : "Failed to create a user!");
    }

    setLoading(false);
  }

  return (
    <Paper style={{ padding: theme.spacing(2) }}>
      <Typography
        variant="h4"
        color="primary"
        align="center"
        style={{ marginBottom: theme.spacing(2) }}
      >
        Login
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <Form action="submit" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="email"
          variant="outlined"
          label="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          type="password"
          variant="outlined"
          label="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={Boolean(error)}
        />
        <div className="divider" />
        <Button
          disableElevation
          variant="contained"
          fullWidth
          color="primary"
          type="submit"
          size="large"
          disabled={loading}
        >
          {loading ? <CircularProgress color="inherit" /> : "Login"}
        </Button>
        <div className="divider" />
        <Link to="/reset-password" style={{ textDecoration: "none" }}>
          <Button color="primary" variant="text">
            Reset Password
          </Button>
        </Link>
      </Form>
    </Paper>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .input {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .divider {
    margin-top: 10px;
  }
`;
