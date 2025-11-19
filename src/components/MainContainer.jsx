import React, { useEffect } from "react";
import { VideoContainer } from "./VideoContainer";
import { ChipsList } from "./ChipsList";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../utils/appSlice";

export const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, [dispatch]);
  return (
    <div
      className={
        isMenuOpen
          ? "w-[calc(100vw-16rem)] overflow-y-auto"
          : "w-screen overflow-y-auto"
      }
    >
      <ChipsList></ChipsList>
      <VideoContainer></VideoContainer>
    </div>
  );
};
