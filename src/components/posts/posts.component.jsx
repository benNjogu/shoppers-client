import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import PostItem from "./../post-item/post-item.component";
import useStyles from "./posts.styles.js";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();

  return (
    posts.length && (
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} md={4}>
            <PostItem post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
