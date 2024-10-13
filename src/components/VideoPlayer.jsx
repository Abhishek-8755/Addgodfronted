import React, { useState, useEffect } from "react";
import "../style.css"; // Ensure your styles are imported

function VideoPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = React.createRef();

  // Toggle the video expansion and collapse
  const handleWatchClick = () => {
    const videoElement = videoRef.current;

    if (!isExpanded) {
      // Enter fullscreen mode
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen(); // Firefox
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen(); // Chrome, Safari and Opera
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen(); // IE/Edge
      }
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen(); // Firefox
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Chrome, Safari and Opera
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE/Edge
      }
    }

    setIsExpanded(!isExpanded);
    videoElement.play(); // Ensure the video plays when expanded
  };

  useEffect(() => {
    // Reset video state when component is unmounted
    return () => {
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="video-container">
      <div className={`circular-video ${isExpanded ? "expanded" : ""}`} id="video-container">
        <video
          autoPlay
          loop
          muted
          ref={videoRef}
          id="video-element"
          onClick={handleWatchClick} // Add onClick handler to the video
        >
          <source src="assets/hero/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {isExpanded && (
          <span id="close-button" className="close-button" onClick={handleWatchClick}>
            Close the Intro
          </span>
        )}
      </div>
      {!isExpanded && (
        <button className="watch-button" id="watch-button" onClick={handleWatchClick}>
          Watch the Intro
        </button>
      )}
    </div>
  );
}

export default VideoPlayer;
  