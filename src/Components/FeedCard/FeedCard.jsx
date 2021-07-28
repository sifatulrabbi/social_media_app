import React from "react";
import {
  Container,
  Paper,
  IconButton,
  Typography,
  Divider,
  Avatar,
} from "@material-ui/core";
import { ThumbDown, ThumbUp, Comment } from "@material-ui/icons";
import { useStyles } from "./FeedCardStyles";
import Comments from "../Comments/Comments";

export default function FeedCard({
  imgURL,
  comments,
  caption,
  displayName,
  avatar,
  userName,
}) {
  const classes = useStyles();
  const [showComment, setShowComment] = React.useState(false);

  function handleShowComment() {
    setShowComment((prev) => !prev);
  }

  return (
    <Container
      maxWidth="sm"
      style={{
        padding: 0,
        marginTop: "10px",
        height: "max-content",
      }}
    >
      <Paper style={{ height: "max-content" }}>
        <div className={classes.userInfo}>
          <Avatar src={avatar} style={{ marginRight: "10px" }} />
          <div>
            <Typography variant="subtitle1" style={{ fontWeight: 500 }}>
              {displayName}
            </Typography>
            <Typography
              variant="caption"
              style={{ cursor: "pointer" }}
            >{`@${userName}`}</Typography>
          </div>
        </div>
        {imgURL && (
          <div className={classes.imgContainer}>
            <img src={imgURL} alt="" className={classes.img} />
          </div>
        )}
        <Container style={{ padding: "10px" }}>
          <Typography variant="body1" align="left" component="p" gutterBottom paragraph>
            {caption}
          </Typography>
        </Container>
        <Divider />
        <Container className={classes.btnContainer}>
          <IconButton className={classes.iconBtn}>
            <ThumbUp />
          </IconButton>
          <IconButton className={classes.iconBtn}>
            <ThumbDown />
          </IconButton>
          <IconButton
            className={classes.iconBtn}
            style={{ marginLeft: "auto" }}
            color={showComment ? "primary" : "default"}
            onClick={handleShowComment}
          >
            <Comment />
          </IconButton>
        </Container>
        <Comments comments={comments} show={showComment} />
      </Paper>
    </Container>
  );
}
