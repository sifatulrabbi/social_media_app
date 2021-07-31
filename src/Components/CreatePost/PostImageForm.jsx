import React from "react";
import { IconButton } from "@material-ui/core";
import { AddPhotoAlternate } from "@material-ui/icons";
import styled from "styled-components";

export default function PostImageForm({ setImage }) {
  async function handleChange(e) {
    setImage(e.target.files[0]);
  }

  return (
    <Container>
      <input type="file" id="img-input" onChange={handleChange} />
      <IconButton variant="text" color="secondary" component="label" htmlFor="img-input">
        <AddPhotoAlternate color="inherit" />
      </IconButton>
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
