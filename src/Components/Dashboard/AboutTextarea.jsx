import React, { useState, useRef } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

export default function AboutTextarea() {
  const aboutRef = useRef();
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis maiores cumque autem doloribus atque? Ipsam minima autem recusandae delectus molestias voluptates architecto reiciendis"
  );

  return (
    <Typography variant="body2" component="div" color="textSecondary">
      <Textarea ref={aboutRef} value={about} />
    </Typography>
  );
}

const Textarea = styled.textarea`
  background: transparent;
  resize: none;
  text-align: center;
  width: 100%;
  min-height: 50px;
`;
