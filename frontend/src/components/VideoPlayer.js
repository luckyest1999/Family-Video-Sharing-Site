import React from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const { videoId } = useParams();
  const video = {
    1: {
      title: "Family Picnic",
      url: "/videos/family-picnic.mp4",
    },
    2: {
      title: "Holiday Celebration",
      url: "/videos/holiday-celebration.mp4",
    },
    3: {
      title: "Graduation Ceremony",
      url: "/videos/graduation-ceremony.mp4",
    },
  }[videoId];

  return (
    <section className="my-8">
      <h3 className="text-xl font-bold mb-4">{video.title}</h3>
      <div className="flex justify-center">
        <video controls className="w-full md:w-2/3">
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoPlayer;
