import React from "react";
import addNewUser from "../Services/addNewUser";
import { db } from "../firebase";

export const UserContext = React.createContext();

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = React.useState(null);
  const [loginStatus, setLoginStatus] = React.useState("");
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    if (userInfo) {
      updateUser();
      setLoginStatus(true);
    } else {
      setUserInfo(null);
      setLoginStatus(false);
    }

    getPosts();
  }, [userInfo]);

  async function updateUser() {
    setLoginStatus(await addNewUser(userInfo));
  }

  async function getPosts() {
    const allPosts = await db
      .collection("posts")
      .get()
      .then((querySnapshot) => {
        const postsObj = querySnapshot.docs.map((doc) => {
          return doc.data();
        });

        return postsObj;
      });

    setPosts(allPosts);
  }

  return <UserContext.Provider value={{ userInfo, setUserInfo, posts, loginStatus }}>{children}</UserContext.Provider>;
}
