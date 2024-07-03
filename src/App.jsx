import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import SplashScreen from "./components/Splashscreen";
// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Items from "./components/Items";

const App = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    const splashScreenShown = sessionStorage.getItem("splashScreenShown");
    if (splashScreenShown) {
      setIsVideoEnded(true);
    }
  }, []);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    sessionStorage.setItem("splashScreenShown", "true");
  };

  return (
    <Router>
      {!isVideoEnded && <SplashScreen onVideoEnd={handleVideoEnd} />}
      {isVideoEnded && (
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/items" element={<Items />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
