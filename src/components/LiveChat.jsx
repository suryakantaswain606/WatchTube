import React, { useEffect, useState } from "react";
import { LiveChatMessage } from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveChatSlice";
import {
  generateRandomMessage,
  generateRandomName,
  getRandomEmoji,
} from "../utils/helper";

export const LiveChat = () => {
  const dispatch = useDispatch();
  const liveChatMessages = useSelector((store) => store.chat.messages);
  const [userMessage, setUserMessage] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage() + " " + getRandomEmoji(),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;
    dispatch(addMessage({ name: "You", message: userMessage }));
    setUserMessage("");
  };
  return (
    <>
      <div className="w-96 mx-2 h-[480px] flex flex-col border rounded-lg bg-slate-100">
        {/* Chat messages */}
        <div className="flex-1 overflow-y-scroll flex flex-col-reverse p-2 scrollbar-hide">
          {liveChatMessages.map((chat, index) => (
            <LiveChatMessage
              key={index}
              name={chat.name}
              message={chat.message}
            />
          ))}
        </div>

        {/* Input form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center border-t p-2 bg-white"
        >
          <input
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};
