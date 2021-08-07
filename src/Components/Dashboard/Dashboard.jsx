import React from "react";
import { Avatar, Paper, Typography } from "@material-ui/core";
import { useAuth } from "../../Contexts";
import AboutTextarea from "./AboutTextarea";

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <Paper variant="outlined" style={{ padding: "8px" }}>
      <Avatar
        src={currentUser.photoURL}
        style={{ width: "100px", height: "100px", margin: "0 auto" }}
      />
      <Typography
        variant="h6"
        align="center"
        style={{ marginTop: "24px" }}
        gutterBottom
      >
        {currentUser.displayName}
      </Typography>
      <AboutTextarea />
    </Paper>
  );
}
