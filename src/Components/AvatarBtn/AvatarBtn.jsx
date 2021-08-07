import React from "react";
import { Avatar, IconButton, makeStyles } from "@material-ui/core";
import { theme } from "../../Contexts";

const useStyles = makeStyles({
  btn: {
    padding: 0,
    border: `2px solid ${theme.palette.primary.main}`,
  },
});

export default function AvatarBtn({ setShow, avatarURL }) {
  const classes = useStyles();

  function handleClick(e) {
    setShow(true);
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
    </div>
  );
}
