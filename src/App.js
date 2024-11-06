import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { configDotenv } from "dotenv";
function App() {
  console.log(process.env);
  
  return (
    <div>
      <Navbar />
      <Landing />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
