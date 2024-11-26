// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Frame from "./frame"; // Import Frame.js
import Signup from "./signup"; // Import Signup.js
import BlindnessDetection from "./BlindnessDetection"; // Import BlindnessDetection.js

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for Frame.js as the home page */}
          <Route path="/" element={<Frame />} />

          {/* Route for Signup.js */}
          <Route path="/signup" element={<Signup />} />

          {/* Route for BlindnessDetection.js */}
          <Route path="/blindness-detection" element={<BlindnessDetection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
