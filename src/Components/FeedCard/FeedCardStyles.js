import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  userInfo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "10px",
  },

  imgContainer: {
    width: "100%",
    height: "max-content",
    padding: "0 8px",
    marginBottom: "15px",
  },

  img: {
    width: "100%",
    height: "auto",
    borderRadius: "4px",
  },

  iconBtn: {
    height: "30px",
    width: "30px",
    margin: "5px",
    padding: 0,
  },

  btnContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
