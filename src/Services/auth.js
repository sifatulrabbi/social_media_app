import { auth, provider } from "../firebase";

export const signInWithGoogle = async () => {
  let user = null;

  await auth
    .signInWithPopup(provider)
    .then((res) => {
      console.log(res.user);
      user = res.user;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return user;
};

export const logout = async () => {
  let logoutSuccess;

  await auth
    .signOut()
    .then(() => (logoutSuccess = true))
    .catch((err) => console.log(err.message));

  return logoutSuccess;
};
