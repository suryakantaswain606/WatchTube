import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: [],
  reducers: {
    videosBySearchQuery: (state, action) => {
      return action.payload; // replace with new array
    },
    clearVideos: () => {
      return [];
    },
  },
});

export const { videosBySearchQuery, clearVideos } = videoSlice.actions;
export default videoSlice.reducer;
