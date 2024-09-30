import React from "react";

const Video = () => {
  return (
    <div className="h-max rounded-3xl w-full flex items-center justify-center mx-auto overflow-hidden">
      <video
        className="w-[90%] rounded-3xl aspect-video"
        src="../../public/assets/videos/mandihouse.mp4" // Replace with your direct video URL (e.g., a .mp4 file)
        title="Video"
        autoPlay
        loop
        muted
        style={{ borderRadius: "1.5rem" }}
      />
    </div>
  );
};

export default Video;
