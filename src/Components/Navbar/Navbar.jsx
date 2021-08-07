import React, { useState } from "react";
import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AvatarBtn from "../AvatarBtn/AvatarBtn";
import { useAuth } from "../../Contexts";
import AppDrawer from "../AppDrawer/AppDrawer";
import useStyles from "./Navbar.styles";

export default function Navbar() {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const [show, setShow] = useState(false);

  return (
    <AppBar
      align="start"
      color="inherit"
      position="fixed"
      className={classes.navbar}
    >
      <Link to="/">
        <Typography variant="h5" component="h1" className={classes.name}>
          SOCIALIZE
        </Typography>
      </Link>
      <AvatarBtn avatarURL={currentUser.photoURL} setShow={setShow} />
      <AppDrawer show={show} setShow={setShow} />
    </AppBar>
  );
}
