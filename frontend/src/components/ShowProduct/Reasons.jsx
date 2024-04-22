import React from "react";

const Reasons = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 pt-20">
      {/* <div className="justify-center text-center"> */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-20">
        <div className="text-center justify-center content-center [md:w-1/3] mb-5">
          <h2 className="text-3xl font-semibold mb-6">Reasons to Try</h2>
          <p>
            Still wondering why you should experience this product today? Heres
            4 benefits of using this product.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 text-center">
          <div className="bg-blue-200 w-full justify-center content-center p-10 rounded-lg hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Reason 1</h3>
            <p>reason description</p>
          </div>
          <div className="bg-blue-200 w-full justify-center content-center p-10 rounded-lg hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Reason 2</h3>
            <p>reason description</p>
          </div>
          <div className="bg-blue-200 w-full justify-center content-center p-10 rounded-lg hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Reason 3</h3>
            <p>reason description</p>
          </div>
          <div className="bg-blue-200 w-full justify-center content-center p-10 rounded-lg hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Reason 4</h3>
            <p>reason description</p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Reasons;
