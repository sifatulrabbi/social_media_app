import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    navbar: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: "50px",
      padding: "0 1rem",
      boxShadow: theme.shadows[2],
    },

    name: {
      fontWeight: 500,
      color: theme.palette.primary.main,
    },
  })
);

export default useStyles;
