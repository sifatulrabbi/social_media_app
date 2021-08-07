import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Contexts";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";

export default function AppDrawer({ show, setShow }) {
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await logout();
    setShow(false);
    history.push("/login");
  }

  function onProfileClick() {
    setShow(false);
    history.push("/dashboard");
  }

  return (
    <Drawer anchor="right" open={show} onClose={() => setShow(false)}>
      <List style={{ width: 200 }}>
        <ListItem button onClick={() => history.push("/")}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={onProfileClick}>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
}
