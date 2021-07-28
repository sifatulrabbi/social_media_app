import { useContext, useState } from "react";
import { DataContext } from "../Contexts/DataContext";
import { v4 as uuidV4 } from "uuid";
import { storage } from "../firebase";

export default function useCreatePost() {
  const { image, username, displayName, avatarURL, caption, comments, dislikes, likes } =
    useContext(DataContext);
  const [photoURL, setPhotoURL] = useState("");

  async function newPost() {
    await uploadImage();

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
    if (!image) return;
    const imgRef = storage.ref("/images").child(image.name);
    await imgRef.put(image);
    await imgRef.getDownloadURL(image.name).then((url) => {
      setPhotoURL(url);
    });
  }

  return { newPost };
}
