import React from "react";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import image from "../assets/images/paghman.jpg";
import { HiOutlineX } from "react-icons/hi";
import CloseButton from "./Core/CloseButton";
const VideoCard = ({ video, removeVideo, columnMode }) => {
  const postion = {
    top: "-top-1",
    right: "right-3",
  };
  return (
    <div
      className={`bg-gray-50 dark:bg-gray-800 hover:-translate-y-[2px] transition-all duration-300
     flex flex-col items-start space-y-2 shadow-md hover:shadow-lg p-4 rounded-md w-auto mx-2 h-72  sm:w-64`}
    >
      <div className="group w-full ">
        <div className="relative w-full flex flex-col justify-start items-start space-y-4">
          <Link
            to={`/video-detail/${
              video?.id?.videoId || video?.snippet?.resourceId?.videoId
            }`}
            className="mx-auto"
          >
            <img
              src={video?.snippet?.thumbnails?.medium?.url}
              className={`h-40 rounded-lg hover:opacity-70
            object-fit transition-opacity duration-200`}
            />
          </Link>
          <CloseButton
            top={postion.top}
            right={postion.right}
            onClick={() => removeVideo(video?.id?.videoId)}
          />
          <div className=" flex justify-center w-full">
            <Link
              to={`video-detail/${
                video?.id?.videoId || video?.snippet?.resourceId?.videoId
              }`}
              className="flex items-center transition-all text-sm text-left text-gray-600
              dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
            >
              {video?.snippet?.title?.slice(0, 40)}
              {video?.snippet?.title.length > 40 && " ..."}
            </Link>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center space-y-2 w-full text-xs text-left
         text-gray-500  font-semibold"
      >
        <Link
          to={`channel/${video?.snippet?.channelId}`}
          className="hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          {video?.snippet?.channelTitle?.slice(0, 20)}{" "}
          {video?.snippet?.channelTitle.length > 20 && " ..."}
        </Link>
        <span className="flex hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
          {moment(video?.snippet?.publishedAt, "YYYYMMDD").fromNow()}
          {}
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
