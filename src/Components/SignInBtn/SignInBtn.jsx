import React from "react";

import { Button } from "@material-ui/core";
import { signInWithGoogle } from "../../Services/auth";
import { UserContext } from "../../Contexts/UserContext";

export default function SignInBtn() {
  const setUserInfo = React.useContext(UserContext).setUserInfo;

  async function handleSignIn() {
    let userBySignIn = await signInWithGoogle();

    if (userBySignIn) setUserInfo(userBySignIn);
  }

  return (
    <Button variant="contained" color="secondary" onClick={handleSignIn}>
      Sign in
    </Button>
  );
}