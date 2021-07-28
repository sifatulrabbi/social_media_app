import { useContext, useState } from "react";
import { DataContext } from "../Contexts/DataContext";
import { db } from "../firebase";
import useGetPosts from "./useGetPosts";

export default function useComments() {
  const { user, posts } = useContext(DataContext);
  const [comment, setComment] = useState("");
  const { getPosts } = useGetPosts();

  function handleComment(e) {
    setComment(e.target.value);
  }

  function addComment(id) {
    const oldPost = posts.filter((post) => post.id === id)[0];
    uploadPost(oldPost);
  }

  async function uploadPost(oldPost) {
    const post = Post(oldPost);

    await db.collection("posts").doc(post.id).set(Object.assign({}, post));
    getPosts();
  }

  function Post(oldPost) {
    const arrayOfComments = [...oldPost.comments, new Comment()];
    const comments = arrayOfComments.map((obj) => Object.assign({}, obj));

    const post = {
      id: oldPost.id,
      username: oldPost.username,
      displayName: oldPost.displayName,
      avatarURL: oldPost.avatarURL,
      caption: oldPost.caption,
      photoURL: oldPost.photoURL,
      comments: comments,
      likes: oldPost.likes,
      dislikes: oldPost.dislikes,
    };

    return post;
  }

  class Comment {
    constructor() {
      this.username = user.username;
      this.comment = comment;
    }
  }

  return { addComment, handleComment, comment };
}
