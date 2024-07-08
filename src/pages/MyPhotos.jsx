import React, { useEffect, useState } from "react";

const MyPhotos = () => {
  const [myPhotos, setMyPhotos] = useState([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("myPhotos")) || [];
    setMyPhotos(storedPhotos);
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center">My Photos</h1>
      <div className="space-y-4">
        {myPhotos.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm">
            <img
              src={item.photo}
              alt={item.description}
              className="mx-auto object-cover w-full h-[400px] mt-2"
            />
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPhotos;