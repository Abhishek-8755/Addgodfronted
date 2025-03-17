import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const enableAutoplayWithSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false; // Unmute the video
      video.play().catch((error) => {
        console.error("Error playing the video with sound:", error);
      });
    }
  };

  return (
    <div
      className="video-container"
      onClick={enableAutoplayWithSound} // Enables autoplay with sound on click
    >
      <div className="square-video">
        <video
          className="video-element"
          ref={videoRef}
          src="./assets/hero/intro.mp4"
          autoPlay
          muted // Initially muted to allow autoplay
          loop
          controls
        ></video>
      </div>
      <p className="click-to-unmute">Click to enable sound</p>
    </div>
  );
};

export default VideoPlayer;
