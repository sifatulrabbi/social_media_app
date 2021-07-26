import React from "react";
import { Paper, Typography, TextField, Input, Button, Grid } from "@material-ui/core";
import { Add, Send } from "@material-ui/icons";
import { useStyles } from "./MakePostStyles";

export default function MakePostCard({ props }) {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <Paper style={{ width: "100%", padding: "10px" }}>
        <Typography variant="subtitle1" align="left">
          Create a Post
        </Typography>
        <TextField type="text" multiline fullWidth placeholder="write a caption" value={props.caption} onChange={props.captionChange} />
        <Input id="upload-photo" className={classes.input} color="primary" variant="contained" type="file" onChange={props.imgChange} />
        <Grid alignContent="flex-start" alignItems="flex-start" container spacing={2} className={classes.gridImgCont}>
          <Grid item>
            {props.image !== null && (
              <img src={URL.createObjectURL(props.image)} alt="upload" className={classes.gridImg} onClick={props.imgRemove} />
            )}
          </Grid>
        </Grid>
        <div className={classes.btnContainer}>
          <Button variant="text" endIcon={<Add />} component="label" htmlFor="upload-photo">
            Photo
          </Button>
          <Button variant="text" color="primary" disabled={props.caption === ""} endIcon={<Send />} onClick={props.handleUpload}>
            Post
          </Button>
        </div>
      </Paper>
    </div>
  );
}
