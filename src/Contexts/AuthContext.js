import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db, provider } from "../firebase";
import { CircularProgress } from "@material-ui/core";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function logout() {
    return auth.signOut();
  }

  function login() {
    return auth.signInWithPopup(provider);
  }

  function addUserInfo(username, fullName, email) {
    const userObject = {
      username: username,
      displayName: fullName,
      email: email,
    };

    db.collection("users").doc(username).set(userObject);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe;
  }, []);

  const value = {
    currentUser,
    addUserInfo,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: " flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
