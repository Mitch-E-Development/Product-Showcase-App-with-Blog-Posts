

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = Math.ceil(totalPosts / postsPerPage);
  
    return (
      <div className="flex justify-center p-20">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-20 bg-blue-500 text-white rounded-lg shadow-md"
        >
          Previous
        </button>


        {Array.from({ length: pageNumbers }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`p-1  ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg shadow-md mr-2`}
          >
            {i + 1}
          </button>
        ))}

        
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers}
          className="px-4 py-2 mx-20 bg-blue-500 text-white rounded-lg shadow-md"
        >
          Next
        </button>
      </div>
    );
  }
  

export default Pagination
