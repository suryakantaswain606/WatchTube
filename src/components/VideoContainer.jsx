import React, { useEffect, useState } from "react";
const google_API_Key = import.meta.env.VITE_GOOGLE_API_KEY;

const youtube_popular_videos =
  import.meta.env.VITE_YOUTUBE_POPULAR_VIDEOS + google_API_Key;

import { VideoCard, AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

export const VideoContainer = () => {
  const [popularVideos, setPopularVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(youtube_popular_videos);
    const res = await data.json();
    setPopularVideos(res.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap justify-between p-3 overflow-y-auto">
      {popularVideos[0] && <AdVideoCard video={popularVideos[0]} />}
      {popularVideos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};
