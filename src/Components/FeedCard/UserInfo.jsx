import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AvatarBtn from "../AvatarBtn/AvatarBtn";

export default function FeedUserInfo({ avatarURL, name, time }) {
  return (
    <div className="container" style={{ display: "flex" }}>
      <AvatarBtn noMenu avatarURL={avatarURL} />
      <NameWrapper>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="caption">{time}</Typography>
      </NameWrapper>
    </div>
  );
}

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 8px;
`;
