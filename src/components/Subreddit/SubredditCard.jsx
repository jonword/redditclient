import React, { useEffect } from "react";
import { fetchSubreddits } from "./subredditSlice";
import { fetchPosts, setCurrentSubreddit } from "../Posts/postsSlice";
import { useSelector, useDispatch } from "react-redux";

export const SubredditCard = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector((state) => state.subreddits.subreddits);
  const currentSubreddit = useSelector(
    (state) => state.subreddits.currentSubreddit
  );

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <>
      <div className="subreddit-card">
        <ul className="subreddit-list">
          {subreddits.map((subreddit) => (
            <li
              key={subreddit.id}
              className={`${
                currentSubreddit === subreddit.url && `selected-subreddit`
              }`}
            >
              <button
                className={
                  subreddit.display_name === currentSubreddit
                    ? "current-subreddit"
                    : "subreddit-item"
                }
                type="button"
                onClick={() => dispatch(setCurrentSubreddit(subreddit.url))}
              >
                <img
                  src={
                    subreddit.icon_img ||
                    `https://www.redditinc.com/assets/images/site/reddit-logo.png`
                  }
                  alt={`${subreddit.display_name}`}
                  className="subreddit-icon"
                />
                {subreddit.display_name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
