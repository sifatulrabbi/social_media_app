import { createContext, useState, useContext } from "react";
import { storage } from "../firebase";
import { useAuth } from "./AuthContext";
import { v4 as uuidv4 } from "uuid";

export const SetPostContext = createContext();

export function SetPostProvider({ children }) {
  const [imageURL, setImageURL] = useState("");
  const { currentUser } = useAuth();
  const storageRef = storage.ref();

  function uploadImage(imageFile) {
    const imagesRef = storageRef.child(`images/${imageFile.name}`);

    return imagesRef.put(imageFile);
  }

  function getImageURL(imageFile) {
    storageRef
      .child(`images/${imageFile.name}`)
      .getDownloadURL()
      .then((url) => setImageURL(url));
  }

  function setPost(caption) {
    const postObj = {
      postId: uuidv4(),
      displayName: currentUser.displayName,
      caption: caption,
      imageURL: imageURL,
    };

    console.log(postObj);
  }

  const value = {
    uploadImage,
    getImageURL,
    setPost,
  };

  return <SetPostContext.Provider value={value}>{children}</SetPostContext.Provider>;
}

export function useSetPost() {
  return useContext(SetPostContext);
}
