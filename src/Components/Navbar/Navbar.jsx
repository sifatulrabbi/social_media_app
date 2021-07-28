import React, { useState, useContext } from "react";
import {
  AppBar,
  Typography,
  Container,
  Avatar,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useStyles } from "./NavbarStyles";
import { DataContext } from "../../Contexts/DataContext";
import { FncContext } from "../../Contexts/FncContext";

export default function Navbar() {
  const classes = useStyles();
  const { avatarURL } = useContext(DataContext);
  const { Logout } = useContext(FncContext);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(e) {
    setAnchorEl(e.target);
  }

  function handleClose() {
    setAnchorEl(null);
    Logout();
  }

  return (
    <AppBar align="start" position="fixed" className={classes.navbar}>
      <Container maxWidth={false} className={classes.container}>
        <Typography
          variant="h5"
          color="inherit"
          style={{ textTransform: "uppercase", fontWeight: "500", fontSize: "22px" }}
        >
          Socialize
        </Typography>
        <div>
          <Button ref={anchorEl} onClick={handleClick} className={classes.avatarBtn}>
            <Avatar
              src={avatarURL}
              alt="user"
              className={classes.avatar}
              style={{ pointerEvents: "none" }}
            />
          </Button>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Container>
    </AppBar>
  );
}
