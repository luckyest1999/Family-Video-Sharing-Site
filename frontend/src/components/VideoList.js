import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Accessibility: Attach the modal to the root div

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null); // State for selected video

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/videos");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  if (loading) {
    return <div>Loading videos...</div>;
  }

  return (
    <section>
      <h3 className="text-xl font-bold mb-4">Family Videos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="border rounded shadow hover:shadow-lg transition p-2 cursor-pointer"
            onClick={() => openModal(video)} // Open modal on click
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

      {/* Modal for Video Playback */}
      {selectedVideo && (
        <Modal
          isOpen={!!selectedVideo}
          onRequestClose={closeModal}
          contentLabel="Video Player"
          className="bg-white p-4 rounded shadow-lg max-w-lg mx-auto mt-20"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <h3 className="text-lg font-bold mb-2">{selectedVideo.title}</h3>
          <video
            src={selectedVideo.url} // Video URL from the API
            controls
            className="w-full h-auto rounded"
          />
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Close
          </button>
        </Modal>
      )}
    </section>
  );
};

export default VideoList;
