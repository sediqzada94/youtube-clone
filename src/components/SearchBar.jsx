import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const SearchBar = ({ selectedVideoCategory, setSelectedVideoCategory }) => {
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    if (e.type === "click" || e.keyCode === 13) {
      setSelectedVideoCategory(searchInputRef.current.value);
      navigate("/");
    }
  };
  return (
    <div
      className="flex justify-self-center sm:justify-between rounded-full border dark:border-none ml-16
     sm:ml-5 w-auto  md:w-2/4 overflow-hidden"
    >
      <input
        type="text"
        ref={searchInputRef}
        placeholder="Search..."
        className="flex w-[150px] sm:w-full px-5 caret-red-600 py-2 dark:placeholder-white
         placeholder- focus:outline-none focus:shadow-inner  dark:shadow-none  dark:bg-gray-700  dark:text-white"
        onKeyDown={handleSearch}
      />
      <button
        className="flex justify-center items-center bg-red-500 hover:bg-red-600 px-5 text-2xl"
        onClick={handleSearch}
      >
        <AiOutlineSearch className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
