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
import Cloth from "./pages/Cloth";
import Shoe from "./pages/Shoe";
import Show from "./pages/Show";

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
              <Route path="/cloth" element={<Cloth index={1}/>}/>
              <Route path="/shoe" element={<Shoe index={0}/>}/>
              <Route path="/show" element={<Show />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
