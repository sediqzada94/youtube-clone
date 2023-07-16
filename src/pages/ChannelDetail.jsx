import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApiData } from "../utils/fetchApiData";
import { Videos, ChannelCard } from "../components";
import moment from "moment/moment";
import Error from "../components/Core/Error";
const ChannelDetail = () => {
  const { channelId } = useParams();
  const [channelInfo, setChannelInfo] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);
  const [isError, setIsError] = useState(false);
  try {
    useEffect(() => {
      fetchApiData(`channels?part=snippet&id=${channelId}`).then((data) => {
        setChannelInfo(data.items);
      });
    }, [channelId]);

    useEffect(() => {
      fetchApiData(
        `search?channelId=${channelId}&part=snippet&order=date`
      ).then((data) => {
        setChannelVideos(data.items);
      });
    }, [channelId]);
  } catch (e) {
    setIsError(true);
  }
  const formatter = new Intl.NumberFormat("en", { notation: "compact" });
  return (
    <>
      {isError && <Error />}
      <div className="flex flex-col px-1 py-2">
        {channelInfo[0] && (
          <div className=" flex flex-col md:flex-row items-center justify-center space-x-10 px-2 md:px-5 py-6 -ml-10 mb-3 bg-gray-50 dark:bg-gray-800">
            <img
              src={channelInfo[0]?.snippet?.thumbnails?.medium?.url}
              alt={channelInfo[0]?.snippet?.title}
              className="rounded-full h-32 mb-5 md:mb-0"
            />
            <div className="flex flex-col space-y-5 b">
              <div className="flex justify-between gap-x-4">
                <span className=" text-lg font-semibold dark:text-gray-300">
                  {channelInfo[0]?.snippet?.title}
                </span>
                <span className=" text-base dark:text-gray-300">
                  Published:{" "}
                  {moment(
                    channelInfo[0]?.snippet?.publishedAt,
                    "YYYYMMDD"
                  ).fromNow()}
                </span>
              </div>
              <div className="flex space-x-10 text-xs text-gray-600 dark:text-gray-300">
                <span>
                  {formatter.format(
                    channelInfo[0]?.statistics?.subscriberCount
                  )}{" "}
                  Subscribers
                </span>
                <span>{channelInfo[0]?.statistics?.videoCount} Videos</span>
                <span>
                  {formatter.format(channelInfo[0]?.statistics?.viewCount)}{" "}
                  Total views
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="mx-auto">
          <Videos videos={channelVideos} />
        </div>
      </div>
    </>
  );
};

export default ChannelDetail;
