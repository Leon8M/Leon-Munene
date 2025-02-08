import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SplashScreen from "./components/SplashScreen";
import Contact from "./pages/Contact";
import Navbar from "./components/NavBar";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
    {showSplash ? (
        <SplashScreen onAnimationEnd={() => setShowSplash(false)} />
      ) : (
    <Router>
      <div className="bg-primary text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    )}</>
  );
}

export default App;
