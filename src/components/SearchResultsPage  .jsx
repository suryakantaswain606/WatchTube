import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { VideoCard } from "./VideoCard";

export const SearchResultsPage = () => {
  const searchVideos = useSelector((store) => store.videos); // videos from Redux

  if (!searchVideos || searchVideos.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500 text-lg">
        No results found. Try searching for something else.
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-between p-3 overflow-y-auto">
      {searchVideos.map((video) => (
        <Link
          key={video.id?.videoId || video.id}
          to={"/watch?v=" + (video.id?.videoId || video.id)}
        >
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};
