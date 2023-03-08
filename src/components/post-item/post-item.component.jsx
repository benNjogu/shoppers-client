import React from "react";

import { useSelector } from "react-redux";

import "./post-item.styles.js";

const PostItem = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return <div>PostItem</div>;
};

export default PostItem;
