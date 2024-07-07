// src/LoadingSpinner.js
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
    </div>
  );
};

export default LoadingSpinner;
