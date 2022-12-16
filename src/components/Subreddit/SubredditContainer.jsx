import React from "react";
import { SubredditCard } from "./SubredditCard";
import "./subreddit.css";

export const SubredditContainer = () => {
  return (
    <div className="subreddit-container">
      <div>
        <SubredditCard />
      </div>
    </div>
  );
};
