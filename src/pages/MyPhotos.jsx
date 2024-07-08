import React from "react";

const MyPhotos = () => {
  // Placeholder data for user's photos
  const myPhotos = [
    {
      photo: "/placeholder.svg",
      description: "A beautiful sunset",
    },
    {
      photo: "/placeholder.svg",
      description: "Mountain view",
    },
  ];

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