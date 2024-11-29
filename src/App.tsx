import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
