import React from "react";
import { HiOutlineX } from "react-icons/hi";

const CloseButton = ({ top, right, hidden = true, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute ${top} ${right} ${
        hidden && "hidden"
      } group-hover:flex justify-center items-center
        w-8 h-8 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700 hover:flex hover:scale-110 transition-all`}
    >
      <HiOutlineX />
    </button>
  );
};

export default CloseButton;
