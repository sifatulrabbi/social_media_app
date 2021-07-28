/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext } from "react";
import { DataContext } from "./DataContext";
import { auth, db, provider } from "../firebase";
import useGetPosts from "../Hooks/useGetPosts";
import useSaveUser from "../Hooks/useSaveUser";
import useCreatePost from "../Hooks/useCreatePost";

export const FncContext = createContext();

export default function FncContextProvider({ children }) {
  const { setCaption, setImage, setSignInStatus } = useContext(DataContext);
  const { getPosts } = useGetPosts();
  const { updateUserInfo, removeUser } = useSaveUser();
  const { newPost } = useCreatePost();

  const postsRef = db.collection("posts");

  async function SignIn() {
    await auth
      .signInWithPopup(provider)
      .then((res) => {
        const userFromLogin = res.user;
        updateUserInfo(userFromLogin);
        setSignInStatus(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  async function Logout() {
    await auth
      .signOut()
      .then(() => {
        window.location.reload();
        removeUser();
        setSignInStatus(false);
      })
      .catch((err) => console.log(err.message));
  }

  async function uploadPost() {
    const post = await newPost();

    await postsRef
      .doc(post.id)
      .set(post)
      .then(() => {
        setImage(null);
        setCaption("");
        getPosts();
      })
      .catch((err) => console.log(err));
  }

  function imgChange(e) {
    const img = e.target.files[0];
    if (img) {
      setImage(img);
    }
  }

  function imgRemove() {
    setImage(null);
  }

  function captionChange(e) {
    const value = e.target.value;
    setCaption(value);
  }

  return (
    <FncContext.Provider
      value={{
        SignIn,
        Logout,
        uploadPost,
        imgChange,
        imgRemove,
        captionChange,
      }}
    >
      {children}
    </FncContext.Provider>
  );
}
