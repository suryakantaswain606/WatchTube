import React from "react";

export const Chip = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-1 ml-2 my-2 bg-gray-200 rounded-lg cursor-pointer font-semibold">
        {name}
      </button>
    </div>
  );
};
