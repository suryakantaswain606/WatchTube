import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  google_API_Key,
  Youtube_Search_API,
  Youtube_Videos_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { clearVideos, videosBySearchQuery } from "../utils/videoSlice";
import { Link, useNavigate } from "react-router-dom";

export const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const navigate = useNavigate(); // ⬅️ create navigate instance

  const searchCache = useSelector((store) => store.search);

  const getSearchSuggestions = async () => {
    const data = await fetch(Youtube_Search_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    //if input is empty
    if (!searchQuery.trim()) return;

    //if result already cached → no timer needed
    if (searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery]);
      return;
    }

    //otherwise,debounce API call
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    //clear previous ongoing timeout if user enter input before 200ms.
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchVideosWithStats = async (videoIds) => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds.join(
        ","
      )}&key=${google_API_Key}&maxResults=50`
    );
    const json = await res.json();
    console.log(json.items);

    // Dispatch to redux
    dispatch(videosBySearchQuery(json.items));
  };

  const fetchResults = async (searchQuery) => {
    const res = await fetch(`${Youtube_Videos_API}&q=${searchQuery}`);
    const json = await res.json();

    // Extract only videoIds
    const videoIds = json.items
      .map((item) => item.id.videoId)
      .filter((id) => id !== undefined);
    if (videoIds.length > 0) {
      fetchVideosWithStats(videoIds);
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 shadow-md bg-white sticky top-0 z-10">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        <img
          onClick={handleToggleMenu}
          className="h-6 cursor-pointer"
          alt="menu"
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
        />
        <Link to="/" onClick={() => dispatch(clearVideos())}>
          <img
            className="h-6 cursor-pointer"
            alt="YouTube Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
          />
        </Link>
      </div>

      {/* Center: Search */}
      <div>
        <div className="flex items-center px-3 py-1 w-full max-w-md ">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestionBox(true)}
            onBlur={() => setShowSuggestionBox(false)}
            value={searchQuery}
            type="search"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none border text-m font-bold px-2 py-2 rounded-l-full"
          />
          <button
            className="bg-gray-50 border py-2.5 px-4  cursor-pointer rounded-r-full"
            onClick={() => {
              fetchResults(searchQuery);
              navigate(
                `/results?search_query=${encodeURIComponent(searchQuery)}`
              );
              setSearchQuery("");
            }}
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>
        {showSuggestionBox && searchQuery && (
          <div className="fixed bg-white py-2 px-5 w-96">
            <ul>
              {suggestions.map((suggest, index) => (
                <li
                  key={index}
                  className="py-2 font-semibold font-sans text-base border-gray-100 hover:bg-gray-100"
                  onMouseDown={() => {
                    setSearchQuery(suggest);
                    fetchResults(suggest);
                    navigate(
                      `/results?search_query=${encodeURIComponent(suggest)}`
                    );
                  }}
                >
                  🔍 {suggest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right: User Icon */}
      <div>
        <UserIcon className="w-6 h-6 text-gray-700 cursor-pointer" />
      </div>
    </header>
  );
};
