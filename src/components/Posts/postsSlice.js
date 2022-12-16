import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("reddit/getPosts", async () => {
  const response = await fetch(`https://www.reddit.com/r/popular.json`);
  const json = await response.json();
  return json.data.children.map((post) => post.data);
});

export const fetchSearchResults = createAsyncThunk(
  "search/getSearchResults",
  async (searchTerm) => {
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${searchTerm}`
    );
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  }
);

const postsSlice = createSlice({
  name: "reddit",
  initialState: {
    posts: [],
    searchTerm: "",
    currentSubreddit: "Home",
    isLoading: false,
    hasError: false,
  },
  reducers: {
    setCurrentSubreddit: (state, action) => {
      state.currentSubreddit = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchPosts.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [fetchSearchResults.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchSearchResults.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.hasError = false;
      state.currentSubreddit = "";
      state.searchTerm = "";
    },
    [fetchSearchResults.rejected]: (state) => {
      state.isLoading = false;
      state.rejected = true;
    },
  },
});

export const { setPosts, setCurrentSubreddit, setSearchTerm, clearSearchTerm } =
  postsSlice.actions;

export default postsSlice.reducer;
