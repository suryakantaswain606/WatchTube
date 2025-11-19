import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { CommentsContainer } from "./CommentsContainer";
import { LiveChat } from "./LiveChat";

export const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoCode = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  if (!videoCode) {
    return <div>No video selected</div>;
  }

  return (
    <div>
      <div className="flex justify-center p-4">
        <div>
          <iframe
            width="853"
            height="480"
            src={"https://www.youtube.com/embed/" + videoCode}
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <LiveChat></LiveChat>
        </div>
      </div>
      <CommentsContainer></CommentsContainer>
    </div>
  );
};
