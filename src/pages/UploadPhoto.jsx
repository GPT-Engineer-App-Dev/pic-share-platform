import React, { useState } from "react";

const UploadPhoto = () => {
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle photo upload logic here
    console.log("Photo:", photo);
    console.log("Description:", description);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Photo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
          className="block w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPhoto;