/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect } from "react";
import { DataContext } from "./DataContext";
import { auth, db, provider, storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export const FncContext = createContext();

export default function FncContextProvider({ children }) {
  const {
    user,
    username,
    displayName,
    avatarURL,
    caption,
    image,
    comments,
    likes,
    dislikes,
    setUser,
    setUsername,
    setDisplayName,
    setAvatarURL,
    setCaption,
    setImage,
    setSignInStatus,
    setPosts,
  } = React.useContext(DataContext);

  const postsRef = db.collection("posts");

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    updateUserInfo();
  }, [user]);

  //updating user info function
  function updateUserInfo() {
    if (user === null) return;
    setUsername(user.email.replace("@gmail.com", "").replace(".", "_"));
    setDisplayName(user.displayName);
    setAvatarURL(user.photoURL);
  }

  //sign in function
  async function SignIn() {
    await auth
      .signInWithPopup(provider)
      .then((res) => {
        setUser(res.user);
        setSignInStatus(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  //logout function
  async function Logout() {
    await auth
      .signOut()
      .then(() => {
        window.location.reload();
        setSignInStatus(false);
      })
      .catch((err) => console.log(err.message));
  }

  // getting posts function
  async function getPosts() {
    const posts = await postsRef.get().then((res) => {
      const postsObj = res.docs.map((doc) => {
        return doc.data();
      });
      return postsObj;
    });
    setPosts(posts);
  }

  //uploading post function
  async function uploadPost() {
    const url = await uploadImage();
    const post = newPost(url);

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

  async function uploadImage() {
    let url;
    if (image) {
      const imgRef = storage.ref("/images").child(image.name);

      await imgRef.put(image);

      url = await imgRef.getDownloadURL(image.name).then((url) => {
        return url;
      });
    }
    return url;
  }

  function newPost(url) {
    const post = {
      id: uuidv4(),
      username: username,
      displayName: displayName,
      avatarURL: avatarURL,
      caption: caption,
      photoURL: url,
      comments: comments,
      likes: likes,
      dislikes: dislikes,
    };
    return post;
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
