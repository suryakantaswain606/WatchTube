import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";

export const Comment = ({ data: { name, text } }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1 my-2">
      <UserIcon className="w-6 h-6 text-gray-700 cursor-pointer mx-1" />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-800">{text}</p>
      </div>
    </div>
  );
};
