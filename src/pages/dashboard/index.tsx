import React from "react";
import {
  FaBars,
  FaBolt,
  FaCommentDots,
  FaFlag,
  FaHeart,
  FaHistory,
  FaHome,
  FaQuestionCircle,
  FaSearch,
  FaStopwatch,
  FaSubscript,
  FaTools,
  FaViadeo,
  FaYoutube,
} from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-[300px] h-screen bg-black p-4 text-white fixed top-0 left-0 overflow-y-auto">
        <div className="flex items-center">
          <FaBars size={25} />
          <FaYoutube className="text-red-600 text-[35px]" />
          <h2 className="text-2xl">YouTube</h2>
        </div>
        <ul>
          <li className="flex items-center gap-6 pt-3">
            <FaHome size={25} />
            <NavLink end to={""}>
              Home
            </NavLink>
          </li>
          <li className="flex items-center gap-6 pt-3">
            <FaBolt size={25} />
            <NavLink to={"shorts"}>Shorts</NavLink>
          </li>
          <li className="flex items-center gap-6 pt-3">
            <FaSubscript size={25} />
            <NavLink to={"subscriptions"}>Subscriptions</NavLink>
          </li>

          <div className="w-full h-[1px] bg-gray-600 mt-6" />

          <li className="flex items-center gap-6 pt-8">
            <FaHistory size={25} />
            <NavLink to={"history"}>History</NavLink>
          </li>
          <li className="flex items-center gap-6 pt-3">
            <MdFeaturedPlayList size={25} />
            <NavLink to={"playlists"}>Playlists</NavLink>
          </li>
          <li className="flex items-center gap-6 pt-3">
            <FaViadeo size={25} />
            <NavLink to={"videos"}>Your videos</NavLink>
          </li>
          <li className="flex items-center gap-6 pt-3">
            <FaStopwatch size={25} />
            <NavLink to={"later"}>Watch Later</NavLink>
          </li>
          <li className="flex items-center gap-6 pt-3">
            <FaHeart size={25} />
            <NavLink to={"likes"}>Liked videos</NavLink>
          </li>

          <div className="w-full h-[1px] bg-gray-600 mt-6" />

          <li className="flex items-center gap-6 pt-3">
            <FaTools size={25} />
            <NavLink to={"settings"}>Settings</NavLink>
          </li>
          <li className="flex items-center gap-6 pt-3">
            <FaFlag size={25} />
            <NavLink to={"report"}>Report history</NavLink>
          </li>
          <li className="flex items-center gap-6 pt-3">
            <FaQuestionCircle size={25} />
            <NavLink to={"help"}>Help</NavLink>
          </li>
          <li className="flex items-center gap-6 pt-3">
            <FaCommentDots size={25} />
            <NavLink to={"feedback"}>Send feedback</NavLink>
          </li>

          <div className="w-full h-[1px] bg-gray-600 mt-6" />

          <p className="pt-6">
            About Press Copyright Contact us Creator Advertise Developers
          </p>
          <p className="pt-6">
            Terms Privacy Policy & Safety How YouTube works Test new features
          </p>
          <p className="pt-6 text-[14px]">© 2025 Google LLC</p>
        </ul>
      </div>

      <div className="flex-1 ml-[300px]">
        <div className="h-14 bg-black text-white px-6 flex items-center justify-between fixed top-0 left-[300px] right-0 z-30">
          <div className="flex items-center w-full max-w-md mx-auto">
            <div className="relative flex flex-1 items-center bg-gray-900 rounded-full overflow-hidden border border-gray-700">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-900 text-white px-4 py-2 outline-none w-full"
              />
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700">
                <FaSearch className="text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="fixed top-14 left-[300px] right-0 z-20 bg-black px-6 py-2 overflow-x-auto border-b border-gray-700">
          <div className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {[
              "All",
              "Mixes",
              "Music",
              "Gaming",
              "News",
              "Live",
              "Learning",
              "Comedy",
              "Recently uploaded",
              "eFootball",
              "Russian Pop",
              "Sketch comedy",
              "Balls",
              "Prop Music",
              "Strategy video games",
              "Recently uploaded",
              "Watched",
              "New to you",
            ].map((tag, i) => (
              <button
                key={i}
                className={`px-4 py-1 rounded-full text-sm ${
                  i === 0
                    ? "bg-white text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="pt-[120px] px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
