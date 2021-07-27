import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { FncContext } from "../../Contexts/FncContext";

export default function SignInBtn() {
  const { SignIn } = useContext(FncContext);

  return (
    <Button variant="contained" color="secondary" onClick={SignIn}>
      Sign in with Google
    </Button>
  );
}
