import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full bg-[#111] pb-20">
      <Navbar />
      <div className="w-full md:w-11/12 lg:w-9/12 px-2 md:px-5 lg:px-7 m-auto">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
