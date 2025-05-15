import React from "react";
import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
