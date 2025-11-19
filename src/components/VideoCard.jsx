import React from "react";

export const VideoCard = ({ video }) => {
  const { viewCount } = video.statistics;
  const { channelTitle, thumbnails, title } = video.snippet;

  const formatViews = (views) => {
    const num = Number(views);
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="w-80 p-2">
      <img
        alt="YouTube thumbnail"
        src={thumbnails.medium.url}
        className="cursor-pointer rounded-lg mb-2 w-full"
      />
      <div className="space-y-1">
        <h2 className="text-sm font-semibold line-clamp-2">{title}</h2>
        <p className="text-sm text-gray-600">{channelTitle}</p>
        <p className="text-sm text-gray-500">{formatViews(viewCount)} views</p>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ video }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard video={video}></VideoCard>
    </div>
  );
};
