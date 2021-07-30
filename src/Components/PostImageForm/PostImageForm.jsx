import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

export default function PostImageForm({ setImage }) {
  function handleChange(e) {
    setImage(e.target.files[0]);
  }

  return (
    <Container>
      <input type="file" id="img-input" onChange={handleChange} />
      <Button variant="text" component="label" htmlFor="img-input">
        Photo
      </Button>
    </Container>
  );
}

const Container = styled.form`
  width: max-content;
  height: max-content;

  input {
    display: none;
  }

  label {
    margin-right: 8px;
  }
`;
