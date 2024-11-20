import React from "react";

const VideoList = () => {
  const videos = [
    { id: 1, title: "Family Picnic", thumbnail: "https://via.placeholder.com/150" },
    { id: 2, title: "Holiday Celebration", thumbnail: "https://via.placeholder.com/150" },
    { id: 3, title: "Graduation Ceremony", thumbnail: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="my-8">
      <h3 className="text-xl font-bold mb-4">Family Videos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="border rounded shadow hover:shadow-lg transition p-2"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h4 className="font-semibold text-center">{video.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoList;
