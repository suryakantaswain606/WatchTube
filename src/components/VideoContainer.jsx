import React, { useEffect, useState } from "react";
import { youtube_popular_videos } from "../utils/constants";
import { VideoCard, AdVideoCard } from "./videoCard";
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
