import { db } from "../firebase";

export default async function getPosts() {
  const posts = await db
    .collection("posts")
    .get()
    .then((querySnapshot) => {
      const postsObj = querySnapshot.docs.map((doc) => {
        return doc.data();
      });

      return postsObj;
    });

  return posts;
}
