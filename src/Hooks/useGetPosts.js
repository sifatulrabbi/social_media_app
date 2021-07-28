/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { DataContext } from "../Contexts/DataContext";
import { db } from "../firebase";

export default function useGetPosts() {
  const { setPosts } = useContext(DataContext);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const postsRef = db.collection("posts");
    const posts = await postsRef.get().then((res) => {
      const postsObj = res.docs.map((doc) => {
        return doc.data();
      });

      return postsObj;
    });

    setPosts(posts);
  }

  return { getPosts };
}
