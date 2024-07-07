import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import SplashScreen from "./components/Splashscreen";
import Items from "./components/Items";
import LoadingSpinner from "./components/Loading";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Header from "./components/Header";
import Women from "./pages/Women";
import Kids from "./pages/Kids";

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000); // Simulate a 3-second loading time
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      {!isVideoEnded && <SplashScreen onVideoEnd={handleVideoEnd} />}
      {isVideoEnded && (
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/items" element={<Items />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/kids" element={<Kids />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
