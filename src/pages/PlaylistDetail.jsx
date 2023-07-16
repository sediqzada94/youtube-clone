import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchApiData } from "../utils/fetchApiData";
import { Videos } from "../components";
import moment from "moment/moment";
const PlaylistDetail = () => {
  const { playlistId } = useParams();
  const [playlistInfo, setPlaylistInfo] = useState([]);
  const [playlistVideos, setPlaylistVideos] = useState([]);
  useEffect(() => {
    fetchApiData(`playlists?part=snippet&id=${playlistId}`).then((data) => {
      setPlaylistInfo(data.items);
    });
  }, [playlistId]);

  useEffect(() => {
    fetchApiData(`playlistItems?playlistId=${playlistId}&part=snippet`).then(
      (data) => {
        setPlaylistVideos(data.items);
      }
    );
  }, [playlistId]);
  const formatter = new Intl.NumberFormat("en", { notation: "compact" });
  return (
    <div className="flex flex-col  py-2 ">
      {playlistInfo[0] && (
        <div
          className=" w-auto flex items-center justify-center space-x-10 px-5 py-6 mb-5 bg-gray-50
       dark:bg-gray-800 "
        >
          <img
            src={playlistInfo[0]?.snippet?.thumbnails?.medium?.url}
            alt={playlistInfo[0]?.snippet?.title}
            className="rounded-lg h-32 w-32"
          />
          <div className="flex flex-col space-y-5 b">
            <div className="flex justify-between gap-x-4 dark:text-gray-300">
              <span className=" text-md font-semibold dark:text-gray-300">
                Playlist name: {playlistInfo[0]?.snippet?.title}
              </span>
              <span className=" text-base">
                Published:{" "}
                {moment(
                  playlistInfo[0]?.snippet?.publishedAt,
                  "YYYYMMDD"
                ).fromNow()}
              </span>
            </div>
            <div className="flex space-x-10 text-gray-600 dark:text-gray-400">
              <span className="text-lg font-semibold">Channel name</span>
              <Link
                className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:text-black"
                to={`/channel-detail/${playlistInfo[0]?.snippet?.channelId}`}
              >
                {playlistInfo[0]?.snippet?.channelTitle}
              </Link>
            </div>
          </div>
        </div>
      )}

      <Videos videos={playlistVideos} />
    </div>
  );
};

export default PlaylistDetail;
