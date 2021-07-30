import React from "react";
import { AppBar, Typography, makeStyles } from "@material-ui/core";
import AvatarBtn from "../AvatarBtn/AvatarBtn";
import { theme } from "../../globalStyles";

export const useStyles = makeStyles({
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "50px",
    padding: "0 1rem",
    backgroundColor: "#fff",
    boxShadow: theme.shadows[2],
  },

  name: {
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar align="start" position="fixed" className={classes.navbar}>
      <Typography variant="h5" component="h1" className={classes.name}>
        SOCIALIZE
      </Typography>
      <AvatarBtn />
    </AppBar>
  );
}
