import { createSlice } from "@reduxjs/toolkit";
const LIVE_CHAT_Count = import.meta.env.VITE_LIVE_CHAT_COUNT;

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
