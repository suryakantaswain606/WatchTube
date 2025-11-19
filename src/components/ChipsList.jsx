import React from "react";
import { Chip } from "./Chip";

const list = [
  "All",
  "popular",
  "Live",
  "Gaming",
  "Mix",
  "Music",
  "All",
  "Live",
  "Gaming",
  "Mix",
  "Music",
  "All",
  "Live",
  "Gaming",
  "Mix",
  "Music",
  "All",
  "Live",
  "Gaming",
  "Mix",
  "Music",
];
export const ChipsList = () => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide sticky top-0 backdrop-blur-md bg-white/90">
      {list.map((item, index) => (
        <Chip key={index} name={item}></Chip>
      ))}
    </div>
  );
};
