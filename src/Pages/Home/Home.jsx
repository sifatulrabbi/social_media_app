import React from "react";
import { CreatePost, FeedCard } from "../../Components";

export default function Home() {
  return (
    <div className="home">
      <CreatePost />
      <FeedCard />
    </div>
  );
}
