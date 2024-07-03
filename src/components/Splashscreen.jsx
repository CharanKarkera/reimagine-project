import React, { useEffect } from "react";

const SplashScreen = ({ onVideoEnd }) => {
  useEffect(() => {
    const videoElement = document.getElementById("splashVideo");
    videoElement.addEventListener("ended", onVideoEnd);
    videoElement.play().catch((error) => {
      console.error("Error attempting to play video:", error);
      // Fallback for browsers that block autoplay
      onVideoEnd();
    });

    return () => {
      videoElement.removeEventListener("ended", onVideoEnd);
    };
  }, [onVideoEnd]);

  return (
    <div className="splash-screen">
      <video
        id="splashVideo"
        className="video"
        width="100%"
        height="100%"
        controls
      >
        <source src="/splash.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
