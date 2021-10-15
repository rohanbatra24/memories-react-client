import React from "react";

import { useSelector } from "react-redux";

import useStyles from "./styles";

import Post from "./Post/Post";
import { CircularProgress, Grid } from "@material-ui/core";

export default function Posts() {
  const classes = useStyles();

  const posts = useSelector((state) => state.posts);

  console.log(`posts in posts`, posts);

  return !posts.length ? (
    <CircularProgress></CircularProgress>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post}></Post>
        </Grid>
      ))}
    </Grid>
  );
}
