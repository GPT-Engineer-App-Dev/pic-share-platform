import React from "react";

const Explore = () => {
  // Placeholder data for explore photos
  const explorePhotos = [
    {
      photo: "/placeholder.svg",
      description: "A beautiful sunset",
    },
    {
      photo: "/placeholder.svg",
      description: "Mountain view",
    },
    {
      photo: "/placeholder.svg",
      description: "City skyline",
    },
    {
      photo: "/placeholder.svg",
      description: "Forest trail",
    },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center">Explore</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {explorePhotos.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm">
            <img
              src={item.photo}
              alt={item.description}
              className="mx-auto object-cover w-full h-[200px] mt-2"
            />
            <p className="mt-2 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;