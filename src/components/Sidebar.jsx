import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return;
  return (
    <aside className="p-4 min-w-64 h-[calc(100vh-1rem)] overflow-y-auto shadow-lg text-lg space-y-6">
      {/* Top Section */}
      <div className="space-y-2 font-medium">
        <Link>
          <h1 className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            Home
          </h1>
        </Link>
        <h1 className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Shorts
        </h1>
        <h1 className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Subscriptions
        </h1>
      </div>

      <hr />

      {/* You Section */}
      <div>
        <h2 className="text-xl font-bold mb-2 px-2">You</h2>
        <ul className="space-y-1 font-medium">
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            History
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            Playlists
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            Your Videos
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            Watch Later
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            Liked Videos
          </li>
        </ul>
      </div>

      <hr />

      {/* Explore Section */}
      <div>
        <h2 className="text-xl font-bold mb-2 px-2">Explore</h2>
        <ul className="space-y-1 font-medium">
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            Trending
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            Music
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            Movies
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            Live
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            Gaming
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            News
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            Sports
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            Learning
          </li>
        </ul>
      </div>

      <hr />

      {/* More from YouTube */}
      <div>
        <h2 className="text-xl font-bold mb-2 px-2">More from YouTube</h2>
        <ul className="space-y-1 font-medium">
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            YouTube Premium
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            YouTube Music
          </li>
          <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
            YouTube Kids
          </li>
        </ul>
      </div>

      <hr />

      {/* Settings */}
      <div className="space-y-1 font-medium">
        <h1 className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Settings
        </h1>
        <h1 className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Report History
        </h1>
        <h1 className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Help
        </h1>
        <h1 className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Send Feedback
        </h1>
      </div>
    </aside>
  );
};
