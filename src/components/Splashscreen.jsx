import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onVideoEnd }) => {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    if (videoEnded) {
      onVideoEnd();
    }
  }, [videoEnded, onVideoEnd]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        src="/splash.mp4"
        autoPlay
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SplashScreen;