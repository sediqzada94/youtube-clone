import React from "react";
import { navbarVideoCategoryLinks } from "../utils/constants";

const VideoCategoryLinks = ({
  selectedVideoCategory,
  setSelectedVideoCategory,
}) => {
  return (
    <div className="flex flex-wrap justify-start ml-5 mt-3 gap-x-2 gap-y-4  text-xs tracking-wider font-semibold">
      {navbarVideoCategoryLinks.map((link) => {
        return (
          <button
            onClick={() => {
              setSelectedVideoCategory(link.name);
            }}
            key={link.name}
            className={`px-3 py-2 transition bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 
      dark:hover:bg-gray-600 rounded-md capitalize ${
        selectedVideoCategory === link.name &&
        "border-b-2 border-red-400 bg-gray-300 rounded-b-none"
      }`}
          >
            {link.name}
          </button>
        );
      })}
    </div>
  );
};

export default VideoCategoryLinks;
