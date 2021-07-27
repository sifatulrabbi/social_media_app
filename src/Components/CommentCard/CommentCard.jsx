import { Container, Typography, makeStyles, IconButton } from "@material-ui/core";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  iconContainer: {
    padding: "0",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  icons: {
    height: "15px",
    width: "15px",
  },
  iconBtn: {
    padding: "5px",
  },
});

export default function CommentCard() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" style={{ padding: "5px 0" }}>
      <div>
        <Typography variant="subtitle2" component="span" style={{ paddingRight: "10px" }}>
          @username
        </Typography>
        <Typography variant="body2" component="span">
          Lorem ipsum dolor sit, adipisicing elit.
        </Typography>
      </div>
      <Container maxWidth="sm" className={classes.iconContainer}>
        <IconButton className={classes.iconBtn}>
          <ArrowUpward className={classes.icons} />
        </IconButton>
        <IconButton className={classes.iconBtn}>
          <ArrowDownward className={classes.icons} />
        </IconButton>
      </Container>
    </Container>
  );
}
