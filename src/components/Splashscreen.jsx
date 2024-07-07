import React, { useEffect } from "react";

const SplashScreen = ({ onVideoEnd, gifDuration = 8000 }) => {
  useEffect(() => {
    const timer = setTimeout(onVideoEnd, gifDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [onVideoEnd, gifDuration]);

  return (
    <div className="splash-screen">
      <img src="/splash.gif" alt="Splash" className="w-full h-full" />
    </div>
  );
};

export default SplashScreen;
