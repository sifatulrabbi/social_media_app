import { auth, provider } from "../firebase";

export async function signInWithGoogle() {
  let user = null;

  await auth
    .signInWithPopup(provider)
    .then((res) => {
      user = res.user;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return user;
}

export async function logout() {
  let logoutSuccess = false;

  await auth
    .signOut()
    .then(() => (logoutSuccess = true))
    .catch((err) => console.log(err.message));

  return logoutSuccess;
}
