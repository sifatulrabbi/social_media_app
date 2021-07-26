import React from "react";
import { Container, ImageList, ImageListItem, Paper, IconButton, Typography, FormControl, Input } from "@material-ui/core";
import { ThumbDown, ThumbUp, Send } from "@material-ui/icons";
import img from "../../Image/js-img.jpg";
import { useStyles } from "./FeedCardStyles";

export default function FeedCard() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} style={{ marginTop: "20px", padding: 0 }}>
      <Paper>
        <ImageList cols={1} rowHeight={220} style={{ padding: "5px" }}>
          <ImageListItem>
            <img src={img} alt="hello" />
          </ImageListItem>
        </ImageList>
        <Container maxWidth="sm" className={classes.btnContainer}>
          <IconButton className={classes.iconBtn} color="primary">
            <ThumbUp />
          </IconButton>
          <IconButton className={classes.iconBtn} color="primary">
            <ThumbDown />
          </IconButton>
        </Container>
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="subtitle1" gutterBottom>
            Comments
          </Typography>
          <div>
            <Typography variant="body1" component="button" className={classes.username}>
              @username
            </Typography>
            <Typography variant="body2" component="span">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, error!
            </Typography>
          </div>
          <FormControl component="form" className={classes.comments}>
            <Input id="comment" fullWidth placeholder="add a comment" />
            <div>
              <IconButton type="submit" style={{ padding: "10px" }}>
                <Send style={{ width: "20px", height: "20px" }} />
              </IconButton>
            </div>
          </FormControl>
        </Container>
      </Paper>
    </Container>
  );
}
