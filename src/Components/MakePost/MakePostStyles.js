import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  formContainer: {
    width: "100%",
    height: "max-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  btnContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "10px",
  },

  input: {
    display: "none",
    "&::before": {
      display: "none",
    },

    "&::after": {
      display: "none",
    },
  },

  gridImgCont: {
    width: "100%",
    height: "max-content",
    paddingTop: "10px",
    paddingBottom: "10px",
  },

  gridImg: {
    width: "auto",
    height: "80px",
  },
});
