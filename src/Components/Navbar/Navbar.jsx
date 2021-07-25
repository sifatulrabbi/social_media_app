import React from "react";
import SignInBtn from "../SignInBtn/SignInBtn";
import { UserContext } from "../../Contexts/UserContext";
import { AppBar, Typography, Container, Avatar } from "@material-ui/core";
import { useStyles } from "./NavbarStyles";

export default function Navbar() {
  const classes = useStyles();
  const userInfo = React.useContext(UserContext).userInfo;

  return (
    <AppBar align="start" position="fixed" className={classes.navbar}>
      <Container maxWidth={false} className={classes.container}>
        <Typography variant="h5" color="inherit">
          Socialize
        </Typography>
        {userInfo ? <Avatar src={userInfo.photoURL} alt="user" /> : <SignInBtn />}
      </Container>
    </AppBar>
  );
}
