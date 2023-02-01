import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* 
        <Contact />
        <Navbar />
        <Footer />
      */}
    </div>
  );
}

export default App;
