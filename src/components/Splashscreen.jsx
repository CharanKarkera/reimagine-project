import React, { useEffect, useState } from "react";

const SplashScreen = ({ onVideoEnd }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("splashVideo");
    videoElement.addEventListener("ended", onVideoEnd);

    const playVideo = async () => {
      try {
        await videoElement.play();
        setIsVideoPlaying(true);
      } catch (error) {
        console.error("Error attempting to play video:", error);
      }
    };

    playVideo();

    return () => {
      videoElement.removeEventListener("ended", onVideoEnd);
    };
  }, [onVideoEnd]);

  const handlePlayButtonClick = () => {
    const videoElement = document.getElementById("splashVideo");
    videoElement.muted = false;
    videoElement.play();
  };

  return (
    <div className="splash-screen">
      <video
        id="splashVideo"
        className="video"
        width="100%"
        height="100%"
        muted
        controls={isVideoPlaying ? false : true}
      >
        <source src="/splash.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isVideoPlaying && (
        <button onClick={handlePlayButtonClick} className="play-button">
          Play Video
        </button>
      )}
    </div>
  );
};

export default SplashScreen;
