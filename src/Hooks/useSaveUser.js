/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { DataContext } from "../Contexts/DataContext";
import { db } from "../firebase";

export default function useSaveUser() {
  const {
    user,
    username,
    setUsername,
    setDisplayName,
    setAvatarURL,
    setUser,
    setSignInStatus,
  } = useContext(DataContext);

  const USER_KEY = "lastUser.socialize.app";

  useEffect(() => {
    const storedUser = localStorage.getItem(USER_KEY);

    if (!storedUser) return;
    updateUserInfo(JSON.parse(storedUser));
    setSignInStatus(true);
  }, []);

  function updateUserInfo(userData) {
    if (!userData) return;
    setUsername(userData.email.replace("@gmail.com", "").replace(".", "_"));
    setDisplayName(userData.displayName);
    setAvatarURL(userData.photoURL);
    setUser(new User(userData));
    saveUserToLocal(userData);
    addNewUserToDb();
  }

  function saveUserToLocal(userData) {
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  }

  function removeUser() {
    localStorage.removeItem(USER_KEY);
  }

  async function addNewUserToDb() {
    if (!user) return;
    const usersRef = db.collection("users");
    await usersRef.doc(username).set({ ...user });
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

  return { updateUserInfo, removeUser };
}
