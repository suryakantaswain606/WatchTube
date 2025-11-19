import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_Count } from "./constants";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.unshift(action.payload);
      if (state.messages.length > LIVE_CHAT_Count) {
        state.messages.pop();
      }
    },
  },
});

export const { addMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;
