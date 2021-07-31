import React from "react";
import { Avatar, Menu, MenuItem, IconButton, makeStyles } from "@material-ui/core";
import { theme } from "../../Contexts";
import { useAuth } from "../../Contexts/AuthContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    padding: 0,
    border: `2px solid ${theme.palette.primary.main}`,
  },
});

export default function AvatarBtn({ noMenu, avatarURL }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const { logout } = useAuth();
  const history = useHistory();

  function handleClick(e) {
    !noMenu && setAnchorEl(e.currentTarget);
  }

  function onProfileClick() {
    setAnchorEl(null);
    history.push("/dashboard");
  }

  async function handleLogout() {
    setAnchorEl(null);

    await logout();
    history.push("/login");
  }

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.btn}
      >
        <Avatar
          src={avatarURL}
          style={{ pointerEvents: "none", height: "35px", width: "35px" }}
        />
      </IconButton>
      {!noMenu && (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={onProfileClick}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      )}
    </div>
  );
}
