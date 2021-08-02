import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import { theme } from "../../Contexts";

export const useStyles = makeStyles({
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
export const ImgView = styled.div`
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

export const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 8px;
`;
