import React from "react";
import SignInBtn from "../SignInBtn/SignInBtn";
import { UserContext } from "../../Contexts/UserContext";
import { AppBar, Typography, Container, Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import { useStyles } from "./NavbarStyles";
import { logout } from "../../Services/auth";

export default function Navbar() {
  const classes = useStyles();
  const userInfo = React.useContext(UserContext).userInfo;
  const loginStatus = React.useContext(UserContext).loginStatus;

  function AvatarBtn() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(e) {
      setAnchorEl(e.target);
    }

    function handleClose() {
      setAnchorEl(null);
      logout();
    }

    return (
      <div>
        <Button ref={anchorEl} onClick={handleClick} className={classes.avatarBtn}>
          <Avatar src={userInfo.photoURL} alt="user" className={classes.avatar} style={{ pointerEvents: "none" }} />
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }

  return (
    <AppBar align="start" position="fixed" className={classes.navbar}>
      <Container maxWidth={false} className={classes.container}>
        <Typography variant="h5" color="inherit">
          Socialize
        </Typography>
        {loginStatus ? <AvatarBtn /> : <SignInBtn />}
      </Container>
    </AppBar>
  );
}
