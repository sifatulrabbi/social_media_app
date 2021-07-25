import React from "react";
import { storage } from "../firebase";

export default function useCreatePost(user) {
  const [caption, setCaption] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [progress, setProgress] = React.useState(0);
  const [fileUrl, setFileUrl] = React.useState();

  function captionChange(e) {
    const value = e.target.value;
    setCaption(value);
  }

  function imgChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  function imgRemove() {
    setImage(null);
  }

  function handleUpload() {
    console.log("uploading");

    if (image) handleImgUpload();
  }

  async function handleImgUpload() {
    const file = image;
    const fileRef = storage.ref().child(file.name);

    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  }

  return { caption, image, captionChange, imgChange, imgRemove, handleUpload };
}
