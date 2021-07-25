import React from "react";
import { Button, Input, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    "&::before": {
      display: "none",
    },

    "&::after": {
      display: "none",
    },
  },
});

export default function PhotoUpload() {
  const classes = useStyles();

  return (
    <div>
      <Input
        id="upload-photo"
        className={classes.input}
        color="primary"
        variant="contained"
        type="file"
      />
    </div>
  );
}
