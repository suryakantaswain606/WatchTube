import { UserIcon } from "lucide-react";
import React from "react";

export const LiveChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center space-x-2 p-1 m-1.5 bg-slate-50 shadow-sm">
      <UserIcon className="w-6 h-6 text-gray-700 flex-shrink-0" />
      <span className="text-sm font-semibold text-gray-800">{name}</span>
      <span className="transition-opacity duration-300 text-sm text-gray-600">
        {message}
      </span>
    </div>
  );
};
