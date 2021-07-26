import { db, storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export default async function addNewPost(props) {
  const userName = props.user.email.replace("@gmail.com", "").replace(".", "_");
  const userRef = db.collection("users").doc(userName);
  const postRef = userRef.collection("posts");
  let postObj = {};

  if (props.image) {
    const imgRef = storage.ref().child(props.image.name);

    await imgRef.put(props.image).then((res) => {
      console.log("Image uploaded");
    });

    await imgRef.getDownloadURL().then((res) => {
      postObj = {
        caption: props.caption,
        photoURL: res,
      };
    });
  } else {
    postObj = {
      caption: props.caption,
    };
  }

  await postRef
    .doc(uuidv4())
    .set(postObj)
    .then(() => console.log("Post uploaded!"))
    .catch((err) => console.log(err));
}
