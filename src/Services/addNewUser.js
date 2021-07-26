import { db } from "../firebase";

export default async function addNewUser(user) {
  let status = false;
  const userName = user.email.replace("@gmail.com", "").replace(".", "_");
  const userObject = {
    userName: userName,
    displayName: user.displayName,
    avatar: user.photoURL,
  };

  const userRef = db.collection("users").doc(userName);

  await userRef.set(userObject).then(() => {
    console.log("Log in successful");
    status = true;
  });

  return status;
}
