/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect } from "react";
import { DataContext } from "./DataContext";
import { auth, db, provider, storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const FncContext = createContext();

export default function FncContextProvider({ children }) {
  const props = React.useContext(DataContext);
  const postsRef = db.collection("posts");
  const userRef = db.collection("users");

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    updateUserInfo(props.user);
  }, [props.user]);

  //updating user info function
  function updateUserInfo(user) {
    if (!user) return;
    props.setUsername(user.email.replace("@gmail.com", "").replace(".", "_"));
    props.setDisplayName(user.displayName);
    props.setAvatarURL(user.photoURL);
  }

  //sign in function
  async function SignIn() {
    await auth
      .signInWithPopup(provider)
      .then((res) => {
        props.user = res.user;
        props.setSignInStatus(true);
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
        props.setSignInStatus(false);
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
    props.setPosts(posts);
  }

  //uploading post function
  async function uploadPost() {
    await uploadImage();
    const post = makePost();

    await postsRef
      .doc(post.id)
      .set(post)
      .then((res) => {
        window.location.reload();
        console.log("Post uploaded!", res);
        props.setImage(null);
        props.setCaption("");
        props.setPhotoURL("");
      })
      .catch((err) => console.log(err));
  }

  async function uploadImage() {
    if (props.image) {
      const imgRef = storage.ref().child(props.image.name);

      await imgRef.put(props.image).then((res) => {
        console.log("Image uploaded");
      });
    }
  }

  function makePost() {
    const post = {
      id: uuidv4(),
      username: props.username,
      displayName: props.displayName,
      avatarURL: props.avatarURL,
      caption: props.caption,
      photoURL: props.photoURL,
      comments: props.comments,
      likes: props.likes,
      dislikes: props.dislikes,
    };
    return post;
  }
  function imgChange(e) {
    const img = e.target.files[0];
    if (img) {
      props.setImage(img);
    }
  }

  function imgRemove() {
    props.setImage(null);
  }

  function captionChange(e) {
    const value = e.target.value;
    props.setCaption(value);
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
