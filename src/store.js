import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./components/Posts/postsSlice";

export default configureStore({
  reducer: combineReducers({
    posts: postsReducer,
  }),
});
