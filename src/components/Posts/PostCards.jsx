import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";
import shortenNumber from "../../utility/shortenNumber";
import { FaRegCommentAlt, FaArrowUp, FaArrowDown } from "react-icons/fa";

export const PostCards = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);
  const currentSubreddit = useSelector((state) => state.currentSubreddit);
  const isLoading = useSelector((state) => state.isLoading);
  const hasError = useSelector((state) => state.hasError);

  useEffect(() => {
    dispatch(fetchPosts(currentSubreddit));
  }, [dispatch, currentSubreddit]);

  // isLoading and hasError logic

  return (
    <div className="post">
      {posts.posts.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <div className="post-details">
              <img
                src={
                  post.icon_img ||
                  `https://www.redditinc.com/assets/images/site/reddit-logo.png`
                }
                alt={`${post.display_name}`}
                className="post-icon"
              />
              <p className="subreddit-name">{post.subreddit_name_prefixed}</p>
              <span>•</span>
              <p className="post-author">Posted by u/{post.author}</p>
            </div>
            <div className="title">
              <p>{post.title}</p>
              {post.thumbnail && post.post_hint === "image" ? (
                <div className="media-container">
                  <img src={post.url} className="post-media" />
                </div>
              ) : (
                ""
              )}
              {post.post_hint === "hosted:video" ? (
                <div>
                  <video controls className="post-video">
                    <source
                      src={post.media.reddit_video.fallback_url}
                      type="video/mp4"
                    />
                  </video>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="comment-container">
              <div className="comment-icon">
                <FaRegCommentAlt />
                <p>{shortenNumber(post.num_comments)}</p>
              </div>
              <div className="post-votes">
                <FaArrowUp />
                {shortenNumber(post.ups)}
                <FaArrowDown />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
