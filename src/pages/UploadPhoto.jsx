import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const UploadPhoto = () => {
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPhoto = {
          photo: reader.result,
          description,
        };
        const storedPhotos = JSON.parse(localStorage.getItem("myPhotos")) || [];
        localStorage.setItem("myPhotos", JSON.stringify([...storedPhotos, newPhoto]));
        navigate("/my-photos");
      };
      reader.readAsDataURL(photo);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Photo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
        <Textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
          className="block w-full p-2 border rounded-md"
        />
        <Button type="submit" className="w-full">
          Upload
        </Button>
      </form>
    </div>
  );
};

export default UploadPhoto;