import React from "react";
import addNewPost from "../Services/addNewPost";

export default function useCreatePost(user) {
  const [caption, setCaption] = React.useState("");
  const [image, setImage] = React.useState(null);

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

  async function handleUpload() {
    await addNewPost({ user, image, caption }).then(() => {
      setCaption("");
      setImage(null);
    });
  }

  return { caption, image, captionChange, imgChange, imgRemove, handleUpload };
}
