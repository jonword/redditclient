import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async () => {
    const response = await fetch(
      "https://www.reddit.com/subreddits/default.json?limit=10"
    );
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
  }
);

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [fetchSubreddits.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchSubreddits.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.subreddits = action.payload;
    },
    [fetchSubreddits.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default subredditsSlice.reducer;
