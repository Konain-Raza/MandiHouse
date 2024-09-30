import React from "react";
import video from "../assets/videos/mandihouse.mp4"

const Video = () => {
  return (
    <div className="h-max rounded-3xl w-full flex items-center justify-center mx-auto overflow-hidden">
      <video
        className="w-[90%] rounded-3xl aspect-video"
        src={video} 
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
