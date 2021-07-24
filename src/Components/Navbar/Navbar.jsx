import React from "react";
import SignInBtn from "../SignInBtn/SignInBtn";
import { UserContext } from "../../Contexts/UserContext";
import { AppBar, Typography, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    height: "65px",
    color: "white",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
});

export default function Navbar() {
  const classes = useStyles();
  const userInfo = React.useContext(UserContext).userInfo;

  return (
    <AppBar align="start" position="fixed" className={classes.navbar}>
      <Container className={classes.container}>
        <Typography variant="h5" color="inherit">
          Socialize
        </Typography>
        {userInfo ? <img className="user-dp" src={userInfo.photoURL} alt="user" /> : <SignInBtn />}
      </Container>
    </AppBar>
  );
}
