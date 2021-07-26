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
  await auth
    .signOut()
    .then(() => {
      window.location.reload();
      console.log("successfully logged out");
    })
    .catch((err) => console.log(err.message));
}
