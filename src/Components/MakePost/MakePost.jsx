import React from "react";
import { Paper, Typography, TextField, Input, Button, Grid } from "@material-ui/core";
import { Add, Send } from "@material-ui/icons";
import { useStyles } from "./MakePostStyles";

export default function MakePost() {
  const classes = useStyles();
  const [caption, setCaption] = React.useState("");
  const [upImgList, setUpImgList] = React.useState([]);

  function handleInputChange(e) {
    setCaption(e.target.value);
  }

  function handleImageChange(e) {
    if (e.target.files[0]) {
      const uploadedFile = e.target.files[0];
      const fileURL = URL.createObjectURL(uploadedFile);
      const oldList = [...upImgList];
      const newList = [...oldList, fileURL];

      setUpImgList(newList);
    }
  }

  function handleImgRemove(e) {
    const removeImg = e.target.src;
    const oldList = [...upImgList];
    const filteredList = oldList.filter((img) => img !== removeImg);

    setUpImgList(filteredList);
  }

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
          onChange={handleInputChange}
        />
        <Input
          id="upload-photo"
          className={classes.input}
          color="primary"
          variant="contained"
          type="file"
          onChange={handleImageChange}
        />
        <Grid
          alignContent="flex-start"
          alignItems="flex-start"
          container
          spacing={2}
          className={classes.gridImgCont}
        >
          {upImgList.map((img) => (
            <Grid item key={img}>
              <img src={img} alt="upload" className={classes.gridImg} onClick={handleImgRemove} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.btnContainer}>
          <Button
            variant="text"
            style={{ color: "#777" }}
            endIcon={<Add />}
            component="label"
            htmlFor="upload-photo"
          >
            Photo
          </Button>
          <Button variant="text" color="primary" endIcon={<Send />}>
            Post
          </Button>
        </div>
      </Paper>
    </div>
  );
}
