import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditsReducer from "./components/Subreddit/subredditSlice";
import postsReducer from "./components/Posts/postsSlice";

export default configureStore({
  reducer: combineReducers({
    subreddits: subredditsReducer,
    posts: postsReducer,
  }),
});
