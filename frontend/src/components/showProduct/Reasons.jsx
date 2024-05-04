// import React from "react";

// const Reasons = ({ product }) => {
//   // Check if product and product.benefits exist before rendering
//   if (!product || !product.benefits) {
//     return null; // or handle the case where product or product.benefits is undefined
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 py-20">
//       <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-x-20">
//         <div className="text-center justify-center content-center mb-5">
//           <h2 className="text-3xl mb-6">Reasons to Try</h2>
//           <p className="text-xl">
//             Wondering what I-Meditate can do for you? Here are 4 benefits of
//             incorporating it into your daily routine.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
//           {product.benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className="min-h-[220px] bg-white border-4 border-orange-500 flex flex-col justify-center p-4 rounded-lg hover:shadow-xl hover:shadow-orange-300"
//             >
//               <div className="p-4 rounded-lg h-full flex flex-col justify-center items-center">
//                 <h3 className="text-2xl mb-2 font-semibold">{benefit.name}</h3>
//                 <p className="text-xl">{benefit.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reasons;



import React from "react";

const Reasons = ({ product, hoveredReason, setHoveredReason }) => {
  // Check if product and product.benefits exist before rendering
  if (!product || !product.benefits) {
    return null; // or handle the case where product or product.benefits is undefined
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-x-20">
        <div className="text-center justify-center content-center mb-5">
          <h2 className="text-3xl mb-6">Just a Few of The Benefits</h2>
          <p className="text-xl">
            Wondering what I-Meditate can do for you? Here are 4 benefits of
            incorporating it into your daily routine.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {product.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border-4 border-orange-500 flex flex-col justify-center rounded-lg hover:shadow-xl hover:shadow-orange-300"
              onMouseEnter={() => setHoveredReason(benefit)}
              onMouseLeave={() => setHoveredReason(null)}
            >
              <div className="min-h-[230px]  p-4 rounded-lg h-full flex flex-col justify-center items-center">
                {hoveredReason === benefit ? (
                  <p className="text-xl">{benefit.description}</p>
                ) : (
                  <h3 className="text-2xl mb-2 font-semibold">{benefit.name}</h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
