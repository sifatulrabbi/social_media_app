import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

export default function PostTextArea({ label, text, setText }) {
  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <Container>
      <TextField
        color="primary"
        fullWidth
        multiline
        variant="outlined"
        label={label}
        value={text}
        onChange={handleChange}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  height: max-content;

  textarea {
    font-size: 16px;
  }
`;
