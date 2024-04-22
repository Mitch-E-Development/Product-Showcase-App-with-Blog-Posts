import React, { useState } from "react";

const Filters = ({ filter, setFilter, setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleButtonClick = (filter) => {
    setFilter(filter);
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  const handleClear = () => {
    setFilter(null);
    setSearchInput("");
    setSearchQuery("");
  };

  return (
    <div className="p-12">
      <div className="flex gap-2 text-center justify-center w-full p-10">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border border-gray-500 rounded-lg w-[75%] lg:w-[50%] xl:w-[30%]"
          placeholder="Search for something"
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded-lg shadow-lg hover:text-blue-500 hover:border-blue-500 hover:bg-white hover:border-2 transition duration-300"
          onClick={handleSearch}
        >
          SEARCH
        </button>
      </div>
      {/* filter buttons */}
      <div className="flex flex-wrap gap-2 sm:flex-row justify-center text-center sm:w-full md:w-auto">
        <div>
          <button
            className="min-w-[100px] bg-blue-500 text-white px-4 py-1 rounded-lg shadow-lg hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 transition duration-300"
            onClick={() => handleButtonClick("NEWEST")}
          >
            NEWEST
          </button>
        </div>
        <div>
          <button
            className="min-w-[100px] bg-blue-500 text-white px-4 py-1 rounded-lg shadow-lg hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 transition duration-300"
            onClick={() => handleButtonClick("OLDEST")}
          >
            OLDEST
          </button>
        </div>
        <div>
          <button
            className="min-w-[100px] bg-blue-500 text-white px-4 py-1 rounded-lg shadow-lg hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 transition duration-300"
            onClick={() => handleButtonClick("A-Z")}
          >
            A-Z
          </button>
        </div>
        <div>
          <button
            className="min-w-[100px] bg-blue-500 text-white px-4 py-1 rounded-lg shadow-lg hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 transition duration-300"
            onClick={() => handleButtonClick("NEWS")}
          >
            NEWS
          </button>
        </div>
        <div>
          <button
            className="min-w-[100px] bg-blue-500 text-white px-4 py-1 rounded-lg shadow-lg hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 transition duration-300"
            onClick={() => handleButtonClick("GUIDES")}
          >
            GUIDES
          </button>
        </div>
        <div>
          <button
            className="min-w-[100px] hover:bg-blue-500 hover:text-white px-4 py-1 rounded-lg shadow-lg bg-white text-blue-500 border border-blue-500 transition duration-300"
            onClick={handleClear}
          >
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;