import React, { useContext } from "react";
import { Paper, Typography, TextField, Input, Button, Grid } from "@material-ui/core";
import { Add, Send } from "@material-ui/icons";
import { DataContext } from "../../Contexts/DataContext";
import { FncContext } from "../../Contexts/FncContext";
import { useStyles } from "./MakePostStyles";

export default function MakePostCard() {
  const { caption, image } = useContext(DataContext);
  const { captionChange, imgChange, imgRemove, uploadPost } = useContext(FncContext);
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <Paper style={{ width: "100%", padding: "10px" }}>
        <Typography variant="subtitle1" align="left">
          Create a Post
        </Typography>
        <TextField
          type="text"
          multiline
          fullWidth
          placeholder="write a caption"
          value={caption}
          onChange={captionChange}
        />
        <Input
          id="upload-photo"
          className={classes.input}
          color="primary"
          variant="contained"
          type="file"
          onChange={imgChange}
        />
        <Grid
          alignContent="flex-start"
          alignItems="flex-start"
          container
          spacing={2}
          className={classes.gridImgCont}
          style={{ display: !image && "none" }}
        >
          <Grid item>
            {image !== null && (
              <img
                src={URL.createObjectURL(image)}
                alt="upload"
                className={classes.gridImg}
                onClick={imgRemove}
              />
            )}
          </Grid>
        </Grid>
        <div className={classes.btnContainer}>
          <Button
            variant="text"
            endIcon={<Add />}
            component="label"
            htmlFor="upload-photo"
          >
            Photo
          </Button>
          <Button
            variant="text"
            color="primary"
            disabled={caption === ""}
            endIcon={<Send />}
            onClick={uploadPost}
          >
            Post
          </Button>
        </div>
      </Paper>
    </div>
  );
}
