import React from "react";
import { PostCards } from "./PostCards";
import "./posts.css";

const PostContainer = () => {
  return (
    <section className="post-container">
      <PostCards />
    </section>
  );
};

export default PostContainer;
