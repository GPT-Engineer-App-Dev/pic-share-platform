import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Placeholder data for the feed
  const feed = [
    {
      username: "user1",
      photo: "/placeholder.svg",
      description: "A beautiful sunset",
    },
    {
      username: "user2",
      photo: "/placeholder.svg",
      description: "Mountain view",
    },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-center">PhotoShare</h1>
      <div className="space-y-4">
        {feed.map((item, index) => (
          <PhotoCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const PhotoCard = ({ item }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold">{item.username}</h2>
      <img
        src={item.photo}
        alt={item.description}
        className="mx-auto object-cover w-full h-[400px] mt-2"
      />
      <p className="mt-2">{item.description}</p>
      <div className="flex items-center mt-2 space-x-2">
        <Button variant={liked ? "primary" : "outline"} onClick={handleLike}>
          {liked ? "Liked" : "Like"}
        </Button>
        <span>{likes} {likes === 1 ? "like" : "likes"}</span>
      </div>
    </div>
  );
};

export default Index;