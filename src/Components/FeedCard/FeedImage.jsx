import React from "react";
import styled from "styled-components";

export default function FeedImage({ imgURL }) {
  return (
    <Container>
      <Img src={imgURL} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: max-content;
`;
const Img = styled.img`
  width: inherit;
  max-width: 100%;
  height: auto;
`;
