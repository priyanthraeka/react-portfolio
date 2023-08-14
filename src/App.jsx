import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full bg-[#111] pb-20">
      <Navbar />
      <div className="w-full px-3 md:w-10/12 m-auto">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
