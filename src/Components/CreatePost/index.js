import React from "react";
import {
  Container,
  Paper,
  makeStyles,
  Button,
  CircularProgress,
} from "@material-ui/core";
import styled from "styled-components";
import { theme, useGetPosts } from "../../Contexts";
import PostTextArea from "./PostTextArea";
import PostImageForm from "./PostImageForm";
import { useSetPost } from "../../Contexts/SetPostContext";

const useStyles = makeStyles({
  paper: {
    padding: theme.spacing(1),
  },

  loadingScreen: {
    zIndex: 2000,
    position: "absolute",
    top: 0,
    right: "24px",
    left: "24px",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255, 0.2)",
  },
});

export default function CreatePost() {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { setPost, uploadImage, getImageURL } = useSetPost();
  const { getPosts } = useGetPosts();

  async function onPost() {
    setLoading(true);

    try {
      await uploadImage(image);
      await getImageURL(image);
      await setPost(text);
      setLoading(false);

      getPosts();
    } catch (err) {
      console.log(err.message);
    }
  }

  function removeImg() {
    setImage(null);
  }

  return (
    <Container maxWidth="sm" style={{ position: "relative" }}>
      {loading && (
        <div className={classes.loadingScreen}>
          <CircularProgress />
        </div>
      )}
      <Paper className={classes.paper}>
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

const ImgView = styled.div`
  width: 100%;
  height: max-content;
  margin: ${({ image }) => (image ? "8px 0" : "0")};
  position: relative;

  img {
    height: 100px;
    width: auto;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 8px;
`;
