import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { CreatePost, Navbar } from "../../Components";
// import { UserContext } from "../../Contexts/UserContext";

const useStyles = makeStyles({
  root: {
    marginTop: "70px",
    padding: 0,
    height: "max-content",
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Navbar />
      <CreatePost />
    </Container>
  );
}
