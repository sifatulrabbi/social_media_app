import { createContext, useContext, useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { db } from "../firebase";

const PostsContext = createContext();

export function useGetPosts() {
  return useContext(PostsContext);
}

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState();

  async function getPosts() {
    const arrayOfPosts = [];

    await db
      .collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          arrayOfPosts.push(doc.data());
        });
        setPosts([...arrayOfPosts]);
      });
  }

  useEffect(() => {
    setLoading(true);
    try {
      getPosts();
      setLoading(false);
    } catch {
      console.log("Can't get posts");
    }
  }, []);

  return (
    <PostsContext.Provider value={{ posts, getPosts }}>
      {loading ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        children
      )}
    </PostsContext.Provider>
  );
}
