import React from "react";

const Map = ({ latitude, longitude }) => {
  const containerStyle = {
    width: "auto",
    height: "200px",
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <div className="pb-20 pt-5 px-10 md:px-20 lg:px-40 ">
      <div className="content-center shadow-md hover:shadow-2xl">
        <iframe
        className="w-full h-[400px] rounded-lg"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.9297603983655!2d151.20359947646756!3d-33.865701018899706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae40e6fcf9eb%3A0x45845f7ff56e0d1!2sWynyard!5e0!3m2!1sen!2sau!4v1714181053467!5m2!1sen!2sau">

          </iframe>
      </div>
    </div>
  );
};

export default Map;
