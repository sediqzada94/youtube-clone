import React from "react";
import { FaSpinner } from "react-icons/fa";
const Loading = () => {
  return (
    <span className="fixed inset-0 flex items-center justify-center bg-gray-300/25">
      <FaSpinner className="animate-spin" size={50} />
    </span>
  );
};

export default Loading;
