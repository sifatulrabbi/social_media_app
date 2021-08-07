import React, { useState, useRef, useEffect } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

export default function AboutTextarea() {
  const aboutRef = useRef();
  const [about, setAbout] = useState(
    "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
  );
  const [height, setHeight] = useState(50);

  const handleChange = (e) => {
    setAbout(e.target.value);
  };

  const measureHeight = () => {
    setHeight(aboutRef.current.scrollHeight);
  };

  useEffect(() => {
    measureHeight();
  }, [about]);

  return (
    <Typography variant="body2" component="div" color="textSecondary">
      <Textarea
        ref={aboutRef}
        placeholder="write your about"
        value={about}
        height={height}
        onChange={handleChange}
        maxLength="300"
      />
    </Typography>
  );
}

const Textarea = styled.textarea`
  background: transparent;
  resize: none;
  text-align: center;
  width: 100%;
  height: ${({ height }) => `${height}px`};
`;
