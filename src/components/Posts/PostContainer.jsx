import React from "react";
import { PostCards } from "./PostCards";
import "./posts.css";

export const PostContainer = () => {
  return (
    <section className="post-container">
      <PostCards />
    </section>
  );
};
