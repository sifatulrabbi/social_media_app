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
  const usersRef = db.collection("users");

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    addNewUserData();
    updateUserInfo();
    console.log("Called!");
  }, [user]);

  async function addNewUserData() {
    if (!user) return;
    await usersRef.doc(username).set({ ...user });
  }

  function updateUserInfo(user) {
    if (!user) return;
    setUsername(user.email.replace("@gmail.com", "").replace(".", "_"));
    setDisplayName(user.displayName);
    setAvatarURL(user.photoURL);
    setUser(new User(user));

    addNewUserData();
  }

  async function SignIn() {
    let userFromLogin = null;
    await auth
      .signInWithPopup(provider)
      .then((res) => {
        userFromLogin = res.user;
      })
      .catch((err) => {
        console.log(err.message);
      });

    updateUserInfo(userFromLogin);
    setSignInStatus(true);
  }

  async function Logout() {
    await auth
      .signOut()
      .then(() => {
        window.location.reload();
        setSignInStatus(false);
      })
      .catch((err) => console.log(err.message));
  }

  async function getPosts() {
    const posts = await postsRef.get().then((res) => {
      const postsObj = res.docs.map((doc) => {
        return doc.data();
      });
      return postsObj;
    });
    setPosts(posts);
  }

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

  class User {
    constructor(user) {
      this.uid = this.getUid(user);
      this.username = this.getName(user);
      this.displayName = user.displayName;
      this.phoneNumber = user.phoneNumber;
      this.avatarURL = user.photoURL;
      this.email = user.email;
    }

    getUid(user) {
      return user.providerData[0].uid;
    }

    getName(user) {
      return user.email.replace("@gmail.com", "").replace(".", "_");
    }
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
