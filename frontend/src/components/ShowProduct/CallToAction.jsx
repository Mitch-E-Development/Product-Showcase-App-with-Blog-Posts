import React from "react";

const CallToAction = (product) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 py-20 ">
        <div className="justify-center text-center bg-blue-200 rounded-lg hover:shadow-lg">
          <div className="text-center justify-center p-5">
            <div className=" px-10 lg:px-20 text-center">
              <h2 className="text-3xl font-semibold py-6">
                So What Are You Waiting For?
              </h2>
              <p className="p-2">
                Utilities for controlling how rows are positioned in multi-row
                positioned in multi-row flex and grid containers. in multi-row
                flex and grid containers. Utilities for controlling how rows are
                positioned in multi-row
              </p>
              <p className="p-2">
                Utilities for controlling how rows are positioned in multi-row
                positioned in multi-row .
              </p>
              <p className="p-6 text-xl">
                Experience the finest today!
              </p>
            </div>
            <button
              className="
              bg-blue-500
              text-white
              px-4 
              py-2 
              w-[50%]
              lg:w-[25%]
              rounded-lg 
              shadow-lg 
              hover:bg-white
              hover:text-blue-500 
              transition 
              duration-300
              m-6"
            >
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
