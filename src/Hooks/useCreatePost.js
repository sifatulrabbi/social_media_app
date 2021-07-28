import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import { v4 as uuidV4 } from "uuid";
import { storage } from "../firebase";

export default function useCreatePost() {
  const { image, username, displayName, avatarURL, caption, comments, dislikes, likes } =
    useContext(DataContext);

  async function newPost() {
    let photoURL = await uploadImage();
    if (!photoURL) photoURL = "";

    const post = {
      id: uuidV4(),
      username: username,
      displayName: displayName,
      avatarURL: avatarURL,
      caption: caption,
      photoURL: photoURL,
      comments: comments,
      likes: likes,
      dislikes: dislikes,
    };

    return post;
  }

  async function uploadImage() {
    let URL;
    if (!image) return;
    const imgRef = storage.ref("/images").child(image.name);
    await imgRef.put(image);
    await imgRef.getDownloadURL(image.name).then((url) => {
      URL = url;
    });

    return URL;
  }

  return { newPost };
}
