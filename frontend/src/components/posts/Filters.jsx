import React from "react";

const Filters = ({ handleFilter, handleSearch }) => {
  return (
    <div className="p-12">
      <div className="flex gap-2 text-center justify-center w-full p-10">
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          className="border border-gray-500 rounded-lg w-[75%] lg:w-[50%] xl:w-[30%]"
          placeholder="Search our posts"
        />
      </div>

      {/* filter buttons */}
      <div className="flex flex-wrap gap-2 sm:flex-row justify-center text-center sm:w-full md:w-auto">
        <div>
          <button
            className="
            min-w-[100px] 
            bg-orange-500 
            text-white 
            text-lg
            px-4 py-1 
            rounded-lg 
            hover:shadow-xl
            hover:shadow-orange-300 
            transition 
            duration-300"
            value={"all"}
            onClick={(e) => handleFilter("")}
          >
            ALL
          </button>
        </div>
        <div>
          <button
            className="
            text-lg
            min-w-[100px] 
            bg-orange-500 
            text-white 
            px-4 py-1 
            rounded-lg 
            hover:shadow-xl
            hover:shadow-orange-300 
            transition 
            duration-300"
            onClick={(e) => handleFilter("news")}
          >
            NEWS
          </button>
        </div>
        <div>
          <button
            className="
              text-lg
              min-w-[100px] 
              bg-orange-500 
              text-white 
              px-4 py-1 
              rounded-lg 
              hover:shadow-xl
              hover:shadow-orange-300  
              transition 
              duration-300"
            value={"guides"}
            onClick={(e) => handleFilter("guides")}
          >
            GUIDES
          </button>
        </div>
        <div>
          <button
            className="
              text-lg
              min-w-[100px] 
              bg-orange-500 
              text-white 
              px-4 py-1 
              rounded-lg 
              hover:shadow-xl
              hover:shadow-orange-300 
              transition 
              duration-300"
            value={"culture"}
            onClick={(e) => handleFilter("culture")}
          >
            CULTURE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
