import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";

const CommentsContext = createContext();

export function useComments() {
  return useContext(CommentsContext);
}

export function CommentsProvider({ children }) {
  const [comments, setComments] = useState([]);

  async function getComments() {
    let array = [];

    await db
      .collection("comments")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          array.push(doc.data());
        });

        setComments(array);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getComments();
  }, []);

  const value = {
    comments,
    getComments,
  };

  return <CommentsContext.Provider value={value}>{children}</CommentsContext.Provider>;
}
