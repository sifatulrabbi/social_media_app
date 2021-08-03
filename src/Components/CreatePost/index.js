import React, { useState } from "react";
import { Container, Paper, Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useStyles, ImgView, Wrapper } from "./styles";
import PostTextArea from "./PostTextArea";
import PostImageForm from "./PostImageForm";
import { v4 as uuidv4 } from "uuid";
import { useGetPosts, useAuth } from "../../Contexts";
import { db, storage } from "../../firebase";

export default function CreatePost() {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const { getPosts } = useGetPosts();
  const { currentUser } = useAuth();
  const storageRef = storage.ref();

  async function onPost() {
    setError("");
    setOpen(false);

    let post = {};

    try {
      if (!text) {
        setError("Unable to create a post");
        setOpen(true);
        return;
      }

      if (image) {
        const imagesRef = storageRef.child(`images/${image.name}`);

        await imagesRef.put(image);
        const url = await imagesRef.getDownloadURL();
        post = createNewPost(url);
      } else {
        post = createNewPost();
      }

      await db.collection("posts").doc(post.id).set(post);

      setImage(null);
      setText("");
      setOpen(true);

      getPosts();
    } catch (err) {
      setError("Post failed to upload");
      console.log(err.message);
    }
  }

  function removeImg() {
    setImage(null);
  }

  function handleClose(e, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  function createNewPost(url = "") {
    const obj = {};

    obj.id = uuidv4();
    obj.displayName = currentUser.displayName;
    obj.caption = text;
    obj.photoURL = url;
    obj.avatarURL = currentUser.photoURL;

    return obj;
  }

  return (
    <Container maxWidth="sm" style={{ padding: "0 8px" }}>
      <Paper className={classes.paper}>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert severity={error ? "error" : "success"} onClose={handleClose}>
            {error ? error : "Post uploaded!"}
          </Alert>
        </Snackbar>
        <PostTextArea label="Create a post" text={text} setText={setText} />
        <ImgView image={image}>
          {image && (
            <img src={URL.createObjectURL(image)} alt="adding" onClick={removeImg} />
          )}
        </ImgView>
        <Wrapper>
          <PostImageForm image={image} setImage={setImage} />
          <Button variant="text" color="primary" disableElevation onClick={onPost}>
            Post
          </Button>
        </Wrapper>
      </Paper>
    </Container>
  );
}
