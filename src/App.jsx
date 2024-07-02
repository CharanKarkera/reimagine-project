import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
const App = () => {
  return (
    <div>
      <Navbar />
      <Featured/>
      <Footer />
    </div>
  );
};

export default App;
