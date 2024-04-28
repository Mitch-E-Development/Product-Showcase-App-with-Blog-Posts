import React from "react";

const Pagination = ({
  currentPage,
  postsPerPage,
  length,
  handlePagination,
}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-around mt-4 pt-5 pb-20 text-xl">
      {/* Previous Page Arrow */}
      <button
        className={`pagination-arrow ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "mx-1 py-1 px-3 ounded-full hover:bg-orange-500 hover:text-white"
        }`}
        onClick={() => handlePagination(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<<"}
      </button>

      {/* Page Numbers */}
      <div>
        {paginationNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`mx-1 py-1 px-3 rounded-full ${
              currentPage === pageNumber
                ? "bg-orange-500 text-white"
                : "hover:bg-orange-500"
            }`}
            onClick={() => handlePagination(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      {/* Next Page Arrow */}
      <button
        className={`pagination-arrow ${
          currentPage === Math.ceil(length / postsPerPage)
            ? "opacity-50 cursor-not-allowed"
            : "mx-1 py-1 px-3 rounded-full hover:bg-orange-500 hover:text-white"
        }`}
        onClick={() => handlePagination(currentPage + 1)}
        disabled={currentPage === Math.ceil(length / postsPerPage)}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
