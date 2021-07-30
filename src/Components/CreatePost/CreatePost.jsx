import React from "react";
import { Container, Paper, makeStyles, Button } from "@material-ui/core";
import styled from "styled-components";
import { theme } from "../../globalStyles";
import PostTextArea from "../PostTextArea/PostTextArea";
import PostImageForm from "../PostImageForm/PostImageForm";

const useStyles = makeStyles({
  paper: {
    padding: theme.spacing(1),
  },
});

export default function CreatePost() {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const [image, setImage] = React.useState(null);

  function onPost() {
    const postObj = {
      caption: text,
      image: image,
    };

    console.log(postObj);
  }

  function removeImg() {
    setImage(null);
  }

  return (
    <Container>
      <Paper className={classes.paper}>
        <PostTextArea label="Create a post" text={text} setText={setText} />
        <ImgView image={image}>
          {image && (
            <img src={URL.createObjectURL(image)} alt="adding" onClick={removeImg} />
          )}
        </ImgView>
        <Wrapper>
          <PostImageForm image={image} setImage={setImage} />
          <Button variant="contained" color="primary" disableElevation onClick={onPost}>
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
