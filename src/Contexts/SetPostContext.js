import { createContext, useState, useContext } from "react";
import { db, storage } from "../firebase";
import { useAuth } from "./AuthContext";
import { v4 as uuidv4 } from "uuid";

export const SetPostContext = createContext();

export function SetPostProvider({ children }) {
  const [imageURL, setImageURL] = useState("");
  const { currentUser } = useAuth();
  const storageRef = storage.ref();

  function uploadImage(imageFile) {
    if (!imageFile) return;
    const imagesRef = storageRef.child(`images/${imageFile.name}`);
    return imagesRef.put(imageFile);
  }

  async function getImageURL(imageFile) {
    if (!imageFile) return;
    return await storageRef
      .child(`images/${imageFile.name}`)
      .getDownloadURL()
      .then((url) => {
        setImageURL(url);
      });
  }

  function setPost(caption) {
    const postObj = createNewPost(caption);

    return db
      .collection("posts")
      .doc(postObj.id)
      .set({ ...postObj });
  }

  function createNewPost(text) {
    const obj = {};

    obj.id = uuidv4();
    obj.displayName = currentUser.displayName;
    obj.caption = text;
    obj.photoURL = imageURL;
    obj.avatarURL = currentUser.photoURL;

    return obj;
  }

  const value = {
    uploadImage,
    setPost,
    getImageURL,
  };

  return <SetPostContext.Provider value={value}>{children}</SetPostContext.Provider>;
}

export function useSetPost() {
  return useContext(SetPostContext);
}
