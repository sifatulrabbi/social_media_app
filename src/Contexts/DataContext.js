import React, { useState } from "react";

export const DataContext = React.createContext();

export default function DataContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [caption, setCaption] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [signInStatus, setSignInStatus] = useState(false);
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);

  const dataConst = {
    user,
    username,
    displayName,
    avatarURL,
    photoURL,
    caption,
    image,
    comments,
    likes,
    dislikes,
    signInStatus,
    posts,
  };

  const functions = {
    setUser,
    setUsername,
    setDisplayName,
    setAvatarURL,
    setPhotoURL,
    setCaption,
    setImage,
    setComments,
    setLikes,
    setDislikes,
    setSignInStatus,
    setPosts,
  };

  return (
    <DataContext.Provider value={{ ...dataConst, ...functions }}>
      {children}
    </DataContext.Provider>
  );
}
