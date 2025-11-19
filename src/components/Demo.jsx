import React, { useState } from "react";

export const Demo = () => {
  const [text, setText] = useState("");

  return (
    <div className="m-4 p-2 w-96 border border-black">
      <div>
        <input
          className="p-2 border border-red-500 rounded w-72 focus:outline-none focus:border-red-400 focus:border-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Write ........."
        />
      </div>
    </div>
  );
};
