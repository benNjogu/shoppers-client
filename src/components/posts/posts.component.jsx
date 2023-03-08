import React from "react";

import PostItem from "./../post-item/post-item.component";
import "./posts.styles.js";

const Posts = () => {
  return (
    <>
      <h1>Posts</h1>
      <PostItem />
      <PostItem />
    </>
  );
};

export default Posts;
