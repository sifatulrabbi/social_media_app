import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { CreatePost, FeedCard, Navbar } from "../../Components";
import styled from "styled-components";
import { useGetPosts } from "../../Contexts";

const useStyles = makeStyles({
  root: {
    marginTop: "70px",
    padding: 0,
    height: "max-content",
  },
});

export default function HomePage() {
  const classes = useStyles();
  const { posts } = useGetPosts();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Navbar />
      <CreatePost />
      <NewsFeed>
        {posts && posts.map((post) => <FeedCard key={post.id} post={post} />)}
      </NewsFeed>
    </Container>
  );
}

const NewsFeed = styled.div`
  margin-top: 10px;
`;
