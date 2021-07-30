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
import styled from "styled-components";
import { useAuth } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch (err) {
      setError(err.message ? err.message : "Failed to reset password");
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
        Reset Password
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {message && <Alert severity="success">{message}</Alert>}
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
          {loading ? <CircularProgress color="inherit" /> : "Reset"}
        </Button>
        <div className="divider" />
        <Link to="/login">
          <Button variant="text" color="primary">
            Login
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
